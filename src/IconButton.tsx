import React, { ReactElement, ReactNode } from 'react';

import { Button, ButtonPropTypes } from './button';

interface IconButtonPropTypes extends ButtonPropTypes {
  children: ReactNode;
  ['aria-label']: string;
}

export const IconButton = (props: IconButtonPropTypes): ReactElement => {
  if (!props['aria-label']) {
    throw new Error(
      '<IconButton /> must have an aria-label prop so that screen readers can give meaning to the button.'
    );
  }
  return <Button {...props} />;
};
