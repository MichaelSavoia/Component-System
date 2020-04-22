import React from 'react';

import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  ColorModeContext,
} from '../src';

import { createDarkModeToggle } from './createDarkModeToggle';

interface StoryWrapperPropTypes {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<StoryWrapperPropTypes> = ({ children }) => {
  const { setColorMode } = React.useContext(ColorModeContext);

  const colorModeRadios = createDarkModeToggle();

  React.useEffect(() => {
    setColorMode(colorModeRadios ? 'dark' : 'light');
  }, [colorModeRadios, setColorMode]);
  return (
    <ThemeProvider>
      <CSSReset />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '2rem 0',
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export const StoryWrapper: React.FC<StoryWrapperPropTypes> = ({ children }) => {
  return (
    <ColorModeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ColorModeProvider>
  );
};
