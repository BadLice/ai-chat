import { useEffect, useState } from 'react';
import useOpenAi from './useOpenAi';
import useSpeechRecognition from './useSpeechRecognition';

export interface Message {
	type: 'human' | 'robot';
	text: string;
}

const genAiDialogue = (
	humanText: string[],
	robotText: string[],
	humanSeparator: string,
	robotSeparator: string
) =>
	humanText
		.reduce<string[]>((acc, human, i) => {
			const robot = robotText[i];

			return [...acc, humanSeparator, human, robotSeparator, robot];
		}, [])
		.filter((text) => text !== null && text !== undefined)
		.join(' ');

const genDisplayDialogue = (humanText: string[], robotText: string[]) =>
	humanText
		.reduce<Message[]>((acc, human, i) => {
			const robot = robotText[i];

			return [...acc, { type: 'human', text: human }, { type: 'robot', text: robot }];
		}, [])
		.filter(({ text }) => text !== null && text !== undefined);

const useDialogue = () => {
	const {
		isListening,
		setIsListening,
		interimTranscript,
		transcriptList: humanTranscriptList,
	} = useSpeechRecognition();
	const {
		talk,
		transcriptList: robotTranscriptList,
		separators,
		isThinking,
		setApiKey,
		apiKey,
	} = useOpenAi();
	const [dialogue, setDialogue] = useState<Message[]>([]);

	useEffect(() => {
		if (humanTranscriptList.length !== 0) {
			talk(
				genAiDialogue(
					humanTranscriptList,
					robotTranscriptList,
					separators[0],
					separators[1]
				)
			);
		}
	}, [humanTranscriptList]);

	useEffect(() => {
		setDialogue(genDisplayDialogue(humanTranscriptList, robotTranscriptList));
	}, [humanTranscriptList, robotTranscriptList]);

	return {
		isListening,
		setIsListening,
		dialogue,
		interimTranscript,
		isThinking,
		setApiKey,
		apiKey,
	};
};
export default useDialogue;
