import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { Button, ButtonPropTypes } from '../src';

import {
  StoryComponentType,
  createColorSelect,
  StoryWrapper,
} from './storyUtils';

export default {
  title: 'Button',
  decorators: [withKnobs, withA11y],
};

const LABEL = 'children';
const DEFAULT_TEXT = 'Button';

export const Default: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button
      color={createColorSelect()}
      size={select('size', ['xs', 'sm', 'md', 'lg'], 'sm')}
      {...props}
    >
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Subtle: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button
      variant="subtle"
      color={createColorSelect()}
      size={select('size', ['xs', 'sm', 'md', 'lg'], 'sm')}
      {...props}
    >
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Ghost: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button
      variant="ghost"
      color={createColorSelect()}
      size={select('size', ['xs', 'sm', 'md', 'lg'], 'sm')}
      {...props}
    >
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Link: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button
      variant="link"
      color={createColorSelect()}
      size={select('size', ['xs', 'sm', 'md', 'lg'], 'sm')}
      {...props}
    >
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Outline: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button
      variant="outline"
      color={createColorSelect()}
      size={select('size', ['xs', 'sm', 'md', 'lg'], 'sm')}
      {...props}
    >
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Solid: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button
      variant="solid"
      color={createColorSelect()}
      size={select('size', ['xs', 'sm', 'md', 'lg'], 'sm')}
      {...props}
    >
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);

export const Unstyled: StoryComponentType<ButtonPropTypes> = props => (
  <StoryWrapper>
    <Button
      variant="unstyled"
      color={createColorSelect()}
      size={select('size', ['xs', 'sm', 'md', 'lg'], 'sm')}
      {...props}
    >
      {text(LABEL, DEFAULT_TEXT)}
    </Button>
  </StoryWrapper>
);
