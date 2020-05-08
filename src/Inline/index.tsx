import React from 'react';
import styled from '@emotion/styled';

import { Flex } from '../Flex';
import { Box, ResponsiveBaseSize, BoxProps } from '../Box';
import { StackContext } from '../Stack';

import {
  resolveAlignmentCollapseProps,
  ResolveAlignmentCollapsePropsArgs,
  negativeSpaceSystemTop,
  negativeSpaceSystemLeft,
} from '../utils';

const InlineTopMargin = styled(Flex)`
  ::before {
    content: '';
    ${negativeSpaceSystemTop}
  }
`;

const InlineWrapper = styled(Flex)`
  ${negativeSpaceSystemLeft}
`;

interface InlineProps
  extends ResolveAlignmentCollapsePropsArgs,
    Omit<
      BoxProps,
      'display' | 'flexDirection' | 'alignItems' | 'justifyContent'
    > {
  space?: ResponsiveBaseSize;
  verticalSpace?: ResponsiveBaseSize;
}

export const Inline = ({
  align = 'left',
  alignY = 'top',
  children,
  verticalSpace,
  space = '2',
  collapseBelow,
  ...props
}: InlineProps) => {
  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement
  );

  let _verticalSpace = verticalSpace;
  const stackContext = React.useContext(StackContext);
  if (stackContext && !verticalSpace) {
    _verticalSpace = stackContext.space;
  }
  if (!_verticalSpace) {
    _verticalSpace = '2';
  }

  const aligmentCollapseProps = resolveAlignmentCollapseProps({
    align,
    alignY,
    collapseBelow,
  });

  return (
    <InlineTopMargin flexDirection="column" negativeSpaceTop={_verticalSpace}>
      <InlineWrapper
        negativeSpaceLeft={space}
        flexWrap="wrap"
        {...aligmentCollapseProps}
        {...props}
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
    </InlineTopMargin>
  );
};
