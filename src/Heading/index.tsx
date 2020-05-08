import React from 'react';

import { Text, TextProps } from '../Text';

export interface HeadingProps extends TextProps {
  level: 1 | 2 | 3 | 4 | 5;
}

interface UseHeadingStylesProps
  extends Pick<HeadingProps, 'size' | 'letterSpacing'> {}

const useHeadingStyles = ({
  level,
  textTransform,
}: HeadingProps): UseHeadingStylesProps => {
  let style: UseHeadingStylesProps = {
    size: 'xl',
    letterSpacing: textTransform === 'uppercase' ? 'widest' : 'normal',
  };
  if (level === 1) {
    style = {
      size: '4xl',
      letterSpacing: textTransform === 'uppercase' ? 'wider' : 'tight',
    };
  } else if (level === 2) {
    style = {
      size: '3xl',
      letterSpacing: textTransform === 'uppercase' ? 'wider' : 'tight',
    };
  } else if (level === 3) {
    style = {
      size: '2xl',
      letterSpacing: textTransform === 'uppercase' ? 'wider' : 'normal',
    };
  } else if (level === 4) {
    style = {
      size: 'xl',
      letterSpacing: textTransform === 'uppercase' ? 'widest' : 'normal',
    };
  }
  return style;
};

export const Heading = (props: HeadingProps) => {
  return <Text font="heading" {...useHeadingStyles(props)} {...props} />;
};
