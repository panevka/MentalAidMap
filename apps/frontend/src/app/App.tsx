import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./routes/MainPage.tsx";
import { MapPage } from "./routes/MapPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TopBar } from "../components/TopBar.tsx";
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

export default function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App min-h-svh min-w-full flex flex-col">
      <TopBar />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={MAIN_PAGE_ROUTE} element={<MainPage />} />
            <Route path={MAP_PAGE_ROUTE} element={<MapPage />} />
            <Route
              path={SUPPORT_RESOURCES_PAGE_ROUTE}
              element={<SupportResourcesPage />}
            />
            <Route
              path={SUPPORT_RESOURCES_DASHBOARD_PAGE_ROUTE}
              element={<SupportResourcesDashboard />}
            />
            <Route path={CONTACT_PAGE_ROUTE} element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
