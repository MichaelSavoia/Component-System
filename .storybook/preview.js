import React from 'react';
import { addDecorator } from '@storybook/react';
import { StoryWrapper } from './StoryWrapper';

addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);
