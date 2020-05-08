import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider, ColorModeProvider, CSSReset } from '../.';

const App = (): React.ReactElement => {
  return (
    <ColorModeProvider>
      <ThemeProvider>
        <CSSReset />
      </ThemeProvider>
    </ColorModeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
