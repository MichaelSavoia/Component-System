import React from 'react';

import { Text } from '../Text';
import { useHeadingStyles, HeadingProps } from './styles';

export const Heading = (props: HeadingProps) => {
  return <Text font="heading" {...useHeadingStyles(props)} {...props} />;
};
