import { select } from '@storybook/addon-knobs';

import { theme } from '../../src';

type ColorKeysType = keyof typeof theme.colors;
// I really wish I could just convert the different options of theme.colors.gray into strings :/
type HueStringKeysType =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

const colorOptions: ColorKeysType[] = [
  'black',
  'blackAlpha',
  'blue',
  'current',
  'cyan',
  'gray',
  'green',
  'indigo',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'transparent',
  'white',
  'white',
  'whiteAlpha',
  'yellow',
];
const hueOptions: HueStringKeysType[] = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

type createColorHueSelectors = (
  key: string,
  defaultColor: ColorKeysType,
  defaultHue: HueStringKeysType
) => string;

export const createColorHueSelectors: createColorHueSelectors = (
  key,
  defaultColor,
  defaultHue
) => {
  const colorSelect = select<ColorKeysType>(
    `${key} color`,
    colorOptions,
    defaultColor
  );
  const hueSelect = select<HueStringKeysType>(
    `${key} hue`,
    hueOptions,
    defaultHue
  );

  if (!theme.colors[colorSelect][hueSelect]) {
    return colorSelect;
  }

  return `${colorSelect}.${hueSelect}`;
};
