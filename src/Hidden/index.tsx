import React, { ReactNode } from 'react';

import { Box, DisplayRules } from '../Box';

type AboveOptions = 'mobile' | 'tablet' | 'desktop';
type BelowOptions = 'tablet' | 'desktop' | 'lg-desktop';

interface HiddenProps {
  above?: AboveOptions;
  below?: BelowOptions;
  children: ReactNode;
  inline?: boolean;
}

export const Hidden = ({
  above,
  below,
  children,
  inline = false,
}: HiddenProps) => {
  const displayValue = inline ? 'inline' : 'block';
  const display: [
    DisplayRules | null,
    DisplayRules | null,
    DisplayRules | null,
    DisplayRules | null,
    DisplayRules | null
  ] = ['none', null, null, null, null];

  if (above) {
    let aboveIndex;
    if (above === 'mobile') {
      aboveIndex = 1;
    } else if (above === 'tablet') {
      aboveIndex = 2;
    } else if (above === 'desktop') {
      aboveIndex = 3;
    }

    if (aboveIndex) {
      display[0] = displayValue;
      display[aboveIndex] = 'none';
    }
  }

  if (below) {
    let belowIndex;
    if (below === 'tablet') {
      belowIndex = 2;
    } else if (below === 'desktop') {
      belowIndex = 3;
    } else if (below === 'lg-desktop') {
      belowIndex = 4;
    }

    if (belowIndex) {
      display[0] = 'none';
      display[belowIndex] = displayValue;
    }
  }

  return (
    <Box as={inline ? 'span' : 'div'} display={display}>
      {children}
    </Box>
  );
};

Hidden.displayName = 'Hidden';
