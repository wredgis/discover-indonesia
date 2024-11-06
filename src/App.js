import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import PopulationPage from './pages/PopulationPage';
import CulturePage from './pages/CulturePage';
import HistoryPage from './pages/HistoryPage';
import GeographyPage from './pages/GeographyPage';
import TourismPage from './pages/TourismPage';
import NewsPage from './pages/NewsPage';
import Carousel from './components/Carousel';
import WhoIamPage from './pages/WhoIamPage';

function App() {
  return (        
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/population" element={<PopulationPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/geography" element={<GeographyPage />} />
          <Route path="/tourism" element={<TourismPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/whoiam" element={<WhoIamPage />} />
        </Routes>
    </BrowserRouter>        
  );  
};
export default App;

