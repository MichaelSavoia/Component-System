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

export interface SelectorPropTypes {
  _after?: {};
  _focus?: {};
  _selected?: {};
  _focusWithin?: {};
  _hover?: {};
  _invalid?: {};
  _active?: {};
  _disabled?: {};
  _grabbed?: {};
  _pressed?: {};
  _expanded?: {};
  _visited?: {};
  _before?: {};
  _readOnly?: {};
  _first?: {};
  _notFirst?: {};
  _notLast?: {};
  _last?: {};
  _placeholder?: {};
  _checked?: {};
  _groupHover?: {};
  _mixed?: {};
  _odd?: {};
  _even?: {};
}

export const getSelectorCssObject = (props: SelectorPropTypes): object => ({
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
