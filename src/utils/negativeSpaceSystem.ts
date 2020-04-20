import { system } from 'styled-system';

export const negativeSpaceSystem = system({
  negativeSpaceTop: {
    property: 'marginTop',
    scale: 'sizes',
    transform: (value, scale): string => {
      const _value = (scale && scale[value]) || value;
      return `-${_value}`;
    },
  },
  negativeSpaceLeft: {
    property: 'marginLeft',
    scale: 'sizes',
    transform: (value, scale): string => {
      const _value = (scale && scale[value]) || value;
      return `-${_value}`;
    },
  },
});
