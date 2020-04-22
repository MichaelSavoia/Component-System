import React from 'react';
import {
  ThemeProvider as EmotionThemeProvider,
  useTheme as emotionUseTheme,
} from 'emotion-theming';
import { defaultsDeep } from 'lodash';

import { theme as defaultTheme, DefaultTheme } from './theme';

interface ThemeProviderProps {
  theme?: object;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  children,
}) => {
  const _theme = defaultsDeep(theme, defaultTheme);
  return <EmotionThemeProvider theme={_theme}>{children}</EmotionThemeProvider>;
};

export const useTheme = (): DefaultTheme => {
  const theme = emotionUseTheme<DefaultTheme>();
  if (theme === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return theme;
};
