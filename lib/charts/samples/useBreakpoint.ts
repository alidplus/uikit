import { useEffect, useState } from 'react';

const breakpoints = {
  sm: '(min-width: 568px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1440px)',
} as const;

export function useBreakpoint(breakpoint: 'sm' | 'md' | 'lg' | 'xl' = 'lg'): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(breakpoints[breakpoint]).matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakpoints[breakpoint]);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [breakpoint]);

  return matches;
}
