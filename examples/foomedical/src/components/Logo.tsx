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
    <svg
      width="1050"
      height="180"
      viewBox="0 0 1343 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height, color }}


    >
    </svg >
  );
}
