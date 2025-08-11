import styled, { ThemeProvider } from 'styled-components';
import MainBlock from './components/MainBlock';
import { sunnyTheme, type ThemeType } from './styles/theme';
import { useState } from 'react';
import { ResetStyles } from './styles/ResetStyles';
import { GlobalStyle } from './styles/GlobalStyles';
import FDFBlock from './components/FDFBlock';

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;

    height: 100vh;
    width: 100vw;

    background-color: ${({ theme }) => theme.bgColor};
`;

function App() {
    const [currentTheme, _] = useState<ThemeType>(sunnyTheme);

    return (
        <ThemeProvider theme={currentTheme}>
            <ResetStyles />
            <GlobalStyle />
            <AppWrapper>
                <MainBlock />
                <FDFBlock />
            </AppWrapper>
        </ThemeProvider>
    );
}

export default App;
