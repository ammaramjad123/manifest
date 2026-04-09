import React from "react";
import { 
  FaHeart, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaShieldAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
  FaCalendarAlt,
  FaVideo,
  FaAward,
  FaCheckCircle,
  FaStar,
  FaGem
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Specialties", href: "#specialties" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Clinical Therapy", href: "#services" },
    { name: "Transformational Coaching", href: "#services" },
    { name: "Professional Training", href: "#services" },
    { name: "Immigration Evaluations", href: "#services" }
  ];

  const resources = [
    { name: "The Path Forward Assessment", href: "#assessment" },
    { name: "The MANIFEST Method", href: "#manifest-method" },
    { name: "FAQ", href: "#faq" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  return (
    <footer className="relative w-full bg-[#0a0a1a] overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B46C1]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      {/* Grain Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8">
          
          {/* Top Section - Brand & CTA */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 pb-8 border-b border-white/10">
            
            {/* Left Side - Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] flex items-center justify-center">
                  <FaHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat']">
                    The Peace Practice
                  </h2>
                  <p className="text-white/50 text-sm font-['Plus_Jakarta_Sans']">
                    Ayana Foluke McKanney, LCSW
                  </p>
                </div>
              </div>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md font-['Plus_Jakarta_Sans'] mb-4">
                Your Journey. Our Partnership. Providing compassionate therapy, transformational coaching, and professional training to help you navigate life's challenges and discover your path to peace.
              </p>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-[#6B46C1]" />
                <span className="text-white/40 text-xs font-['Plus_Jakarta_Sans']">HIPAA Compliant • Secure Platform</span>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <FaStar className="w-5 h-5 text-[#6B46C1]" />
                <h3 className="text-white font-bold text-lg font-['Montserrat']">Ready to Begin Your Journey?</h3>
              </div>
              <p className="text-white/60 text-sm mb-4 font-['Plus_Jakarta_Sans']">
                Schedule your free 15-minute consultation today. No pressure, just conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/manifestcoachingllc"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] text-white font-bold text-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 font-['Montserrat']"
                >
                  <FaCalendarAlt className="w-4 h-4" />
                  Book Free Consultation
                  <FaArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 font-['Montserrat']"
                >
                  <MdEmail className="w-4 h-4" />
                  Send Message
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 font-['Montserrat']">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-[#6B46C1] text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 font-['Montserrat']">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-white/50 hover:text-[#6B46C1] text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 font-['Montserrat']">Resources</h3>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-white/50 hover:text-[#6B46C1] text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
<div>
  <h3 className="text-white font-bold text-lg mb-4 font-['Montserrat']">Contact</h3>
  <ul className="space-y-3">
    <li>
      <a href="tel:+19299003056" className="flex items-center gap-3 text-white/50 hover:text-[#6B46C1] text-sm transition-colors duration-300 group">
        <FaPhone className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span>(929) 900-3056</span>
      </a>
    </li>
    <li>
      <a href="tel:+19299252554" className="flex items-center gap-3 text-white/50 hover:text-[#6B46C1] text-sm transition-colors duration-300 group">
        <FaPhone className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span>(929) 925-2554</span>
      </a>
    </li>
    <li>
      <a href="mailto:manifestcoachingllc@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-[#6B46C1] text-sm transition-colors duration-300 group">
        <FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span>manifestcoachingllc@gmail.com</span>
      </a>
    </li>
    <li>
      <a href="https://calendly.com/manifestcoachingllc" target="_blank" className="flex items-start gap-3 text-white/50 hover:text-[#6B46C1] text-sm transition-colors duration-300 group">
        <FaVideo className="w-4 h-4 mt-0.5 group-hover:scale-110 transition-transform" />
        <span>Virtual Sessions<br />Available Nationwide</span>
      </a>
    </li>
  </ul>
</div>
          </div>

    

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
            <p className="text-white/30 text-xs font-['Plus_Jakarta_Sans']">
              © {currentYear} The Peace Practice. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/manifestcoachingllc/"
                target="_blank"
                className="text-white/30 hover:text-[#6B46C1] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayana-mckanney-lcsw-18879023/"
                target="_blank"
                className="text-white/30 hover:text-[#6B46C1] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/15vR4tMEio/"
                target="_blank"
                className="text-white/30 hover:text-[#6B46C1] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>

            <p className="text-white/30 text-xs font-['Plus_Jakarta_Sans']">
              Your Journey. Our Partnership.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}