import { useColorMode, ColorModeOptionType } from '../ColorModeProvider';
import { useTheme } from '../ThemeProvider';
import { Theme, ColorOptions } from '../theme';
import { DividerProps } from './index';

interface VariantProps extends DividerProps {
  colorMode: ColorModeOptionType;
  theme: Theme;
}

interface DividerWeightReturn {
  backgroundColor: ColorOptions;
}

const dividerWeightProps = ({
  colorMode,
  weight,
}: VariantProps): DividerWeightReturn => {
  let style: { light: DividerWeightReturn; dark: DividerWeightReturn } = {
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

interface UseDividerStylesReturn extends DividerWeightReturn {
  height: 'px';
  width: 'full';
  position: 'absolute';
}

export const useDividerStyles = (
  props: DividerProps
): UseDividerStylesReturn => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const _props = { colorMode, theme, ...props };
  return {
    height: 'px',
    width: 'full',
    position: 'absolute',
    ...dividerWeightProps(_props),
  };
};
