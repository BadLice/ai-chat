import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	background-color: #edf5fd;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-flow: column;
	padding: 1rem;
	gap: 1rem;
	flex: 1 1 auto;
	overflow-y: auto;
	min-height: 0px;
	padding-bottom: 7rem;
`;

export const Name = styled.div`
	height: 30%;
	font-weight: bold;
`;

export const Text = styled.div`
	height: 90%;
`;

export const Bubble = styled.div`
	min-height: 3rem;
	padding: 1rem;
	max-width: 60%;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const RobotMessage = styled(Bubble)`
	border-radius: 15px 15px 15px 0px;
	background-color: #cecece;
`;

export const HumanMessage = styled(Bubble)`
	border-radius: 15px 0px 15px 15px;
	align-self: flex-end;
	background-color: #579ffb;
	color: white;

	& > ${Name} {
		align-self: flex-end;
	}
`;

export const TinkingBubble = styled(RobotMessage)`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	padding-bottom: 0.7rem;
	max-width: 5rem;
`;

export const bounce = keyframes`
    0% {
        transform: translate(0, 0);
	background-color: #000000b0;

    }
    25% {
        transform: translate(0,-1rem);
	background-color: #00000050;

    }
    50% {
        transform: translate(0, 0);
	background-color:#000000b0;

    }
`;

export const Ball = styled.div`
	border-radius: 50%;
	width: 0.7rem;
	height: 0.7rem;
	background-color: #000000b0;
	animation: ${bounce} 1.5s linear infinite;
`;

export const Ball1 = styled(Ball)`
	animation-delay: 0s;
`;

export const Ball2 = styled(Ball)`
	animation-delay: 0.3s;
`;

export const Ball3 = styled(Ball)`
	animation-delay: 0.6s;
`;

export const EmptyTextContainer = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	height: 100%;
`;
