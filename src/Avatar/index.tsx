import React from 'react';

import { Flex } from '../Flex';
import { Box, BoxProps } from '../Box';
import { useHasImageLoaded } from '../utils';
import { useAvatarStyles, AvatarSizeOptions } from './styles';

export interface AvatarProps extends BoxProps {
  name?: string;
  size?: AvatarSizeOptions;
  src?: string;
  showBorder?: boolean;
}

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ');

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  } else {
    return firstName.charAt(0);
  }
};

interface AvatarItemProps extends AvatarProps {
  loaded?: boolean;
}

const AvatarName = ({ name, ...props }: AvatarItemProps) => {
  return (
    <Flex
      textTransform="uppercase"
      fontWeight="medium"
      aria-label={name}
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {name ? getInitials(name) : null}
    </Flex>
  );
};

const DefaultAvatar = (props: BoxProps) => (
  <Box height="full" width="full" {...props}>
    <svg fill="#fff" viewBox="0 0 128 128" role="img">
      <g>
        <path d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z" />
        <path d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24" />
      </g>
    </svg>
  </Box>
);

const AvatarItem = ({ loaded, name, src, ...props }: AvatarItemProps) => {
  if (src && loaded) {
    return <Box as="img" objectFit="cover" src={src} alt={name} {...props} />;
  } else if (src && !loaded) {
    if (name) {
      return <AvatarName name={name} {...props} />;
    } else {
      return <DefaultAvatar {...props} aria-label={name} />;
    }
  } else if (!src && name) {
    return <AvatarName name={name} {...props} />;
  }

  return <DefaultAvatar {...props} aria-label={name} />;
};

export const Avatar = ({ size = 'md', name, src, ...props }: AvatarProps) => {
  const loaded = useHasImageLoaded({ src });

  return (
    <Box>
      <AvatarItem
        src={src}
        loaded={loaded}
        name={name}
        {...useAvatarStyles({ size, name })}
        {...props}
      />
    </Box>
  );
};

Avatar.displayName = 'Avatar';
