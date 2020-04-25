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
    50: '#f9fafb',
    100: '#f4f5f7',
    200: '#e5e7eb',
    300: '#d2d6dc',
    400: '#9fa6b2',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#252f3f',
    900: '#161e2e',
  },

  red: {
    50: '#fdf2f2',
    100: '#fde8e8',
    200: '#fbd5d5',
    300: '#f8b4b4',
    400: '#f98080',
    500: '#f05252',
    600: '#e02424',
    700: '#c81e1e',
    800: '#9b1c1c',
    900: '#771d1d',
  },

  orange: {
    50: '#fff8f1',
    100: '#feecdc',
    200: '#fcd9bd',
    300: '#fdba8c',
    400: '#ff8a4c',
    500: '#ff5a1f',
    600: '#d03801',
    700: '#b43403',
    800: '#8a2c0d',
    900: '#771d1d',
  },

  yellow: {
    50: '#fdfdea',
    100: '#fdf6b2',
    200: '#fce96a',
    300: '#faca15',
    400: '#e3a008',
    500: '#c27803',
    600: '#9f580a',
    700: '#8e4b10',
    800: '#723b13',
    900: '#633112',
  },

  green: {
    50: '#f3faf7',
    100: '#def7ec',
    200: '#bcf0da',
    300: '#84e1bc',
    400: '#31c48d',
    500: '#0e9f6e',
    600: '#057a55',
    700: '#046c4e',
    800: '#03543f',
    900: '#014737',
  },

  teal: {
    50: '#edfafa',
    100: '#d5f5f6',
    200: '#afecef',
    300: '#7edce2',
    400: '#16bdca',
    500: '#0694a2',
    600: '#047481',
    700: '#036672',
    800: '#05505c',
    900: '#014451',
  },

  blue: {
    50: '#ebf5ff',
    100: '#e1effe',
    200: '#c3ddfd',
    300: '#a4cafe',
    400: '#76a9fa',
    500: '#3f83f8',
    600: '#1c64f2',
    700: '#1a56db',
    800: '#1e429f',
    900: '#233876',
  },

  indigo: {
    50: '#f0f5ff',
    100: '#e5edff',
    200: '#cddbfe',
    300: '#b4c6fc',
    400: '#8da2fb',
    500: '#6875f5',
    600: '#5850ec',
    700: '#5145cd',
    800: '#42389d',
    900: '#362f78',
  },

  purple: {
    50: '#f6f5ff',
    100: '#edebfe',
    200: '#dcd7fe',
    300: '#cabffd',
    400: '#ac94fa',
    500: '#9061f9',
    600: '#7e3af2',
    700: '#6c2bd9',
    800: '#5521b5',
    900: '#4a1d96',
  },

  pink: {
    50: '#fdf2f8',
    100: '#fce8f3',
    200: '#fad1e8',
    300: '#f8b4d9',
    400: '#f17eb8',
    500: '#e74694',
    600: '#d61f69',
    700: '#bf125d',
    800: '#99154b',
    900: '#751a3d',
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

const SYSTEM_FONT_STACK = `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
// const SYSTEM_FONT_STACK = 'Inter';
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
