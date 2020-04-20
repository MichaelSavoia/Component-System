import React, { ReactNode, ReactElement, AllHTMLAttributes } from 'React';
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
  children?: ReactNode;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  size?: ButtonSizeType;
  color?: ColorOptionsType;
  variant?: ButtonVariantType;
  onClick?: NativeButtonProps['onClick'];
}

export const Button = ({
  children,
  color = 'gray',
  isDisabled = false,
  isFullWidth = false,
  isLoading = false,
  size = 'md',
  variant = 'solid',
  onClick,
  ...props
}: ButtonPropTypes): ReactElement => {
  const _isDisabled = isDisabled || isLoading;
  const _onClick = _isDisabled ? undefined : onClick;
  return (
    <PsuedoButton
      as="button"
      disabled={_isDisabled}
      aria-disabled={_isDisabled}
      width={isFullWidth ? 'fluid' : undefined}
      {...useButtonStyles({ color, size, variant })}
      {...props}
      onClick={_onClick}
    >
      {children}
    </PsuedoButton>
  );
};
