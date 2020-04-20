import React, { ReactNode, ReactElement, createContext } from 'react';
import styled from '@emotion/styled';

import { Box, BoxSystemPropTypes } from './Box';
import { Flex } from './Flex';
import { negativeSpaceSystem } from './utils/negativeSpaceSystem';

import { SystemPropType } from './types';

interface StackContextType {
  space?: SystemPropType;
}

export const StackContext = createContext<StackContextType>({
  space: 0,
});

const StackWrapper = styled(Flex)(negativeSpaceSystem);

interface StackPropTypes extends BoxSystemPropTypes, StackContextType {
  children?: ReactNode;
}

export const Stack = ({
  children,
  space = 2,
  ...props
}: StackPropTypes): ReactElement => {
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
