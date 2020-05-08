import { addOpacity, get } from '../utils/colors';
import { useColorMode, ColorModeOptionType } from '../ColorModeProvider';
import { useTheme } from '../ThemeProvider';
import { Theme, ColorVariants } from '../theme';

const baseProps = {
  alignItems: 'center',
  appearance: 'none',
  borderRadius: 'md',
  display: 'inline-flex',
  fontSize: 'lg',
  fontWeight: 'medium',
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

export type ButtonSizes = keyof typeof sizes;

interface SizePropsReturn {
  height: number;
  minWidth: number;
  fontSize: string;
  px: number;
}

const sizeProps = (size: ButtonSizes): SizePropsReturn => sizes[size];

export type ButtonVariants =
  | 'default'
  | 'solid'
  | 'subtle'
  | 'ghost'
  | 'link'
  | 'outline'
  | 'unstyled';

export interface UseButtonStyleProps {
  size: ButtonSizes;
  color: ColorVariants;
  variant: ButtonVariants;
}

interface VariantProps extends UseButtonStyleProps {
  colorMode: ColorModeOptionType;
  theme: Theme;
}

type VariantFunction = (props: VariantProps) => object;

const grayDefaultVariantStyle = {
  light: {
    color: 'gray.700',
    borderColor: 'gray.300',
    backgroundColor: 'white',
    _hover: {
      color: 'gray.500',
    },
    _active: {
      color: 'gray.700',
      backgroundColor: 'gray.100',
    },
  },
  dark: {
    color: 'white',
    borderColor: 'gray.400',
    backgroundColor: 'gray.800',
    _hover: {
      color: 'gray.200',
    },
    _active: {
      color: 'white',
      backgroundColor: 'gray.900',
    },
  },
};

const defaultVariantStyle: VariantFunction = ({ color, colorMode }) => {
  let style;

  if (color === 'gray') {
    style = grayDefaultVariantStyle;
  } else {
    style = {
      light: {
        color: get(color, 700),
        borderColor: 'gray.300',
        backgroundColor: 'white',
        _hover: {
          color: get(color, 500),
        },
        _active: {
          color: get(color, 700),
          backgroundColor: 'gray.100',
        },
      },
      dark: {
        color: get(color, 400),
        borderColor: 'gray.400',
        backgroundColor: 'gray.800',
        _hover: {
          color: get(color, 300),
        },
        _active: {
          color: get(color, 400),
          backgroundColor: 'gray.900',
        },
      },
    };
  }

  return { borderWidth: '1px', ...style[colorMode] };
};

const graySolidVariantStyle = {
  light: {
    color: 'gray.900',
    backgroundColor: 'gray.300',
    _hover: {
      backgroundColor: 'gray.200',
    },
    _active: {
      backgroundColor: 'gray.300',
    },
  },
  dark: {
    color: 'white',
    backgroundColor: 'whiteAlpha.300',
    _hover: {
      backgroundColor: 'whiteAlpha.400',
    },
    _active: {
      backgroundColor: 'whiteAlpha.300',
    },
  },
};

const solidVariantProps: VariantFunction = ({ color, colorMode }) => {
  let style;

  if (color === 'gray') {
    style = graySolidVariantStyle;
  } else {
    style = {
      light: {
        backgroundColor: get(color, 600),
        color: 'white',
        _hover: {
          backgroundColor: get(color, 500),
        },
        _active: {
          backgroundColor: get(color, 700),
        },
      },
      dark: {
        backgroundColor: get(color, 400),
        color: 'gray.800',
        _hover: {
          backgroundColor: get(color, 300),
        },
        _active: {
          backgroundColor: get(color, 500),
        },
      },
    };
  }

  return style[colorMode];
};

const graySubtleStyle = {
  light: {
    color: 'gray.900',
    bg: 'gray.100',
    _hover: {
      color: 'gray.600',
    },
    _active: {
      color: 'gray.800',
      bg: 'gray.200',
    },
  },
  dark: {
    color: 'whiteAlpha.800',
    bg: 'whiteAlpha.200',
    _hover: {
      color: 'white',
    },
    _active: {
      color: 'whiteAlpha.900',
      bg: 'whiteAlpha.300',
    },
  },
};

const subtleVariantProps: VariantFunction = ({ color, colorMode, theme }) => {
  const _color = theme.colors[color] && theme.colors[color][300];
  let style;
  if (color === 'gray') {
    style = graySubtleStyle;
  } else {
    style = {
      light: {
        color: get(color, 700),
        bg: get(color, 100),
        _hover: {
          color: get(color, 500),
        },
        _active: {
          color: get(color, 600),
          bg: get(color, 200),
        },
      },
      dark: {
        color: get(color, 400),
        bg: addOpacity(_color, 0.12),
        _hover: {
          color: get(color, 300),
        },
        _active: {
          bg: addOpacity(_color, 0.24),
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

const ghostVariantProps: VariantFunction = ({ color, colorMode, theme }) => {
  const _color = theme.colors[color] && theme.colors[color][300];
  let result;
  if (color === 'gray') {
    result = grayGhostStyle;
  } else {
    result = {
      light: {
        color: get(color, 600),
        bg: 'transparent',
        _hover: {
          bg: get(color, 100),
        },
        _active: {
          bg: get(color, 200),
        },
      },
      dark: {
        color: get(color, 400),
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

const linkVariantProps: VariantFunction = ({ color, colorMode }) => {
  const _color = { light: get(color, 600), dark: get(color, 200) };
  const _hoverColor = { light: get(color, 500), dark: get(color, 500) };
  const _activeColor = { light: get(color, 700), dark: get(color, 500) };
  return {
    p: 0,
    height: 'auto',
    lineHeight: 'normal',
    color: _color[colorMode],
    _hover: {
      color: _hoverColor[colorMode],
    },
    _active: {
      color: _activeColor[colorMode],
    },
  };
};

const outlineVariantProps: VariantFunction = props => {
  const { color, colorMode } = props;
  const borderColor = { light: 'gray.300', dark: 'whiteAlpha.300' };

  return {
    border: '1px',
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

const variantProps: VariantFunction = props => {
  switch (props.variant) {
    case 'default':
      return defaultVariantStyle(props);
    case 'solid':
      return solidVariantProps(props);
    case 'subtle':
      return subtleVariantProps(props);
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
