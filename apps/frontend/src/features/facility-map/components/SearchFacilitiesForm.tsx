import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Props {
  onSubmit: (city: string, postCode: string, radius: string) => void;
  defaultCity: string;
}

const SearchFacilitiesForm = ({ onSubmit, defaultCity }: Props) => {
  const [city, setCity] = useState(defaultCity || "");
  const [postCode, setPostCode] = useState("");
  const [radius, setRadius] = useState("");

  return (
    <div>
      <div className="text-sm md:w-full ">
        <Input
          type="search"
          placeholder="Miejscowość"
          defaultValue={defaultCity}
          onChange={(e) => setCity(e.target.value)}
          className="text-sm"
        />
        <div className="flex flex-row">
          <Input
            type="text"
            placeholder="Kod pocztowy"
            onChange={(e) => setPostCode(e.target.value)}
            className="text-sm"
          />
          <Input
            type="number"
            placeholder="Odległość (km)"
            onChange={(e) => setRadius(e.target.value)}
            className="text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col h-full justify-end md:items-center md:justify-center md:h-16 w-full">
        <Button
          type="submit"
          onClick={() => onSubmit(city, postCode, radius)}
          className="bg-[#2B3A67] mx-2 w-full"
        >
          <p>Szukaj</p>
        </Button>
      </div>
    </div>
  );
};

export default SearchFacilitiesForm;
