import { useState } from "react"; import logo from "../assets/logo.svg";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Navigation } from "./Navigation";
import { HamburgerMenuIcon } from "./HamburgerMenuIcon";
import { CrossIcon } from "./CrossIcon";

type Props = {};
export const TopBar = ({ }: Props) => {
  const [isSideBarOpen, setIsSiderBarOpen] = useState<boolean>(false);


  return (
    <header className="flex bg-[rgb(255,255,255)] h-16 p-2 shadow-slate-400 shadow-lg rounded-b-lg">
      <div className="flex flex-row justify-between h-full w-full">
        <div className="flex flex-row items-center p-2">
          <img className="h-full m-3" src={logo} alt="logo" />
          <h1 className="scroll-m-20 text-2xl tracking-tight lg:text-3xl">
            przedsiebie.pl
          </h1>
        </div>

        <Navigation navClassName="hidden lg:flex w-full" ulClassName="flex w-full flex-row justify-around items-center" />

        <div className={`h-svh w-screen bg-white inset-0 z-40 p-8 fixed flex duration-700 md:hidden ${isSideBarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col p-8 items-center justify-between h-3/5 w-full">
            <button onClick={() => setIsSiderBarOpen(false)} className={` duration-700 ${isSideBarOpen ? "rotate-0" : "rotate-180"}`}>
              <CrossIcon strokeWidth={2.2} />
            </button>
            <Navigation ulClassName="flex flex-col w-full h-full justify-around items-center" navClassName="h-full w-full" />
          </div>
        </div>

        <button onClick={() => setIsSiderBarOpen(true)} className={`h-full flex items-center justify-center duration-150 lg:hidden`}>
          <HamburgerMenuIcon strokeWidth={2.2} IconClassName="size-14" />
        </button>

      </div>
    </header>
  );
};
