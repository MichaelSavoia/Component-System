import React from 'react';
import { css, Global, SerializedStyles } from '@emotion/core';
import { defaultsDeep } from 'lodash';

import { DefaultTheme } from './theme';
import { useColorMode } from './ColorModeProvider';

const preflight = (theme: DefaultTheme): SerializedStyles => css`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none !important;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none !important;
  }
  html {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }
  button {
    background: transparent;
    padding: 0;
  }
  fieldset {
    margin: 0;
    padding: 0;
  }
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: ${theme.fonts.body};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizelegibility;
  }
  hr {
    border-top-width: 1px;
  }
  img {
    border-style: solid;
  }
  textarea {
    resize: vertical;
  }
  button,
  [role='button'] {
    cursor: pointer;
  }
  button::-moz-focus-inner {
    border: 0 !important;
  }
  table {
    border-collapse: collapse;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }
  pre,
  code,
  kbd,
  samp {
    font-family: ${theme.fonts.mono};
  }
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: inline-block;
    vertical-align: middle;
  }
  img,
  video {
    max-width: 100%;
    height: auto;
  }
`;

interface ConfigType {
  config: {
    color: string;
    bg?: string;
    borderColor: string;
    placeholderColor: string;
  };
}

const defaultConfig = (
  theme: DefaultTheme
): { light: ConfigType['config']; dark: ConfigType['config'] } => ({
  light: {
    color: theme.colors.gray[800],
    bg: undefined,
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[400],
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400],
  },
});

export interface ConfigReturnType {
  light?: {
    color?: string;
    bg?: string;
    placeholderColor?: string;
  };
  dark?: {
    color?: string;
    bg?: string;
    placeholderColor?: string;
  };
}

interface CSSResetPropTypes {
  config?: (theme: DefaultTheme) => ConfigReturnType;
}

export const CSSReset = ({ config }: CSSResetPropTypes): JSX.Element => {
  const { colorMode } = useColorMode();

  const configCSS = (theme: DefaultTheme): SerializedStyles => {
    const _defaultConfig = defaultConfig(theme);

    const _config = config
      ? defaultsDeep(config(theme), _defaultConfig)
      : defaultConfig(theme);

    const { color, bg, borderColor, placeholderColor } = _config[colorMode];

    return css`
      html {
        line-height: 1.5;
        color: ${color};
        background-color: ${bg};
      }
      /**
      * Allow adding a border to an element by just adding a border-width.
      */
      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        border-color: ${borderColor};
      }
      input:-ms-input-placeholder,
      textarea:-ms-input-placeholder {
        color: ${placeholderColor};
      }
      input::-ms-input-placeholder,
      textarea::-ms-input-placeholder {
        color: ${placeholderColor};
      }
      input::placeholder,
      textarea::placeholder {
        color: ${placeholderColor};
      }
    `;
  };

  return (
    <Global
      styles={(theme: DefaultTheme): SerializedStyles =>
        css([preflight(theme), configCSS(theme)])
      }
    />
  );
};
