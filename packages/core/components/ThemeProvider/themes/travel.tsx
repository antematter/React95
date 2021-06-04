import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#695f50',
  borderDarkest: '#28251e',
  borderLight: '#9d8f80',
  borderLightest: '#baae9f',
  canvas: '#d8d0c8',
  canvasText: '#28251e',
  canvasTextDisabled: '#695f50',
  canvasTextDisabledShadow: '#baae9f',
  canvasTextInvert: '#ffffff',
  headerBackground: '#404878',
  headerNotActiveBackground: '#605848',
  headerNotActiveText: '#908070',
  headerText: '#d8d0c8',
  material: '#908070',
  materialDark: '#9a9e9c',
  materialText: '#28251e',
  materialTextDisabled: '#695f50',
  materialTextDisabledShadow: '#baae9f',
  materialTextInvert: '#ffffff',
  progress: '#48604f',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
