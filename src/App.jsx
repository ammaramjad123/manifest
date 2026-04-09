import Header from './components/Header'
import Hero from './components/Hero'
import ThreeDoors from './components/ThreeDoors'
import About from './components/About'
import Specialties from './components/Specialties'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FAQSection from './components/FAQSection'
import PathForwardAssessment from './components/PathForwardAssessment';
import ManifestMethod from './components/ManifestMethod';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6B46C1]/5 via-[#4299E1]/5 to-white">
      <Header />
      <main>
        <Hero />
        <ThreeDoors />
        <About />
        <Specialties />
        <FAQSection /> 
        <PathForwardAssessment />
        <ManifestMethod />
        <TestimonialsSection/>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App