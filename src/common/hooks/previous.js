import { useEffect, useRef } from 'react';

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export const areEqualLocationKey = (prevProps, nextProps) => {
  return prevProps.location.key === nextProps.location.key;
};
