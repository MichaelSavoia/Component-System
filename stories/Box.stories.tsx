import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import {
  StoryComponentType,
  createColorHueSelectors,
  StoryWrapper,
} from './storyUtils';

import { Box, BoxPropTypes, theme } from '../src';

export default {
  title: 'Box',
};

export const Default: StoryComponentType<BoxPropTypes> = props => (
  <StoryWrapper>
    <Box
      height={text('height', '')}
      width={text('width', '')}
      boxShadow={select('boxShadow', Object.keys(theme.shadows), 'none')}
      borderRadius={select('borderRadius', Object.keys(theme.radii), 'none')}
      bg={createColorHueSelectors('bg', 'white', '50')}
      {...props}
    />
  </StoryWrapper>
);

export const Card: StoryComponentType<BoxPropTypes> = props => (
  <StoryWrapper>
    <Box
      height={text('height', 'sm')}
      width={text('width', 'sm')}
      boxShadow={select('boxShadow', Object.keys(theme.shadows), 'lg')}
      borderRadius={select('borderRadius', Object.keys(theme.radii), 'md')}
      bg={createColorHueSelectors('bg', 'white', '50')}
      {...props}
    />
  </StoryWrapper>
);
