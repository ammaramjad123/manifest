{/* ========== OUR PROCESS SECTION ========== */}

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Heart, Brain, BookOpen, Users, Sparkles, Target, Compass } from 'lucide-react';

export default function AboutProcessSection() {
  const steps = [
    {
      title: "Discovery Call",
      desc: "Reach out via phone, email, or Calendly. We'll schedule a free 15-minute consultation to understand your needs, answer questions, and determine if we're a good fit.",
      icon: Phone,
    },
    {
      title: "Alignment Session",
      desc: "We identify whether you're in a season of Restoration (Therapy) or Expansion (Coaching). Together, we decide which 'hat' honors your current journey best.",
      icon: Calendar,
    },
    {
      title: "The Journey Begins",
      desc: "Whether it's ART therapy, DBT skills, or the MANIFEST coaching framework, we begin your personalized path toward healing, growth, or transformation.",
      icon: Heart,
    },
    {
      title: "The Journey Begins",
      desc: "Whether it's ART therapy, DBT skills, or the MANIFEST coaching framework, we begin your personalized path toward healing, growth, or transformation.",
      icon: Heart,
    },
    {
      title: "Evolution & Integration",
      desc: "We track progress, celebrate breakthroughs, and adjust as needed. You leave with tools, resilience, and a clear path to your next chapter.",
      icon: Target,
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Subtle Energy Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,144,80,0.03),transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c09050] font-['Montserrat']">
              The Path Forward
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black text-center font-['Montserrat']">
            How It <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            Four simple steps to healing, growth, and transformation. No pressure, just partnership.
          </p>
        </motion.div>

        {/* Flow System */}
        <div className="relative mt-20">
          {/* Main Energy Line */}
          <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full overflow-hidden">
            <div className="absolute inset-0 bg-gray-200" />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#c09050] via-[#d4a84b] to-[#c09050]"
            />
            {/* Moving Energy Pulse */}
            <motion.div
              animate={{ y: ["-20%", "120%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 -translate-x-1/2 w-[8px] h-[80px] rounded-full bg-gradient-to-b from-white/80 via-[#c09050] to-transparent blur-sm"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className="relative max-w-[90%] sm:max-w-md p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#c09050]/30 transition-all duration-300">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-[#c09050] text-white flex items-center justify-center text-sm font-black shadow-lg font-['Montserrat']">
                      {i + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#c09050]/10 flex items-center justify-center text-[#c09050]">
                        <StepIcon size={24} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-black text-black font-['Montserrat']">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-['Plus_Jakarta_Sans']">
                      {step.desc}
                    </p>

                    {/* Connection Line to Center */}
                    <div className={`hidden sm:block absolute top-1/2 ${i % 2 === 0 ? "right-[-40px]" : "left-[-40px]"} w-[40px] h-[2px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] opacity-40`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA - Updated with Black + Gold Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://calendly.com/manifestcoachingllc"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-black hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 font-['Montserrat'] text-sm uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4" />
            Start Your Journey Today
            <Compass className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}