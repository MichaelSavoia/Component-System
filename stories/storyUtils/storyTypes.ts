import React from 'react';

interface StoryComponentPropType<T> {
  props?: Partial<T>;
}

export type StoryComponentType<T> = React.FC<StoryComponentPropType<T>>;
