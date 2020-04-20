import React, { useContext, ReactNode, ReactElement } from 'react';
import styled from '@emotion/styled';
import { system } from 'styled-system';

import { Box } from './Box';
import { ColumnsContext } from './Columns';

import { SystemPropType } from './types';

const parseFractionStringToPercent = (
  fractionString: string
): number | void => {
  if (!fractionString) {
    return;
  }
  const values = fractionString.split('/');
  const numerator = parseInt(values[0]);
  const denominator = parseInt(values[1]);
  return numerator / denominator;
};

let percent, calculatedPercent;
const ColumnWrapper = styled(Box)(
  system({
    columnWidth: {
      property: 'flex',
      transform: (value: string): string | void => {
        switch (value) {
          case 'fluid':
            return '1';
          case 'full':
            return '0 0 100%';
          case 'auto':
            return;
          default:
            if (!value) {
              return;
            }
            if (typeof value === 'number') {
              percent = value;
            } else {
              calculatedPercent = parseFractionStringToPercent(value);
              if (!calculatedPercent) {
                return;
              }
              percent = calculatedPercent;
            }
            console.log('value: ', value);
            return `0 0 ${percent * 100}%`;
        }
      },
    },
  })
);

interface ColumnPropTypes {
  width?: SystemPropType;
  children?: ReactNode;
}

export const Column = ({
  width = 'auto',
  children,
}: ColumnPropTypes): ReactElement => {
  const { space, verticalSpace } = useContext(ColumnsContext);
  console.log({ width });
  return (
    <ColumnWrapper
      paddingTop={verticalSpace}
      paddingLeft={space}
      columnWidth={width}
    >
      {children}
    </ColumnWrapper>
  );
};
