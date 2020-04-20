import React, { ReactElement } from 'react';

import { Box } from './Box';
import { useColorMode, ColorModeOptionType } from './ColorModeProvider';
import { useTheme } from './ThemeProvider';
import { DefaultTheme } from './theme';

interface DividerProps {
  weight?: 'strong' | 'regular';
}

interface VariantProps extends DividerProps {
  colorMode: ColorModeOptionType;
  theme: DefaultTheme;
}

const dividerBaseProps = {
  height: 'px',
  width: 'fluid',
};

const dividerWeightProps = ({ colorMode, weight }: VariantProps): object => {
  let style = {
    light: {
      backgroundColor: 'gray.200',
    },
    dark: {
      backgroundColor: 'whiteAlpha.400',
    },
  };

  if (weight === 'strong') {
    style = {
      light: {
        backgroundColor: 'gray.800',
      },
      dark: {
        backgroundColor: 'whiteAlpha.900',
      },
    };
  }

  return style[colorMode];
};

const useDividerStyles = (props: DividerProps): object => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const _props = { colorMode, theme, ...props };
  return {
    position: 'absolute',
    ...dividerBaseProps,
    ...dividerWeightProps(_props),
  };
};

export const Divider = (props: DividerProps): ReactElement => {
  return (
    <Box position="relative">
      <Box {...useDividerStyles(props)} />
    </Box>
  );
};
