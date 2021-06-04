import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#6c1f71',
  borderDarkest: '#010001',
  borderLight: '#d982de',
  borderLightest: '#df9be7',
  canvas: '#ffffff',
  canvasText: '#010001',
  canvasTextDisabled: '#6c1f71',
  canvasTextDisabledShadow: '#df9be7',
  canvasTextInvert: '#010001',
  headerBackground: '#050080',
  headerNotActiveBackground: '#a130a9',
  headerNotActiveText: '#df9be7',
  headerText: '#ffffff',
  material: '#d067d7',
  materialDark: '#9a9e9c',
  materialText: '#010001',
  materialTextDisabled: '#6c1f71',
  materialTextDisabledShadow: '#df9be7',
  materialTextInvert: '#010001',
  progress: '#0f0',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
