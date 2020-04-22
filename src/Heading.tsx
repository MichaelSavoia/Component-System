import React from 'react';

import { Text, TextPropTypes } from './Text';

interface HeadingProps extends TextPropTypes {
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Text as="h2" fontWeight="bold" fontSize="4xl" {...props}>
      {children}
    </Text>
  );
};
