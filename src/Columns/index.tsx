import React, { createContext } from 'react';
import styled from '@emotion/styled';

import { BoxProps, ResponsiveBaseSize } from '../Box';
import { Flex } from '../Flex';
import { StackContext } from '../Stack';

import {
  negativeSpaceSystemTop,
  negativeSpaceSystemLeft,
  resolveAlignmentCollapseProps,
  ResolveAlignmentCollapsePropsArgs,
} from '../utils';

interface ColumnsContextTypes {
  space: ResponsiveBaseSize;
  verticalSpace?: ResponsiveBaseSize;
}

export const ColumnsContext = createContext<ColumnsContextTypes>({
  space: '0',
  verticalSpace: '0',
});

const ColumnsMarginTop = styled(Flex)`
  ::before {
    content: '';
    ${negativeSpaceSystemTop}
  }
`;

const ColumnsWrapper = styled(Flex)(negativeSpaceSystemLeft);

interface ColumnsPropTypes extends BoxProps, ResolveAlignmentCollapsePropsArgs {
  children: React.ReactNode;
  space?: ResponsiveBaseSize;
  verticalSpace?: ResponsiveBaseSize;
}

export const Columns = ({
  align = 'left',
  alignY = 'top',
  children,
  collapseBelow,
  space = '2',
  verticalSpace,
  ...props
}: ColumnsPropTypes) => {
  let _verticalSpace = verticalSpace;
  const stackContext = React.useContext(StackContext);
  if (stackContext && !verticalSpace) {
    _verticalSpace = stackContext.space;
  }

  const aligmentCollapseProps = resolveAlignmentCollapseProps({
    align,
    alignY,
    collapseBelow,
  });

  return (
    <ColumnsMarginTop flexDirection="column" negativeSpaceTop={_verticalSpace}>
      <ColumnsWrapper
        negativeSpaceLeft={space}
        {...aligmentCollapseProps}
        {...props}
      >
        <ColumnsContext.Provider
          value={{ space, verticalSpace: _verticalSpace }}
        >
          {children}
        </ColumnsContext.Provider>
      </ColumnsWrapper>
    </ColumnsMarginTop>
  );
};

Columns.displayName = 'Columns';
