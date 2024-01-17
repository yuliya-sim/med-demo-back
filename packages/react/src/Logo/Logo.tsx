export interface LogoProps {
  size: number;
  fill?: string;
}

export function Logo(props: LogoProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491 491" style={{ width: props.size, height: props.size }}>
      <title>Logo</title>
      <circle cx="246" cy="246" r="240" fill="#a8b2fc" />

    </svg>
  );
}
