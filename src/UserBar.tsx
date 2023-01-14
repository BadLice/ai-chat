import { useEffect, useState } from 'react';
import { Message } from './useDialogue';
import {
	ButtonContainer,
	Container,
	Icon,
	IconButton,
	InterimContainer,
	InterimWrapper,
	Record,
} from './UserBar.style';

enum ListeningType {
	None = 0,
	Continuous,
	Oneshot,
}

interface UserBarProps {
	isListening: boolean;
	setIsListening: React.Dispatch<React.SetStateAction<boolean>>;
	interimTranscript: string;
	isThinking: boolean;
	dialogue: Message[];
}

const UserBar = ({
	isListening,
	setIsListening,
	interimTranscript,
	isThinking,
	dialogue,
}: UserBarProps) => {
	const [prevDialogueLength, setPrevDialogueLength] = useState(dialogue.length);
	const [listeningType, setListeningType] = useState<ListeningType>(ListeningType.None);

	const toggleListening = (type?: ListeningType) => {
		if (type) {
			setListeningType(type);
		}
		setIsListening((l) => !l);
		setPrevDialogueLength(dialogue.length);
	};

	useEffect(() => {
		//manage continuois recording
		if (listeningType === ListeningType.Continuous) {
			setIsListening(!isThinking);
		}
		// manage oneshot recording
		if (listeningType === ListeningType.Oneshot) {
			if (!isThinking) {
				if (prevDialogueLength < dialogue.length) {
					setIsListening(false);
				}
			}
		}
		if (!isThinking) {
			setPrevDialogueLength(dialogue.length);
		}
	}, [dialogue.length, isThinking, listeningType, prevDialogueLength, setIsListening]);

	return (
		<Container>
			<InterimContainer>
				<InterimWrapper>
					{interimTranscript !== '' ? interimTranscript : ''}
				</InterimWrapper>
			</InterimContainer>
			<ButtonContainer $show={!isListening && !isThinking}>
				<IconButton
					onClick={() => toggleListening(ListeningType.Oneshot)}
					disabled={isThinking}
				>
					<Icon src={'./icons/microphone-settings.png'} />
				</IconButton>
				<IconButton
					onClick={() => toggleListening(ListeningType.Continuous)}
					disabled={isThinking}
				>
					<Icon src={'./icons/microphone.png'} />
				</IconButton>
			</ButtonContainer>
			<ButtonContainer $show={!(!isListening && !isThinking)}>
				<IconButton onClick={() => toggleListening()} disabled={isThinking}>
					<Record />
				</IconButton>
			</ButtonContainer>
		</Container>
	);
};
export default UserBar;
