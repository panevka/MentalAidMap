import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  CONTACT_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  MAP_PAGE_ROUTE,
  SUPPORT_RESOURCES_PAGE_ROUTE,
} from "@/config/routeConfig.ts";
import Navigation from "@/components/Navigation.tsx";
import HomePage from "./routes/HomePage.tsx";
import ContactUsPage from "./routes/ContactUsPage.tsx";
import FacilitiesPage from "./routes/FacilitiesPage.tsx";
import ResourcesPage from "./routes/ResourcesPage.tsx";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <div className="flex flex-col h-screen">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path={MAIN_PAGE_ROUTE} element={<HomePage />} />
            <Route path={MAP_PAGE_ROUTE} element={<FacilitiesPage />} />
            <Route
              path={SUPPORT_RESOURCES_PAGE_ROUTE}
              element={<ResourcesPage />}
            />
            <Route path={CONTACT_PAGE_ROUTE} element={<ContactUsPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
