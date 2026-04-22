import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  ArrowRight,
  Sparkles, 
  Heart, 
  Shield, 
  Award, 
  Clock, 
  Users,
  CheckCircle,
  Video,
  CreditCard,
  Star,
  MapPin,
  Calendar,
  MessageCircle,
  BookOpen,
  Brain,
  Flower2
} from "lucide-react";

export default function WhyChooseUs() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed Clinical Expert",
      description: "26+ years of experience. Licensed LCSW in NY, NJ & RI. NYU Master's degree.",
      color: "#c09050"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassionate Care",
      description: "Client-centered, trauma-informed approach. You'll feel seen, heard, and valued.",
      color: "#D53F8C"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "100% Virtual Sessions",
      description: "Secure, HIPAA-compliant platform. Access care from anywhere.",
      color: "#3182CE"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Insurance Accepted",
      description: "Aetna, Cigna, UnitedHealthcare, Blue Cross, and 15+ other plans.",
      color: "#38A169"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Evening and weekend appointments available. Free consultation offered.",
      color: "#DD6B20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "100+ clients served. Trusted by Psychology Today and major insurers.",
      color: "#c09050"
    }
  ];

  const stats = [
    { value: "26+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
    { value: "100+", label: "Clients Served", icon: <Users className="w-5 h-5" /> },
    { value: "15+", label: "Insurance Plans", icon: <Shield className="w-5 h-5" /> },
    { value: "100%", label: "Virtual Sessions", icon: <Video className="w-5 h-5" /> }
  ];

  return (
    <section id="why-choose-us" className="relative w-full py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
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
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#c09050] font-['Montserrat']">
              Why Choose The Peace Practice
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']"
          >
            Your Trusted Partner in{" "}
            <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
              Healing & Growth
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base sm:text-lg font-['Plus_Jakarta_Sans']"
          >
            Experience compassionate, evidence-based care from a seasoned clinician who truly listens
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#c09050]/10 flex items-center justify-center text-[#c09050]">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-black font-['Montserrat']">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 font-['Plus_Jakarta_Sans']">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 md:mb-16"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`} style={{ backgroundColor: `${benefit.color}10` }}>
                <div style={{ color: benefit.color }}>{benefit.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-2 font-['Montserrat'] group-hover:text-[#c09050] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}