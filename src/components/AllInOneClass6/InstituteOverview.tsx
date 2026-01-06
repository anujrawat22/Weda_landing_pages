import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaUniversity, FaUserGraduate, FaChalkboardTeacher, FaMedal, FaTrophy, FaStar } from 'react-icons/fa';

const InstituteOverview = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // const features = [
  //   {
  //     icon: <FaUniversity />,
  //     title: "Premier Institute",
  //     desc: "Dedicated to Sainik School, RIMC, RMS, and NDA aspirants."
  //   },
  //   {
  //     icon: <FaChalkboardTeacher />,
  //     title: "Expert Mentoring",
  //     desc: "Structured courses and result-oriented teaching methods."
  //   },
  //   {
  //     icon: <FaUserGraduate />,
  //     title: "Holistic Growth",
  //     desc: "Developing leadership, confidence, and values."
  //   },
  //   {
  //     icon: <FaMedal />,
  //     title: "Proven Success",
  //     desc: "Hundreds of successful selections every year."
  //   }
  // ];

  return (
    <section className="relative bg-green-50/50 overflow-hidden py-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl -z-10"></div>

      {/* Background Animated Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[5%] text-green-200/40 text-6xl"
        >
          <FaTrophy />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 right-[10%] text-green-200/40 text-5xl"
        >
          <FaMedal />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-[15%] text-green-200/30 text-4xl"
        >
          <FaStar />
        </motion.div>

        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-40 right-[5%] text-green-200/30 text-7xl"
        >
          <FaTrophy />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-white border border-green-100 text-green-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
            Our Academy
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-serif text-green-950 leading-tight mb-6">
            The Winning Edge <span className="text-green-700">Defence Academy</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-6">
            The Winning Edge Defence Academy (WEDA) is a top coaching institute that is dedicated to the tough and comprehensive instruction of the young aspirants who will take the entrance examinations and written tests of Sainik School, RIMC, RMS, and NDA. Founded on discipline, academic excellence, and personalised mentoring, WEDA provides effectively structured programs, led by an experienced faculty, using resultoriented teaching methodologies, regular mock assessments, and a focussed, supportive learning environment.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
            WEDA does not only prepare the candidates for the examinations but also stresses on the students holistically development through the acquiring of leadership qualities, confidence, good morals, and the true defence spirit. WEDA, with its record of hundreds of selections every year, has become the most trusted institution among parents and students who are in search of reliable, highquality guidance. Our goal is absolutely one to give every child the advantage that he or she needs to be able to excel in defence examinations and to be successful in life.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        {/* <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-green-50 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-700 text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-green-950 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default InstituteOverview;
