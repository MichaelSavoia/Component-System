import React, { createContext, ReactNode } from 'react';
import styled from '@emotion/styled';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Avatar } from '../Avatar';
import { AvatarSizeOptions } from '../Avatar/styles';
import { negativeSpaceSystemLeft } from '../utils';

export const AvatarGroupContext = createContext<{ size: AvatarSizeOptions }>({
  size: 'md',
});

interface AvatarGroupProps {
  children: ReactNode;
  size?: AvatarSizeOptions;
  max?: number;
}

const AvatarWrapper = styled(Box)(negativeSpaceSystemLeft);

type PaddingMap = {
  xs: '2';
  sm: '3';
  md: '4';
  lg: '6';
  xl: '8';
};

const paddingMap: PaddingMap = {
  xs: '2',
  sm: '3',
  md: '4',
  lg: '6',
  xl: '8',
};

export const AvatarGroup = ({
  children,
  size = 'md',
  max,
}: AvatarGroupProps) => {
  let validChildren = React.Children.toArray(children).filter(
    React.isValidElement
  );
  const childrenLength = validChildren.length;
  if (max) {
    validChildren = validChildren.slice(0, max);
  }
  return (
    <Flex
      flexDirection="row-reverse"
      justifyContent="flex-end"
      paddingLeft={paddingMap[size]}
    >
      <AvatarGroupContext.Provider value={{ size }}>
        {max && childrenLength > max && (
          <AvatarWrapper negativeSpaceLeft={paddingMap[size]}>
            <Avatar
              name={`+ ${childrenLength - max}`}
              backgroundColor="gray.300"
            />
          </AvatarWrapper>
        )}
        {validChildren.map((child, index) => {
          return (
            <AvatarWrapper key={index} negativeSpaceLeft={paddingMap[size]}>
              {child}
            </AvatarWrapper>
          );
        })}
      </AvatarGroupContext.Provider>
    </Flex>
  );
};
