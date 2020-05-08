import React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider, Box } from '../src';

describe('Box', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Box />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
