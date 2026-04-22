import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { useLocation } from 'react-router-dom';
import { 
  Send, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  CheckCircle,
  ArrowRight,
  Shield,
  Sparkles,
  User,
  AtSign,
  AlertCircle,
  Loader2,
  ChevronRight,
  Heart,
  Calendar,
  Video
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    service: 'general'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const services = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'therapy', label: 'Clinical Therapy (NY, NJ, RI)' },
    { value: 'coaching', label: 'Transformational Coaching (Nationwide)' },
    { value: 'training', label: 'Professional Training (SĀF-T / ART)' },
    { value: 'immigration', label: 'Immigration Evaluation' },
    { value: 'corporate', label: 'Corporate Coaching / Training' }
  ];

  const benefits = [
    { icon: <Heart className="w-5 h-5" />, text: 'Compassionate Care' },
    { icon: <Clock className="w-5 h-5" />, text: 'Flexible Scheduling' },
    { icon: <Shield className="w-5 h-5" />, text: 'Licensed LCSW' },
    { icon: <Video className="w-5 h-5" />, text: 'Online Therapy' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 3:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s+\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",    // Replace with your EmailJS template ID
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: services.find(s => s.value === formData.service)?.label,
          message: formData.message,
          title: "Contact Form Submission - The Peace Practice"
        },
        "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        service: "general"
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again or call us directly.");
    }

    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-[#fffff]" />,
      title: 'Call Us',
      details: ['(929) 900-3056', '(929) 925-2554'],
      action: 'Call Now',
      link: 'tel:+19299003056',
      color: 'from-[#c09050] to-[#d4a84b]'
    },
    {
      icon: <Mail className="w-6 h-6 text-[#fffff]" />,
      title: 'Email Us',
      details: ['manifestcoachingllc@gmail.com'],
      action: 'Send Email',
      link: 'mailto:manifestcoachingllc@gmail.com',
      color: 'from-[#c09050] to-[#d4a84b]'
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#fffff]]" />,
      title: 'Book Online',
      details: ['Schedule a consultation', 'via Calendly'],
      action: 'Book Now',
      link: 'https://calendly.com/manifestcoachingllc',
      color: 'from-[#c09050] to-[#d4a84b]'
    }
  ];

  return (
    <div className="relative w-full bg-white overflow-hidden py-39 md:py-38 lg:py-46">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c09050]">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 font-['Montserrat']">
            Start Your Journey
            <span className="block bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent mt-2">
              Today
            </span>
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-['Plus_Jakarta_Sans']">
            Have questions about therapy, coaching, or training? Ready to book your first session? 
            I'm here to support you every step of the way.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="relative">
          {/* Floating Background Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c09050]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#d4a84b]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Contact Form */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 font-['Montserrat']">Send a Message</h2>
                  <p className="text-gray-500 text-sm md:text-base font-['Plus_Jakarta_Sans']">Fill out the form below and I'll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <div className="bg-gradient-to-r from-[#c09050]/10 to-[#d4a84b]/10 rounded-2xl p-8 text-center animate-fade-in border border-[#c09050]/20">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#c09050] to-[#d4a84b] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2 font-['Montserrat']">Message Sent!</h3>
                    <p className="text-gray-600 font-['Plus_Jakarta_Sans']">Thank you for reaching out. I will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'fullName' ? 'transform scale-[1.02]' : ''}`}>
                        <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'fullName' ? 'text-[#c09050]' : 'text-gray-400'}`} />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('fullName')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none bg-white text-gray-700 placeholder-gray-400 ${
                            errors.fullName 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-gray-200 focus:border-[#c09050] hover:border-[#c09050]/50'
                          }`}
                          placeholder="Your full name"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
                          <AtSign className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-[#c09050]' : 'text-gray-400'}`} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none bg-white text-gray-700 placeholder-gray-400 ${
                              errors.email 
                                ? 'border-red-500 focus:border-red-500' 
                                : 'border-gray-200 focus:border-[#c09050] hover:border-[#c09050]/50'
                            }`}
                            placeholder="your@email.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                        <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'transform scale-[1.02]' : ''}`}>
                          <Phone className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'phone' ? 'text-[#c09050]' : 'text-gray-400'}`} />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none bg-white text-gray-700 placeholder-gray-400 ${
                              errors.phone 
                                ? 'border-red-500 focus:border-red-500' 
                                : 'border-gray-200 focus:border-[#c09050] hover:border-[#c09050]/50'
                            }`}
                            placeholder="(929) 900-3056"
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service Type Dropdown */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">I'm interested in...</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <div
                          onClick={() => setOpenDropdown(!openDropdown)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white cursor-pointer hover:border-[#c09050]/50 transition-all duration-300"
                        >
                          <span className="text-gray-700 pl-8">
                            {services.find(s => s.value === formData.service)?.label}
                          </span>
                          <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openDropdown ? 'rotate-90' : ''}`} />
                        </div>
                        {openDropdown && (
                          <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                            {services.map((service, i) => (
                              <div
                                key={i}
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, service: service.value }));
                                  setOpenDropdown(false);
                                }}
                                className="px-4 py-3 text-gray-700 hover:bg-[#c09050]/10 hover:text-[#c09050] cursor-pointer transition-all duration-200"
                              >
                                {service.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:border-[#c09050] hover:border-[#c09050]/50 transition-all duration-300 focus:outline-none resize-none"
                        placeholder="Tell me about what you're looking for support with..."
                      />
                    </div>

                    {/* Submit Button - Updated to Black + Gold Border */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-black border-2 border-[#c09050] text-white rounded-xl font-semibold shadow-lg hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-['Montserrat']"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 text-center">
                          <div className="text-[#c09050]">{benefit.icon}</div>
                          <span className="text-gray-500 text-xs font-['Plus_Jakarta_Sans']">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </form>
                )}
              </div>

              {/* Right Side - Contact Information */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 md:p-10 border-l border-gray-200">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 font-['Montserrat']">Connect With Me</h2>
                  <p className="text-gray-500 text-sm md:text-base font-['Plus_Jakarta_Sans']">I'm here to help and answer any questions you might have.</p>
                </div>

                {/* Contact Methods - Updated with Gold colors */}
                <div className="space-y-4 mb-8">
                  {contactMethods.map((method, idx) => (
                    <a
                      key={idx}
                      href={method.link}
                      target={method.title === 'Book Online' ? '_blank' : '_self'}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white hover:shadow-md transition-all duration-300 group border border-gray-100"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-black text-lg mb-1 font-['Montserrat']">{method.title}</h3>
                        {method.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm md:text-base font-medium font-['Plus_Jakarta_Sans']">
                            {detail}
                          </p>
                        ))}
                        <span className="inline-flex items-center gap-1 text-sm text-[#c09050] mt-2 group-hover:gap-2 transition-all">
                          {method.action}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#c09050]" />
                    <h3 className="font-semibold text-black font-['Montserrat']">Office Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {officeHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-500 font-['Plus_Jakarta_Sans']">{schedule.day}</span>
                        <span className="text-gray-700 font-['Plus_Jakarta_Sans']">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* License Info */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-[#c09050]" />
                    <h3 className="font-semibold text-black font-['Montserrat']">Licensed In</h3>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 text-sm font-['Plus_Jakarta_Sans']">New York: #098940</p>
                    <p className="text-gray-500 text-sm font-['Plus_Jakarta_Sans']">New Jersey: #44SL06739500</p>
                    <p className="text-gray-500 text-sm font-['Plus_Jakarta_Sans']">Rhode Island: #ISW04317</p>
                  </div>
                </div>

                {/* Social Links - Instagram */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-black mb-4 font-['Montserrat']">Follow My Journey</h3>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.instagram.com/manifestcoachingllc/" 
                      target="_blank"
                      className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#c09050] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <line x1="17" y1="7" x2="17.01" y2="7" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/ayana-mckanney-lcsw-18879023/" 
                      target="_blank"
                      className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#c09050] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}