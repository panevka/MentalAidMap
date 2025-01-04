import { TopBar } from "./TopBar";
import { MapIcon, GlobeAsiaAustraliaIcon, ClockIcon } from '@heroicons/react/24/solid'
import { Input } from "./ui/input";
import { Button } from "./ui/button"
import GithubIcon from "../assets/github-icon.svg"
import SvgMap from "./SvgMap/SvgMap";
import { Logo } from "./Logo";
type Props = {};
export const MainPage = ({ }: Props) => {
  return (
    <div className="flex flex-col min-h-svh h-svh w-screen">

      <TopBar />
      <main className="flex flex-col flex-1 justify-center bg-[#F7F4FB] xl:flex-row">
        <div className="flex flex-1 py-5 px-5">
          {/* <div className="rounded-3xl h-3/4 w-4/5 bg-[rgb(255,255,255,0.70)] backdrop-blur-sm shadow-lg p-8"> */}
          <article className="flex flex-col lg:py-5 lg:px-10 lg:justify-around">

            <h1 className="scroll-m-20 font-poppins text-4xl text-[#2B3A67] my-2 font-black tracking-tight text-center sm:text-6xl sm:my-10 lg:text-6xl lg:leading-snug xl:text-left xl:text-7xl 2xl:text-8xl 2xl:leading-normal">
              Twój przewodnik do szybszej pomocy!
            </h1>
            <span className="leading-7 text-[#495057] font-normal tracking-wider text-xs my-5 sm:text-base sm:leading-10 md:leading-10 md:text-xl xl:text-2xl xl:leading-loose">
              Problemy ze zdrowiem psychicznym nie powinny czekać!
              <div>
                Nasza strona pomoże Ci szybko znaleźć wsparcie:
                <ul className="flex flex-col list-none">
                  <li className="inline-block my-1">

                    <MapIcon className="text-[#2B3A67] h-[1.3em] w-auto mr-1 inline-block align-middle" aria-hidden="true" />
                    <span className="align-middle">

                      Mapa placówek - wszystkie placówki w Polsce,
                    </span>
                  </li>
                  <li className="inline-block my-1">
                    <ClockIcon className="text-[#2B3A67] h-[1.3em] w-auto mr-1 inline-block align-middle" aria-hidden="true" />
                    <span className="align-middle">

                      Aktualne terminy - dostępne wizyty w Twojej okolicy,</span>
                  </li>
                  <li className="inline-block my-1">
                    <GlobeAsiaAustraliaIcon className="text-[#2B3A67] h-[1.3em] w-auto mr-1 inline-block align-middle" aria-hidden="true" />
                    <span className="align-middle">
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
        <div className="flex flex-1 flex-col p-5 items-center lg:justify-center">


          <div className="h-auto w-full max-w-full lg:w-3/4 xl:w-full 2xl:w-10/12">
            <SvgMap />
          </div>

          <div className="flex flex-row w-full max-w-full items-center space-x-2 sm:h-12 md:w-4/5 lg:text-3xl lg:w-3/4 xl:h-16">
            <Input type="search" className="w-4/5 h-full md:text-lg lg:text-xl" placeholder="Miejscowość" />
            <Button type="submit" className="bg-[#2B3A67] h-full w-1/5 md:text-lg lg:text-xl">Szukaj</Button>
          </div>
        </div>
      </main>

      {/*<footer className="bg-[#ffbdc2] text-[#14191e] p-5 flex flex-col justify-center items-center">
        <Logo size="xs" />
        <ul>
          <li className="inline-block">
            <img src={GithubIcon} className="h-[1em] w-auto inline-block align-middle"></img>
            <a className="align-middle" href="https://github.com/panevka/MentalAidMap">Project Github Page</a>
          </li>
        </ul>

      </footer>*/}
    </div >
  );
};
