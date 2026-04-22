import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Heart, 
  Brain, 
  BookOpen, 
  ArrowRight, 
  Sparkles,
  Shield,
  MapPin,
  Users,
  Award,
  CheckCircle,
  Flower2,
  HandHeart,
  Sun,
  Compass,
  Target,
  Star
} from "lucide-react";

export default function ThreeDoors() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeDoor, setActiveDoor] = useState("therapy");
  const [selectedPath, setSelectedPath] = useState(null);

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const doors = {
    therapy: {
      id: "therapy",
      icon: <Heart size={32} />,
      title: "Clinical Therapy",
      subtitle: "The Peace Practice",
      tagline: "Season of Restoration",
      description: "Licensed clinical therapy for individuals seeking healing, emotional regulation, and internal peace. Evidence-based treatment for anxiety, depression, trauma, and life transitions.",
      fullDescription: "With over 26 years of clinical experience, I provide a safe, compassionate space for you to heal from past wounds, process complex emotions, and build emotional regulation skills. My approach is client-centered, trauma-informed, and grounded in evidence-based practices including CBT, ACT, and Mindfulness-based therapy.",
      features: [
        "Licensed LCSW - NY (#098940)",
        "Licensed in NY, NJ & RI",
        "Individual therapy (17+)",
        "Insurance accepted (15+ plans)",
        "Trauma-informed care",
        "CBT, ACT, Mindfulness-based"
      ],
      forWhom: [
        "Healing from past wounds",
        "Processing new diagnoses",
        "Complicated grief & loss",
        "Relationship transitions",
        "Debilitating fears & phobias",
        "Nervous system regulation"
      ],
      buttonText: "Begin Your Healing Journey",
      buttonLink: "https://headway.co",
      color: "#c09050",
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgLight: "bg-[#c09050]/5"
    },
    coaching: {
      id: "coaching",
      icon: <Brain size={32} />,
      title: "Transformational Coaching",
      subtitle: "MANIFEST Method",
      tagline: "Season of Expansion",
      description: "Future-focused coaching partnership for those ready to move from 'functioning' to 'flourishing.' Available nationwide via the MANIFEST Method.",
      fullDescription: "The MANIFEST Method is a proprietary coaching framework designed to help you bridge the gap between where you are now and where you want to be. This high-accountability partnership focuses on actionable steps, mindset shifts, and personal evolution. Perfect for those ready to build their 'skyscraper' after establishing solid ground.",
      features: [
        "Available nationwide",
        "High-accountability partnership",
        "Actionable step-by-step framework",
        "Mindset & performance focus",
        "Peak performance & evolution",
        "Private pay packages"
      ],
      forWhom: [
        "Bridging to your future vision",
        "Thriving with stable diagnosis",
        "Rebuilding life purpose",
        "Imposter syndrome & hesitations",
        "Ready for personal evolution",
        "Self-actualization seekers"
      ],
      buttonText: "Start Your Expansion Journey",
      buttonLink: "https://calendly.com/manifestcoachingllc",
      color: "#c09050",
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgLight: "bg-[#c09050]/5"
    },
    training: {
      id: "training",
      icon: <BookOpen size={32} />,
      title: "Professional Training",
      subtitle: "Partnerships",
      tagline: "Clinical Excellence",
      description: "Evidence-based training for organizations and professionals. SĀF-T and Clinical ART trainings facilitated through RCRR.",
      fullDescription: "Bring clinical excellence to your organization with evidence-based trainings facilitated through RCRR. SĀF-T (Structured Assessment for Risk of Re-offense) and Clinical ART (Accelerated Resolution Therapy) trainings are available for mental health professionals seeking advanced certification and CE credits.",
      features: [
        "SĀF-T Certification Training",
        "Clinical ART Training",
        "Facilitated through RCRR",
        "CE credits available",
        "Group rates & custom packages",
        "In-person & virtual options"
      ],
      forWhom: [
        "Mental health professionals",
        "Organizations & agencies",
        "Clinical supervisors",
        "Group practices",
        "Hospital systems",
        "Educational institutions"
      ],
      buttonText: "Explore Training Opportunities",
      buttonLink: "#contact",
      color: "#c09050",
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgLight: "bg-[#c09050]/5"
    }
  };

  const activeData = doors[activeDoor];

  return (
    <section id="services" className="relative w-full py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#c09050]">
              Three Pathways to Peace
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 font-['Montserrat']"
          >
            Choose Your{" "}
            <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base sm:text-lg md:text-xl font-['Plus_Jakarta_Sans'] px-4"
          >
            Whether you're in a season of Restoration or Expansion, 
            there's a path designed specifically for you.
          </motion.p>
        </motion.div>

        {/* Interactive Door Selection - Responsive for Mobile */}
        <div className="flex justify-center mb-8 md:mb-12 px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row bg-gray-100 rounded-2xl sm:rounded-full p-1 gap-1 sm:gap-0 w-full sm:w-auto">
            {Object.keys(doors).map((door) => (
              <button
                key={door}
                onClick={() => setActiveDoor(door)}
                className={`relative px-4 sm:px-6 py-3 rounded-xl sm:rounded-full transition-all duration-500 font-bold font-['Montserrat'] text-sm sm:text-base ${
                  activeDoor === door 
                    ? `text-white bg-gradient-to-r ${doors[door].gradient} shadow-lg` 
                    : 'text-gray-500 hover:text-[#c09050]'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {doors[door].icon}
                  <span className="whitespace-nowrap">{doors[door].title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Door Content - Dynamic Panel */}
        <motion.div
          key={activeDoor}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-4 sm:px-0"
        >
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            
            {/* Left Side - Main Content */}
            <div className="space-y-5 md:space-y-6">
              <div>
                <div className={`inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-2 rounded-full ${activeData.bgLight} mb-3 md:mb-4`}>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-wider" style={{ color: activeData.color }}>
                    {activeData.tagline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-1 md:mb-2 font-['Montserrat']">
                  {activeData.title}
                </h3>
                <p className="text-base md:text-lg font-semibold" style={{ color: activeData.color }}>
                  {activeData.subtitle}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed font-['Plus_Jakarta_Sans'] text-base md:text-lg">
                {activeData.fullDescription}
              </p>

              <div className="space-y-3 md:space-y-4">
                <p className="text-black font-bold font-['Montserrat'] text-base md:text-base">✓ What to expect:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {activeData.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#c09050] flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base font-['Plus_Jakarta_Sans']">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <p className="text-black font-bold font-['Montserrat'] text-base md:text-base">🎯 Perfect for:</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {activeData.forWhom.map((item, i) => (
                    <span key={i} className="px-2 md:px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs md:text-sm font-['Plus_Jakarta_Sans']">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={activeData.buttonLink}
                target={activeDoor === "training" ? "_self" : "_blank"}
                className={`group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm md:text-lg transition-all duration-500 hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 font-['Montserrat'] w-full sm:w-auto justify-center`}
              >
                {activeData.buttonText}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

            {/* Right Side - Visual / Journey Map */}
            <div className={`relative rounded-2xl ${activeData.bgLight} p-5 md:p-8 border border-[#c09050]/10 overflow-hidden mt-6 lg:mt-0`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#c09050]/10 to-transparent rounded-full blur-2xl" />
              
              <div className="relative z-10">
                {/* Journey Timeline */}
                <div className="text-center mb-5 md:mb-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-gradient-to-r ${activeData.gradient} flex items-center justify-center text-white shadow-xl mb-3 md:mb-4`}>
                    {activeData.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-black font-['Montserrat']">Your Journey</h4>
                  <div className={`w-12 h-1 md:w-16 mx-auto mt-2 rounded-full bg-gradient-to-r ${activeData.gradient}`} />
                </div>

                {activeDoor === "therapy" && (
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">Healing Foundation</p>
                        <p className="text-sm md:text-base text-gray-700">Build emotional regulation and stability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                        <Target className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">Root Cause Work</p>
                        <p className="text-sm md:text-base text-gray-700">Process trauma, grief, and life transitions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                        <Sun className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">Internal Peace</p>
                        <p className="text-sm md:text-base text-gray-700">Achieve emotional regulation and stability</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeDoor === "coaching" && (
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                        <Compass className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">Vision Clarity</p>
                        <p className="text-sm md:text-base text-gray-700">Define your future goals and aspirations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                        <Target className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">Actionable Steps</p>
                        <p className="text-sm md:text-base text-gray-700">MANIFEST method framework</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">Self-Actualization</p>
                        <p className="text-sm md:text-base text-gray-700">Peak performance and personal evolution</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeDoor === "training" && (
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                        <Award className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">Certification</p>
                        <p className="text-sm md:text-base text-gray-700">SĀF-T or Clinical ART certification</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">CE Credits</p>
                        <p className="text-sm md:text-base text-gray-700">Continuing education for professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">Clinical Excellence</p>
                        <p className="text-sm md:text-base text-gray-700">Evidence-based training through RCRR</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* The Synergy Note - Fixed spacing */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                  <p className="text-sm md:text-base text-gray-700 text-center font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <span className="font-bold text-black">The Synergy:</span> These paths are often sequential. Begin with therapy for grounding, then transition to coaching to build your skyscraper.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Geographic Scope Badges */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-2 md:gap-4 px-4"
        >
          {/* 1 */}
          <div className="flex items-center justify-center gap-1.5 w-[48%] sm:w-auto px-2.5 md:px-5 py-1.5 md:py-2.5 rounded-full bg-gray-100 border border-gray-200">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
            <span className="text-gray-700 text-[11px] sm:text-xs md:text-base font-semibold font-['Plus_Jakarta_Sans'] whitespace-nowrap">
              Therapy: NY, NJ, RI
            </span>
          </div>

          {/* 2 */}
          <div className="flex items-center justify-center gap-1.5 w-[48%] sm:w-auto px-2.5 md:px-5 py-1.5 md:py-2.5 rounded-full bg-gray-100 border border-gray-200">
            <Users className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
            <span className="text-gray-700 text-[11px] sm:text-xs md:text-base font-semibold font-['Plus_Jakarta_Sans'] whitespace-nowrap">
              Coaching: Nationwide
            </span>
          </div>

          {/* 3 */}
          <div className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-2.5 md:px-5 py-1.5 md:py-2.5 rounded-full bg-gray-100 border border-gray-200">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-[#c09050]" />
            <span className="text-gray-700 text-[11px] sm:text-xs md:text-base font-semibold font-['Plus_Jakarta_Sans'] whitespace-nowrap">
              Training: Via RCRR
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}