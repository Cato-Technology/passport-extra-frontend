import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type QueryType = 'up' | 'down' | 'between' | 'only';

interface ResponsiveProps {
  query: QueryType;
  start: number | Breakpoint;
  end?: number | Breakpoint;
}

export function useResponsive({ query, start, end }: ResponsiveProps) {
  const theme = useTheme();
  const mediaQuery = useMediaQuery;

  switch (query) {
    case 'up':
      return mediaQuery(theme.breakpoints.up(start));
    case 'down':
      return mediaQuery(theme.breakpoints.down(start));
    case 'between':
      if (end === undefined) {
        throw new Error('Missing "end" breakpoint for "between" query.');
      }
      return mediaQuery(theme.breakpoints.between(start, end));
    case 'only':
      return mediaQuery(theme.breakpoints.only(start as Breakpoint));
    default:
      throw new Error(`Invalid query type: ${query}`);
  }
}

export function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();

  for (const key of keys) {
    if (useMediaQuery(theme.breakpoints.up(key))) {
      return key;
    }
  }
  return 'xs';
}
