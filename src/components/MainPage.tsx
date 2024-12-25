import { TopBar } from "./TopBar";
import bgImage from "../assets/mental_health.svg";
import { CSSProperties } from "react";

const ImageStyles: CSSProperties = {
  backgroundImage: "url(" + bgImage + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

type Props = {};
export const MainPage = ({ }: Props) => {
  return (
    <div className="flex flex-col min-h-svh w-screen">
      <TopBar />
      <main className="flex flex-col flex-grow items-center">
        <div className="rounded-3xl h-80 w-4/6 bg-[rgba(255,255,255,.25)] backdrop-blur-sm shadow-lg p-8 self">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Pomóż sobie już dziś
          </h2>
        </div>
      </main>

      <footer>
        <h1>halo</h1>
        <h1>halo</h1>
        <h1>halo</h1>
      </footer>
    </div>
  );
};
