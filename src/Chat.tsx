import React, { createRef, useEffect } from 'react';
import {
	Ball1,
	Ball2,
	Ball3,
	Container,
	EmptyTextContainer,
	HumanMessage,
	Name,
	RobotMessage,
	Text,
	TinkingBubble,
} from './Chat.style';
import { Message } from './useDialogue';

interface ChatProps {
	dialogue: Message[];
	isThinking: boolean;
}
const Chat = ({ dialogue, isThinking }: ChatProps) => {
	const containerRef = createRef<HTMLDivElement>();

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [containerRef, dialogue]);

	return (
		<Container ref={containerRef}>
			{dialogue.map(({ type, text }, i) => (
				<React.Fragment key={i}>
					{type === 'human' ? (
						<HumanMessage>
							<Name>You</Name>
							<Text>{text}</Text>
						</HumanMessage>
					) : (
						<RobotMessage>
							<Name>Da Vinci AI</Name>
							<Text>{text}</Text>
						</RobotMessage>
					)}
				</React.Fragment>
			))}
			{isThinking ? (
				<TinkingBubble>
					<Ball1 />
					<Ball2 />
					<Ball3 />
				</TinkingBubble>
			) : (
				''
			)}
			{dialogue.length === 0 ? (
				<EmptyTextContainer>
					<p>Click one of the microphone buttons to start talking with the AI!</p>
				</EmptyTextContainer>
			) : (
				''
			)}
		</Container>
	);
};
export default Chat;
