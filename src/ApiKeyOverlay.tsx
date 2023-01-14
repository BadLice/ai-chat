import { createRef, useEffect, useState } from 'react';
import { Alert, Button, Container, Input, Label, Overlay } from './ApiKeyOverlay.style';

interface ApiKeyOverlayProps {
	apiKey: string | null;
	setApiKey: (value: string | null) => void;
}
const ApiKeyOverlay: React.FC<ApiKeyOverlayProps> = ({ apiKey, setApiKey }) => {
	const inputRef = createRef<HTMLInputElement>();
	const [show, setShow] = useState(!apiKey);

	useEffect(() => {
		setShow(!apiKey);
	}, [apiKey]);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (inputRef.current!.value) {
			setApiKey(inputRef.current!.value);
			setShow(false);
		}
	};

	return (
		<Overlay $show={show}>
			<Container onSubmit={handleSubmit}>
				<h1>Da Vinci AI chatbot</h1>
				<Alert>
					<p>Your API Key is missing or expired.</p>
					<p>
						You can generate a key here:{' '}
						<a
							href='https://beta.openai.com/account/api-keys'
							target='_blank'
							rel='noreferrer noopener'
						>
							https://beta.openai.com/account/api-keys
						</a>
					</p>
				</Alert>
				<Label>Please enter a new API key.</Label>
				<Input type='text' ref={inputRef}></Input>
				<Button>Confirm</Button>
			</Container>
		</Overlay>
	);
};
export default ApiKeyOverlay;
