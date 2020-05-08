import Color from 'color';

import { Colors } from '../theme';

export type ColorOptions = Exclude<
  Colors,
  'transparent' | 'current' | 'black' | 'white'
>;

type HueOptions = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const get = (color: ColorOptions, hue: HueOptions): string =>
  `${color}.${hue}`;

export const addOpacity = (color: string, opacity: number): string =>
  Color(color)
    .fade(1 - opacity)
    .rgb()
    .string();

export const addWhite = (color: string, opacity: number): string => {
  return Color(color)
    .mix(Color('#fff'), opacity)
    .hex();
};

export const addBlack = (color: string, opacity: number): string =>
  Color(color)
    .mix(Color('#000'), opacity)
    .hex();

export const isDarkColor = (color: string): boolean => Color(color).isDark();

interface GenerateAlphaColorsReturnType {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
  50: string;
}

export const generateAlphaColors = (
  color: string
): GenerateAlphaColorsReturnType => ({
  900: addOpacity(color, 0.92),
  800: addOpacity(color, 0.8),
  700: addOpacity(color, 0.6),
  600: addOpacity(color, 0.48),
  500: addOpacity(color, 0.38),
  400: addOpacity(color, 0.24),
  300: addOpacity(color, 0.16),
  200: addOpacity(color, 0.12),
  100: addOpacity(color, 0.08),
  50: addOpacity(color, 0.04),
});

type EmphasisOptionsType = 'high' | 'medium' | 'low' | 'lowest';
type ColorEmphasisReturnType = GenerateAlphaColorsReturnType | string | void;

export const colorEmphasis = (
  color: string,
  emphasis: EmphasisOptionsType
): ColorEmphasisReturnType => {
  switch (emphasis) {
    case 'high':
      return color;
    case 'medium':
      return generateAlphaColors(color)[700];
    case 'low':
      return generateAlphaColors(color)[500];
    case 'lowest':
      return generateAlphaColors(color)[300];
    default:
      return;
  }
};
