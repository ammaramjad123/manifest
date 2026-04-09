import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";

export default function About() {
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

  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants}>
            <p className="font-['Montserrat'] text-[#6B46C1] uppercase tracking-[3px] text-sm font-bold mb-3">
              About Me
            </p>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Over 26 Years of
              <br />
              <span className="text-[#6B46C1]">Clinical Excellence</span>
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-gray-700 text-xl leading-relaxed mb-6">
              As a seasoned Clinical Social Worker with over 26 years of experience, I approach every client's journey with compassion, authenticity, and unwavering dedication to their healing and growth.
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-gray-600 text-lg leading-relaxed mb-8">
              My philosophy is simple: create a safe, non-judgmental space where you feel seen, heard, and empowered. I believe in treating the whole person—mind, body, and spirit—while integrating evidence-based practices that actually work. I hold a Master of Social Work from New York University and am licensed in NY, NJ, and RI. Personally overseeing each client's therapeutic journey from intake to transformation.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#6B46C1]" />
                <span className="text-base text-gray-700">26+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#6B46C1]" />
                <span className="text-base text-gray-700">NYU Graduate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#6B46C1]" />
                <span className="text-base text-gray-700">1000+ Clients Served</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[450px] md:h-[500px]">
             <img
  src="/hands.jpg"
  alt="Ayana Foluke McKanney - Clinical Therapist"
  className="w-full h-full object-cover"
/>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6B46C1]/0 to-transparent"></div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6B46C1] rounded-full opacity-10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-black rounded-full opacity-5 -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}