import { addOpacity } from '../utils/colors';
import { useColorMode, ColorModeOptionType } from '../ColorModeProvider';
import { useTheme } from '../ThemeProvider';
import { DefaultTheme } from '../theme';

import { ColorOptionsType } from '../types';

const baseProps = {
  alignItems: 'center',
  appearance: 'none',
  borderRadius: 'md',
  display: 'inline-flex',
  fontWeight: 'semibold',
  justifyContent: 'center',
  lineHeight: '1.2',
  outline: 'none',
  position: 'relative',
  transition: 'all 0.15s',
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
};

const disabledProps = {
  _disabled: {
    opacity: '40%',
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
};

const focusProps = {
  _focus: {
    boxShadow: 'outline',
  },
};

const sizes = {
  lg: {
    height: 12,
    minWidth: 12,
    fontSize: 'lg',
    px: 6,
  },
  md: {
    height: 10,
    minWidth: 10,
    fontSize: 'md',
    px: 4,
  },
  sm: {
    height: 8,
    minWidth: 8,
    fontSize: 'sm',
    px: 3,
  },
  xs: {
    height: 6,
    minWidth: 6,
    fontSize: 'xs',
    px: 2,
  },
};

export type ButtonSizeType = keyof typeof sizes;

interface SizeReturnType {
  height: number;
  minWidth: number;
  fontSize: string;
  px: number;
}

const sizeProps = (size: ButtonSizeType): SizeReturnType => sizes[size];

export type ButtonVariantType =
  | 'solid'
  | 'ghost'
  | 'link'
  | 'outline'
  | 'unstyled';

export interface UseButtonStyleProps {
  size: ButtonSizeType;
  color: ColorOptionsType;
  variant: ButtonVariantType;
}

interface VariantProps extends UseButtonStyleProps {
  colorMode: ColorModeOptionType;
  theme: DefaultTheme;
}

type VariantFunctionType = (props: VariantProps) => object;

const graySolidVariantStyle = {
  light: {
    backgroundColor: 'gray.100',
    _hover: {
      backgroundColor: 'gray.200',
    },
    _active: {
      backgroundColor: 'gray.300',
    },
  },
  dark: {
    backgroundColor: 'whiteAlpha.200',
    _hover: {
      backgroundColor: 'whiteAlpha.300',
    },
    _active: {
      backgroundColor: 'whiteAlpha.400',
    },
  },
};

const solidVariantProps: VariantFunctionType = ({ color, colorMode }) => {
  let style;

  if (color === 'gray') {
    style = graySolidVariantStyle;
  } else {
    style = {
      light: {
        backgroundColor: `${color}.500`,
        color: 'white',
        _hover: {
          backgroundColor: `${color}.600`,
        },
        _active: {
          backgroundColor: `${color}.700`,
        },
      },
      dark: {
        backgroundColor: `${color}.200`,
        color: 'gray.800',
        _hover: {
          backgroundColor: `${color}.300`,
        },
        _active: {
          backgroundColor: `${color}.400`,
        },
      },
    };
  }

  return style[colorMode];
};

const grayGhostStyle = {
  light: {
    color: 'inherit',
    _hover: {
      bg: 'gray.100',
    },
    _active: {
      bg: 'gray.200',
    },
  },
  dark: {
    color: 'whiteAlpha.900',
    _hover: {
      bg: 'whiteAlpha.200',
    },
    _active: {
      bg: 'whiteAlpha.300',
    },
  },
};

const ghostVariantProps: VariantFunctionType = ({
  color,
  colorMode,
  theme,
}) => {
  const _color = theme.colors[color] && theme.colors[color][200];
  let result;
  if (color === 'gray') {
    result = grayGhostStyle;
  } else {
    result = {
      light: {
        color: `${color}.500`,
        bg: 'transparent',
        _hover: {
          bg: `${color}.50`,
        },
        _active: {
          bg: `${color}.100`,
        },
      },
      dark: {
        color: `${color}.200`,
        bg: 'transparent',
        _hover: {
          bg: addOpacity(_color, 0.12),
        },
        _active: {
          bg: addOpacity(_color, 0.24),
        },
      },
    };
  }

  return result[colorMode];
};

const linkVariantProps: VariantFunctionType = ({ color, colorMode }) => {
  const _color = { light: `${color}.500`, dark: `${color}.200` };
  const _activeColor = { light: `${color}.700`, dark: `${color}.500` };
  return {
    p: 0,
    height: 'auto',
    lineHeight: 'normal',
    color: _color[colorMode],
    _hover: {
      textDecoration: 'underline',
    },
    _active: {
      color: _activeColor[colorMode],
    },
  };
};

const outlineVariantProps: VariantFunctionType = props => {
  const { color, colorMode } = props;
  const borderColor = { light: 'gray.200', dark: 'whiteAlpha.300' };

  return {
    border: '2px',
    borderColor: color === 'gray' ? borderColor[colorMode] : 'current',
    ...ghostVariantProps(props),
  };
};

const unstyledStyle = {
  userSelect: 'inherit',
  bg: 'none',
  border: 0,
  color: 'inherit',
  display: 'inline',
  font: 'inherit',
  lineHeight: 'inherit',
  m: 0,
  p: 0,
  textAlign: 'inherit',
};

const variantProps: VariantFunctionType = props => {
  switch (props.variant) {
    case 'solid':
      return solidVariantProps(props);
    case 'ghost':
      return ghostVariantProps(props);
    case 'link':
      return linkVariantProps(props);
    case 'outline':
      return outlineVariantProps(props);
    case 'unstyled':
      return unstyledStyle;
    default:
      return {};
  }
};

export const useButtonStyles = (props: UseButtonStyleProps): object => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const _props = { ...props, colorMode, theme };

  return {
    ...baseProps,
    ...disabledProps,
    ...focusProps,
    ...sizeProps(_props.size),
    ...variantProps(_props),
  };
};
