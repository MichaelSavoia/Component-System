import {
  ElementType,
  ReactNode,
  HTMLAttributes,
  AllHTMLAttributes,
} from 'react';
import styled from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  display,
  flexbox,
  grid,
  layout,
  position,
  space,
  shadow,
  system,
  typography,
  zIndex,
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  OpacityProps,
} from 'styled-system';
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop';

import {
  BaseSizes,
  Borders,
  Sizes,
  Radii,
  Shadows,
  ColorOptions,
  ZIndices,
  Fonts,
  FontSizes,
  FontWeights,
  LineHeights,
  LetterSpacings,
} from '../theme';

export type ResponsiveProp<AtomName> =
  | (AtomName | null)
  | Readonly<[AtomName | null, AtomName | null]>
  | Readonly<[AtomName | null, AtomName | null, AtomName | null]>
  | Readonly<
      [AtomName | null, AtomName | null, AtomName | null, AtomName | null]
    >
  | Readonly<
      [
        AtomName | null,
        AtomName | null,
        AtomName | null,
        AtomName | null,
        AtomName | null
      ]
    >;

export type ResponsiveSize = ResponsiveProp<Sizes | string | number>;
export type ResponsiveBaseSize = ResponsiveProp<BaseSizes>;
export type ResponsiveRadius = ResponsiveProp<Radii>;
export type ResponsiveShadow = ResponsiveProp<Shadows>;
export type ResponsiveZIndex = ResponsiveProp<ZIndices>;
export type ResponsiveFont = ResponsiveProp<Fonts>;
export type ResponsiveFontSize = ResponsiveProp<FontSizes>;
export type ResponsiveFontWeight = ResponsiveProp<FontWeights>;
export type ResponsiveLineHeight = ResponsiveProp<LineHeights>;
export type ResponsiveLetterSpacing = ResponsiveProp<LetterSpacings>;
export type ResponsiveColor = ResponsiveProp<ColorOptions>;
export type ResponsiveBorder = ResponsiveProp<Borders>;

export type DisplayRules =
  | 'block'
  | 'inline'
  | 'none'
  | 'inline-block'
  | 'grid'
  | 'flex';

export type ResponsiveDisplay = ResponsiveProp<DisplayRules>;

type ObjectFitRules =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inherit'
  | 'initial'
  | 'none'
  | 'revert'
  | 'scale-down'
  | 'unset';

export type ResponsiveObjectFit = ResponsiveProp<ObjectFitRules>;

type PositionRules =
  | 'absolute'
  | 'fixed'
  | 'inherit'
  | 'initial'
  | 'relative'
  | 'revert'
  | 'static'
  | 'sticky'
  | 'unset';

export type ResponsivePosition = ResponsiveProp<PositionRules>;

type TextAlignRules = 'center' | 'left' | 'right';

export type ResponsiveTextAlign = ResponsiveProp<TextAlignRules>;

type TextTransformRules =
  | 'capitalize'
  | 'inherit'
  | 'initial'
  | 'lowercase'
  | 'none'
  | 'revert'
  | 'unset'
  | 'uppercase';

export type ResponsiveTextTransform = ResponsiveProp<TextTransformRules>;

type WhiteSpaceRules =
  | 'break-spaces'
  | 'inherit'
  | 'initial'
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-line'
  | 'pre-wrap'
  | 'revert'
  | 'unset';

export type ResponsiveWhiteSpace = ResponsiveProp<WhiteSpaceRules>;

export type Truncate = Partial<{ truncate?: boolean }>;

const truncate = (props: Truncate): {} | undefined => {
  if (props.truncate) {
    return `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
  }

  return;
};

const systemProps = compose(
  background,
  border,
  color,
  display,
  flexbox,
  grid,
  layout,
  position,
  space,
  shadow,
  typography,
  zIndex,
  system({
    objectFit: true,
    outline: true,
    textTransform: true,
    transition: true,
    whiteSpace: true,
  })
);

type NativeProps = HTMLAttributes<HTMLDivElement>;
type NativeImageProps = Pick<
  AllHTMLAttributes<HTMLImageElement>,
  'alt' | 'src'
>;
type BoxBorderProps = Omit<
  BorderProps,
  | 'borderRadius'
  | 'borderColor'
  | 'borderWidth'
  | 'borderBottomWidth'
  | 'borderLeftWidth'
  | 'borderRightWidth'
  | 'borderTopWidth'
>;

export interface BoxProps
  extends BackgroundProps,
    BoxBorderProps,
    FlexboxProps,
    GridProps,
    OpacityProps,
    NativeProps,
    NativeImageProps,
    Truncate {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType;
  backgroundColor?: ResponsiveColor;
  borderWidth?: ResponsiveBorder;
  borderColor?: ResponsiveColor;
  borderBottomWidth?: ResponsiveBorder;
  borderLeftWidth?: ResponsiveBorder;
  borderRadius?: ResponsiveRadius;
  borderRightWidth?: ResponsiveBorder;
  borderTopWidth?: ResponsiveBorder;
  bottom?: ResponsiveSize;
  boxShadow?: ResponsiveShadow;
  children?: ReactNode;
  color?: string;
  display?: ResponsiveDisplay;
  fontFamily?: ResponsiveFont;
  fontSize?: ResponsiveFontSize;
  fontWeight?: ResponsiveFontWeight;
  height?: ResponsiveSize;
  left?: ResponsiveSize;
  letterSpacing?: ResponsiveLetterSpacing;
  lineHeight?: ResponsiveLineHeight;
  margin?: ResponsiveBaseSize;
  marginX?: ResponsiveBaseSize;
  marginY?: ResponsiveBaseSize;
  marginTop?: ResponsiveBaseSize;
  marginBottom?: ResponsiveBaseSize;
  marginLeft?: ResponsiveBaseSize;
  marginRight?: ResponsiveBaseSize;
  maxHeight?: ResponsiveSize;
  maxWidth?: ResponsiveSize;
  minHeight?: ResponsiveSize;
  minWidth?: ResponsiveSize;
  objectFit?: ResponsiveObjectFit;
  outline?: ResponsiveProp<string>;
  padding?: ResponsiveBaseSize;
  paddingX?: ResponsiveBaseSize;
  paddingY?: ResponsiveBaseSize;
  paddingTop?: ResponsiveBaseSize;
  paddingBottom?: ResponsiveBaseSize;
  paddingLeft?: ResponsiveBaseSize;
  paddingRight?: ResponsiveBaseSize;
  position?: ResponsivePosition;
  right?: ResponsiveSize;
  textAlign?: ResponsiveTextAlign;
  textTransform?: ResponsiveTextTransform;
  top?: ResponsiveSize;
  transition?: ResponsiveProp<string>;
  whiteSpace?: ResponsiveWhiteSpace;
  width?: ResponsiveSize;
  zIndex?: ResponsiveZIndex;
}

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'textDecoration',
  'pointerEvents',
  'visibility',
  'transform',
  'cursor',
  'fill',
  'stroke',
]);

export const Box = styled('div', { shouldForwardProp })<BoxProps>`
  ${systemProps}
  ${truncate}
`;

Box.displayName = 'Box';
