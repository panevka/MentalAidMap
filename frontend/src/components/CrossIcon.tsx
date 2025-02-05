interface Props {
  strokeWidth: number;
  strokeColor?: string;
  className?: string;
}

const CrossIcon: React.FC<Props> = ({
  strokeWidth,
  strokeColor = "#000000",
  className = "size-14",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export { CrossIcon };
