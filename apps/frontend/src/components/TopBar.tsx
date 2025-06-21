import { useState } from "react";
import { Navigation } from "./Navigation";
import { HamburgerMenuIcon } from "./HamburgerMenuIcon";
import { CrossIcon } from "./CrossIcon";
import { Logo } from "./Logo";

const TopBar: React.FC = () => {
  const [isSideBarOpen, setIsSiderBarOpen] = useState<boolean>(false);

  return (
    <header className="flex bg-[#2B3A67] h-16 md:h-20 p-2 justify-center md:py-10">
      <div className="flex flex-row justify-between h-full w-full">
        <div className="flex flex-row items-center md:mx-4">
          <Logo tag="h1" className="lg:text-5xl lg:m-3" />
        </div>

        <Navigation
          navClassName="hidden md:flex lg:w-3/5 md:mx-5"
          ulClassName="text-[#FAF9F6] md:text-sm md:text-center lg:text-xl md:font-medium uppercase font-inter flex w-full flex-row justify-around items-center"
          liClassName="md:mx-4 group transition-all duration-300 ease-in-out"
          linkClassName="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out"
        />

        <div
          className={`h-svh w-screen bg-white inset-0 z-40 p-8 fixed flex duration-700 md:hidden ${
            isSideBarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-8 items-center justify-between h-3/5 w-full">
            <button
              onClick={() => setIsSiderBarOpen(false)}
              className={` duration-700 ${
                isSideBarOpen ? "rotate-0" : "rotate-180"
              }`}
            >
              <CrossIcon strokeWidth={2.2} />
            </button>
            <Navigation
              ulClassName="flex flex-col w-full h-4/6 justify-around items-center"
              navClassName="h-full w-full"
            />
          </div>
        </div>

        <button
          onClick={() => setIsSiderBarOpen(true)}
          className={`h-full flex items-center justify-center duration-150 md:hidden`}
        >
          <HamburgerMenuIcon
            strokeWidth={2.2}
            strokeColor="#ffffff"
            iconClassName="size-14"
          />
        </button>
      </div>
    </header>
  );
};

export { TopBar };
