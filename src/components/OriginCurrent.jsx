{/* ========== THE ORIGIN STORY - GENERATIONAL ========== */}
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flower2, Heart, Quote, Award, Users, Clock, Compass, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OriginStory() {
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
        staggerChildren: 0.15,
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

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#fefcf7] overflow-hidden">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #9f4cbb 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9f4cbb]/10 border border-[#9f4cbb]/20 mb-4"
          >
            <Flower2 className="w-4 h-4 text-[#9f4cbb]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#9f4cbb]">The Origin Story</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-4 font-['Montserrat']"
          >
            From{" "}
            <span className="bg-gradient-to-r from-[#9f4cbb] to-[#c77dff] bg-clip-text text-transparent">
              Harlem's Inspiration
            </span>
            <br />
            to{" "}
            <span className="bg-gradient-to-r from-[#9f4cbb] to-[#c77dff] bg-clip-text text-transparent">
              A Global Perspective
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-16 h-0.5 bg-gradient-to-r from-[#9f4cbb] to-[#c77dff] mx-auto rounded-full mb-6"
          />
        </motion.div>

        {/* The Story - Simple & Powerful */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto space-y-8 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Plus_Jakarta_Sans']"
          >
            As a child, I was captivated by the stories of Harlem's Mother Clara Hale and the transformative impact of Covenant House. Those narratives did more than inspire me—they ignited a lifelong calling to serve as a bridge for those navigating life's most challenging terrains.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Plus_Jakarta_Sans']"
          >
            With over 26 years of experience across public and private sectors, and an MSW from New York University, I have stood in the gap for individuals across the human spectrum. Whether supporting families navigating the judicial system or assisting high-achievers facing the "heavy success" of burnout, my work is one of constant curation: sifting through life's "grit" to uncover the "grace" beneath.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Plus_Jakarta_Sans']"
          >
            I believe your life is your most important work of art, but even the best artists occasionally get stuck. My practice is rooted in the{" "}
            <span className="font-bold text-[#9f4cbb]">MANIFEST method</span> — Motivating And Nurturing Internal Fulfillment. Whether you are seeking a clinical process, a life pivot, or a legacy passage, I provide a space where you are seen, heard, and empowered to move from paralysis to possibility.
          </motion.p>

          {/* Brooklyn Grit to Georgia Grace Banner */}
          <motion.div
            variants={itemVariants}
            className="my-8 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#9f4cbb]/5 to-[#c77dff]/5 border border-[#9f4cbb]/10"
          >
            <p className="text-xl md:text-2xl font-black text-gray-800 font-['Montserrat']">
              I bring <span className="text-[#9f4cbb]">"Brooklyn Grit"</span> to our work — we won't shy away from hard truths —
              <br />
              but I deliver it with <span className="text-[#9f4cbb]">"Georgia Grace"</span>: a reflective, down-to-earth approach.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Plus_Jakarta_Sans']"
          >
            The Peace Practice is the clinical home of MANIFEST Coaching LLC. Our practice is built on the MANIFEST method — a framework designed to bridge clinical excellence with intentional living, helping you curate a life of purpose.
          </motion.p>
        </motion.div>

        {/* The Narrative Flow - NEW INTEGRATED SECTION */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Closing Quote - Generational Wisdom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <div className="absolute -top-8 -left-8 opacity-20">
                <Quote className="w-12 h-12 text-[#9f4cbb]" />
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-800 max-w-3xl mx-auto font-['Montserrat'] leading-tight">
                "We all share the guarantee of breath & death;
                <br />
                <span className="bg-gradient-to-r from-[#9f4cbb] to-[#c77dff] bg-clip-text text-transparent">
                  my mission is to help you curate a life that honors both."
                </span>
              </p>
              <div className="absolute -bottom-8 -right-8 opacity-20 transform rotate-180">
                <Quote className="w-12 h-12 text-[#c77dff]" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#9f4cbb]" />
              <span className="text-gray-500 text-sm font-['Plus_Jakarta_Sans']">— Ayana Foluke McKanney, LCSW</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#9f4cbb]" />
            </div>
          </motion.div>

          {/* Legacy Markers */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
              <Clock className="w-3 h-3 text-[#9f4cbb]" />
              <span className="text-xs text-gray-500">26+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
              <Heart className="w-3 h-3 text-[#9f4cbb]" />
              <span className="text-xs text-gray-500">1000+ Lives Impacted</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
              <Award className="w-3 h-3 text-[#9f4cbb]" />
              <span className="text-xs text-gray-500">NYU Graduate</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
              <Compass className="w-3 h-3 text-[#9f4cbb]" />
              <span className="text-xs text-gray-500">MANIFEST Method Creator</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}