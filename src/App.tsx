import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/MainPage.tsx";
import MapPage from "./pages//MapPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App w-full h-full">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/MentalAidMap">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/mapa" element={<MapPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
