import logo from "../assets/logo.svg";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

type Props = {};
export const TopBar = ({ }: Props) => {
  return (
    <header className="flex bg-[rgb(255,255,255)] h-16 p-1 shadow-black shadow-sm rounded-b-3xl">
      <div className="flex flex-row justify-around h-full w-4/5">
        <div className="flex flex-row items-center p-2">
          <img className="h-full m-3" src={logo} alt="logo" />
          <h1 className="scroll-m-20 text-xl tracking-tight lg:text-6xl">
            przedsiebie.pl
          </h1>
        </div>

        <nav className="flex flex-1 justify-center items-center">
          <ul className="flex flex-row w-full justify-around">
            <li> Infolinie wsparcia </li>
            <li> Mapa placówek NFZ</li>
            <li> Mapa aptek </li>
          </ul>
        </nav>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#000000" className="h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </header>
  );
};
