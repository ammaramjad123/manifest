import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Calendar,
  Menu,
  X,
  Shield,
  Heart,
  Sparkles,
  Leaf,
  ChevronDown,
  CheckCircle,
  Clock,
  Video,
  Brain,
  Users,
  BookOpen
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  
  const location = useLocation();

  // Brand colors
  const brandPurple = "#6B46C1";
  const brandWhite = "#FFFFFF";

  // Hash navigation function
  const handleHashNavigation = (link) => {
    const currentPath = location.pathname;
    const targetPath = link.targetPage || "/";
    const hash = link.path;
    
    if (currentPath === targetPath) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `${targetPath}${hash}`;
    }
    setMobileDropdownOpen(false);
  };

  // Scroll handling with hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileDropdownOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const specialtiesList = [
    { id: "anxiety", label: "Anxiety & Depression", icon: Heart, desc: "Evidence-based approaches" },
    { id: "trauma", label: "Trauma & PTSD", icon: Shield, desc: "Trauma-focused therapy" },
    { id: "women", label: "Women's Issues", icon: Sparkles, desc: "Empowerment & support" },
    { id: "coaching", label: "Life Coaching", icon: Brain, desc: "MANIFEST method" },
    { id: "immigration", label: "Immigration Evaluations", icon: BookOpen, desc: "Legal & psychological support" }
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="py-3 sm:py-4 transition-all duration-500">
            <div
              className={`relative mx-auto flex items-center justify-between transition-all duration-500 ${
                scrolled
                  ? "bg-white/95 backdrop-blur-xl rounded-full shadow-2xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3"
                  : "bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4"
              }`}
              style={{ backdropFilter: "blur(12px)" }}
            >
              {/* LOGO */}
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex-shrink-0 flex items-center space-x-2 group"
              >
                <img
                  src="/logo.png"
                  alt="The Peace Practice"
                  className="object-contain transition-all duration-300 h-22 w-auto sm:h-18 md:h-26"
                />
               
              </Link>

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 mx-4 xl:mx-8">
                <Link
                  to="/"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`group relative whitespace-nowrap text-base xl:text-lg font-semibold transition-colors duration-300 ${
                    isActive("/") ? "text-[#6B46C1]" : "text-gray-700 hover:text-[#6B46C1]"
                  }`}
                >
                  Home
                  <span
                    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                      isActive("/") ? "w-full bg-[#6B46C1]" : "w-0 bg-[#6B46C1]"
                    }`}
                  />
                </Link>

                <Link
                  to="/services"
                  className={`group relative whitespace-nowrap text-base xl:text-lg font-semibold transition-colors duration-300 ${
                    location.pathname === "/services" ? "text-[#6B46C1]" : "text-gray-700 hover:text-[#6B46C1]"
                  }`}
                >
                  Services
                  <span
                    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                      location.pathname === "/services" ? "w-full bg-[#6B46C1]" : "w-0 bg-[#6B46C1]"
                    }`}
                  />
                </Link>

               <Link
  to="/about"
  className={`group relative whitespace-nowrap text-base xl:text-lg font-semibold transition-colors duration-300 ${
    location.pathname === "/about" ? "text-[#6B46C1]" : "text-gray-700 hover:text-[#6B46C1]"
  }`}
>
  About
  <span
    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
      location.pathname === "/about" ? "w-full bg-[#6B46C1]" : "w-0 bg-[#6B46C1]"
    }`}
  />
</Link>
                {/* Desktop Dropdown for Specialties */}
                <div 
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <button
                    className={`group relative whitespace-nowrap text-base xl:text-lg font-semibold transition-colors duration-300 flex items-center gap-1 text-gray-700 hover:text-[#6B46C1]`}
                  >
                    Specialties
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                    <span className="absolute left-0 top-full mt-1 h-0.5 w-0 rounded-full bg-[#6B46C1] transition-all duration-300 group-hover:w-full" />
                  </button>
                  
                  {showDropdown && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1]/5 to-[#8B5CF6]/5"></div>
                      <div className="relative p-2">
                        {specialtiesList.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                handleHashNavigation({ label: item.label, path: `#${item.id}`, targetPage: "/" });
                                setShowDropdown(false);
                              }}
                              className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl hover:bg-[#6B46C1]/10 transition-all duration-300 group"
                            >
                              <div className="w-10 h-10 bg-[#6B46C1]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon className="w-5 h-5 text-[#6B46C1]" />
                              </div>
                              <div className="text-left">
                                <p className="font-semibold text-gray-800">{item.label}</p>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

               <Link
  to="/contact"
  className={`group relative whitespace-nowrap text-base xl:text-lg font-semibold transition-colors duration-300 ${
    location.pathname === "/contact" ? "text-[#6B46C1]" : "text-gray-700 hover:text-[#6B46C1]"
  }`}
>
  Contact
  <span
    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
      location.pathname === "/contact" ? "w-full bg-[#6B46C1]" : "w-0 bg-[#6B46C1]"
    }`}
  />
</Link>
              </nav>

              {/* DESKTOP CTA BUTTONS */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                <a
                  href="https://calendly.com/manifestcoachingllc"
                  target="_blank"
                  className="flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full font-bold text-sm xl:text-base bg-[#6B46C1]/10 border border-[#6B46C1]/20 text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white transition-all duration-300"
                >
                  <Calendar size={16} className="xl:w-[18px] xl:h-[18px]" />
                  <span>Book Consultation</span>
                </a>
                <a href="#contact">
                  <button
                    className="flex items-center gap-2 px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-bold text-sm xl:text-base bg-[#6B46C1] text-white shadow-lg hover:bg-[#8B5CF6] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Phone size={16} className="xl:w-[18px] xl:h-[18px]" />
                    <span>Call Now</span>
                  </button>
                </a>
              </div>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition hover:bg-gray-100"
              >
                <Menu size={24} className="sm:w-6 sm:h-6 text-[#6B46C1]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - FULL SCREEN */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`relative h-full w-full overflow-y-auto transition-all duration-500 transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="min-h-screen bg-white shadow-2xl">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200">
              <Link
                to="/"
                className="flex items-center space-x-2"
                onClick={() => setMobileOpen(false)}
              >
                <img
                  src="/logo.png"
                  alt="The Peace Practice"
                  className="h-22 w-auto object-contain"
                />
                
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition hover:bg-gray-100"
              >
                <X size={24} className="sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col p-5 sm:p-6 space-y-2">
              <Link
                to="/"
                className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
                  isActive("/") 
                    ? "bg-[#6B46C1]/10 text-[#6B46C1] border-l-4 border-[#6B46C1]" 
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/services"
                className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
                  location.pathname === "/services" 
                    ? "bg-[#6B46C1]/10 text-[#6B46C1] border-l-4 border-[#6B46C1]" 
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>

             <Link
  to="/about"
  className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
    location.pathname === "/about" 
      ? "bg-[#6B46C1]/10 text-[#6B46C1] border-l-4 border-[#6B46C1]" 
      : "text-gray-800 hover:bg-gray-100"
  }`}
  onClick={() => setMobileOpen(false)}
>
  About
</Link>

              {/* Mobile Dropdown for Specialties */}
              <div className="space-y-2">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold text-gray-800 hover:bg-gray-100 transition-all duration-300"
                >
                  <span>Specialties</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileDropdownOpen && (
                  <div className="ml-4 space-y-2 animate-fadeIn">
                    {specialtiesList.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            handleHashNavigation({ label: item.label, path: `#${item.id}`, targetPage: "/" });
                            setMobileOpen(false);
                          }}
                          className="flex items-center space-x-3 w-full py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
                        >
                          <div className="w-8 h-8 bg-[#6B46C1]/10 rounded-full flex items-center justify-center">
                            <Icon className="w-4 h-4 text-[#6B46C1]" />
                          </div>
                          <div className="text-left">
                            <p className="font-semibold text-gray-800">{item.label}</p>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
  to="/contact"
  className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
    location.pathname === "/contact" 
      ? "bg-[#6B46C1]/10 text-[#6B46C1] border-l-4 border-[#6B46C1]" 
      : "text-gray-800 hover:bg-gray-100"
  }`}
  onClick={() => setMobileOpen(false)}
>
  Contact
</Link>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="p-5 sm:p-6 border-t border-gray-200 mt-4 space-y-3">
              <a
                href="https://calendly.com/manifestcoachingllc"
                target="_blank"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-3.5 sm:py-4 rounded-full border-2 border-[#6B46C1] text-[#6B46C1] font-bold text-base sm:text-lg hover:bg-[#6B46C1] hover:text-white transition-all duration-300"
              >
                <Calendar size={18} className="sm:w-5 sm:h-5" />
                <span>Book Consultation</span>
              </a>
              <a href="#contact">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-3.5 sm:py-4 rounded-full bg-[#6B46C1] text-white font-bold text-base sm:text-lg hover:bg-[#8B5CF6] transition-all duration-300 shadow-lg"
                >
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                  <span>Call (929) 900-3056</span>
                </button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="p-5 sm:p-6 pt-0 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Shield size={14} className="sm:w-4 sm:h-4 text-[#6B46C1]" />
                <span>26+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-[#6B46C1]" />
                <span>NYU Graduate</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Clock size={14} className="sm:w-4 sm:h-4 text-[#6B46C1]" />
                <span>Accepting New Clients</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Video size={14} className="sm:w-4 sm:h-4 text-[#6B46C1]" />
                <span>Online Therapy</span>
              </div>
            </div>

            {/* Phone Numbers Section */}
            <div className="p-5 sm:p-6 pt-0 flex flex-col gap-2 text-center">
              <a href="tel:+19299003056" className="text-sm text-gray-600 hover:text-[#6B46C1]">
                (929) 900-3056
              </a>
              <a href="tel:+19299252554" className="text-sm text-gray-600 hover:text-[#6B46C1]">
                (929) 925-2554
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}