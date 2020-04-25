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

type NativeButtonProps = AllHTMLAttributes<HTMLDivElement>;
const PsuedoButton = styled(PseudoBox)<
  PseudoBoxPropTypes & TypographyProps & NativeButtonProps
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
  onClick?: NativeButtonProps['onClick'];
}

export const Button: React.FC<ButtonPropTypes> = ({
  children,
  color = 'gray',
  isDisabled = false,
  isFullWidth = false,
  isLoading = false,
  size = 'sm',
  variant = 'solid',
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
