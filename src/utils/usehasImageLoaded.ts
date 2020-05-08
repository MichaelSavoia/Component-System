import { useEffect, useRef, useState } from 'react';

interface UseHasImageLoadedArgs {
  src?: string;
  onLoad?: (arg0: Event) => {};
  onError?: (arg0: string | Event) => {};
  enabled?: boolean;
}

export const useHasImageLoaded = ({
  src,
  onLoad,
  onError,
  enabled = true,
}: UseHasImageLoadedArgs): boolean => {
  const isMounted = useRef(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!src || !enabled) {
      return;
    }

    const image = new window.Image();
    image.src = src;

    image.onload = event => {
      if (isMounted.current) {
        setHasLoaded(true);
        onLoad && onLoad(event);
      }
    };

    image.onerror = event => {
      if (isMounted.current) {
        setHasLoaded(false);
        onError && onError(event);
      }
    };
  }, [src, onLoad, onError, enabled]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return hasLoaded;
};
