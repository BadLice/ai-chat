import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
	font-family: 'Rubik', sans-serif;
  }

  html,body {
    margin: 0;
    padding: 0;
	height: 100%;
  }

  #root {
	height: 100%;
  }
`;

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin: 0 auto;
`;
