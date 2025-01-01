import { TopBar } from "./TopBar";
import bgImage from "../assets/bg.svg";
import bgImage2 from "../assets/this.jpg"
import { CSSProperties } from "react";
import { MapPinIcon, GlobeAsiaAustraliaIcon, ClockIcon } from '@heroicons/react/24/solid'

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
    <div className="flex flex-col min-h-svh h-svh w-screen bg-[#F7F4FB]">

      <TopBar />
      <main className="flex flex-col lg:flex-row flex-1 justify-center">
        <div className="flex flex-1 py-10 px-5">
          {/* <div className="rounded-3xl h-3/4 w-4/5 bg-[rgb(255,255,255,0.70)] backdrop-blur-sm shadow-lg p-8"> */}
          <article>

            <h1 className="scroll-m-20 font-poppins text-4xl text-[#2B3A67] my-2 font-black tracking-tight lg:text-3xl">
              Przed Siebie! - Twój przewodnik do szybszej pomocy
            </h1>
            <p className="leading-7 text-[#495057] font-normal tracking-wider text-sm my-5">
              Problemy ze zdrowiem psychicznym nie powinny czekać!
              <div>
                Nasza strona pomoże Ci szybko znaleźć wsparcie:
                <ul className="flex flex-col list-none space-y-4 mt-4">
                  <li className="flex flex-row items-center space-x-3 height-auto">
                    <MapPinIcon className="text-[#2B3A67] h-auto max-h-6" aria-hidden="true" />
                    <span>Mapa placówek - wszystkie placówki w Polsce,</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ClockIcon className="h-5 w-5 text-[#2B3A67]" aria-hidden="true" />
                    <span className="text-[#495057]">Aktualne terminy - dostępne wizyty w Twojej okolicy,</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <GlobeAsiaAustraliaIcon className="h-5 w-5 text-[#2B3A67]" aria-hidden="true" />
                    <span className="text-[#495057]">Baza wsparcia - pełna lista dostępnych opcji.</span>
                  </li>
                </ul>
                <div>
                </div>

              </div>
            </p>
          </article>
          {/* </div> */}
        </div>
        <div className="flex flex-1">
          <h1>Test</h1>
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
