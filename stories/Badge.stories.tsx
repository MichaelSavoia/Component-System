import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { StoryComponentType } from './storyUtils/storyTypes';
import { Badge, BadgePropTypes } from '../src';

import { createColorSelect } from './storyUtils';

export default {
  title: 'Badge',
  decorators: [withKnobs],
};

export const Default: StoryComponentType<BadgePropTypes> = props => (
  <Badge color={createColorSelect()} {...props}>
    {text('children', 'Badge')}
  </Badge>
);

export const Outline: StoryComponentType<BadgePropTypes> = props => (
  <Badge variant="outline" color={createColorSelect()} {...props}>
    {text('children', 'Badge')}
  </Badge>
);

export const Solid: StoryComponentType<BadgePropTypes> = props => (
  <Badge variant="solid" color={createColorSelect()} {...props}>
    {text('children', 'Badge')}
  </Badge>
);

export const Subtle: StoryComponentType<BadgePropTypes> = props => (
  <Badge variant="subtle" color={createColorSelect()} {...props}>
    {text('children', 'Badge')}
  </Badge>
);
