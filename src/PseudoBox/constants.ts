import { BoxProps } from '../Box';

export const selectors = {
  hover: '&:hover',
  active: '&:active, &[data-active=true]',
  focus: '&:focus',
  visited: '&:visited',
  even: '&:nth-of-type(even)',
  odd: '&:nth-of-type(odd)',
  disabled:
    '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  checked: '&[aria-checked=true]',
  mixed: '&[aria-checked=mixed]',
  selected: '&[aria-selected=true]',
  invalid: '&[aria-invalid=true]',
  pressed: '&[aria-pressed=true]',
  readOnly: '&[aria-readonly=true], &[readonly]',
  first: '&:first-of-type',
  last: '&:last-of-type',
  expanded: '&[aria-expanded=true]',
  grabbed: '&[aria-grabbed=true]',
  notFirst: '&:not(:first-of-type)',
  notLast: '&:not(:last-of-type)',
  groupHover: '[role=group]:hover &',
};

export interface SelectorProps {
  _after?: BoxProps;
  _focus?: BoxProps;
  _selected?: BoxProps;
  _focusWithin?: BoxProps;
  _hover?: BoxProps;
  _invalid?: BoxProps;
  _active?: BoxProps;
  _disabled?: BoxProps;
  _grabbed?: BoxProps;
  _pressed?: BoxProps;
  _expanded?: BoxProps;
  _visited?: BoxProps;
  _before?: BoxProps;
  _readOnly?: BoxProps;
  _first?: BoxProps;
  _notFirst?: BoxProps;
  _notLast?: BoxProps;
  _last?: BoxProps;
  _placeholder?: BoxProps;
  _checked?: BoxProps;
  _groupHover?: BoxProps;
  _mixed?: BoxProps;
  _odd?: BoxProps;
  _even?: BoxProps;
}

export const getSelectorCssObject = (props: SelectorProps): object => ({
  [selectors.hover]: props._hover || {},
  [selectors.focus]: props._focus || {},
  [selectors.active]: props._active || {},
  [selectors.visited]: props._visited || {},
  [selectors.disabled]: props._disabled || {},
  [selectors.selected]: props._selected || {},
  [selectors.invalid]: props._invalid || {},
  [selectors.expanded]: props._expanded || {},
  [selectors.grabbed]: props._grabbed || {},
  [selectors.readOnly]: props._readOnly || {},
  [selectors.first]: props._first || {},
  [selectors.notFirst]: props._notFirst || {},
  [selectors.notLast]: props._notLast || {},
  [selectors.last]: props._last || {},
  [selectors.odd]: props._odd || {},
  [selectors.even]: props._even || {},
  [selectors.mixed]: props._mixed || {},
  [selectors.checked]: props._checked || {},
  [selectors.pressed]: props._pressed || {},
  [selectors.groupHover]: props._groupHover || {},
  '&:before': props._before || {},
  '&:after': props._after || {},
  '&:focus-within': props._focusWithin || {},
  '&::placeholder': props._placeholder || {},
});
