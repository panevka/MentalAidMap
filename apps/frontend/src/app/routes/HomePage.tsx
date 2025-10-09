import {
  MAP_PAGE_ROUTE,
  SUPPORT_RESOURCES_PAGE_ROUTE,
} from "@/config/routeConfig";
import { Heart, MapPin, Phone, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const progress = Math.min((duration - remaining) / duration, 1);

      setCount(Math.floor(progress * end));

      if (remaining === 0) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const HomePage = () => {
  const facilitiesCount = useCounter(1100);
  const resourcesCount = useCounter(10);
  const opennessCount = useCounter(100);
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-relaxed">
              Zdrowie psychiczne
              <span className="block leading-relaxed">bez barier</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Przeglądaj mapę placówek NFZ, korzystaj ze sprawdzonych infolinii
              i zasobów online. Znajdź odpowiednią pomoc szybko i bez zbędnych
              barier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate(MAP_PAGE_ROUTE)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Znajdź najbliższą placówkę
              </button>
              <button
                onClick={() => navigate(SUPPORT_RESOURCES_PAGE_ROUTE)}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 hover:scale-105 transform transition-all duration-300"
              >
                Pomoc online
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"></div>
        </div>
        <div
          className="absolute bottom-1/4 right-10 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20"></div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {facilitiesCount}+
              </div>
              <div className="text-gray-600">Placówek NFZ w naszej bazie</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {resourcesCount}+
              </div>
              <div className="text-gray-600">Zebranych zasobów wsparcia</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {opennessCount}%
              </div>
              <div className="text-gray-600">Otwartości na feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak możemy pomóc
            </h2>
            <p className="text-xl text-gray-600">
              Pełne wsparcie psychiczne zawsze pod ręką
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Placówki NFZ w Twojej okolicy
              </h3>
              <p className="text-gray-600">
                Wyszukaj najbliższe placówki zdrowia psychicznego NFZ wraz z
                opisem, danymi kontaktowymi i ofertą usług.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Całodobowe infolinie
              </h3>
              <p className="text-gray-600">
                Skorzystaj z telefonów kryzysowych, grup wsparcia i
                specjalistycznych form pomocy dopasowanych do Twoich potrzeb.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Przewodnik po wsparciu
              </h3>
              <p className="text-gray-600">
                Znajdź odpowiednie formy pomocy i dowiedz się, gdzie najlepiej
                się zgłosić.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
