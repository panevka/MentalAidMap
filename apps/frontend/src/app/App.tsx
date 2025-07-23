import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage.tsx";
import { MapPage } from "../pages/MapPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TopBar } from "../components/TopBar.tsx";
import SupportResourcesPage from "../pages/SupportResourcesPage.tsx";
import {
  MAIN_PAGE_ROUTE,
  MAP_PAGE_ROUTE,
  SUPPORT_RESOURCES_PAGE_ROUTE,
} from "@/config/routeConfig.ts";

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
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
