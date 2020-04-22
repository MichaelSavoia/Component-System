import React from 'react';

import { Button, ButtonPropTypes } from './Button';

interface IconButtonPropTypes extends ButtonPropTypes {
  children: React.ReactNode;
  ['aria-label']: string;
}

export const IconButton: React.FC<IconButtonPropTypes> = props => {
  if (!props['aria-label']) {
    throw new Error(
      '<IconButton /> must have an aria-label prop so that screen readers can give meaning to the button.'
    );
  }
  return <Button {...props} />;
};
