import { ISupportResource } from "@shared/database/SupportResource.types";
import { Globe, Users } from "lucide-react";

interface SupportResourceProps {
  supportResource: ISupportResource;
  onClick?: () => void;
}

const SupportResource = ({ supportResource }: SupportResourceProps) => (
  <div className="w-full m-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {supportResource.name}
          </h3>
          <p className="text-gray-600 mb-3 leading-relaxed">
            Przykładowy opis support resource
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              Grupa wiekowa {supportResource.age_range.minInclusive} -{" "}
              {supportResource.age_range.maxExclusive}
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              {supportResource.providers.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SupportResource;
