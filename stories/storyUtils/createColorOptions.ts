import { select } from '@storybook/addon-knobs';

import { ColorOptionsType } from '../../src';

const colorOptions: ColorOptionsType[] = [
  'blue',
  'cyan',
  'gray',
  'green',
  'indigo',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'yellow',
];

export const createColorSelect = (
  color?: ColorOptionsType
): ColorOptionsType => {
  return select<ColorOptionsType>('color', colorOptions, color || 'gray');
};
