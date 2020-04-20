import React, { createContext, ReactNode, ReactElement, useState } from 'react';

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
  children: ReactNode;
}

export const ColorModeProvider = ({
  value = 'light',
  children,
}: ColorModeProviderPropTypes): ReactElement => {
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

export const DarkMode = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <ColorModeProvider value="dark">{children}</ColorModeProvider>;
};

export const LightMode = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <ColorModeProvider value="light">{children}</ColorModeProvider>;
};

export const useColorMode = (): ColorModeContextType => {
  const context = React.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};
