import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  Stack,
  Box,
  Text,
} from '../.';

const App = (): React.ReactElement => {
  return (
    <ColorModeProvider>
      <ThemeProvider>
        <CSSReset />
        <Box backgroundColor="red.200" minHeight="100vh">
          <Stack>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
          </Stack>
        </Box>
      </ThemeProvider>
    </ColorModeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
