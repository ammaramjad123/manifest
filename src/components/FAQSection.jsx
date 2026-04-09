import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Plus, 
  Minus, 
  Search, 
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  Shield,
  Heart,
  Brain,
  BookOpen
} from "lucide-react";

export default function FAQSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Reset open items when category or search changes
  useEffect(() => {
    setOpenItems({});
  }, [activeCategory, searchQuery]);

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

  const categories = [
    { id: "all", name: "All Questions", icon: <HelpCircle size={16} /> },
    { id: "therapy", name: "Therapy", icon: <Heart size={16} /> },
    { id: "coaching", name: "Coaching", icon: <Brain size={16} /> },
    { id: "insurance", name: "Insurance", icon: <Shield size={16} /> },
    { id: "logistics", name: "Logistics", icon: <BookOpen size={16} /> }
  ];

  const allFaqs = [
    {
      id: 1,
      category: "therapy",
      question: "What is the difference between therapy and coaching?",
      answer: "Therapy focuses on healing past wounds, processing trauma, treating mental health conditions, and emotional regulation. It's a season of Restoration. Coaching (MANIFEST Method) is future-focused, helping you bridge the gap between where you are and where you want to be. It's a season of Expansion."
    },
    {
      id: 2,
      category: "therapy",
      question: "What states are you licensed in for therapy?",
      answer: "I am licensed to provide clinical therapy in New York (#098940), New Jersey (#44SL06739500), and Rhode Island (#ISW04317). All therapy sessions are conducted virtually via a secure, HIPAA-compliant platform."
    },
    {
      id: 3,
      category: "therapy",
      question: "What therapeutic approaches do you use?",
      answer: "I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), Trauma-Focused CBT, Accelerated Resolution Therapy (ART), and Mindfulness-Based Therapy."
    },
    {
      id: 4,
      category: "therapy",
      question: "Do you treat anxiety, depression, and trauma?",
      answer: "Yes, anxiety, depression, and trauma are among my top specialties. Using evidence-based approaches, I help clients identify triggers, challenge negative thought patterns, and develop coping strategies that work."
    },
    {
      id: 5,
      category: "therapy",
      question: "What is the age range for therapy clients?",
      answer: "I work with individuals aged 17 and older for clinical therapy services."
    },
    {
      id: 6,
      category: "coaching",
      question: "What is the MANIFEST Method?",
      answer: "The MANIFEST Method is a proprietary coaching framework designed to help you bridge the gap between where you are and where you want to be. It's a high-accountability partnership focused on actionable steps, mindset shifts, and personal evolution."
    },
    {
      id: 7,
      category: "coaching",
      question: "Is coaching available nationwide?",
      answer: "Yes! Transformational coaching is available nationwide via telehealth since it's consultative, not clinical, and not bound by state licensure."
    },
    {
      id: 8,
      category: "coaching",
      question: "Who is coaching for?",
      answer: "Coaching is ideal for those experiencing imposter syndrome, career transitions, feeling 'stuck', wanting peak performance, seeking self-actualization, or ready for personal evolution."
    },
    {
      id: 9,
      category: "coaching",
      question: "Do you accept insurance for coaching?",
      answer: "Coaching is private pay only. It's consultative, not clinical, so insurance does not apply. Packages are available for single sessions or multi-session bundles."
    },
    {
      id: 10,
      category: "insurance",
      question: "Do you accept insurance for therapy?",
      answer: "Yes, I accept most major insurance plans including Aetna, Anthem, Blue Cross Blue Shield, Cigna, Optum, UnitedHealthcare, Oxford, Oscar, and more. Contact me to verify your coverage."
    },
    {
      id: 11,
      category: "insurance",
      question: "Do you offer a free consultation?",
      answer: "Yes! I offer a free 15-minute consultation to discuss your needs, answer questions, and determine if we're a good fit. Schedule directly through my Calendly link."
    },
    {
      id: 12,
      category: "insurance",
      question: "What is your cancellation policy?",
      answer: "I require 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee."
    },
    {
      id: 13,
      category: "logistics",
      question: "Are sessions in-person or virtual?",
      answer: "All sessions are conducted virtually via a secure, HIPAA-compliant telehealth platform. This allows me to serve clients across NY, NJ, RI for therapy and nationwide for coaching."
    },
    {
      id: 14,
      category: "logistics",
      question: "How do I schedule an appointment?",
      answer: "Schedule a free consultation or coaching session directly through my Calendly link. For therapy clients, after consultation, I'll guide you through the intake process via Alma or Headway."
    },
    {
      id: 15,
      category: "logistics",
      question: "How long are sessions?",
      answer: "Therapy sessions are typically 45-50 minutes. Coaching sessions range from 45-60 minutes depending on the package."
    },
    {
      id: 16,
      category: "logistics",
      question: "How do I know if I need therapy or coaching?",
      answer: "Take the 'Path Forward' assessment on this site. Mostly A's = Therapy (Restoration). Mostly B's = Coaching (Expansion). Many start with therapy, then transition to coaching."
    }
  ];

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #6B46C1 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B46C1]/10 border border-[#6B46C1]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#6B46C1]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#6B46C1] font-['Montserrat']">
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']"
          >
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] bg-clip-text text-transparent">
              I've Got Answers.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base sm:text-lg font-['Plus_Jakarta_Sans']"
          >
            Everything you need to know about therapy, coaching, insurance, and logistics
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mb-8 md:mb-10"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/20 transition-all duration-300 font-['Plus_Jakarta_Sans']"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mb-8 md:mb-10 overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-2 sm:gap-3 min-w-max mx-auto px-1 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenItems({});
                }}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap font-['Montserrat'] ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg font-['Plus_Jakarta_Sans']">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                  setOpenItems({});
                }}
                className="mt-4 text-[#6B46C1] font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-all duration-300 hover:bg-gray-50"
                >
                  <span className="font-semibold text-black text-sm sm:text-base md:text-lg pr-4 font-['Montserrat']">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#6B46C1]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openItems[faq.id] ? 'bg-[#6B46C1]' : ''}`}>
                    {openItems[faq.id] ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#6B46C1]" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems[faq.id] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 sm:p-5 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 md:mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#6B46C1]/10 to-[#8B5CF6]/10 border border-[#6B46C1]/20 p-6 sm:p-8 text-center">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#6B46C1]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#8B5CF6]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <MessageCircle className="w-12 h-12 text-[#6B46C1] mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-black text-black mb-2 font-['Montserrat']">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto font-['Plus_Jakarta_Sans']">
                I'm here to help. Reach out directly and I'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://calendly.com/manifestcoachingllc"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] text-white font-bold transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 font-['Montserrat']"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Free Consultation
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#6B46C1] text-[#6B46C1] font-bold hover:bg-[#6B46C1] hover:text-white transition-all duration-300 font-['Montserrat']"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Phone className="w-4 h-4 text-[#6B46C1]" />
            <span className="font-['Plus_Jakarta_Sans']">(929) 900-3056</span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4 text-[#6B46C1]" />
            <span className="font-['Plus_Jakarta_Sans']">manifestcoachingllc@gmail.com</span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4 text-[#6B46C1]" />
            <span className="font-['Plus_Jakarta_Sans']">HIPAA Compliant</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}