import React from 'react';
import { StyledTags } from '@emotion/styled';
import { DefaultTheme } from './theme';

type ExcludedColorsType =
  | 'transparent'
  | 'current'
  | 'black'
  | 'white'
  | 'whiteAlpha'
  | 'blackAlpha';

export type ColorOptionsType = Exclude<
  keyof DefaultTheme['colors'],
  ExcludedColorsType
>;

export interface AsType {
  as?: keyof StyledTags<DefaultTheme> | React.ReactNode;
}

export type SystemPropType =
  | string
  | number
  | symbol
  | (string | number | symbol | null)[]
  | {
      [x: string]: string | number | symbol | undefined;
      [x: number]: string | number | symbol | undefined;
    }
  | null
  | undefined;
