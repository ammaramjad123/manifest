import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServicesHero from "../components/ServicesHero";

import { 
 Sparkles,
  ArrowRight, 
  Heart, 
  Brain, 
  BookOpen,
  Flower2,
  Shield,
Clock,
AlertCircle,
  CheckCircle,
  Calendar,

  Compass,
  Target,
  Star,
  Gem,
  Zap,
 
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const controls = useAnimation();
  const [ inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeService, setActiveService] = useState(0);
  const [ setHoveredCard] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Auto-rotate through services every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

 

 

// Add this BEFORE the return statement (around line 30-40)

const services = [
  {
    id: "process",
    title: "The Process",
    subtitle: "Clinical Therapy",
    icon: <Heart size={28}  />,
    gradient: "from-[#6B46C1] to-[#8B5CF6]",
    bgGradient: "bg-gradient-to-br from-[#6B46C1]/10 to-[#8B5CF6]/10",
    borderColor: "border-[#6B46C1]/30",
    textColor: "text-[#6B46C1]",
    iconBg: "bg-[#6B46C1]/15",
    iconColor: "text-[#6B46C1]",
    description: "Deep healing for trauma, distress, and emotional regulation.",
    longDescription: "I provide a safe, compassionate space for you to heal from past wounds, process complex emotions, and build emotional regulation skills.",
    modalities: ["ART", "DBT", "ACT"],
    features: ["Individual therapy ages 17+", "Virtual HIPAA-compliant sessions", "Flexible scheduling", "Insurance accepted"],
    locations: ["NY (#098940)", "NJ (#44SL06739500)", "RI (#ISW04317)"],
    ctaText: "Begin Your Healing Journey",
    ctaLink: "https://headway.co",
    ctaIcon: <Heart size={18} />
  },
  {
    id: "pivot",
    title: "The Pivot",
    subtitle: "Transformational Coaching",
    icon: <Brain size={28} />,
    gradient: "from-[#6B46C1] to-[#8B5CF6]",
    bgGradient: "bg-gradient-to-br from-[#6B46C1]/10 to-[#8B5CF6]/10",
    borderColor: "border-[#6B46C1]/30",
    textColor: "text-[#6B46C1]",
    iconBg: "bg-[#6B46C1]/15",
    iconColor: "text-[#6B46C1]",
    description: "Strategic guidance for life shifts and personal growth.",
    longDescription: "The MANIFEST Method helps you bridge the gap between where you are and where you want to be.",
    modalities: ["MANIFEST Framework", "SĀF-T", "Goal-Accelerator"],
    features: ["Nationwide via telehealth", "Single or package bundles", "Pay-to-schedule via Calendly", "Workbooks included"],
    locations: ["Available Nationwide"],
    ctaText: "Start Your Expansion Journey",
    ctaLink: "https://calendly.com/manifestcoachingllc",
    ctaIcon: <Brain size={18} />
  },
  {
    id: "partnership",
    title: "The Partnership",
    subtitle: "Training & Education",
    icon: <BookOpen size={28} />,
    gradient: "from-[#6B46C1] to-[#8B5CF6]",
    bgGradient: "bg-gradient-to-br from-[#6B46C1]/10 to-[#8B5CF6]/10",
    borderColor: "border-[#6B46C1]/30",
    textColor: "text-[#6B46C1]",
    iconBg: "bg-[#6B46C1]/15",
    iconColor: "text-[#6B46C1]",
    description: "Evidence-based training for organizations and professionals.",
    longDescription: "SĀF-T and Clinical ART trainings facilitated through RCRR for mental health professionals.",
    modalities: ["ART Basic Training", "ART Advanced Training", "SĀF-T Certification"],
    features: ["CE credits available", "In-person & virtual options", "Group rates available", "Facilitated through RCRR"],
    locations: ["In-person (NY, GA) + Virtual Nationwide"],
    ctaText: "Inquire About Training",
    ctaLink: "#contact",
    ctaIcon: <BookOpen size={18} />
  }
];

const activeData = services[activeService];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* ========== HERO SECTION - SERVICES ========== */}
        <ServicesHero />


          {/* ========== SERVICES & PRICING - COSMIC EXPERIENCE ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#6B46C1]/3 to-white overflow-hidden relative">
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#6B46C1]/20 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: 0,
              }}
              animate={{
                y: [null, -50, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B46C1]/10 border border-[#6B46C1]/20 mb-4"
            >
              <Sparkles className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#6B46C1]">Choose Your Path</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']"
            >
              Invest in Your{" "}
              <span className="bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] bg-clip-text text-transparent">
                Transformation
              </span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] mx-auto rounded-full mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-lg font-['Plus_Jakarta_Sans']"
            >
              Select the service that resonates with your journey — payment secures your appointment
            </motion.p>
          </div>

          {/* Pricing Cards - 3D Flip Card Effect */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 - ART Therapy */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#6B46C1] to-[#8B5CF6] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  $250 / session
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-['Montserrat']">ART Therapy</h3>
                  <p className="text-[#6B46C1] font-semibold text-sm mb-3">Accelerated Resolution Therapy</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                    50-70 minute session. Evidence-based treatment for trauma, anxiety, depression, and phobias.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[#6B46C1]" />
                    <span className="text-xs font-bold text-gray-500">50-70 min session</span>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/manifest-coaching-llc-art?back=1&month=2026-04"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] text-white font-bold hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5 font-['Montserrat'] text-base"
                  >
                    Book Your Healing Time →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Immigration Evaluation */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#6B46C1] to-[#8B5CF6] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  Deposit Required
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-['Montserrat']">Immigration Evaluation</h3>
                  <p className="text-[#6B46C1] font-semibold text-sm mb-3">High-Stakes Clinical Assessment</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                    120-minute evaluation. Curating complex narratives for Asylum, Hardship, and VAWA cases.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[#6B46C1]" />
                    <span className="text-xs font-bold text-gray-500">120 min session</span>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/immigration"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] text-white font-bold hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5 font-['Montserrat'] text-base"
                  >
                    Book Your Evaluation →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Transformational Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#6B46C1] to-[#8B5CF6] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  $200 / session
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-['Montserrat']">Transformational Coaching</h3>
                  <p className="text-[#6B46C1] font-semibold text-sm mb-3">MANIFEST Method</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                    55-minute session. Strategic guidance for life shifts, career evolution, and personal growth.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[#6B46C1]" />
                    <span className="text-xs font-bold text-gray-500">55 min session</span>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/coach?back=1&month=2026-04"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] text-white font-bold hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5 font-['Montserrat'] text-base"
                  >
                    Book Your Coaching →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - ALMA Therapy (Insurance) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#10B981] to-[#34D399] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  Insurance Accepted
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#34D399] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-['Montserrat']">ALMA Therapy</h3>
                  <p className="text-[#10B981] font-semibold text-sm mb-3">Insurance Follow-up Sessions</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                    50-minute follow-up therapy sessions. Please complete your intake forms on ALMA before booking.
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#10B981]" />
                    <span className="text-xs font-bold text-gray-500">50 min session</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold  text-gray-500">$100 late cancellation fee</span>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/alma?back=1&month=2026-04"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#10B981] to-[#34D399] text-white font-bold hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5 font-['Montserrat'] text-base"
                  >
                    Book ALMA Follow-up →
                  </a>
                  <a
                    href="https://secure.helloalma.com/providers/ayana-mckanney/"
                    target="_blank"
                    className="block w-full text-center py-2 mt-2 rounded-xl border border-[#10B981] text-[#10B981] font-semibold hover:bg-[#10B981] hover:text-white transition-all duration-300 text-base font-['Montserrat']"
                  >
                    Complete Intake on ALMA →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Headway Therapy (Insurance) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#3B82F6] to-[#60A5FA] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  Insurance Accepted
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-['Montserrat']">Headway Therapy</h3>
                  <p className="text-[#3B82F6] font-semibold text-sm mb-3">Insurance Follow-up Sessions</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                    50-minute follow-up therapy sessions. Please complete your intake forms on Headway before booking.
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#3B82F6]" />
                    <span className="text-xs font-bold text-gray-500">50 min session</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold text-gray-500">$100 late cancellation fee</span>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/headway?back=1&month=2026-04"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-bold hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5 font-['Montserrat'] text-base"
                  >
                    Book Headway Follow-up →
                  </a>
                  <a
                    href="https://care.headway.co/providers/ayana-foluke-mckanney?utm_source=pem&utm_medium=direct_link&utm_campaign=112539"
                    target="_blank"
                    className="block w-full text-center py-2 mt-2 rounded-xl border border-[#3B82F6] text-[#3B82F6] font-semibold hover:bg-[#3B82F6] hover:text-white transition-all duration-300 text-base font-['Montserrat']"
                  >
                    Complete Intake on Headway →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Insurance Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
              <Shield className="w-5 h-5 text-[#6B46C1]" />
              <p className="text-gray-600 text-sm font-['Plus_Jakarta_Sans']">
                Insurance accepted for therapy through <span className="font-semibold text-[#10B981]">ALMA</span> and <span className="font-semibold text-[#3B82F6]">Headway</span>
              </p>
              <div className="flex gap-2">
                <a href="https://secure.helloalma.com/providers/ayana-mckanney/" target="_blank" className="text-xs text-[#10B981] font-semibold hover:underline">ALMA</a>
                <span className="text-gray-300">|</span>
                <a href="https://care.headway.co/providers/ayana-foluke-mckanney" target="_blank" className="text-xs text-[#3B82F6] font-semibold hover:underline">Headway</a>
              </div>
            </div>
          </motion.div>

          {/* Free Consultation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 text-center"
          >
            <a
              href="https://calendly.com/manifestcoachingllc"
              target="_blank"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border-2 border-[#6B46C1] text-[#6B46C1] font-bold hover:bg-[#6B46C1] hover:text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 font-['Montserrat']"
            >
              <Calendar className="w-5 h-5" />
              Not sure? Book a Free 15-min Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== INTERACTIVE SERVICE SHOWCASE ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B46C1]/15 border border-[#6B46C1]/30 mb-4">
              <Sparkles className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#6B46C1]">Choose Your Path</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']">
              Three Pathways to{" "}
              <span className="bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] bg-clip-text text-transparent">
                Peace
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-['Plus_Jakarta_Sans']">
              Select the path that resonates with your journey
            </p>
          </div>
          
          {/* Service Selector - Responsive Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
            {services.map((service, idx) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(idx)}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-5 md:p-6 rounded-2xl transition-all duration-500 text-left group w-full ${
                  activeService === idx
                    ? `bg-gradient-to-br ${service.gradient} shadow-2xl scale-[1.02]`
                    : `bg-white border-2 ${service.borderColor} hover:shadow-lg`
                }`}
                whileHover={{ scale: activeService === idx ? 1.02 : 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl mb-3 md:mb-4 flex items-center justify-center transition-all duration-500 ${
                  activeService === idx
                    ? "bg-white/20 text-white"
                    : `${service.iconBg} ${service.iconColor}`
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl md:text-2xl font-black mb-1 font-['Montserrat'] ${
                  activeService === idx ? "text-white" : "text-black"
                }`}>
                  {service.title}
                </h3>
                <p className={`text-xs md:text-sm font-['Plus_Jakarta_Sans'] ${
                  activeService === idx ? "text-white/80" : "text-gray-500"
                }`}>
                  {service.subtitle}
                </p>
                {activeService === idx && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-white rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Active Service Detail - Dynamic Content */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`relative rounded-2xl md:rounded-3xl ${activeData.bgGradient} border ${activeData.borderColor} overflow-hidden shadow-xl`}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-black/5 rounded-full blur-3xl" />
            
            <div className="relative p-5 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8 lg:gap-12">
                
                {/* Left Column */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                   <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${activeData.gradient} flex items-center justify-center shadow-md`}>
  <div className="text-white">
    {activeData.icon}
  </div>
</div>
                    <div>
                      <p className={`text-xs md:text-sm font-bold uppercase tracking-wider ${activeData.textColor}`}>
                        {activeData.subtitle}
                      </p>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-black font-['Montserrat']">
                        {activeData.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-['Plus_Jakarta_Sans']">
                    {activeData.longDescription}
                  </p>
                  
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-bold text-black mb-2 md:mb-3 text-sm md:text-base font-['Montserrat']">✨ Key Modalities:</h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {activeData.modalities.map((mod, i) => (
                        <span key={i} className={`px-2 md:px-3 py-1 rounded-full bg-gradient-to-r ${activeData.gradient} text-white text-[10px] md:text-xs font-semibold`}>
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={activeData.ctaLink}
                    target={activeData.id !== "partnership" ? "_blank" : "_self"}
                    className={`group inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r ${activeData.gradient} text-white font-bold text-sm md:text-base transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 font-['Montserrat'] w-full sm:w-auto justify-center`}
                  >
                    {activeData.ctaIcon}
                    <span className="truncate">{activeData.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                {/* Right Column - Features Card with proper padding */}
                <div className="lg:w-[340px] xl:w-[380px] flex-shrink-0">
                  <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-lg md:text-xl font-black text-black mb-4 md:mb-5 font-['Montserrat'] flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#6B46C1]" />
                      What to Expect
                    </h3>
                    <ul className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                      {activeData.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-[#6B46C1] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm md:text-base font-['Plus_Jakarta_Sans'] leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-gray-100 pt-4 md:pt-5 mt-2">
                      <div className="flex flex-wrap gap-2">
                        {activeData.locations.map((loc, i) => (
                          <span key={i} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                            📍 {loc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== THE MANIFEST METHOD PREVIEW ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Section Header - Improved */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B46C1]/10 border border-[#6B46C1]/20 mb-4">
              <Gem className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#6B46C1]">The Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']">
              The <span className="bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] bg-clip-text text-transparent">MANIFEST</span> Method
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] mx-auto rounded-full mb-5" />
            <p className="text-gray-500 text-base md:text-lg font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto">
              A proprietary framework designed to bridge clinical excellence with intentional living
            </p>
          </div>

          {/* MANIFEST Grid - Fixed Height Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {[
              { letter: "M", word: "Motivating", desc: "Identifying the 'Grit' — the core drive behind change", hoverText: "Find what truly moves you" },
              { letter: "A", word: "And", desc: "Holding space for both your history and your future", hoverText: "Embrace the full picture" },
              { letter: "N", word: "Nurturing", desc: "Stabilizing with ART, DBT & ACT", hoverText: "Evidence-based healing" },
              { letter: "I", word: "Internal", desc: "Deepening understanding of inner workings", hoverText: "Look within to grow" },
              { letter: "F", word: "Fulfillment", desc: "Cultivating the sense of being healed and whole", hoverText: "Feel complete at last" },
              { letter: "E", word: "Enable", desc: "Creating pathways to your next chapter", hoverText: "Open new doors" },
              { letter: "S", word: "Strategic Serenity", desc: "Radical honesty with purpose-driven planning", hoverText: "Plan with clarity" },
              { letter: "T", word: "Transformation", desc: "Healing, training & transitions", hoverText: "Become your best self" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#6B46C1]/20 flex flex-col h-full"
              >
                {/* Letter Circle */}
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6] flex items-center justify-center text-white font-black text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.letter}
                </div>
                
                {/* Word */}
                <h3 className="font-black text-black text-base md:text-lg mb-1 font-['Montserrat'] group-hover:text-[#6B46C1] transition-colors">
                  {item.word}
                </h3>
                
                {/* Main Description - Fixed height */}
                <div className="flex-grow">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 font-['Plus_Jakarta_Sans']">
                    {item.desc}
                  </p>
                </div>
                
                {/* Hover Text - Fixed position at bottom */}
                <div className="h-8 mt-auto">
                  <p className="text-[#6B46C1] text-[10px] md:text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.hoverText}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button - Improved Hover Effect */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-center mt-12 md:mt-16"
          >
            <Link
              to="/manifest-method"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] text-white font-bold text-sm md:text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#6B46C1]/20 hover:-translate-y-0.5 font-['Montserrat']"
            >
              <span>Discover the MANIFEST Method</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            {/* Alternative text link below */}
            <p className="text-gray-400 text-xs mt-4 font-['Plus_Jakarta_Sans']">
              Learn how the 8 pillars can transform your life
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== THE TWO HATS ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B46C1]/10 border border-[#6B46C1]/20 mb-4">
              <Shield className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#6B46C1]">The Curator's Boundary</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black mb-4 font-['Montserrat']">
              The <span className="text-[#6B46C1]">Two Hats</span>
            </h2>
            <p className="text-gray-600 font-['Plus_Jakarta_Sans']">
              I never wear both hats at the same time. During our Alignment Call, we decide which hat honors your current journey best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#6B46C1]/5 to-[#8B5CF6]/5 border border-[#6B46C1]/20 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#6B46C1]/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#6B46C1]" />
              </div>
              <h3 className="text-2xl font-black text-black mb-2 font-['Montserrat']">Hat 1: Clinical Therapist</h3>
              <p className="text-[#6B46C1] font-semibold mb-4">Licensed Healthcare Professional</p>
              <p className="text-gray-600 text-sm mb-4">Restricted to NY, NJ, and RI</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 bg-white rounded text-xs">NY (#098940)</span>
                <span className="px-2 py-1 bg-white rounded text-xs">NJ (#44SL06739500)</span>
                <span className="px-2 py-1 bg-white rounded text-xs">RI (#ISW04317)</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#7C3AED]/5 to-[#A78BFA]/5 border border-[#7C3AED]/20 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
                <Brain className="w-8 h-8 text-[#7C3AED]" />
              </div>
              <h3 className="text-2xl font-black text-black mb-2 font-['Montserrat']">Hat 2: Consultative Coach</h3>
              <p className="text-[#7C3AED] font-semibold mb-4">Strategic Partnership</p>
              <p className="text-gray-600 text-sm mb-4">Available Nationwide</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 bg-white rounded text-xs">All 50 States</span>
                <span className="px-2 py-1 bg-white rounded text-xs">Virtual Sessions</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    {/* ========== WHO WE HELP ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B46C1]/10 border border-[#6B46C1]/20 mb-4">
              <Users className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#6B46C1]">Who We Help</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']">
              Designed for{" "}
              <span className="bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] bg-clip-text text-transparent">
                Individual Evolution
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] mx-auto rounded-full mb-5" />
            <p className="text-gray-500 text-base md:text-lg font-['Plus_Jakarta_Sans']">
              Ages 17+ | Virtual Sessions Available Nationwide
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {[
              { 
                icon: <Target size={24} />, 
                title: "High-Achievers & Students", 
                desc: "Navigating career pivots or launching into adulthood",
                color: "#6B46C1",
                bgColor: "bg-[#6B46C1]/10"
              },
              { 
                icon: <Compass size={24} />, 
                title: "Individuals in Transition", 
                desc: "Recalibrating identity during shifts in relationship, marriage, or parenthood",
                color: "#7C3AED",
                bgColor: "bg-[#7C3AED]/10"
              },
              { 
                icon: <Shield size={24} />, 
                title: "First Responders & Public Servants", 
                desc: "Managing secondary trauma through somatic tools",
                color: "#8B5CF6",
                bgColor: "bg-[#8B5CF6]/10"
              },
              { 
                icon: <BookOpen size={24} />, 
                title: "Legal Partners", 
                desc: "Attorneys seeking forensic clinical documentation for immigration cases",
                color: "#9F7AEA",
                bgColor: "bg-[#9F7AEA]/10"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-6 md:p-7 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Icon Circle */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <div style={{ color: item.color }}>{item.icon}</div>
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-black text-lg mb-2 font-['Montserrat'] group-hover:text-[#6B46C1] transition-colors">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                  {item.desc}
                </p>

                {/* Decorative line on hover */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-10 md:mt-12"
          >
            <p className="text-gray-400 text-sm font-['Plus_Jakarta_Sans']">
              All services are virtual and available to clients across licensed states
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#6B46C1]/5 via-white to-[#8B5CF6]/5">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#6B46C1]/10"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#6B46C1]/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#8B5CF6]/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#6B46C1]/10 flex items-center justify-center">
                <Flower2 className="w-8 h-8 text-[#6B46C1]" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-4 font-['Montserrat']">
                Not Sure Which Path Is Right for You?
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
                Take our assessment to discover whether you're in a season of Restoration or Expansion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/assessment"
                  className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] text-white font-bold transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 font-['Montserrat']"
                >
                  Take The Path Forward Assessment
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="https://calendly.com/manifestcoachingllc"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-[#6B46C1]/30 text-[#6B46C1] font-bold hover:bg-[#6B46C1] hover:text-white hover:border-[#6B46C1] transition-all duration-300 font-['Montserrat']"
                >
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  Book Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}