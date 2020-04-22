import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { StoryComponentType, StoryWrapper } from './storyUtils';
import { Badge, BadgePropTypes } from '../src';

import { createColorSelect } from './storyUtils';

export default {
  title: 'Badge',
  decorators: [withKnobs],
};

export const Default: StoryComponentType<BadgePropTypes> = props => (
  <StoryWrapper>
    <Badge color={createColorSelect()} {...props}>
      {text('children', 'Badge')}
    </Badge>
  </StoryWrapper>
);

export const Outline: StoryComponentType<BadgePropTypes> = props => (
  <StoryWrapper>
    <Badge variant="outline" color={createColorSelect()} {...props}>
      {text('children', 'Badge')}
    </Badge>
  </StoryWrapper>
);

export const Solid: StoryComponentType<BadgePropTypes> = props => (
  <StoryWrapper>
    <Badge variant="solid" color={createColorSelect()} {...props}>
      {text('children', 'Badge')}
    </Badge>
  </StoryWrapper>
);

export const Subtle: StoryComponentType<BadgePropTypes> = props => (
  <StoryWrapper>
    <Badge variant="subtle" color={createColorSelect()} {...props}>
      {text('children', 'Badge')}
    </Badge>
  </StoryWrapper>
);
