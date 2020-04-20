import React, { ReactElement, ReactNode } from 'react';
import {
  ThemeProvider as EmotionThemeProvider,
  useTheme as emotionUseTheme,
} from 'emotion-theming';
import { defaultsDeep } from 'lodash';

import { theme as defaultTheme, DefaultTheme } from './theme';

interface ThemeProviderProps {
  theme?: object;
  children: ReactNode;
}

export const ThemeProvider = ({
  theme = {},
  children,
}: ThemeProviderProps): ReactElement => {
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
