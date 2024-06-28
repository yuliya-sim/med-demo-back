import { useMantineTheme } from '@mantine/core';

export interface LogoProps {
  width: number;
}

export function Logo(props: LogoProps): JSX.Element {
  const theme = useMantineTheme();
  const color = theme.fn.primaryColor();
  const width = props.width;
  const height = Math.round((180 / 1050) * width);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 149 26" fill="none">
    </svg>
  );
}
