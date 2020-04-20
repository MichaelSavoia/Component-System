import { DefaultTheme } from '../theme';
import { addOpacity, generateAlphaColors, get } from '../utils/colors';
import { useTheme } from '../ThemeProvider';
import { useColorMode, ColorModeOptionType } from '../ColorModeProvider';

import { ColorOptionsType } from '../types';

export type BadgeVariantType = 'subtle' | 'solid' | 'outline';

interface UseBadgeStyleProps {
  color: ColorOptionsType;
  variant: BadgeVariantType;
}

interface VariantProps extends UseBadgeStyleProps {
  theme: DefaultTheme;
  colorMode: ColorModeOptionType;
}

const solidStyle = ({
  theme: { colors },
  color,
  colorMode,
}: VariantProps): object => {
  const _color = colors[color] && colors[color][500];
  const darkModeBg = addOpacity(_color, 0.6);
  const styles = {
    light: {
      bg: get(color, 500),
      color: 'white',
    },
    dark: {
      bg: darkModeBg,
      color: 'whiteAlpha.800',
    },
  };
  return styles[colorMode];
};

const subtleStyle = ({
  theme: { colors },
  color,
  colorMode,
}: VariantProps): object => {
  const _color = colors[color] && colors[color][200];
  const alphaColors = generateAlphaColors(_color);
  const darkModeBg = alphaColors[300];

  const styles = {
    light: {
      bg: get(color, 100),
      color: get(color, 800),
    },
    dark: {
      bg: darkModeBg,
      color: get(color, 200),
    },
  };

  return styles[colorMode];
};

const outlineStyle = ({
  theme: { colors },
  color,
  colorMode,
}: VariantProps): object => {
  const _color = colors[color] && colors[color][200];
  const alphaColors = generateAlphaColors(_color);
  const darkModeColor = addOpacity(_color, 0.8);
  const darkModeBg = alphaColors[300];
  const boxShadowColor = colors[color] && colors[color][500];

  const styles = {
    light: {
      bg: get(color, 100),
      boxShadow: `inset 0 0 0px 1px ` + boxShadowColor,
      color: get(color, 500),
    },
    dark: {
      bg: darkModeBg,
      boxShadow: `inset 0 0 0px 1px ` + darkModeColor,
      color: darkModeColor,
    },
  };

  return styles[colorMode];
};

const variantProps = (props: VariantProps): object => {
  const { variant } = props;
  switch (variant) {
    case 'solid':
      return solidStyle(props);
    case 'subtle':
      return subtleStyle(props);
    case 'outline':
      return outlineStyle(props);
    default:
      return {};
  }
};

export const useBadgeStyles = (props: UseBadgeStyleProps): object => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const _props = { ...props, theme, colorMode };

  return variantProps(_props);
};
