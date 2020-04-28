import React, { AllHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { typography, TypographyProps } from 'styled-system';

import { PseudoBox, PseudoBoxPropTypes } from './PseudoBox';
import {
  useButtonStyles,
  ButtonSizeType,
  ButtonVariantType,
} from './style-hooks/useButtonStyles';
import { ColorOptionsType } from './types';

type NativeProps = AllHTMLAttributes<HTMLDivElement>;
const PsuedoButton = styled(PseudoBox)<
  PseudoBoxPropTypes & TypographyProps & NativeProps
>`
  ${typography}
`;

export interface ButtonPropTypes {
  children?: React.ReactNode;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  size?: ButtonSizeType;
  color?: ColorOptionsType;
  variant?: ButtonVariantType;
  onClick?: NativeProps['onClick'];
}

export const Button: React.FC<ButtonPropTypes> = ({
  children,
  color = 'gray',
  isDisabled = false,
  isFullWidth = false,
  isLoading = false,
  size = 'md',
  variant = 'default',
  onClick,
  ...props
}) => {
  const _isDisabled = isDisabled || isLoading;
  const _onClick = _isDisabled ? undefined : onClick;
  return (
    <PsuedoButton
      as="button"
      disabled={_isDisabled}
      aria-disabled={_isDisabled}
      width={isFullWidth ? 'full' : undefined}
      {...useButtonStyles({ color, size, variant })}
      {...props}
      onClick={_onClick}
    >
      {children}
    </PsuedoButton>
  );
};
