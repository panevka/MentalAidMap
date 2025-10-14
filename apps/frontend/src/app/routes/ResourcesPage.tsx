import { useGetSupportResources } from "@/hooks/useSupportResources";
import { Globe, Mail, Phone, Search } from "lucide-react";
import { useState } from "react";

const formatAge = (min: number, max: number) => {
  const prefix = "Grupa wiekowa:";
  let value = "";
  if (min === 0 && max === 0) value = "wszyscy";
  else if (min === 0) value = `<${max}`;
  else if (max === 0) value = `${min}+`;

  return `${prefix} ${value}`;
};

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: supportResources } = useGetSupportResources();

  const filteredResources = supportResources?.filter((resource) => {
    const matchesSearch =
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource?.description?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Baza wsparcia
          </h1>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Szukaj..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredResources?.map((resource) => (
            <div
              key={resource.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full text-white text-sm font-medium">
                  {formatAge(resource.ageRange.min, resource.ageRange.max)}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {resource.name}
              </h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-500 mr-3" />
                  <span className="font-semibold text-gray-900">
                    {resource.phone}
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-600">
                    {resource.email || "Brak e-maila"}
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-purple-500 mr-3" />
                  <span className="text-purple-600">
                    {resource.website ? (
                      <a href={resource.website}>Strona</a>
                    ) : (
                      "Brak strony"
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
