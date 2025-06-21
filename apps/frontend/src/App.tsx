import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage.tsx";
import { MapPage } from "./pages/MapPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TopBar } from "./components/TopBar.tsx";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App w-full h-full flex flex-col">
      <TopBar />
      <div className="grow">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/mapa" element={<MapPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </div>
  );
}
