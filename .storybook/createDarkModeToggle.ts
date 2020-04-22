import { boolean } from '@storybook/addon-knobs';

export const createDarkModeToggle = (): boolean => boolean('Dark Mode', false);
