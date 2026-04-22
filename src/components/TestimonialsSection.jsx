import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Star, Quote, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      title: "Therapy Client",
      location: "New York, NY",
      rating: 5,
      text: "Ayana has been instrumental in my healing journey. She creates such a safe, non-judgmental space where I finally feel seen and heard. Her approach to anxiety and trauma work has changed my life.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      service: "Clinical Therapy"
    },
    {
      id: 2,
      name: "David Chen",
      title: "Coaching Client",
      location: "Los Angeles, CA",
      rating: 5,
      text: "The MANIFEST Method is truly transformative. Ayana helped me break through imposter syndrome and finally step into my power. I've launched my business and doubled my income since working with her.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      service: "Transformational Coaching"
    },
    {
      id: 3,
      name: "Dr. Emily Williams",
      title: "Clinical Psychologist",
      location: "Boston, MA",
      rating: 5,
      text: "As a fellow clinician, I'm selective about who I refer my clients to. Ayana's trauma-informed approach and clinical expertise make her my top recommendation for therapy and coaching.",
      image: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      service: "Peer Referral"
    },
    {
      id: 4,
      name: "Jessica Martinez",
      title: "Therapy Client",
      location: "Newark, NJ",
      rating: 5,
      text: "After years of struggling with depression, I finally found someone who truly gets it. Ayana's compassionate, evidence-based approach has given me tools I use every day. I'm finally living instead of just surviving.",
      image: "/jessica.jpg",
      service: "Clinical Therapy"
    },
    {
      id: 5,
      name: "Robert Martinez",
      title: "Coaching Client",
      location: "Chicago, IL",
      rating: 5,
      text: "Ayana's coaching helped me navigate a major career transition with clarity and confidence. Her accountability and strategic framework made all the difference. Highly recommend the MANIFEST Method!",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      service: "Transformational Coaching"
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Training Attendee",
      location: "Atlanta, GA",
      rating: 5,
      text: "The SĀF-T training through RCRR was exceptional. Ayana is a skilled facilitator who brings deep knowledge and practical application. I left feeling fully prepared to implement what I learned.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      service: "Professional Training"
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden py-20 md:py-28 lg:py-32" id="testimonials">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Section Header */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6"
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c09050]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          What <span className="text-[#c09050]">Clients Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-['Plus_Jakarta_Sans']"
        >
          Real stories from real clients who have found healing, growth, and transformation
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={40} className="text-[#c09050]" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#c09050] text-[#c09050]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 flex-grow font-['Plus_Jakarta_Sans']">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#c09050]/30"
                  />
                  <div>
                    <h4 className="text-black font-bold font-['Montserrat'] text-base md:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs font-['Plus_Jakarta_Sans']">
                      {testimonial.title}
                    </p>
                    <p className="text-[#c09050]/70 text-xs font-['Plus_Jakarta_Sans'] mt-0.5">
                      {testimonial.location} • {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trust Badges */}
      <div className="relative z-10 mt-16 pt-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#c09050]" style={{ fontFamily: "'Montserrat', sans-serif" }}>100+</div>
              <div className="text-gray-500 text-sm font-['Plus_Jakarta_Sans']">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#c09050]" style={{ fontFamily: "'Montserrat', sans-serif" }}>4.9 ★</div>
              <div className="text-gray-500 text-sm font-['Plus_Jakarta_Sans']">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#c09050]" style={{ fontFamily: "'Montserrat', sans-serif" }}>98%</div>
              <div className="text-gray-500 text-sm font-['Plus_Jakarta_Sans']">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#c09050]" style={{ fontFamily: "'Montserrat', sans-serif" }}>26+</div>
              <div className="text-gray-500 text-sm font-['Plus_Jakarta_Sans']">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}