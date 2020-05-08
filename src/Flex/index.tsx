import React from 'react';

import { Box, BoxProps } from '../Box';

type FlexProps = Omit<BoxProps, 'display'>;

export const Flex = (props: FlexProps) => {
  return <Box {...props} display="flex" />;
};

Flex.displayName = 'Flex';
