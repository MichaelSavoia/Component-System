import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button, ButtonPropTypes } from '../src';

import {
  StoryComponentType,
  createColorSelect,
  StoryWrapper,
} from './storyUtils';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

const LABEL = 'children';
const DEFAULT_TEXT = 'Button';

export const Default: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button color={createColorSelect()} {...props}>
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Ghost: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button variant="ghost" color={createColorSelect()} {...props}>
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Link: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button variant="link" color={createColorSelect()} {...props}>
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Outline: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button variant="outline" color={createColorSelect()} {...props}>
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Solid: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button variant="solid" color={createColorSelect()} {...props}>
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Unstyled: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button variant="unstyled" color={createColorSelect()} {...props}>
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);
