import React, { ReactNode, ReactElement } from 'react';

import { Text, TextSystemPropTypes } from './Text';

interface HeadingProps extends TextSystemPropTypes {
  children: ReactNode;
}

export const Heading = ({ children, ...props }: HeadingProps): ReactElement => {
  return (
    <Text as="h2" fontWeight="bold" fontSize="4xl" {...props}>
      {children}
    </Text>
  );
};
