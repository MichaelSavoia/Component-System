const SYSTEM_FONT_STACK = `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export const fonts = {
  system: SYSTEM_FONT_STACK,
  heading: `${SYSTEM_FONT_STACK}`,
  body: `${SYSTEM_FONT_STACK}`,
  mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
};

export type Fonts = keyof typeof fonts;
