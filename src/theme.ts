const borders = {
  none: 0,
  '1px': '1px solid',
  '2px': '2px solid',
  '4px': '4px solid',
};

const breakpoints = ['30em', '48em', '62em', '80em'];

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',

  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)',
  },

  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)',
  },

  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },

  red: {
    50: '#fff5f5',
    100: '#fed7d7',
    200: '#feb2b2',
    300: '#fc8181',
    400: '#f56565',
    500: '#e53e3e',
    600: '#c53030',
    700: '#9b2c2c',
    800: '#822727',
    900: '#63171b',
  },

  orange: {
    50: '#FFFAF0',
    100: '#FEEBC8',
    200: '#FBD38D',
    300: '#F6AD55',
    400: '#ED8936',
    500: '#DD6B20',
    600: '#C05621',
    700: '#9C4221',
    800: '#7B341E',
    900: '#652B19',
  },

  yellow: {
    50: '#fffff0',
    100: '#fefcbf',
    200: '#faf089',
    300: '#f6e05e',
    400: '#ecc94b',
    500: '#d69e2e',
    600: '#b7791f',
    700: '#975a16',
    800: '#744210',
    900: '#5F370E',
  },

  green: {
    50: '#f0fff4',
    100: '#c6f6d5',
    200: '#9ae6b4',
    300: '#68d391',
    400: '#48bb78',
    500: '#38a169',
    600: '#2f855a',
    700: '#276749',
    800: '#22543d',
    900: '#1C4532',
  },

  teal: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#319795',
    600: '#2C7A7B',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044',
  },

  blue: {
    50: '#ebf8ff',
    100: '#ceedff',
    200: '#90cdf4',
    300: '#63b3ed',
    400: '#4299e1',
    500: '#3182ce',
    600: '#2a69ac',
    700: '#1e4e8c',
    800: '#153e75',
    900: '#1a365d',
  },

  cyan: {
    50: '#EDFDFD',
    100: '#C4F1F9',
    200: '#9DECF9',
    300: '#76E4F7',
    400: '#0BC5EA',
    500: '#00B5D8',
    600: '#00A3C4',
    700: '#0987A0',
    800: '#086F83',
    900: '#065666',
  },

  indigo: {
    50: '#ebf4ff',
    100: '#c3dafe',
    200: '#a3bffa',
    300: '#7f9cf5',
    400: '#667eea',
    500: '#5a67d8',
    600: '#4c51bf',
    700: '#434190',
    800: '#3c366b',
    900: '#2b264d',
  },

  purple: {
    50: '#faf5ff',
    100: '#e9d8fd',
    200: '#d6bcfa',
    300: '#b794f4',
    400: '#9f7aea',
    500: '#805ad5',
    600: '#6b46c1',
    700: '#553c9a',
    800: '#44337a',
    900: '#322659',
  },

  pink: {
    50: '#fff5f7',
    100: '#fed7e2',
    200: '#fbb6ce',
    300: '#f687b3',
    400: '#ed64a6',
    500: '#d53f8c',
    600: '#b83280',
    700: '#97266d',
    800: '#702459',
    900: '#521B41',
  },
};

const opacity = {
  '0': '0',
  '20%': '0.2',
  '40%': '0.4',
  '60%': '0.6',
  '80%': '0.8',
  '100%': '1',
};

const radii = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  full: '9999px',
};

const shadows = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  none: 'none',
};

export const baseSizes = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
};

const largeSizes = {
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
};

const containers = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
};

const sizes = {
  ...baseSizes,
  ...largeSizes,
  containers,
};

const SYSTEM_FONT_STACK = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const typography = {
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fonts: {
    system: SYSTEM_FONT_STACK,
    heading: `${SYSTEM_FONT_STACK}`,
    body: `${SYSTEM_FONT_STACK}`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
};

const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

export const theme = {
  borders,
  breakpoints,
  colors,
  opacity,
  radii,
  shadows,
  sizes,
  space: baseSizes,
  ...typography,
  zIndices,
};

export type DefaultTheme = typeof theme;
