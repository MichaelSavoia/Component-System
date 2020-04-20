import React, { ReactElement, ReactNode, createContext } from 'react';
import styled from '@emotion/styled';

import { BoxSystemPropTypes } from './Box';
import { Flex } from './Flex';
import { StackContext } from './Stack';

import { negativeSpaceSystem } from './utils/negativeSpaceSystem';
import { SystemPropType } from './types';

interface ColumnsContextTypes {
  space: SystemPropType;
  verticalSpace?: SystemPropType;
}

export const ColumnsContext = createContext<ColumnsContextTypes>({
  space: 0,
  verticalSpace: 0,
});

const ColumnsWrapper = styled(Flex)(negativeSpaceSystem);

interface ColumnsPropTypes extends BoxSystemPropTypes {
  children?: ReactNode;
  space?: SystemPropType;
  verticalSpace?: SystemPropType;
}

export const Columns = ({
  children,
  space = 2,
  verticalSpace,
  ...props
}: ColumnsPropTypes): ReactElement => {
  let _verticalSpace = verticalSpace;
  const stackContext = React.useContext(StackContext);
  if (stackContext && !verticalSpace) {
    _verticalSpace = stackContext.space;
  }

  return (
    <ColumnsWrapper
      flexDirection="row"
      flexWrap="wrap"
      {...props}
      negativeSpaceTop={_verticalSpace}
      negativeSpaceLeft={space}
    >
      <ColumnsContext.Provider value={{ space, verticalSpace: _verticalSpace }}>
        {children}
      </ColumnsContext.Provider>
    </ColumnsWrapper>
  );
};
