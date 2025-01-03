import { useState } from "react";
import logo from "../assets/logo-favicon.svg";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Navigation } from "./Navigation";
import { HamburgerMenuIcon } from "./HamburgerMenuIcon";
import { CrossIcon } from "./CrossIcon";
import { Logo } from "./Logo";

type Props = {};
export const TopBar = ({ }: Props) => {
  const [isSideBarOpen, setIsSiderBarOpen] = useState<boolean>(false);


  return (
    <header className="flex bg-[#2B3A67] h-16 md:h-20 p-2 justify-center">
      <div className="flex flex-row justify-between h-full w-full">
        <div className="flex flex-row items-center md:mx-4">
          <Logo />
        </div>

        <Navigation navClassName="hidden md:flex lg:w-3/5 md:mx-5" ulClassName="text-[#FAF9F6] md:text-sm md:text-center lg:text-base md:font-medium uppercase font-inter flex w-full flex-row justify-around items-center" liClassName="md:mx-4" />

        <div className={`h-svh w-screen bg-white inset-0 z-40 p-8 fixed flex duration-700 md:hidden ${isSideBarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col p-8 items-center justify-between h-3/5 w-full">
            <button onClick={() => setIsSiderBarOpen(false)} className={` duration-700 ${isSideBarOpen ? "rotate-0" : "rotate-180"}`}>
              <CrossIcon strokeWidth={2.2} />
            </button>
            <Navigation ulClassName="flex flex-col w-full h-4/6 justify-around items-center" navClassName="h-full w-full" />
          </div>
        </div>

        <button onClick={() => setIsSiderBarOpen(true)} className={`h-full flex items-center justify-center duration-150 md:hidden`}>
          <HamburgerMenuIcon strokeWidth={2.2} strokeColor="#ffffff" IconClassName="size-14" />
        </button>

      </div>
    </header>
  );
};
