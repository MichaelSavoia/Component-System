import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { system } from 'styled-system';

import { Box, ResponsiveProp } from '../Box';
import { ColumnsContext } from '../Columns';

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
            return `0 0 ${percent * 100}%`;
        }
      },
    },
  })
);

type ColumnWidthOptions = 'flex' | 'fluid' | 'full' | 'auto' | string;
interface ColumnPropTypes {
  width?: ResponsiveProp<ColumnWidthOptions>;
  children?: React.ReactNode;
}

export const Column = ({ width = 'fluid', children }: ColumnPropTypes) => {
  const { space, verticalSpace } = useContext(ColumnsContext);
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
