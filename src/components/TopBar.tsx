import logo from "../assets/logo.svg";

type Props = {};
export const TopBar = ({ }: Props) => {
  return (
    <header className="flex h-16 p-1 shadow-lg justify-between">
      <div className="flex flex-row items-center p-2">
        <img className="h-full m-3" src={logo} alt="logo" />
        <h1 className="scroll-m-20 text-xl tracking-tight lg:text-6xl">
          doprzodu.pl
        </h1>
      </div>
      <nav>

      </nav>
    </header>
  );
};
