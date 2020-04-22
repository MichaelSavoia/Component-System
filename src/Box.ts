import styled from '@emotion/styled';
import {
  border,
  color,
  compose,
  display,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
  zIndex,
  BorderProps,
  ColorProps,
  DisplayProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  ZIndexProps,
} from 'styled-system';
import React from 'react';

import { AsType } from './types';

const systemProps = compose(
  border,
  color,
  display,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  zIndex,
  system({
    outline: true,
    transition: true,
    whiteSpace: true,
  })
);

export interface BoxPropTypes
  extends BorderProps,
    ColorProps,
    DisplayProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps,
    ZIndexProps,
    AsType {
  children?: React.ReactNode;
  color?: string;
  transition?: string;
  outline?: string;
  whiteSpace?: string;
}

export const Box = styled.div<BoxPropTypes>(systemProps);
