import React, { createContext } from 'react';
import styled from '@emotion/styled';

import { Box, BoxProps, ResponsiveBaseSize } from '../Box';
import { Flex } from '../Flex';
import { negativeSpaceSystemTop } from '../utils/negativeSpaceSystem';

interface StackContext {
  space: ResponsiveBaseSize;
}

export const StackContext = createContext<StackContext>({
  space: '0',
});

const StackWrapper = styled(Flex)`
  ::before {
    content: '';
    ${negativeSpaceSystemTop}
  }
`;

export interface StackProps extends Omit<BoxProps, 'display'> {
  space?: ResponsiveBaseSize;
}

export const Stack = ({ children, space = '2', ...props }: StackProps) => {
  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement
  );

  return (
    <StackWrapper flexDirection="column" negativeSpaceTop={space} {...props}>
      <StackContext.Provider value={{ space }}>
        {validChildren.map((child, index) => {
          return (
            <Box
              display="inline-block"
              key={`stack-child-wrapper-${index}`}
              paddingTop={space}
            >
              {child}
            </Box>
          );
        })}
      </StackContext.Provider>
    </StackWrapper>
  );
};
