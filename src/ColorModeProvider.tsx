import React, { createContext, useState } from 'react';

export type ColorModeOptionType = 'light' | 'dark';

interface ColorModeContextType {
  colorMode: ColorModeOptionType;
  toggleColorMode: () => void;
  setColorMode: (mode: ColorModeOptionType) => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  colorMode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColorMode: () => {},
});

interface ColorModeProviderPropTypes {
  value?: ColorModeOptionType;
  children: React.ReactNode;
}

export const ColorModeProvider: React.FC<ColorModeProviderPropTypes> = ({
  value = 'light',
  children,
}) => {
  const [colorMode, setColorMode] = useState(value);

  const toggleColorMode = (): void => {
    switch (colorMode) {
      case 'light':
        setColorMode('dark');
        break;
      case 'dark':
        setColorMode('light');
        break;
    }
    console.log('ran toggle');
  };

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode,
        toggleColorMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

interface ColorModeComponentPropTypes {
  children: React.ReactNode;
}

export const DarkMode: React.FC<ColorModeComponentPropTypes> = ({
  children,
}) => {
  return <ColorModeProvider value="dark">{children}</ColorModeProvider>;
};

export const LightMode: React.FC<ColorModeComponentPropTypes> = ({
  children,
}) => {
  return <ColorModeProvider value="light">{children}</ColorModeProvider>;
};

export const useColorMode = (): ColorModeContextType => {
  const context = React.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};
