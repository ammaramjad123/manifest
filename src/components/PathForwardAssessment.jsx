import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Brain, 
  Shield, 
  Target,
  Compass,
  Flower2,
  CheckCircle,
  MessageCircle,
  Calendar
} from "lucide-react";

export default function PathForwardAssessment() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

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

  const questions = [
    {
      id: 1,
      text: "What is your current primary focus?",
      options: [
        { value: "therapy", text: "I need to heal from past wounds or understand the root causes of my current distress." },
        { value: "coaching", text: "I want to bridge the gap between where I am now and a specific vision for my future." }
      ]
    },
    {
      id: 2,
      text: "How do you experience a new diagnosis?",
      options: [
        { value: "therapy", text: "I have a recent diagnosis (medical or mental health) that I need help processing, managing, or treating clinically." },
        { value: "coaching", text: "I have a diagnosis that is stable, and I want to learn how to thrive and reach my goals alongside it." }
      ]
    },
    {
      id: 3,
      text: "How are you navigating relationship changes?",
      options: [
        { value: "therapy", text: "A recent relationship change (loss, breakup, or conflict) has left me feeling emotionally depleted or 'unmoored.'" },
        { value: "coaching", text: "I am navigating a relationship change and want to focus on communication, boundaries, and how I show up in this new chapter." }
      ]
    },
    {
      id: 4,
      text: "How would you describe your daily functioning?",
      options: [
        { value: "therapy", text: "My symptoms (anxiety, depression, or mood shifts) significantly interfere with my ability to work or maintain connections." },
        { value: "coaching", text: "I am functioning well, but I feel 'stuck,' uninspired, or ready for a new level of personal evolution." }
      ]
    },
    {
      id: 5,
      text: "How do you experience grief and loss?",
      options: [
        { value: "therapy", text: "My grief feels heavy, complicated, or paralyzing, making it difficult to find a 'new normal.'" },
        { value: "coaching", text: "I have moved through the initial shock of loss and am now looking for ways to rebuild my life's purpose." }
      ]
    },
    {
      id: 6,
      text: "How does your nervous system respond to stress?",
      options: [
        { value: "therapy", text: "I often feel 'triggered,' experiencing flashbacks or intense physical sensations that make me feel unsafe in my body." },
        { value: "coaching", text: "I want to improve my mindset and learn how to stay grounded and high-performing during stressful situations." }
      ]
    },
    {
      id: 7,
      text: "How do you experience fears and phobias?",
      options: [
        { value: "therapy", text: "My fears are debilitating and cause me to avoid necessary life activities or social interactions entirely." },
        { value: "coaching", text: "My fears are primarily 'imposter syndrome' or hesitations that keep me from reaching my full potential." }
      ]
    },
    {
      id: 8,
      text: "What is your desired timeline for change?",
      options: [
        { value: "therapy", text: "I need a safe space to move slowly, reflect deeply, and process my history and 'why.'" },
        { value: "coaching", text: "I want a high-accountability partnership focused on taking actionable steps and focusing on 'how.'" }
      ]
    },
    {
      id: 9,
      text: "What type of professional guidance are you seeking?",
      options: [
        { value: "therapy", text: "I need a licensed clinician who can provide emotional containment and evidence-based clinical treatment." },
        { value: "coaching", text: "I want a strategist and coach who will challenge my limits and push me toward manifesting my goals." }
      ]
    },
    {
      id: 10,
      text: "What is your desired outcome?",
      options: [
        { value: "therapy", text: "I am looking for emotional regulation, stability, and a sense of internal peace." },
        { value: "coaching", text: "I am looking for peak performance, personal evolution, and self-actualization." }
      ]
    }
  ];

  const handleAnswer = (value) => {
    setSelectedOption(value);
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        calculateResult();
      }
    }, 300);
  };

  const calculateResult = () => {
    const therapyCount = Object.values(answers).filter(v => v === "therapy").length;
    const coachingCount = Object.values(answers).filter(v => v === "coaching").length;
    
    const currentAnswer = answers[questions[currentQuestion]?.id];
    const finalTherapyCount = therapyCount + (currentAnswer === "therapy" ? 1 : 0);
    const finalCoachingCount = coachingCount + (currentAnswer === "coaching" ? 1 : 0);
    
    const resultType = finalTherapyCount > finalCoachingCount ? "therapy" : "coaching";
    
    setResult({
      type: resultType,
      therapyCount: finalTherapyCount,
      coachingCount: finalCoachingCount,
      total: finalTherapyCount + finalCoachingCount
    });
    setShowResult(true);
    setSelectedOption(null);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
    setSelectedOption(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="assessment" className="relative w-full py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #6B46C1 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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
              The Path Forward
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']"
          >
            Clinical Therapy or{" "}
            <span className="bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] bg-clip-text text-transparent">
              Transformational Coaching?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base sm:text-lg font-['Plus_Jakarta_Sans']"
          >
            Take this assessment to discover whether you're in a season of Restoration or Expansion
          </motion.p>
        </motion.div>

        {/* Assessment Card */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            
            {!showResult ? (
              // Questions View
              <div className="p-6 sm:p-8 md:p-10">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-500 mb-2 font-['Plus_Jakarta_Sans']">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 font-['Montserrat']">
                    {questions[currentQuestion].text}
                  </h3>
                  
                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 group ${
                          selectedOption === option.value
                            ? "border-[#6B46C1] bg-[#6B46C1]/5 shadow-md"
                            : "border-gray-200 hover:border-[#6B46C1] hover:bg-[#6B46C1]/5"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Custom Radio Button */}
                          <div className={`w-5 h-5 mt-0.5 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                            selectedOption === option.value
                              ? "border-[#6B46C1] bg-[#6B46C1]"
                              : "border-gray-300 group-hover:border-[#6B46C1]"
                          }`}>
                            {selectedOption === option.value && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                          <span className={`text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans'] ${
                            selectedOption === option.value
                              ? "text-gray-900 font-medium"
                              : "text-gray-700"
                          }`}>
                            {option.text}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Progress Indicators - Fully Rounded Bullets */}
                <div className="flex justify-center gap-2 mt-8 flex-wrap">
                  {questions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentQuestion(idx);
                        setSelectedOption(answers[questions[idx].id] || null);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentQuestion 
                          ? "w-6 bg-[#6B46C1]" 
                          : answers[questions[idx].id] 
                            ? "w-2 bg-[#6B46C1]/50" 
                            : "w-2 bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              // Results View
              <div className="p-6 sm:p-8 md:p-10">
                {/* Result Icon */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${
                    result?.type === "therapy" 
                      ? "from-[#6B46C1] to-[#8B5CF6]" 
                      : "from-[#D69E2E] to-[#F6E05E]"
                  } flex items-center justify-center shadow-lg mb-4`}>
                    {result?.type === "therapy" ? (
                      <Heart className="w-10 h-10 text-white" />
                    ) : (
                      <Target className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-black mb-2 font-['Montserrat']">
                    {result?.type === "therapy" ? "Season of Restoration" : "Season of Expansion"}
                  </h3>
                  <p className="text-gray-500 font-['Plus_Jakarta_Sans']">
                    {result?.therapyCount} Therapy responses • {result?.coachingCount} Coaching responses
                  </p>
                </div>

                {/* Result Description */}
                <div className="mb-8 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  {result?.type === "therapy" ? (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-[#6B46C1]" />
                        <h4 className="font-bold text-black font-['Montserrat']">Clinical Therapy</h4>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                        You are likely in a season of <span className="font-bold text-[#6B46C1]">Restoration</span>. 
                        Therapy provides a regulated medical model to treat the "why" behind your distress. 
                        It is the necessary foundation for healing—especially when navigating a new diagnosis, 
                        complicated grief, or traumatic relationship shifts.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-[#D69E2E]" />
                        <h4 className="font-bold text-black font-['Montserrat']">Transformational Coaching</h4>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                        You are likely in a season of <span className="font-bold text-[#D69E2E]">Expansion</span>. 
                        Coaching is a future-focused, proactive partnership designed for those ready to move 
                        from "functioning" to "flourishing." It focuses on the "how" of manifesting your 
                        evolved self and navigating life changes with grit and grace.
                      </p>
                    </>
                  )}
                </div>

                {/* The Synergy Note */}
                <div className="mb-8 p-4 rounded-xl bg-[#6B46C1]/5 border border-[#6B46C1]/10 text-center">
                  <p className="text-xs sm:text-sm text-gray-600 font-['Plus_Jakarta_Sans']">
                    <span className="font-bold text-[#6B46C1]">The Synergy:</span> These paths are often sequential. 
                    Many find it beneficial to begin with therapy to shore up their emotional ground, 
                    then transition into coaching once they feel stable enough to build their "skyscraper."
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/manifestcoachingllc"
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] text-white font-bold transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 font-['Montserrat']"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Free Consultation
                  </a>
                  <button
                    onClick={resetAssessment}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-600 font-bold hover:border-[#6B46C1] hover:text-[#6B46C1] transition-all duration-300 font-['Montserrat']"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Take Assessment Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 md:mt-8 flex flex-wrap items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4 text-[#6B46C1]" />
            <span className="font-['Plus_Jakarta_Sans']">Evidence-Based Approaches</span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Compass className="w-4 h-4 text-[#6B46C1]" />
            <span className="font-['Plus_Jakarta_Sans']">26+ Years Experience</span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Flower2 className="w-4 h-4 text-[#6B46C1]" />
            <span className="font-['Plus_Jakarta_Sans']">Client-Centered Care</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}