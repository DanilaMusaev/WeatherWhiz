import 'styled-components';
import type { ThemeType } from './theme';

// Расширение класса DefaultTheme автокомплита theme
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
