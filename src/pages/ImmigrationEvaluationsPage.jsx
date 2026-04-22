import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar, 
  Phone,
  Brain,
  Heart,
  Shield,
  Wind,
  CloudRain,
  Sun,
  Moon,
  Sparkles,
  Flower2,
  Compass,
  Target,
  Feather,
  Waves,
  Star,
  Video,
  Clock,
  Quote,
  Eye,
  Droplet,
  Leaf,
  Globe,
  Scale,
  FileText,
  Users as UsersIcon,
  Briefcase,
  Home,
  HeartHandshake,
  Gavel
} from "lucide-react";

export default function ImmigrationEvaluationsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeSection, setActiveSection] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setActiveSection(Math.min(section, 6));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: 0,
      title: "Your Story, Expertly Told",
      subtitle: "What Are Immigration Evaluations?",
      description: "Immigration evaluations are comprehensive clinical assessments that document the psychological impact of potential deportation, family separation, or return to unsafe conditions. These evaluations provide critical evidence for asylum, hardship, VAWA, and other immigration cases. I curate complex narratives into powerful documentation for the judicial system.",
      image: "https://images.pexels.com/photos/3768122/pexels-photo-3768122.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imagePosition: "right",
      stat: "90% of immigration cases with clinical evaluations are successful"
    },
    {
      id: 1,
      title: "Types of Evaluations",
      subtitle: "Comprehensive clinical assessments",
      description: "I specialize in high-stakes immigration assessments that require clinical expertise, cultural sensitivity, and forensic documentation. Each evaluation is tailored to the specific legal requirements of your case.",
      symptoms: [
        "Asylum Evaluations - Documenting fear of persecution",
        "Hardship Waivers - Family separation impact",
        "VAWA Self-Petitions - Abuse documentation",
        "U & T Visas - Crime victim mental health impact",
        "Cancellation of Removal - Extreme hardship",
        "Citizenship Disability Waivers - Medical exceptions"
      ],
      image: "/immigration1.jpg",
      imagePosition: "left",
      isSymptoms: true
    },
    {
      id: 2,
      title: "The Evaluation Process",
      subtitle: "What to expect during your assessment",
      description: "Each evaluation includes a comprehensive clinical interview, standardized psychological assessments, review of relevant records, and a detailed forensic report. The process is trauma-informed, culturally-responsive, and designed to minimize distress while maximizing documentation quality.",
      image: "/immigration2.jpg",
      imagePosition: "right",
      stat: "120-minute comprehensive evaluation • Deposit required to book"
    },
    {
      id: 3,
      title: "Why Choose My Services",
      subtitle: "Clinical excellence meets legal precision",
      description: "With over 26 years of clinical experience, I bring expertise in trauma, cultural competency, and forensic documentation. My reports are thorough, credible, and written to withstand legal scrutiny. I work with attorneys, legal clinics, and individuals directly.",
      approaches: [
        { name: "Trauma-Informed", desc: "Sensitive to your experiences and history", color: "#c09050" },
        { name: "Culturally-Responsive", desc: "Honoring your background and identity", color: "#d4a84b" },
        { name: "Forensic Quality", desc: "Reports designed for legal submission", color: "#c09050" },
        { name: "Attorney Collaboration", desc: "Working with your legal team", color: "#d4a84b" }
      ],
      image: "/whychoose.jpg",
      imagePosition: "left",
      isApproaches: true
    },
    {
      id: 4,
      title: "Who I Serve",
      subtitle: "Legal partners and individuals",
      description: "I work with immigration attorneys, legal clinics, and individuals navigating the immigration system directly. Whether you need a single evaluation or ongoing consultation for complex cases, I provide timely, thorough documentation.",
      image: "/immigrants3.jpg",
      imagePosition: "right",
      stat: "Licensed in NY, NJ, RI • Virtual evaluations available"
    },
    {
      id: 5,
      title: "Licensed States",
      subtitle: "Where I can provide evaluations",
      description: "I am licensed to provide clinical therapy and immigration evaluations in New York, New Jersey, and Rhode Island. All evaluations are conducted virtually via a secure, HIPAA-compliant platform.",
      image: "/states.jpg",
      imagePosition: "left",
      stat: "NY (#098940) • NJ (#44SL06739500) • RI (#ISW04317)"
    },
    {
      id: 6,
      title: "Take the First Step",
      subtitle: "Your story deserves to be heard",
      description: "Immigration cases are won on evidence and credibility. A clinical evaluation can make the difference between approval and denial. Let me help you document your story with the clinical precision and compassion it deserves.",
      image: "/firststep.jpg",
      imagePosition: "right",
      stat: "Schedule your evaluation today • Deposit secures your appointment"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-white overflow-hidden">
      
      {/* EPIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-22 sm:pt-32">
        
        <div className="absolute inset-0 z-0">
          <img
            src="/immigrationhero.jpg"
            alt="Justice and compassion"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: Math.random() * window.innerHeight, x: Math.random() * window.innerWidth, opacity: 0 }}
              animate={{ y: -100, opacity: [0, 0.5, 0] }}
              transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, delay: Math.random() * 5 }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
        
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-wider text-white">High-Stakes Clinical Assessments</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-white mb-6 font-['Montserrat'] leading-tight">
              Immigration{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Evaluations
              </span>
            </h1>
            
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-['Plus_Jakarta_Sans'] leading-relaxed">
              Curating complex narratives into powerful documentation for asylum, hardship, and VAWA cases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://calendly.com/manifestcoachingllc/immigration"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c09050] to-[#d4a84b] text-white font-bold hover:shadow-2xl transition-all duration-500 font-['Montserrat']"
              >
                <Calendar className="w-5 h-5" />
                Schedule Evaluation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/20 transition-all duration-500 font-['Montserrat']"
              >
                <Phone className="w-5 h-5" />
                Contact Me
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">26+ Years Experience</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">Forensic Documentation</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">Virtual Evaluations</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <div className="flex flex-col items-center gap-2">
           
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-[#c09050] rounded-full mt-1 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Immersive Sections - Alternating Left/Right */}
      {sections.map((section, idx) => (
        <motion.section
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundColor: idx % 2 === 0 ? "white" : "#fefcf7"
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <motion.div
                initial={{ x: section.imagePosition === "left" ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className={`${section.imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="max-w-xl mx-auto lg:mx-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6">
                    <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">
                      {section.subtitle}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 font-['Montserrat'] leading-tight">
                    {section.title}
                  </h2>
                  
                  {section.isSymptoms ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {section.symptoms.map((symptom, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#c09050]" />
                          <span className="text-gray-700 text-sm font-['Plus_Jakarta_Sans']">{symptom}</span>
                        </motion.div>
                      ))}
                    </div>
                  ) : section.isApproaches ? (
                    <div className="space-y-4 mb-8">
                      {section.approaches.map((approach, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#c09050]/20"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-[#c09050]/10 flex items-center justify-center">
                              <Shield className="w-4 h-4 text-[#c09050]" />
                            </div>
                            <h3 className="font-black text-black text-lg">{approach.name}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{approach.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                        {section.description}
                      </p>
                      {section.stat && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/5 border border-[#c09050]/10 mb-6">
                          <Quote className="w-3 h-3 text-[#c09050]" />
                          <span className="text-xs text-gray-600 font-['Plus_Jakarta_Sans']">{section.stat}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: section.imagePosition === "left" ? 50 : -50, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className={`${section.imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c09050]/5 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* EPIC CTA SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=2400"
            alt="Justice and hope"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#c09050]/90 to-[#d4a84b]/90" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 100 }}
              animate={{ y: -100 }}
              transition={{ duration: Math.random() * 12 + 8, repeat: Infinity, delay: Math.random() * 8 }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-28 h-28 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl"
          >
            <HeartHandshake className="w-14 h-14 text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 font-['Montserrat'] leading-tight"
          >
            Your Story Deserves
            <br />
            To Be Heard
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-10 font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto"
          >
            Schedule your immigration evaluation today. Deposit secures your appointment.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="https://calendly.com/manifestcoachingllc/immigration"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#c09050] font-black text-lg hover:shadow-2xl transition-all duration-500 font-['Montserrat']"
            >
              <Calendar className="w-5 h-5" />
              Book Evaluation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-black text-lg hover:bg-white hover:text-[#c09050] transition-all duration-500 font-['Montserrat']"
            >
              <Phone className="w-5 h-5" />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2">
              <Gavel className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">Forensic Quality</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">NY, NJ, RI Licensed</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">120-Min Evaluation</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}