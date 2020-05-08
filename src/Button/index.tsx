import React, { AllHTMLAttributes } from 'react';

import { ColorVariants } from '../theme';
import { PseudoBox } from '../PseudoBox';
import { useButtonStyles, ButtonSizes, ButtonVariants } from './styles';

type NativeProps = AllHTMLAttributes<HTMLDivElement>;

export interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  size?: ButtonSizes;
  color?: ColorVariants;
  variant?: ButtonVariants;
  onClick?: NativeProps['onClick'];
}

export const Button = ({
  children,
  color = 'gray',
  disabled = false,
  fullWidth = false,
  loading = false,
  size = 'md',
  variant = 'default',
  onClick,
  ...props
}: ButtonProps) => {
  const _disabled = disabled || loading;
  const _onClick = _disabled ? undefined : onClick;
  return (
    <PseudoBox
      as="button"
      disabled={_disabled}
      aria-disabled={_disabled}
      width={fullWidth ? 'full' : undefined}
      {...useButtonStyles({ color, size, variant })}
      {...props}
      onClick={_onClick}
    >
      {children}
    </PseudoBox>
  );
};
