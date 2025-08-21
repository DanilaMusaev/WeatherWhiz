import styled, { ThemeProvider } from 'styled-components';
import MainBlock from './components/MainBlock';
import { sunnyTheme } from './styles/theme';
import { useMemo } from 'react';
import { ResetStyles } from './styles/ResetStyles';
import { GlobalStyle } from './styles/GlobalStyles';
import FDFBlock from './components/FDFBlock';
import { getThemeByWeather } from './utils/getTheme';
import { useWeatherStore } from './store/useWeatherStore';
import { ApiProvider } from './providers/ApiProvider';
import WeatherDataLoader from './components/WeatherDataLoader/WeatherDataLoader';
import WeatherEffect from './components/WeatherEffect';

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
    const condition = useWeatherStore((state) => state.current?.condition);

    const currentTheme = useMemo(() => {
        return getThemeByWeather(condition);
    }, [condition]);

    return (
        <ApiProvider>
            <ThemeProvider theme={currentTheme || sunnyTheme}>
                <ResetStyles />
                <GlobalStyle />
                <WeatherDataLoader />
                <AppWrapper>
                    <MainBlock />
                    <FDFBlock />
                    <WeatherEffect condition={condition} />
                </AppWrapper>
            </ThemeProvider>
        </ApiProvider>
    );
}

export default App;
