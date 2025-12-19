import { motion, type Variants } from "framer-motion";

export default function LearningHighlights() {
  const features = [
    {
      title: "Concept-Based Learning & Topic-Wise Clarity",
      description:
        "Each chapter builds strong fundamentals with clear explanations, helping students understand concepts step by step.",
      icon: "📘",
    },
    {
      title: "Critical Thinking & Real-Life Application",
      description:
        "Thoughtfully designed activities strengthen reasoning skills and apply learning to real-world and exam-style problems.",
      icon: "🧠",
    },
    {
      title: "Solved Previous Year Papers & Mock Tests",
      description:
        "Solved PYQs and full-length mock tests familiarize students with the actual exam pattern and difficulty level.",
      icon: "📝",
    },
    {
      title: "Practice Sets Aligned with Real Exam Conditions",
      description:
        "Timed practice sets simulate real exam pressure, improving speed, accuracy, and confidence.",
      icon: "⏱️",
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
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Makes the WEDA Book Set Truly Effective
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Designed to deliver clarity, confidence, and exam-ready preparation.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
                bg-white 
                rounded-2xl 
                p-8 
                shadow-md 
                hover:shadow-xl 
                transition-shadow 
                duration-300
              "
            >
              {/* Large Icon Container */}
              <div className="
                mb-6 
                h-24 
                w-24 
                rounded-2xl 
                bg-indigo-50 
                flex 
                items-center 
                justify-center
              ">
                <span className="text-5xl">{feature.icon}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
