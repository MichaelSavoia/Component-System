import React, { useContext } from 'react';
import { system } from 'styled-system';
import styled from '@emotion/styled';

import { Flex } from '../Flex';
import { Box, BoxProps, ResponsiveProp, ResponsiveBaseSize } from '../Box';
import { negativeSpaceSystemTop, negativeSpaceSystemLeft } from '../utils';
import { StackContext } from '../Stack';

interface TilesProps extends BoxProps {
  columns?: ResponsiveProp<number>;
  space?: ResponsiveBaseSize;
  verticalSpace?: ResponsiveBaseSize;
}

const TilesTopMargin = styled(Flex)`
  ::before {
    content: '';
    ${negativeSpaceSystemTop};
  }
`;

const TilesWrapper = styled(Flex)(negativeSpaceSystemLeft);

const Tile = styled(Box)(
  system({
    columns: {
      property: 'minWidth',
      defaultScale: [],
      transform: (value): string => {
        const tileWidth = 100 / value;
        return `${tileWidth}%`;
      },
    },
  })
);

export const Tiles = ({
  children,
  columns = 2,
  space = '2',
  verticalSpace,
  ...props
}: TilesProps) => {
  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement
  );

  let _verticalSpace = verticalSpace;
  const stackContext = useContext(StackContext);
  if (stackContext && !verticalSpace) {
    _verticalSpace = stackContext.space;
  }

  return (
    <TilesTopMargin flexDirection="column" negativeSpaceTop={_verticalSpace}>
      <TilesWrapper
        flexWrap="wrap"
        flexDirection="row"
        negativeSpaceLeft={space}
        {...props}
      >
        {validChildren.map((child, index) => {
          return (
            <Tile
              display="inline-block"
              key={`column-child-wrapper-${index}`}
              paddingLeft={space}
              paddingTop={_verticalSpace}
              columns={columns}
            >
              {child}
            </Tile>
          );
        })}
      </TilesWrapper>
    </TilesTopMargin>
  );
};
