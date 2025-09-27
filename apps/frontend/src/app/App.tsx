import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./routes/MainPage.tsx";
import { MapPage } from "./routes/MapPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SupportResourcesPage from "./routes/SupportResourcesPage.tsx";
import {
  CONTACT_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  MAP_PAGE_ROUTE,
  SUPPORT_RESOURCES_DASHBOARD_PAGE_ROUTE,
  SUPPORT_RESOURCES_PAGE_ROUTE,
} from "@/config/routeConfig.ts";
import SupportResourcesDashboard from "./routes/SupportResourcesDashboard.tsx";
import ContactPage from "./routes/ContactPage.tsx";
import Navigation from "@/components/Navigation.tsx";
import HomePage from "./routes/HomePage.tsx";
import ContactUsPage from "./routes/ContactUsPage.tsx";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <div className="flex flex-col h-screen">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path={MAIN_PAGE_ROUTE} element={<HomePage />} />
            <Route path={MAP_PAGE_ROUTE} element={<MapPage />} />
            <Route
              path={SUPPORT_RESOURCES_PAGE_ROUTE}
              element={<SupportResourcesPage />}
            />
            <Route
              path={SUPPORT_RESOURCES_DASHBOARD_PAGE_ROUTE}
              element={<SupportResourcesDashboard />}
            />
            <Route path={CONTACT_PAGE_ROUTE} element={<ContactUsPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
