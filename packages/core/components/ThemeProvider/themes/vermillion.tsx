import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#7f2120',
  borderDarkest: '#130405',
  borderLight: '#d25051',
  borderLightest: '#e59697',
  canvas: '#EFE9F4',
  canvasText: '#130405',
  canvasTextDisabled: '#7f2120',
  canvasTextDisabledShadow: '#e59697',
  canvasTextInvert: '#EFE9F4',
  headerBackground: '#000103',
  headerNotActiveBackground: '#7f2120',
  headerNotActiveText: '#EFE9F4',
  headerText: '#EFE9F4',
  material: '#cf4545',
  materialDark: '#7f2120',
  materialText: '#130405',
  materialTextDisabled: '#7f2120',
  materialTextDisabledShadow: '#e59697',
  materialTextInvert: '#EFE9F4',
  progress: '#000103',
  tooltip: '#fefbcc',
};

const theme: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default theme;
