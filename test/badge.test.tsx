import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Badge } from '../stories/Badge.stories';

describe('Badge', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Badge />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
