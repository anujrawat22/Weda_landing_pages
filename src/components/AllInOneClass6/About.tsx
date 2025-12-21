import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaGraduationCap, FaUserTie } from 'react-icons/fa';

const About = () => {
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

  return (
    <section className="relative bg-white overflow-hidden py-20">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-5%] w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[10%] right-[-5%] w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 left-[20%] w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Image with Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2 relative flex justify-center"
          >
            {/* Animated Blobs behind image */}
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 m-auto w-[120%] h-[120%] bg-green-100/50 rounded-full z-0 blur-xl"
            />
            
            <div className="relative z-10 w-full">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/director.png" 
                  alt="Director of WEDA Education" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Dedicated to Excellence</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-200/50 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-600/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-semibold tracking-wide uppercase">
              About Us
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-serif text-green-950 leading-tight">
              Meet Our <span className="text-green-700">Director</span>
            </motion.h2>
            
            <motion.h3 variants={itemVariants} className="text-xl font-bold text-green-800 mt-2">
              Col Amardeep Singh, SM (Retd)
            </motion.h3>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <motion.p variants={itemVariants}>
                Col Amardeep Singh, SM (Retd), is an ex-NDA officer and a seasoned military professional who served the Indian Army for 25 years. He brings extensive operational, instructional, and leadership experience from Jammu & Kashmir, Manipur, and the UN Mission in Ethiopia & Eritrea.
              </motion.p>
              <motion.p variants={itemVariants}>
                He has held prestigious instructional assignments at The Infantry School, the Indian Military Academy (IMA), and the Army War College. Founded in 2019, The Winning Edge Defence Academy (WEDA) has emerged as a leading institution for Defence Entrance Exam preparation under his guidance.
              </motion.p>
              <motion.p variants={itemVariants}>
                His guiding motto, <span className="italic font-medium text-green-800">“Excellence through Hard Work and Dedication,”</span> forms the core of WEDA’s philosophy and continues to inspire the entire team in their pursuit of academic and professional excellence.
              </motion.p>
            </div>
            
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-700">
                  <FaUserTie className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-green-950 mb-1">Expert Guidance</h3>
                  <p className="text-sm text-gray-600">Curated by experienced mentors and defence veterans.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-700">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-green-950 mb-1">Proven Results</h3>
                  <p className="text-sm text-gray-600">Helping thousands of students achieve their dreams.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
