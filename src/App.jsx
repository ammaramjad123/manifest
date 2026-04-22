import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AnxietyDepressionPage from './pages/AnxietyDepressionPage';
import TraumaPTSDPage from './pages/TraumaPTSDPage';
import WomenIssuesPage from './pages/WomenIssuesPage';
import LifeCoachingPage from './pages/LifeCoachingPage';
import ImmigrationEvaluationsPage from './pages/ImmigrationEvaluationsPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/specialties/anxiety-depression" element={<AnxietyDepressionPage />} />
          <Route path="/specialties/trauma-ptsd" element={<TraumaPTSDPage />} />
          <Route path="/specialties/women-issues" element={<WomenIssuesPage />} />
          <Route path="/specialties/life-coaching" element={<LifeCoachingPage />} />
          <Route path="/specialties/immigration" element={<ImmigrationEvaluationsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;