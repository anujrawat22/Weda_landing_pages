import { motion, type Variants } from "framer-motion";
import { FaBookReader, FaBrain, FaClipboardCheck, FaStopwatch, FaLightbulb, FaPuzzlePiece, FaPenNib, FaGraduationCap } from "react-icons/fa";

export default function LearningHighlights() {
  const features = [
    {
      title: "Concept-Based Learning & Topic-Wise Clarity",
      description:
        "Each chapter builds strong fundamentals with clear explanations, helping students understand concepts step by step.",
      icon: <FaBookReader />,
    },
    {
      title: "Critical Thinking & Real-Life Application",
      description:
        "Thoughtfully designed activities strengthen reasoning skills and apply learning to real-world and exam-style problems.",
      icon: <FaBrain />,
    },
    {
      title: "Solved Previous Year Papers & Mock Tests",
      description:
        "Solved PYQs and full-length mock tests familiarize students with the actual exam pattern and difficulty level.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Practice Sets Aligned with Real Exam Conditions",
      description:
        "Timed practice sets simulate real exam pressure, improving speed, accuracy, and confidence.",
      icon: <FaStopwatch />,
      },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-stone-50 py-16 md:py-24 px-6 relative overflow-hidden">
       {/* Decorative Background Pattern (Tactical Dots) */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#14532d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>
       
       {/* Abstract Blobs - Animated */}
       <motion.div 
         animate={{ 
           scale: [1, 1.2, 1],
           rotate: [0, 90, 0],
         }}
         transition={{ 
           duration: 20, 
           repeat: Infinity, 
           ease: "linear" 
         }}
         className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"
       />
       <motion.div 
         animate={{ 
           scale: [1, 1.3, 1],
           x: [0, 50, 0],
         }}
         transition={{ 
           duration: 25, 
           repeat: Infinity, 
           ease: "easeInOut" 
         }}
         className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-200/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"
       />

       {/* Floating Background Icons */}
       <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] text-green-800/10 text-6xl pointer-events-none"
       >
          <FaLightbulb />
       </motion.div>

       <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[5%] text-green-900/10 text-7xl pointer-events-none"
       >
          <FaPuzzlePiece />
       </motion.div>

       <motion.div 
          animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-[5%] text-green-700/10 text-5xl pointer-events-none"
       >
          <FaPenNib />
       </motion.div>

       <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-32 right-[15%] text-green-900/10 text-6xl pointer-events-none"
       >
          <FaGraduationCap />
       </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
            Why Choose Weda
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-green-950 leading-tight">
            Designed for <span className="text-green-700">Victory</span>
          </h2>
          <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full my-6"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            A scientifically structured approach to clear Sainik School & RMS entrance exams with confidence and precision.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="flex items-start gap-6">
                {/* Icon Container */}
                <div className="shrink-0 relative">
                   <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-700 text-2xl md:text-3xl group-hover:bg-green-700 group-hover:text-white transition-colors duration-300 shadow-sm">
                      {feature.icon}
                   </div>
                   {/* Decorative Dot */}
                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-green-950 mb-3 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom Right Number Watermark */}
              <div className="absolute -bottom-4 -right-4 text-8xl font-serif font-bold text-gray-50 opacity-0 group-hover:opacity-50 transition-opacity duration-500 select-none pointer-events-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
