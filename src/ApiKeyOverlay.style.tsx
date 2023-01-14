import styled from 'styled-components';

export const Overlay = styled.div<{ $show: boolean }>`
	position: fixed;
	display: ${({ $show }) => ($show ? 'block' : 'none')};
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2;
`;

export const Container = styled.form`
	position: fixed;
	top: 5rem;
	left: 5rem;
	right: 5rem;
	bottom: 5rem;
	background-color: white;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	@media only screen and (max-width: 508px) {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

export const Label = styled.label`
	width: 50%;
	text-align: center;
`;

export const Input = styled.input`
	width: 80%;
	height: 3rem;
	border-radius: 1rem;
	border: 1px solid #cecece;
	cursor: pointer;
	text-align: center;
`;

export const Button = styled.button`
	width: 30%;
	height: 3rem;
	border-radius: 1rem;
	background-color: #579ffb;
	border: none;
	color: white;
	cursor: pointer;
	transition: background-color 0.2s linear;

	&:hover {
		background-color: #579ffbcc;
	}

	&:active {
		background-color: #cecece;
		/* color: black; */
	}
`;

export const Alert = styled.div`
	text-align: center;
	width: 80%;
	background-color: #ff000066;
	border-radius: 1rem;
`;
