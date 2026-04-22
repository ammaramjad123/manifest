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
  Leaf
} from "lucide-react";

export default function AnxietyDepressionPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeSection, setActiveSection] = useState(0);
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.5, 0]);

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
      title: "The Weight You Carry",
      subtitle: "Understanding Anxiety & Depression",
      description: "Anxiety and depression aren't just feelings—they're experiences that can weigh you down, making even the simplest tasks feel impossible. The racing thoughts, the heavy fog, the loss of interest—these are real, valid, and treatable. But here's the truth: you're not broken. You're human, and healing is possible.",
      image: "/depression1.jpg",
      imagePosition: "right",
      stat: "1 in 5 adults experience anxiety or depression"
    },
    {
      id: 1,
      title: "What You Might Be Feeling",
      subtitle: "Common signs and symptoms",
      description: "You're not imagining it. These feelings are real and they have names. Recognizing them is the first step toward healing.",
      symptoms: [
        "Excessive worry that won't stop",
        "Feeling sad, empty, or hopeless",
        "Loss of interest in things you once loved",
        "Difficulty sleeping or sleeping too much",
        "Racing heart, tension, fatigue",
        "Trouble concentrating or making decisions"
      ],
      image: "/depression2.jpg",
      imagePosition: "left",
      isSymptoms: true
    },
    {
      id: 2,
      title: "The Science of Healing",
      subtitle: "Evidence-based approaches that work",
      description: "Through CBT, ACT, and mindfulness, we can rewire thought patterns, reduce symptoms, and restore balance. Your brain has neuroplasticity—it can change, adapt, and heal. Science shows that therapy is as effective as medication for many people, with lasting results.",
      image: "/depression3.jpg",
      imagePosition: "right",
      stat: "80% of people improve with evidence-based therapy"
    },
    {
      id: 3,
      title: "Treatment Approaches",
      subtitle: "Methods that create real change",
      description: "I use proven therapeutic approaches tailored to your unique needs, combining the best of evidence-based practice with compassionate, personalized care.",
      approaches: [
        { name: "CBT", desc: "Identify and restructure negative thought patterns", color: "#c09050" },
        { name: "ACT", desc: "Accept thoughts while committing to value-driven action", color: "#d4a84b" },
        { name: "Mindfulness", desc: "Stay present and reduce rumination", color: "#c09050" },
        { name: "ART", desc: "Accelerated Resolution Therapy for trauma", color: "#d4a84b" }
      ],
      image: "/depression4.jpg",
      imagePosition: "left",
      isApproaches: true
    },
    {
      id: 4,
      title: "Your Journey, Your Pace",
      subtitle: "Personalized care for your unique needs",
      description: "No two journeys are the same. I'll meet you where you are, honoring your story while gently guiding you toward the peace and clarity you deserve. Whether you need weekly sessions or bi-weekly check-ins, we move at your pace.",
      image: "/depression5.jpg",
      imagePosition: "right",
      stat: "100% virtual • Licensed in NY, NJ, RI"
    },
    {
      id: 5,
      title: "A Safe Space Awaits",
      subtitle: "Virtual therapy from anywhere",
      description: "Secure, HIPAA-compliant sessions from the comfort of your home. No commute, no waiting rooms—just you, me, and a path forward. Evening and weekend appointments available.",
      image: "https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imagePosition: "left",
      stat: "Flexible scheduling • 24hr cancellation policy"
    },
    {
      id: 6,
      title: "You Are Not Alone",
      subtitle: "Millions have walked this path and found healing",
      description: "The racing thoughts, the heavy fog, the loss of interest—these are real, valid, and treatable. Seeking help isn't weakness; it's the bravest thing you can do. And you don't have to do it alone.",
      image: "https://images.pexels.com/photos/4100427/pexels-photo-4100427.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imagePosition: "right",
      stat: "You've already taken the hardest step"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-white overflow-hidden">
      
      {/* EPIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-22 sm:pt-32">
        
        {/* Cinematic Background Video/Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/depressionhero.jpg"
            alt="Calm peaceful healing"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Floating Particles */}
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
              <span className="text-xs font-black uppercase tracking-wider text-white">Clinical Specialty</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-['Montserrat'] leading-tight">
              Anxiety &{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Depression
              </span>
            </h1>
            
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-['Plus_Jakarta_Sans'] leading-relaxed">
              Break free from the weight of anxious thoughts and heavy feelings. 
              Evidence-based therapy tailored to your unique journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://calendly.com/manifestcoachingllc"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c09050] to-[#d4a84b] text-white font-bold hover:shadow-2xl transition-all duration-500 font-['Montserrat']"
              >
                <Calendar className="w-5 h-5" />
                Free Consultation
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

            {/* Trust Badges */}
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
                <Video className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">Virtual Sessions</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">Flexible Scheduling</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
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

      {/* Immersive Sections - Alternating Left/Right with Full Images */}
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
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              section.imagePosition === "left" ? "" : ""
            }`}>
              
              {/* Content Side */}
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
                              <Target className="w-4 h-4 text-[#c09050]" />
                            </div>
                            <h3 className="font-black text-black text-lg">{approach.name}</h3>
                          </div>
                          <p className="text-gray-600 text-sm pl-13">{approach.desc}</p>
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
                  
                  {/* Continue Reading removed - as requested */}
                </div>
              </motion.div>
              
              {/* Image Side - Full width, no tags */}
              <motion.div
                initial={{ x: section.imagePosition === "left" ? 50 : -50, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className={`${section.imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Replace this image URL with your own images */}
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
        
        {/* Background with parallax */}
        <div className="absolute inset-0 z-0">
          {/* Keep this CTA image as is */}
          <img
            src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=2400"
            alt="Healing journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#c09050]/90 to-[#d4a84b]/90" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Animated particles */}
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
            <Heart className="w-14 h-14 text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 font-['Montserrat'] leading-tight"
          >
            You Don't Have to
            <br />
            Do This Alone
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-10 font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto"
          >
            Schedule your free 15-minute consultation today. No pressure, just conversation.
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
              href="https://calendly.com/manifestcoachingllc"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#c09050] font-black text-lg hover:shadow-2xl transition-all duration-500 font-['Montserrat']"
            >
              <Calendar className="w-5 h-5" />
              Book Free Consultation
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

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">26+ Years Experience</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">100% Virtual</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">Flexible Scheduling</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}