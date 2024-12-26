import { useState } from "react"; import logo from "../assets/logo.svg";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

type Props = {};
export const TopBar = ({ }: Props) => {
  const [isSideBarOpen, setIsSiderBarOpen] = useState<boolean>(false);


  return (
    <header className="flex bg-[rgb(255,255,255)] h-16 p-2 shadow-black shadow-sm rounded-b-lg">
      <div className="flex flex-row justify-between h-full w-full">
        <div className="flex flex-row items-center p-2">
          <img className="h-full m-3" src={logo} alt="logo" />
          <h1 className="scroll-m-20 text-xl tracking-tight lg:text-6xl">
            przedsiebie.pl
          </h1>
        </div>

        <div className={`h-svh w-screen bg-white inset-0 z-40 p-8 fixed flex duration-700 ${isSideBarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col p-8 items-center justify-start w-full">
            <Navigation ulClassName="flex flex-col w-full h-full justify-between items-center" navClassName="h-1/4 w-full" />
          </div>
        </div>

        <button onClick={() => setIsSiderBarOpen(prev => !prev)} className="h-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#000000" className="size-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

      </div>
    </header>
  );
};
