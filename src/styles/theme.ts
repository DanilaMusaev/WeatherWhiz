export interface ThemeType {
    bgColor: string;
    bgColor30: string;
    mainBlockBg: string;
    mainBlockBorder: string;

    accentColor: string;
    secAccentColor: string;
    placeholderColor: string;
    textColor: string;

    inputBg: string;
    InputBorder: string;

    scaleTabBg: string;
    scaleTabBorderLeft: string;
    scaleTabBorderRight: string;

    FDFBgColor: string;
    FDFBorder: string;

    dayForecastColor: string;
    dayForecastBorder: string;
}

export const sunnyTheme: ThemeType = {
    bgColor: '#08060F',
    bgColor30: 'rgba(8, 6, 15, 0.3)',
    mainBlockBg:
        'linear-gradient(45deg, rgba(21, 36, 48, 0.2) 0%, rgba(10, 21, 77, 0.5) 24.52%, rgba(44, 4, 36, 0.8) 63.94%)',
    mainBlockBorder:
        'linear-gradient(45deg, #0040bc 30.36%, #aa12ec 48.15%, #a7005c 66.49%)',

    accentColor: '#FFF242',
    secAccentColor: '#CBF3FF',
    placeholderColor: '#523B8B',
    textColor: '#FFFFFF',

    inputBg: 'rgba(8, 6, 15, 0.3)',
    InputBorder:
        'linear-gradient(135deg, #0040bc 0%, #aa12ec 44.6%, #a7005c 69.93%)',

    scaleTabBg: '#1F1A35',
    scaleTabBorderLeft: 'linear-gradient(133deg, #504c80 0%, #1f1a35 39.9%)',
    scaleTabBorderRight:
        'linear-gradient(225deg, #504c80 0%, #211a37 40.15%)',

    FDFBgColor: 'linear-gradient(3deg, #08060f 0%, #130928 100%)',
    FDFBorder: 'linear-gradient(4deg, #0e1332 0%, #310f79 100%)',

    dayForecastColor: '#08060F',
    dayForecastBorder: '#0E1332',
};

export const cloudyTheme: ThemeType = {
    bgColor: '#3D464B',
    bgColor30: 'rgba(61, 70, 75, 0.3)',
    mainBlockBg: 'linear-gradient(173deg, #2a3235 0%, #3b4348 100%)',
    mainBlockBorder: '#505C62',

    accentColor: '#C3C3C0',
    secAccentColor: '#C3C3C0',
    placeholderColor: '#6A767C',
    textColor: '#CFCECB',

    inputBg: 'rgba(42, 50, 53, 0.7)',
    InputBorder: '#465155',

    scaleTabBg: '#2F373C',
    scaleTabBorderLeft:
        'linear-gradient(133deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 39.9%)',
    scaleTabBorderRight:
        'linear-gradient(225deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 39.9%)',

    FDFBgColor: 'linear-gradient(180deg, #3b4348 0%, #2a3235 100%)',
    FDFBorder: '#505C62',

    dayForecastColor: '#2B3034',
    dayForecastBorder: '#3C464E',
};

export const rainyTheme: ThemeType = {
    bgColor: '#14232F',
    bgColor30: 'rgba(20, 35, 47, 0.3)',
    mainBlockBg: 'linear-gradient(167deg, #111f28 0%, #152b38 100%)',
    mainBlockBorder: '#16415F',

    accentColor: '#B5EBFF',
    secAccentColor: '#B5EBFF',
    placeholderColor: '#5B798B',
    textColor: '#C5D6DD',

    inputBg: 'rgba(20, 35, 47, 0.3)',
    InputBorder: 'linear-gradient(90deg, #509ac9 0%, #16415f 100%)',

    scaleTabBg: '#142530',
    scaleTabBorderLeft:
        'linear-gradient(133deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 39.9%)',
    scaleTabBorderRight:
        'linear-gradient(225deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 39.9%)',

    FDFBgColor: 'linear-gradient(174deg, #152b38 0%, #111f28 100%)',
    FDFBorder: '#16415F',

    dayForecastColor: '#111E28',
    dayForecastBorder: '#16415F',
};

export const thunderTheme: ThemeType = {
    bgColor: '#273941',
    bgColor30: 'rgba(39, 57, 65, 0.3)',
    mainBlockBg: 'linear-gradient(186deg, #21313a 0%, #2c3f49 100%)',
    mainBlockBorder: '#3F5662',

    accentColor: '#9DECFD',
    secAccentColor: '#9DECFD',
    placeholderColor: '#8AACB8',
    textColor: '#B1D5DC',

    inputBg: 'rgba(32, 48, 57, 0.7)',
    InputBorder: '#3F5662',

    scaleTabBg: '#273B45',
    scaleTabBorderLeft:
        'linear-gradient(133deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 39.9%)',
    scaleTabBorderRight:
        'linear-gradient(225deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 39.9%)',

    FDFBgColor: 'linear-gradient(191deg, #21313a 0%, #2c3f49 100%)',
    FDFBorder: '#3F5662',

    dayForecastColor: '#203139',
    dayForecastBorder: '#3F5662',
};
