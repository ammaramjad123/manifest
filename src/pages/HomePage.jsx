import Hero from '../components/Hero';
import ThreeDoors from '../components/ThreeDoors';
import About from '../components/About';
import Specialties from '../components/Specialties';
import FAQSection from '../components/FAQSection';
import PathForwardAssessment from '../components/PathForwardAssessment';
import ManifestMethod from '../components/ManifestMethod';
import TestimonialsSection from '../components/TestimonialsSection';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeDoors />
      <About />
      <Specialties />
      <FAQSection />
      <PathForwardAssessment />
      <ManifestMethod />
      <TestimonialsSection />
      <Contact />
    </>
  );
}