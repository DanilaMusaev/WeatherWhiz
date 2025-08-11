import {
    cloudyTheme,
    rainyTheme,
    sunnyTheme,
    thunderTheme,
    type ThemeType,
} from '../styles/theme';

export const getThemeByWeather = (weatherCondition: string): ThemeType => {
    const lowerCaseCondition = weatherCondition.toLowerCase();

    if (lowerCaseCondition.includes('rain')) {
        return rainyTheme;
    } else if (lowerCaseCondition.includes('cloud')) {
        return cloudyTheme;
    } else if (
        lowerCaseCondition.includes('sun') ||
        lowerCaseCondition.includes('clear')
    ) {
        return sunnyTheme;
    } else if (lowerCaseCondition.includes('thunderstorm')) {
        return thunderTheme;
    }

    // Дефолтная тема (например, если погода не распознана)
    return sunnyTheme;
};
