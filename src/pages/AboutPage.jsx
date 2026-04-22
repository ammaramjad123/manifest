import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutProcessSection from "../components/AboutProcessSection";
import OriginCurrent from "../components/OriginCurrent";
import { 
    AlertCircle,
    Brain,
  Sparkles, 
  Heart, 
  Shield, 
  Award, 
  Clock, 
  MapPin,
  CheckCircle,
  Quote,
  Flower2,
  Compass,
  Target,
  BookOpen,
  Video,
  Users,
  Star,
  ArrowRight,
  Calendar,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { value: "26+", label: "Years Experience", icon: <Clock size={24} /> },
    { value: "100+", label: "Clients Served", icon: <Users size={24} /> },
    { value: "3", label: "States Licensed", icon: <MapPin size={24} /> },
    { value: "NYU", label: "Master's Degree", icon: <Award size={24} /> }
  ];

  const values = [
    {
      icon: <Heart size={28} />,
      title: "Compassion",
      description: "Creating a safe, non-judgmental space where you feel seen, heard, and valued."
    },
    {
      icon: <Shield size={28} />,
      title: "Integrity",
      description: "Honest about costs, timelines, and the therapeutic process. No surprises."
    },
    {
      icon: <Target size={28} />,
      title: "Excellence",
      description: "Evidence-based practices delivered with clinical precision and care."
    },
    {
      icon: <Compass size={28} />,
      title: "Partnership",
      description: "Your journey, our partnership. We walk this path together."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* ========== HERO SECTION - SPLIT LAYOUT ========== */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden lg:pt-44 pt-38 pb-24">
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c09050]/5 -skew-x-12 translate-x-32 z-0 hidden lg:block" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#c09050]/3 to-transparent -skew-x-12 -translate-x-32 z-0 hidden lg:block" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Side - Content Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              
              {/* Badge with faces */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-8"
              >
                <div className="flex -space-x-2">
  {[1, 2, 3].map((i) => (
    <img 
      key={i} 
      src={`https://randomuser.me/api/portraits/men/${i === 1 ? '32' : i === 2 ? '45' : '68'}.jpg`} 
      className="w-5 h-5 rounded-full border-2 border-white" 
      alt="Client"
    />
  ))}
</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#c09050]">
                  Trusted by 100+ Clients
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] text-balance font-['Montserrat'] text-black"
              >
                From{" "}
                <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent italic">
                  Brooklyn Grit&nbsp;
                </span>
                <br />
                to{" "}
                <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent italic">
                  Georgia Grace&nbsp;
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-black/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-['Plus_Jakarta_Sans']"
              >
                A seasoned Clinical Social Worker with over 26 years of experience, 
                dedicated to helping you navigate life's most challenging circumstances.
              </motion.p>

              {/* CTA Buttons - UPDATED: Black + Gold Border & Transparent + Gold Border */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-3 h-14 px-8 bg-black border-2 border-[#c09050] text-white font-black rounded-2xl hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 text-xs uppercase tracking-widest"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://calendly.com/manifestcoachingllc"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-3 h-14 px-8 bg-transparent border-2 border-[#c09050] text-[#c09050] font-black rounded-2xl hover:bg-[#c09050] hover:text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 text-xs uppercase tracking-widest"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-black text-black tracking-tight">26+</span>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#c09050] text-[#c09050]" />
                    ))}
                  </div>
                  <span className="text-xs text-black/50 mt-1">Years Experience</span>
                </div>
                <div className="w-px h-12 bg-black/10" />
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-black text-black tracking-tight">100+</span>
                  <span className="text-xs text-black/50 mt-2">Happy Clients</span>
                </div>
                <div className="w-px h-12 bg-black/10 hidden sm:block" />
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-black text-black tracking-tight">NYU</span>
                  <span className="text-xs text-black/50 mt-2">Master's Degree</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Image Section */}
            <div className="lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px]"
              >
                <img
                  src="/therapy.jpg"
                  alt="Ayana Foluke McKanney"
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                
                {/* Overlay Glass Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 p-2 sm:p-3 bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-[#c09050]/20 shadow-2xl max-w-[150px] sm:max-w-[180px]"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#c09050] flex items-center justify-center mb-1 sm:mb-2">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-black text-[8px] sm:text-[10px] font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                    "Your history is a narrative, not a limitation. Your future is a blueprint, not a burden."
                  </p>
                  <p className="text-[#c09050] text-[7px] sm:text-[9px] font-bold mt-1">— Ayana McKanney, LCSW</p>
                </motion.div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#c09050]/10 rounded-full blur-[80px] -z-10"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#c09050]/5 rounded-full blur-[100px] -z-10"
              />
            </div>
          </div>
        </div>
      </section>

     {/* ========== THE JOURNEY TIMELINE SECTION ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-4">
              <Compass className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">The Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']">
              A Lifelong Commitment to{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Healing
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-[#c09050] mx-auto rounded-full mb-6" />
            <p className="text-black/60 text-lg font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto">
              From Harlem's inspiration to NYU's halls — a journey of purpose, passion, and partnership
            </p>
          </div>

        {/* Timeline Grid - 3 Column Layout */}
<div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
  
  {/* Connecting Line (Desktop) */}
  <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c09050]/30 via-[#c09050]/50 to-[#c09050]/30 -translate-y-1/2 hidden md:block" />
  
  {/* Card 1 - The Calling */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#c09050]/10 z-10 flex flex-col h-full"
  >
    <div className="w-16 h-16 rounded-full bg-[#c09050] flex items-center justify-center text-white text-2xl font-black mb-4 shadow-md">
      01
    </div>

    <h3 className="text-xl font-black text-black mb-2 font-['Montserrat']">
      The Calling
    </h3>

    <p className="text-black/70 text-base leading-relaxed font-['Plus_Jakarta_Sans']">
      Captivated by Harlem's Mother Clara Hale and Covenant House, I discovered my life's mission: to serve as a bridge for those navigating life's most challenging terrains.
    </p>

    <div className="mt-auto pt-4 flex items-center gap-2">
      <Heart className="w-4 h-4 text-[#c09050]" />
      <span className="text-xs text-[#c09050] font-semibold">
        Since Childhood
      </span>
    </div>
  </motion.div>

  {/* Card 2 - The Education */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#c09050]/10 z-10 flex flex-col h-full"
  >
    <div className="w-16 h-16 rounded-full bg-[#c09050] flex items-center justify-center text-white text-2xl font-black mb-4 shadow-md">
      02
    </div>

    <h3 className="text-xl font-black text-black mb-2 font-['Montserrat']">
      The Education
    </h3>

    <p className="text-black/70 text-base leading-relaxed font-['Plus_Jakarta_Sans']">
      BSW from SUNY Brockport (2000) • MSW from New York University (2004). A foundation built on clinical excellence and evidence-based practice.
    </p>

    <div className="mt-auto pt-4 flex items-center gap-2">
      <Award className="w-4 h-4 text-[#c09050]" />
      <span className="text-xs text-[#c09050] font-semibold">
        NYU Graduate
      </span>
    </div>
  </motion.div>

  {/* Card 3 - The Practice */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#c09050]/10 z-10 flex flex-col h-full"
  >
    <div className="w-16 h-16 rounded-full bg-[#c09050] flex items-center justify-center text-white text-2xl font-black mb-4 shadow-md">
      03
    </div>

    <h3 className="text-xl font-black text-black mb-2 font-['Montserrat']">
      The Practice
    </h3>

    <p className="text-black/70 text-base leading-relaxed font-['Plus_Jakarta_Sans']">
      26+ years of experience across public and private sectors. Helping individuals heal, grow, and transform through the MANIFEST method.
    </p>

    <div className="mt-auto pt-4 flex items-center gap-2">
      <Users className="w-4 h-4 text-[#c09050]" />
      <span className="text-xs text-[#c09050] font-semibold">
        100+ Lives Impacted
      </span>
    </div>
  </motion.div>

</div>

          {/* Brooklyn Grit to Georgia Grace Banner */}
<motion.div
  variants={itemVariants}
  initial="hidden"
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-12 md:mt-16"
>
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#c09050]/10 to-[#d4a84b]/10 border border-[#c09050]/20 p-6 sm:p-8 text-center">
    <div className="absolute top-0 right-0 w-40 h-40 bg-[#c09050]/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#d4a84b]/20 rounded-full blur-3xl"></div>
    
    <div className="relative z-10">
      <Flower2 className="w-12 h-12 text-[#c09050] mx-auto mb-4" />
      <p className="text-[#c09050] text-sm uppercase tracking-wider mb-2 font-['Montserrat'] font-semibold">The Philosophy</p>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-4 font-['Montserrat']">
        From Brooklyn Grit to Georgia Grace
      </h3>
      <p className="text-gray-600 max-w-2xl mx-auto font-['Plus_Jakarta_Sans'] text-base sm:text-lg">
        I bring honesty and directness — we won't shy away from hard truths — but I deliver it with a reflective, down-to-earth approach that honors your journey.
      </p>
    </div>
  </div>
</motion.div>
        </div>
      </section>

   
   <AboutProcessSection/>

      <OriginCurrent/>

      

     {/* ========== CREDENTIALS & EXPERTISE SECTION ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
        
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#c09050]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#c09050]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-4">
              <Award className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">Credentials & Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']">
              Education,{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Certifications
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                & Clinical Excellence
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-[#c09050] mx-auto rounded-full mb-6" />
            <p className="text-black/60 text-lg font-['Plus_Jakarta_Sans']">
              Over 26 years of clinical expertise grounded in evidence-based practice
            </p>
          </div>

          {/* Main Credentials Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Left Column - Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#c09050]/10 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c09050] flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-black font-['Montserrat']">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#c09050] pl-4">
                  <p className="font-black text-black text-lg">Master of Social Work (MSW)</p>
                  <p className="text-black/70 font-semibold text-sm">New York University, 2004</p>
                  <p className="text-black/50 text-sm mt-1">Specialization in Clinical Social Work</p>
                </div>
                <div className="border-l-4 border-[#c09050] pl-4">
                  <p className="font-black text-black text-lg">Bachelor of Science in Social Work (BSW)</p>
                  <p className="text-black/70 font-semibold text-sm">SUNY College at Brockport, 2000</p>
                  <p className="text-black/50 text-sm mt-1">Summa Cum Laude</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#c09050]/10 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c09050] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-black font-['Montserrat']">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c09050]/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c09050]" />
                  </div>
                  <div>
                    <p className="font-bold text-black">Accelerated Resolution Therapy (ART)</p>
                    <p className="text-black/70 text-base">Evidence-based treatment for trauma, anxiety, depression, phobias, OCD, grief, and performance anxiety</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c09050]/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c09050]" />
                  </div>
                  <div>
                    <p className="font-bold text-black">SĀF-T (Sensation Awareness Focus Technique)</p>
                    <p className="text-black/70 text-base">A component drawn from ART focusing on eliminating distressing body sensations and promoting rapid calming</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c09050]/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c09050]" />
                  </div>
                  <div>
                    <p className="font-bold text-black">Evidence-Based Modalities Trained</p>
                    <p className="text-black/70 text-base">CBT, DBT, ACT, Mindfulness-Based Therapy, Trauma-Focused Care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* License Numbers - Highlighted Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#c09050]/5 to-[#c09050]/5 rounded-2xl p-6 text-center border border-[#c09050]/10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[#c09050]" />
                <span className="text-sm font-black uppercase tracking-wider text-[#c09050]">Licensed Clinical Social Worker</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-black shadow-sm border border-[#c09050]/10">NY (#098940)</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-black shadow-sm border border-[#c09050]/10">NJ (#44SL06739500)</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-black shadow-sm border border-[#c09050]/10">RI (#ISW04317)</span>
              </div>
              <p className="text-black/60 text-sm mt-3 font-['Plus_Jakarta_Sans']">
                Licensed to practice clinical therapy in New York, New Jersey, and Rhode Island
              </p>
            </div>
          </motion.div>

          {/* ART Recognition Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-[#c09050]/10">
              <Star className="w-3 h-3 text-[#c09050] fill-[#c09050]" />
              <span className="text-base font-semibold text-black/60 font-['Plus_Jakarta_Sans']">Peer-reviewed evidenced-based treatment recognized by IS-ART</span>
              <Star className="w-3 h-3 text-[#c09050] fill-[#c09050]" />
            </div>
          </motion.div>
        </div>
      </section>

     {/* ========== CTA SECTION ========== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#c09050]/10"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c09050]/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#c09050]/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#c09050]/10 flex items-center justify-center">
                <Flower2 className="w-8 h-8 text-[#c09050]" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-black mb-4 font-['Montserrat']">Ready to Begin Your Journey?</h2>
              
              <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
                Schedule your free 15-minute consultation today. No pressure, just conversation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/manifestcoachingllc"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-['Montserrat']"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </a>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-[#c09050] text-[#c09050] font-bold hover:bg-[#c09050] hover:text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-['Montserrat']"
                >
                  <Phone className="w-5 h-5" />
                  Contact Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}