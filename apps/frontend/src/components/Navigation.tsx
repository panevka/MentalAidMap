import { Heart, Menu, X } from "lucide-react";

import {
  CONTACT_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  MAP_PAGE_ROUTE,
  SUPPORT_RESOURCES_PAGE_ROUTE,
} from "@/config/routeConfig";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const pages: NavItem[] = [
  { label: "Strona główna", href: MAIN_PAGE_ROUTE },
  { label: "Mapa placówek", href: MAP_PAGE_ROUTE },
  {
    label: "Baza wsparcia",
    href: SUPPORT_RESOURCES_PAGE_ROUTE,
  },
  {
    label: "Kontakt",
    href: CONTACT_PAGE_ROUTE,
  },
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-purple-600 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mental Aid Map
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <button
                key={page.label}
                onClick={() => navigate(page.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  matchPath(page.href, location.pathname)
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {page.label.charAt(0).toUpperCase() + page.label.slice(1)}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-purple-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {pages.map((page) => (
              <button
                key={page.label}
                onClick={() => {
                  navigate(page.href);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-all duration-300 ${
                  matchPath(page.href, location.pathname)
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {page.label.charAt(0).toUpperCase() + page.label.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
