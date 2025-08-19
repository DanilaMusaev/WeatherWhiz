import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        scrollbar-color: ${({theme}) => theme.bgColor} transparent;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: ${({theme}) => theme.textColor};
    }
`;
