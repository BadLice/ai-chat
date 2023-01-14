import ApiKeyOverlay from './ApiKeyOverlay';
import { Container, GlobalStyle } from './App.style';
import Chat from './Chat';
import useDialogue from './useDialogue';
import UserBar from './UserBar';

const App = () => {
	const {
		isListening,
		setIsListening,
		dialogue,
		interimTranscript,
		isThinking,
		setApiKey,
		apiKey,
	} = useDialogue();

	return (
		<>
			<GlobalStyle />
			<Container>
				<ApiKeyOverlay setApiKey={setApiKey} apiKey={apiKey} />
				<Chat dialogue={dialogue} isThinking={isThinking} />
				<UserBar
					isListening={isListening}
					setIsListening={setIsListening}
					interimTranscript={interimTranscript}
					isThinking={isThinking}
					dialogue={dialogue}
				/>
			</Container>
		</>
	);
};
export default App;
