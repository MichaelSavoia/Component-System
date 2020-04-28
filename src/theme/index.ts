import { borders } from './borders';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { letterSpacings } from './letterSpacings';
import { lineHeights } from './lineHeights';
import { opacity } from './opacity';
import { radii } from './radii';
import { shadows } from './shadows';
import { baseSizes, sizes } from './sizes';
import { zIndices } from './zIndices';

export const theme = {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radii,
  shadows,
  sizes,
  space: baseSizes,
  zIndices,
};

export type DefaultTheme = typeof theme;

export * from './borders';
export * from './breakpoints';
export * from './colors';
export * from './fonts';
export * from './fontSizes';
export * from './fontWeights';
export * from './letterSpacings';
export * from './lineHeights';
export * from './opacity';
export * from './radii';
export * from './shadows';
export * from './sizes';
export * from './zIndices';
