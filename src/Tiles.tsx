import React, { useContext } from 'react';
import { system } from 'styled-system';
import styled from '@emotion/styled';

import { Flex } from './Flex';
import { Box, BoxPropTypes } from './Box';
import { negativeSpaceSystem } from './utils/negativeSpaceSystem';
import { StackContext } from './Stack';

import { SystemPropType } from './types';

interface TilesPropTypes extends BoxPropTypes {
  columns?: number | number[];
  space?: SystemPropType;
  verticalSpace?: SystemPropType;
}

const TilesWrapper = styled(Flex)(negativeSpaceSystem);

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

export const Tiles: React.FC<TilesPropTypes> = ({
  children,
  columns = 2,
  space = 2,
  verticalSpace,
  ...props
}) => {
  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement
  );

  let _verticalSpace = verticalSpace;
  const stackContext = useContext(StackContext);
  if (stackContext && !verticalSpace) {
    _verticalSpace = stackContext.space;
  }

  return (
    <TilesWrapper
      flexWrap="wrap"
      flexDirection="row"
      negativeSpaceTop={_verticalSpace}
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
  );
};
