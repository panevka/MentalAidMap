import logo from "../assets/logo-favicon.svg";

interface Props {
  className?: string;
  text?: boolean;
  icon?: boolean;
  tag: keyof JSX.IntrinsicElements;
}

const Logo: React.FC<Props> = ({
  className,
  text = true,
  icon = true,
  tag,
}: Props) => {
  const Tag = tag;

  return (
    <>
      {text && (
        <Tag
          className={`scroll-m-20 text-[#F16A70] font-montserrat tracking-tight text-3xl text-nowrap ${className}`}
        >
          przedsiebie.pl
          {icon && (
            <img
              className={"h-[1em] w-auto inline-block"}
              src={logo}
              alt="logo"
            />
          )}
        </Tag>
      )}
    </>
  );
};

export { Logo };
