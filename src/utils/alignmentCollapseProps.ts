import { FlexboxProps } from 'styled-system';

type AlignRules = 'center' | 'left' | 'right';
type AlignYRules = 'bottom' | 'center' | 'top';
type CollapseBelowRules = 'tablet' | 'desktop' | 'lg-desktop';

export interface ResolveAlignmentCollapsePropsArgs {
  align?: AlignRules;
  alignY?: AlignYRules;
  collapseBelow?: CollapseBelowRules;
}

export const resolveAlignmentCollapseProps = ({
  align,
  alignY,
  collapseBelow,
}: ResolveAlignmentCollapsePropsArgs) => {
  let _align = null;
  let _alignY = null;

  if (align === 'center') {
    _align = 'center';
  } else if (align === 'left') {
    _align = 'flex-start';
  } else if (align === 'right') {
    _align = 'flex-end';
  }

  if (alignY === 'center') {
    _alignY = 'center';
  } else if (alignY === 'top') {
    _alignY = 'flex-start';
  } else if (alignY === 'bottom') {
    _alignY = 'flex-end';
  }

  let direction: FlexboxProps['flexDirection'] = 'row';

  if (collapseBelow) {
    let collapseIndex;
    if (collapseBelow === 'tablet') {
      collapseIndex = 2;
    } else if (collapseBelow === 'desktop') {
      collapseIndex = 3;
    } else if (collapseBelow === 'lg-desktop') {
      collapseIndex = 4;
    }

    if (collapseIndex) {
      const collapseDirection = 'column';
      direction = [collapseDirection];
      direction[collapseIndex] = 'row';
      const collapseAlign = [_alignY];
      const collapseAlignY = [_align];
      collapseAlign[collapseIndex] = _align;
      _align = collapseAlign;
      collapseAlignY[collapseIndex] = _alignY;
      _alignY = collapseAlignY;
    }
  }

  return {
    flexDirection: direction,
    alignItems: _alignY,
    justifyContent: _align,
  };
};
