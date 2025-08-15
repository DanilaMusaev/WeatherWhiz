import styled, { ThemeProvider } from 'styled-components';
import MainBlock from './components/MainBlock';
import { sunnyTheme } from './styles/theme';
import { useEffect, useMemo } from 'react';
import { ResetStyles } from './styles/ResetStyles';
import { GlobalStyle } from './styles/GlobalStyles';
import FDFBlock from './components/FDFBlock';
import { getThemeByWeather } from './utils/getTheme';
import { useWeatherStore } from './store/useWeatherStore';
import { fetchWeather } from './api/test-api';

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;

    height: 100vh;
    width: 100vw;

    background-color: ${({ theme }) => theme.bgColor};
    transition: background-color 0.3s ease;
`;

function App() {
    const { current } = useWeatherStore();

    const currentTheme = useMemo(() => {
        return getThemeByWeather(current?.condition);
    }, [current?.condition]);

    useEffect(() => {
        console.log('sdasdfasfasf');
        fetchWeather(55, 55, 'metric').then((res) => console.log(res));
    }, []);

    return (
        <ThemeProvider theme={currentTheme || sunnyTheme}>
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
