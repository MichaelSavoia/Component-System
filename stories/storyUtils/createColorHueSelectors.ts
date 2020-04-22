import { select } from '@storybook/addon-knobs';

import { theme } from '../../src';

type createColorHueSelectors = (
  key: string,
  defaultColor: keyof typeof theme.colors,
  defaultHue: keyof typeof theme.colors.gray
) => string;

export const createColorHueSelectors: createColorHueSelectors = (
  key,
  defaultColor,
  defaultHue
) => {
  const colorSelect = select(
    `${key} color`,
    Object.keys(theme.colors),
    defaultColor
  );
  const hueSelect = select(
    `${key} hue`,
    Object.keys(theme.colors.gray),
    `${defaultHue}`
  );

  if (!theme.colors[colorSelect][hueSelect]) {
    return colorSelect;
  }

  return `${colorSelect}.${hueSelect}`;
};
