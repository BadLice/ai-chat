import { useCallback, useEffect, useState } from 'react';

export interface SpeechRecognitionEvent {
	resultIndex: number;
	results: SpeechRecognitionResultList;
}

export interface SpeechRecognition {
	continuous: boolean;
	interimResults: boolean;
	lang: string;
	onresult: null | ((event: SpeechRecognitionEvent) => void);
}

export interface IWindow extends Window {
	webkitSpeechRecognition: any;
	SpeechRecognition: any;
}

export interface SpeechRecognition {
	finalTranscript: string;
	interimTranscript: string;
	dialogue: Array<string>;
	start: () => void;
	stop: () => void;
	lang: string;
}

const useSpeechRecognition = () => {
	const [finalTranscript, setFinalTranscript] = useState(''); //string with all text that has been pronounced
	const [interimTranscript, setInterimTranscript] = useState(''); //string with current text being pronounced live
	const [transcriptList, setTranscriptList] = useState<Array<string>>([]); // array of string with all interim transcripts
	const [isListening, setIsListening] = useState(false);

	(window as unknown as IWindow).SpeechRecognition =
		(window as unknown as IWindow).SpeechRecognition ||
		(window as unknown as IWindow).webkitSpeechRecognition;

	const [speechRecognition, setSpeechRecognition] = useState(
		new (window as unknown as IWindow).SpeechRecognition() as SpeechRecognition
	);

	const storeTranscript = useCallback(
		(event: SpeechRecognitionEvent) => {
			let final = finalTranscript;
			let interim = '';

			for (let i = event.resultIndex; i < event.results.length; i++) {
				if (event.results[i].isFinal) {
					final += event.results[i][0].transcript;
					setTranscriptList([...transcriptList, event.results[i][0].transcript]);
				} else {
					interim += event.results[i][0].transcript;
				}
			}
			setFinalTranscript(final);
			setInterimTranscript(interim);
		},
		[transcriptList, finalTranscript]
	);

	// config speechRecognition onload
	useEffect(() => {
		if (speechRecognition) {
			speechRecognition.continuous = true;
			speechRecognition.interimResults = true;
			speechRecognition.lang = 'en-US';
		}
		speechRecognition.onresult = storeTranscript;

		return () => {
			speechRecognition.onresult = null;
		};
	}, [finalTranscript, storeTranscript, speechRecognition]);

	// use isListening state to toggle start/stop speech recognition
	useEffect(() => {
		if (isListening) {
			// try catch needed due to a ms-edge bug that crashes the app
			try {
				speechRecognition.start();
			} catch {}

			return () => speechRecognition.stop(); //stop listening on cleanup
		} else {
			speechRecognition.stop();
		}
	}, [isListening, speechRecognition]);

	return {
		finalTranscript,
		interimTranscript,
		transcriptList,
		isListening,
		setIsListening,
	};
};
export default useSpeechRecognition;
