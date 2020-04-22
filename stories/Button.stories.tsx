import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button, ButtonPropTypes } from '../src';

import { StoryComponentType, createColorSelect } from './storyUtils';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

const LABEL = 'children';
const DEFAULT_TEXT = 'Button';

export const Default: StoryComponentType<ButtonPropTypes> = props => (
  <Button color={createColorSelect()} {...props}>
    {text(LABEL, DEFAULT_TEXT)}
  </Button>
);

export const Ghost: StoryComponentType<ButtonPropTypes> = props => (
  <Button variant="ghost" color={createColorSelect()} {...props}>
    {text(LABEL, DEFAULT_TEXT)}
  </Button>
);

export const Link: StoryComponentType<ButtonPropTypes> = props => (
  <Button variant="link" color={createColorSelect()} {...props}>
    {text(LABEL, DEFAULT_TEXT)}
  </Button>
);

export const Outline: StoryComponentType<ButtonPropTypes> = props => (
  <Button variant="outline" color={createColorSelect()} {...props}>
    {text(LABEL, DEFAULT_TEXT)}
  </Button>
);

export const Solid: StoryComponentType<ButtonPropTypes> = props => (
  <Button variant="solid" color={createColorSelect()} {...props}>
    {text(LABEL, DEFAULT_TEXT)}
  </Button>
);

export const Unstyled: StoryComponentType<ButtonPropTypes> = props => (
  <Button variant="unstyled" color={createColorSelect()} {...props}>
    {text(LABEL, DEFAULT_TEXT)}
  </Button>
);
