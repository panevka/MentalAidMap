interface Props {
  strokeWidth: number;
  strokeColor?: string;
  iconClassName?: string;
}

const HamburgerMenuIcon: React.FC<Props> = ({
  strokeWidth,
  strokeColor = "#000000",
  iconClassName = "size-14",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      className={iconClassName}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export { HamburgerMenuIcon };
