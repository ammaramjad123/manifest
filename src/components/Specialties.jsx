import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles,
  Brain,
  Heart,
  Shield,
  Users,
  BookOpen,
  Flower2,
  Target,
  Compass,
  Star,
  ChevronRight,
  Clock,
  HandHeart
} from "lucide-react";

export default function Specialties() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const specialties = [
    {
      id: "anxiety-depression",
      icon: <Brain size={32} />,
      title: "Anxiety & Depression",
      description: "Evidence-based treatment to help you break free from anxious thoughts, manage depressive symptoms, and reclaim your joy and peace.",
      longDescription: "Using CBT, ACT, and mindfulness-based approaches, I help clients identify triggers, challenge negative thought patterns, and develop coping strategies that work. Whether you're experiencing generalized anxiety, panic attacks, social anxiety, or persistent low mood, we'll work together to restore balance.",
      conditions: [
        "Generalized Anxiety Disorder",
        "Panic Attacks & Agoraphobia",
        "Social Anxiety",
        "Major Depressive Disorder",
        "Persistent Depressive Disorder",
        "Seasonal Affective Disorder"
      ],
      approaches: ["CBT", "ACT", "Mindfulness-Based", "Behavioral Activation"],
      color: "#6B46C1",
      gradient: "from-[#6B46C1] to-[#8B5CF6]",
      bgLight: "bg-[#6B46C1]/5",
      iconBg: "bg-[#6B46C1]/10"
    },
    {
      id: "trauma-ptsd",
      icon: <Shield size={32} />,
      title: "Trauma & PTSD",
      description: "Specialized trauma-informed care to help you process painful experiences and reclaim your sense of safety and control.",
      longDescription: "Trauma can leave you feeling stuck, triggered, and disconnected from yourself. Using evidence-based approaches including Trauma-Focused CBT and Accelerated Resolution Therapy (ART), I help clients process traumatic memories, reduce hypervigilance, and rebuild a sense of safety in their bodies and relationships.",
      conditions: [
        "PTSD",
        "Complex Trauma",
        "Childhood Abuse",
        "Sexual Assault",
        "Domestic Violence",
        "Vicarious Trauma"
      ],
      approaches: ["Trauma-Focused CBT", "ART", "Somatic Approaches", "EMDR-Informed"],
      color: "#DC2626",
      gradient: "from-[#DC2626] to-[#EF4444]",
      bgLight: "bg-[#DC2626]/5",
      iconBg: "bg-[#DC2626]/10"
    },
    {
      id: "women-issues",
      icon: <Heart size={32} />,
      title: "Women's Issues",
      description: "A safe, empowering space to navigate the unique challenges women face across all life stages.",
      longDescription: "From reproductive mental health to career transitions, from motherhood to menopause, I provide compassionate support tailored to women's unique experiences. Together we'll explore societal pressures, relationship dynamics, and personal identity to help you thrive authentically.",
      conditions: [
        "Perinatal & Postpartum Mental Health",
        "Pregnancy Loss & Infertility",
        "Menopause Transition",
        "Work-Life Balance",
        "Self-Esteem & Body Image",
        "Caregiver Burnout"
      ],
      approaches: ["Person-Centered", "Feminist Therapy", "Narrative Therapy", "Strengths-Based"],
      color: "#D53F8C",
      gradient: "from-[#D53F8C] to-[#ED64A6]",
      bgLight: "bg-[#D53F8C]/5",
      iconBg: "bg-[#D53F8C]/10"
    },
    {
      id: "life-transitions",
      icon: <Compass size={32} />,
      title: "Life Transitions",
      description: "Navigate major life changes with clarity, resilience, and purpose.",
      longDescription: "Life's transitions can be disorienting and overwhelming. Whether you're facing divorce, career change, empty nest, retirement, or relocation, I provide a supportive space to process loss, clarify values, and build a meaningful path forward.",
      conditions: [
        "Divorce & Separation",
        "Career Changes",
        "Empty Nest Syndrome",
        "Retirement Adjustment",
        "Relocation Stress",
        "Identity Shifts"
      ],
      approaches: ["Solution-Focused", "Narrative Therapy", "ACT", "Life Coaching Integration"],
      color: "#3182CE",
      gradient: "from-[#3182CE] to-[#63B3ED]",
      bgLight: "bg-[#3182CE]/5",
      iconBg: "bg-[#3182CE]/10"
    },
    {
      id: "grief-loss",
      icon: <Flower2 size={32} />,
      title: "Grief & Loss",
      description: "Compassionate support through the unique journey of grief, loss, and complicated bereavement.",
      longDescription: "Grief is not a problem to be solved but a journey to be honored. I provide a safe container to process all forms of loss—death, divorce, miscarriage, pet loss, or loss of identity. Together we'll navigate the waves of grief and find meaning while honoring what was lost.",
      conditions: [
        "Complicated Grief",
        "Anticipatory Grief",
        "Sudden Loss",
        "Perinatal Loss",
        "Disenfranchised Grief",
        "Ambiguous Loss"
      ],
      approaches: ["Complicated Grief Treatment", "Meaning-Making", "Narrative Therapy", "Mindfulness"],
      color: "#DD6B20",
      gradient: "from-[#DD6B20] to-[#F6AD55]",
      bgLight: "bg-[#DD6B20]/5",
      iconBg: "bg-[#DD6B20]/10"
    },
    {
      id: "relationship-issues",
      icon: <Users size={32} />,
      title: "Relationship Issues",
      description: "Individual therapy focused on improving your relationships with partners, family, and yourself.",
      longDescription: "Healthy relationships start with self-awareness. I help individuals identify patterns that sabotage connection, improve communication skills, set healthy boundaries, and heal from relationship wounds. Whether you're single, partnered, or navigating family dynamics, we'll work toward the relationships you deserve.",
      conditions: [
        "Attachment Wounds",
        "Communication Difficulties",
        "Boundary Setting",
        "Codependency",
        "Trust Issues",
        "Family Conflict"
      ],
      approaches: ["Attachment-Based", "Emotionally Focused", "Interpersonal Therapy", "CBT"],
      color: "#38A169",
      gradient: "from-[#38A169] to-[#68D391]",
      bgLight: "bg-[#38A169]/5",
      iconBg: "bg-[#38A169]/10"
    },
    {
      id: "racial-trauma",
      icon: <HandHeart size={32} />,
      title: "Racial & Cultural Trauma",
      description: "Affirming, culturally-responsive care for BIPOC individuals navigating racial stress and cultural identity.",
      longDescription: "Racial trauma is real and valid. I provide a culturally-affirming space to process experiences of discrimination, microaggressions, and systemic oppression. Together we'll honor your cultural identity, build coping strategies, and reclaim your power in a world that often marginalizes.",
      conditions: [
        "Racial Discrimination",
        "Microaggressions",
        "Cultural Identity Conflict",
        "Immigration Stress",
        "Intergenerational Trauma",
        "Code-Switching Fatigue"
      ],
      approaches: ["Racial Trauma-Informed", "Culturally-Affirming", "Narrative Therapy", "Empowerment-Based"],
      color: "#0891B2",
      gradient: "from-[#0891B2] to-[#06B6D4]",
      bgLight: "bg-[#0891B2]/5",
      iconBg: "bg-[#0891B2]/10"
    },
    {
      id: "life-coaching",
      icon: <Target size={32} />,
      title: "Life Coaching",
      description: "The MANIFEST Method coaching for those ready to move from functioning to flourishing.",
      longDescription: "The MANIFEST Method is a proprietary coaching framework designed to help you bridge the gap between where you are and where you want to be. This high-accountability partnership focuses on actionable steps, mindset shifts, and personal evolution. Perfect for those ready to build their 'skyscraper' after establishing solid ground.",
      conditions: [
        "Career Advancement",
        "Personal Growth",
        "Goal Achievement",
        "Imposter Syndrome",
        "Peak Performance",
        "Self-Actualization"
      ],
      approaches: ["MANIFEST Method", "Solution-Focused", "Accountability Partnership", "Strengths-Based"],
      color: "#D69E2E",
      gradient: "from-[#D69E2E] to-[#F6E05E]",
      bgLight: "bg-[#D69E2E]/5",
      iconBg: "bg-[#D69E2E]/10"
    }
  ];

  return (
    <section id="specialties" className="relative w-full py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #6B46C1 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#c09050] font-['Montserrat']">
              Clinical Specialties
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 font-['Montserrat']"
          >
            Areas of{" "}
            <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg sm:text-xl font-['Plus_Jakarta_Sans'] px-4"
          >
            Evidence-based approaches tailored to your unique needs and goals
          </motion.p>
        </motion.div>

        {/* Specialties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(specialty.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-full"
            >
              <Link to={`/specialties/${specialty.id}`} className="block h-full">
                <div className={`relative h-full rounded-2xl ${specialty.bgLight} backdrop-blur-sm border border-gray-100 p-6 md:p-7 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col`}>
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl ${specialty.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <div style={{ color: specialty.color }} className="group-hover:text-[#6B46C1] transition-colors duration-300">
                      {specialty.icon}
                    </div>
                  </div>

                  {/* Title */}
                 <h3
  className="text-2xl font-black mb-3 font-['Montserrat'] transition-colors duration-300"
  style={{
    color:
      hoveredCard === specialty.id
        ? specialty.color
        : "#000"
  }}
>
  {specialty.title}
</h3>

                  {/* Description */}
                  <p className="text-gray-700 text-base leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
                    {specialty.description}
                  </p>

                  {/* Approaches Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {specialty.approaches.slice(0, 2).map((approach, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full bg-white/50 text-gray-600 text-xs font-['Plus_Jakarta_Sans'] group-hover:bg-[#6B46C1]/10 group-hover:text-[#6B46C1] transition-colors duration-300">
                        {approach}
                      </span>
                    ))}
                    {specialty.approaches.length > 2 && (
                      <span className="px-2.5 py-1 rounded-full bg-white/50 text-gray-600 text-xs font-['Plus_Jakarta_Sans'] group-hover:bg-[#6B46C1]/10 group-hover:text-[#6B46C1] transition-colors duration-300">
                        +{specialty.approaches.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Learn More Link - Fixed at bottom */}
                  <div className="flex items-center gap-2 text-base font-semibold mt-auto pt-4 group-hover:text-[#6B46C1] transition-colors duration-300" style={{ color: specialty.color }}>
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Decorative Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${specialty.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            to="/specialties"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-base md:text-lg transition-all duration-500 hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 font-['Montserrat']"
          >
            <span>View All Specialties</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}