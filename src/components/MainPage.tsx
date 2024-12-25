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
    <div className="flex flex-col min-h-svh h-full w-screen">
      <TopBar />
      <main className="flex flex-col flex-1 items-center justify-center">
        <article className="rounded-3xl h-3/5 w-4/5 bg-[rgba(255,255,255,.25)] backdrop-blur-sm shadow-lg p-8">

          <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl">
            Do Przodu! - platforma pomocowa dla osób w kryzysie
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Do Przodu! to platforma zawierająca materiały pomocne dla osób przeżywających kryzys. Możesz tu znaleźć:
          </p>
        </article>
      </main>

      <footer className="bg-slate-500">
        <h1>halo</h1>
        <h1>halo</h1>
        <h1>halo</h1>
      </footer>
    </div>
  );
};
