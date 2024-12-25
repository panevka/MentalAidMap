import { TopBar } from "./TopBar";
import bgImage from "../assets/bg.svg";
import bgImage2 from "../assets/this.jpg"
import { CSSProperties } from "react";

const ImageStyles: CSSProperties = {
  backgroundImage: "url(" + bgImage + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
};

type Props = {};
export const MainPage = ({ }: Props) => {
  return (
    <div className="flex flex-col min-h-svh h-svh w-screen" style={ImageStyles}>

      <TopBar />
      <main className="flex flex-col flex-1 items-center justify-center">
        <div className="rounded-3xl h-3/4 w-4/5 bg-[rgb(255,255,255,0.70)] backdrop-blur-sm shadow-lg p-8">
          <article className="opacity-100">

            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl">
              Przed Siebie! - platforma pomocowa dla osób w kryzysie
            </h1>

            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Przed Siebie! to platforma zawierająca materiały pomocne dla osób przeżywających kryzys. Możesz tu znaleźć:
            </p>
          </article>
        </div>
      </main>

      <footer className="bg-slate-500">
        <h1>halo</h1>
        <h1>halo</h1>
        <h1>halo</h1>
      </footer>
    </div>
  );
};
