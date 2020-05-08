import { useContext } from 'react';

import { theme, FontSizes, Sizes, ColorOptions } from '../theme';
import { isDarkColor } from '../utils';
import { useColorMode } from '../ColorModeProvider';
import { AvatarGroupContext } from '../AvatarGroup';

const string2Hex = (str: string): string => {
  let hash = 0;
  if (str.length === 0) return '';
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  let color = '#';
  for (let j = 0; j < 3; j++) {
    const value = (hash >> (j * 8)) & 255;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

type AvatarSizes = {
  xs: '6';
  sm: '8';
  md: '12';
  lg: '16';
  xl: '24';
};

const avatarSizes: AvatarSizes = {
  xs: '6',
  sm: '8',
  md: '12',
  lg: '16',
  xl: '24',
};

export type AvatarSizeOptions = keyof typeof avatarSizes;

type AvatarFontSizes = {
  xs: 'xs';
  sm: 'sm';
  md: 'lg';
  lg: '2xl';
  xl: '4xl';
};

const avatarFontSizes: AvatarFontSizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'lg',
  lg: '2xl',
  xl: '4xl',
};

interface UseAvatarStylesProps {
  size: AvatarSizeOptions;
  name?: string;
  showBorder?: boolean;
}

interface UseAvatarStylesReturn {
  borderRadius: 'full';
  boxShadow: 'inner';
  color: ColorOptions;
  height: Sizes;
  width: Sizes;
  background: string;
  fontSize: FontSizes;
  borderColor?: ColorOptions;
  borderWidth?: '4px' | '2px';
}

export const useAvatarStyles = ({
  size,
  name,
  showBorder,
}: UseAvatarStylesProps): UseAvatarStylesReturn => {
  const { colorMode } = useColorMode();
  const avatarGroupContext = useContext(AvatarGroupContext);
  const background: string = name ? string2Hex(name) : theme.colors.gray[400];
  const _size = avatarGroupContext.size || size;
  const avatarSize = avatarSizes[_size];
  const fontSize: FontSizes = avatarFontSizes[_size];
  const color = name
    ? isDarkColor(background)
      ? 'white'
      : 'gray.800'
    : 'white';

  const _borderColor: { light: 'white'; dark: 'gray.800' } = {
    light: 'white',
    dark: 'gray.800',
  };

  const _showBorder = !!avatarGroupContext || showBorder;
  let _borderWidth: '4px' | '2px' | undefined;
  if (_showBorder) {
    _borderWidth = _size === 'xl' ? '4px' : '2px';
  }

  return {
    borderRadius: 'full',
    boxShadow: 'inner',
    color,
    height: avatarSize,
    width: avatarSize,
    background,
    fontSize,
    borderColor: _showBorder ? _borderColor[colorMode] : undefined,
    borderWidth: _borderWidth,
  };
};
