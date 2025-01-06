import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/MainPage.tsx";
import MapPage from "./pages//MapPage.tsx";

export default function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter basename="/MentalAidMap">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mapa" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
