import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#121317',
  borderDarkest: '#000000',
  borderLight: '#31323c',
  borderLightest: '#4b4d58',
  canvas: '#4b4d58',
  canvasText: '#000000',
  canvasTextDisabled: '#4b4d58',
  canvasTextDisabledShadow: '#4b4d58',
  canvasTextInvert: '#202127',
  headerBackground: '#4b4d58',
  headerNotActiveBackground: 'transparent',
  headerNotActiveText: '#4b4d58',
  headerText: '#202127',
  material: '#202127',
  materialDark: '#9a9e9c',
  materialText: '#f88702',
  materialTextDisabled: '#4b4d58',
  materialTextDisabledShadow: '#121317',
  materialTextInvert: '#202127',
  progress: '#f88702',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
