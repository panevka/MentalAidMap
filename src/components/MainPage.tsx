import { TopBar } from "./TopBar";
import { MapIcon, GlobeAsiaAustraliaIcon, ClockIcon } from '@heroicons/react/24/solid'
import { Input } from "./ui/input";
import { Button } from "./ui/button"
import GithubIcon from "../assets/github-icon.svg"
import SvgMap from "./SvgMap/SvgMap";
type Props = {};
export const MainPage = ({ }: Props) => {
  return (
    <div className="flex flex-col min-h-svh h-svh w-screen">

      <TopBar />
      <main className="flex flex-col lg:flex-row flex-1 justify-center bg-[#F7F4FB]">
        <div className="flex flex-1 py-5 px-5">
          {/* <div className="rounded-3xl h-3/4 w-4/5 bg-[rgb(255,255,255,0.70)] backdrop-blur-sm shadow-lg p-8"> */}
          <article className="flex flex-col">

            <h1 className="scroll-m-20 font-poppins text-4xl text-[#2B3A67] my-2 font-black tracking-tight lg:text-3xl text-center">
              Przed Siebie! - Twój przewodnik do szybszej pomocy
            </h1>
            <span className="leading-7 text-[#495057] font-normal tracking-wider text-xs my-5">
              Problemy ze zdrowiem psychicznym nie powinny czekać!
              <div>
                Nasza strona pomoże Ci szybko znaleźć wsparcie:
                <ul className="flex flex-col list-none">
                  <li className="inline-block my-1">

                    <MapIcon className="text-[#2B3A67] h-[1.3em] w-auto mr-1 inline-block align-middle" aria-hidden="true" />
                    <span>

                      Mapa placówek - wszystkie placówki w Polsce,
                    </span>
                  </li>
                  <li className="inline-block my-1">
                    <ClockIcon className="text-[#2B3A67] h-[1.3em] w-auto mr-1 inline-block align-middle" aria-hidden="true" />
                    <span>

                      Aktualne terminy - dostępne wizyty w Twojej okolicy,</span>
                  </li>
                  <li className="inline-block my-1">
                    <GlobeAsiaAustraliaIcon className="text-[#2B3A67] h-[1.3em] w-auto mr-1 inline-block align-middle" aria-hidden="true" />
                    <span>
                      Baza wsparcia - pełna lista dostępnych opcji.</span>
                  </li>
                </ul>
                <div>
                </div>

              </div>
            </span>
          </article>
          {/* </div> */}
        </div>
        <div className="flex flex-1 flex-col p-5">


          <div className="h-auto w-full">
            <SvgMap />
          </div>

          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Miejscowość" />
            <Button type="submit" className="bg-[#2B3A67]">Szukaj</Button>
          </div>
        </div>
      </main>

      <footer className="bg-[#F16A70] text-white p-2">
        <ul>
          <li className="inline-block">
            <img src={GithubIcon} className="h-[1em] w-auto inline-block align-middle"></img> <a className="align-middle" href="https://github.com/panevka/MentalAidMap">Project Github Page</a>
          </li>
        </ul>

      </footer>
    </div >
  );
};
