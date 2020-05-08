import React from 'react';

import { Box } from '../Box';
import { useDividerStyles } from './styles';

export interface DividerProps {
  weight?: 'strong' | 'regular';
}

export const Divider = (props: DividerProps) => {
  return (
    <Box position="relative">
      <Box {...useDividerStyles(props)} />
    </Box>
  );
};

Divider.displayName = 'Divider';
