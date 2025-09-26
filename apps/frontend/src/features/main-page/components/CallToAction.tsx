import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MAP_PAGE_ROUTE } from "@/config/routeConfig";
import PolandMap from "@assets/poland.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(MAP_PAGE_ROUTE, { state: { inputValue } });
  };

  return (
    <div className="flex flex-1 flex-col p-5 items-center lg:justify-center">
      <div className="h-auto w-full max-w-full lg:w-3/4 xl:w-full 2xl:w-10/12">
        <img src={PolandMap} alt="Map of Poland" className="w-full h-full" />
      </div>

      <form
        className="flex flex-row w-full max-w-full items-center space-x-2 sm:h-12 md:w-4/5 lg:text-3xl lg:w-3/4 xl:h-16"
        onSubmit={handleSubmit}
      >
        <Input
          type="search"
          className="w-4/5 h-full md:text-lg lg:text-xl"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Miejscowość"
        />

        <Button
          type="submit"
          className="bg-[#2B3A67] h-full w-1/5 md:text-lg lg:text-xl"
        >
          Szukaj
        </Button>
      </form>
    </div>
  );
};

export default CallToAction;
