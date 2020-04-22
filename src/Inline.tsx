import React from 'react';
import styled from '@emotion/styled';

import { Box, BoxPropTypes } from './Box';
import { Flex } from './Flex';
import { StackContext } from './Stack';

import { negativeSpaceSystem } from './utils/negativeSpaceSystem';
import { SystemPropType } from './types';

const InlineWrapper = styled(Flex)(negativeSpaceSystem);

interface InlinePropTypes extends BoxPropTypes {
  children?: React.ReactNode;
  space?: SystemPropType;
  verticalSpace?: SystemPropType;
}

export const Inline: React.FC<InlinePropTypes> = ({
  children,
  space = 2,
  verticalSpace,
  ...props
}) => {
  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement
  );

  let _verticalSpace = verticalSpace;
  const stackContext = React.useContext(StackContext);
  if (stackContext && !verticalSpace) {
    _verticalSpace = stackContext.space;
  }

  return (
    <InlineWrapper
      flexDirection="row"
      flexWrap="wrap"
      {...props}
      negativeSpaceTop={_verticalSpace}
      negativeSpaceLeft={space}
    >
      {validChildren.map((child, index) => {
        return (
          <Box
            display="inline-block"
            key={`inline-child-wrapper-${index}`}
            paddingTop={_verticalSpace}
            paddingLeft={space}
          >
            {child}
          </Box>
        );
      })}
    </InlineWrapper>
  );
};
