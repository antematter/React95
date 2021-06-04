import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#3c1f3e',
  borderDarkest: '#18051a',
  borderLight: '#945b9b',
  borderLightest: '#c47bcc',
  canvas: '#c47bcc',
  canvasText: '#18051a',
  canvasTextDisabled: '#000000',
  canvasTextDisabledShadow: '#000000',
  canvasTextInvert: '#c57ece',
  headerBackground: '#1034a6',
  headerNotActiveBackground: '#210e23',
  headerNotActiveText: '#652a6d',
  headerText: '#010601',
  material: '#652a6d',
  materialDark: '#210e23',
  materialText: '#c57ece',
  materialTextDisabled: '#3c1f3e',
  materialTextDisabledShadow: '#c47bcc',
  materialTextInvert: '#c47bcc',
  progress: '#000080',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
