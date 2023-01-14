import styled, { keyframes } from 'styled-components';

export const Container = styled.footer`
	background-color: #dbe9f8;
	position: fixed;
	bottom: 0;
	left: 0;
	height: 10%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

export const InterimContainer = styled.div`
	width: 85%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
`;

export const InterimWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 1rem;
	overflow-y: auto;
	padding-left: 1rem;
	padding-right: 1rem;
`;

export const ButtonContainer = styled.div<{ $show: boolean }>`
	width: 25%;
	height: 100%;
	align-items: center;
	justify-content: center;
	padding-right: 1rem;
	gap: 1rem;
	display: ${({ $show }) => ($show ? 'flex' : 'none')};
	flex-direction: row;

	@media only screen and (max-width: 508px) {
		width: 20%;
		flex-direction: column;
		gap: 0.1rem;
		padding-right: 0.1rem;
	}
`;

export const IconButton = styled.button`
	position: relative;
	border-radius: 50%;
	border: none;
	width: 48px;
	height: 48px;
	background-color: #b0d5ff;

	&:disabled {
		opacity: 0.5;
	}

	@media only screen and (max-width: 508px) {
		width: 35px;
		height: 35px;
	}
`;

export const Icon = styled.img`
	width: 75%;
	height: 75%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const recording = keyframes`
    0% { }
    50% {
        background-color: red;
    }
    100%{ }
`;

export const Record = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: black;
	animation: ${recording} 2s infinite;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;

	@media only screen and (max-width: 508px) {
		width: 20px;
		height: 20px;
	}
`;
