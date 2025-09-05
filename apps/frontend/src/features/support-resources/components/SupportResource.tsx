import { ISupportResource } from "@shared/database/SupportResource.types";
import { Globe, Users } from "lucide-react";
import { formatAgeRange } from "../utils/text";

interface SupportResourceProps {
  supportResource: ISupportResource;
  onClick?: () => void;
}

const SupportResource = ({ supportResource }: SupportResourceProps) => {
  const { name, age_range, providers } = supportResource;
  return (
    <div className="w-full m-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-600 mb-3 leading-relaxed">
              {/* Przykładowy opis support resource */}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Grupa wiekowa:{" "}
                {formatAgeRange(age_range.minInclusive, age_range.maxExclusive)}
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                {providers.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportResource;
