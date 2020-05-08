import { system } from 'styled-system';

export const negativeSpaceSystemTop = system({
  negativeSpaceTop: {
    property: 'marginTop',
    scale: 'sizes',
    transform: (value, scale): string => {
      const _value = (scale && scale[value]) || value;
      return `-${_value}`;
    },
  },
});

export const negativeSpaceSystemLeft = system({
  negativeSpaceLeft: {
    property: 'marginLeft',
    scale: 'sizes',
    transform: (value, scale): string => {
      const _value = (scale && scale[value]) || value;
      return `-${_value}`;
    },
  },
});
