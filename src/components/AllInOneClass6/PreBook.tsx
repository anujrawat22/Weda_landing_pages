import { motion } from 'framer-motion';
import { FaCheckCircle, FaBookOpen, FaStar, FaTrophy, FaMedal } from 'react-icons/fa';

const PreBook = () => {
  const books = [
    {
      id: 1,
      title: "RIMC Combo Pack",
      description: "Boost your RIMC entrance exam preparation with the WEDA RIMC Combo Pack, combining full-length practice papers and authentic previous year papers in one powerful set. Expertly designed by defence professionals, it closely matches real exam patterns, difficulty, and timing. Covering Mathematics, English, General Science, and General Knowledge, it includes detailed solutions, smart strategies, and time-management tips. Ideal for beginners and advanced aspirants, this combo helps build accuracy, confidence, and true exam readiness for RIMC success",
      
       image: "/WEDA.png",
      highlights: ["Full-length Practice Papers", "Authentic Previous Year Papers", "Detailed Solutions & Strategies"]
    },
    {
      id: 2,
      title: "WEDA Complete Book Set for Class 9",
      description: "Prepare smarter and stay ahead with the WEDA Complete Book Set for Class 9 — a comprehensive bundle of five expertly designed guidebooks covering Social Science, English, General Science, Mathematics, and Intelligence, specially curated for Sainik School (Class 9 Entry) and Rashtriya Military School (RMS CET) examinations. Developed by The Winning Edge Defence Academy (WEDA) under the guidance of ex-defence officers, experienced faculty, and NEP-aligned subject experts, this set delivers a structured, exam-focused, and concept-driven approach to help aspirants crack highly competitive defence school entrances with confidence.",
     image: "/SSRMS9.png",
      highlights: ["Structured & Exam-Focused", "Concept-Driven Approach", "NEP-Aligned Content"]
    }
  ];

  return (
    <section className="relative py-20 bg-stone-50 overflow-hidden">
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
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-700 font-bold tracking-wider uppercase text-sm mb-2 block">Exclusive Collections</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
            <span className="text-green-700 block mb-2">Pre-Booking Open:</span>
            WEDA RIMC Practice & Previous Papers + Sainik School Class 9 Books
          </h2>
          <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full my-6"></div>
        </div>

        {books.map((book, index) => (
          <div key={book.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="flex items-center gap-3">
                 <span className="p-2 bg-green-100 rounded-lg text-green-700">
                    <FaBookOpen className="w-5 h-5" />
                 </span>
                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-green-950">
                    {book.title}
                 </h3>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                {book.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {book.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-[10px] font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Book Now
                </button>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white">
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-colors duration-300 z-10"></div>
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative elements */}
              <div className={`absolute -z-10 top-10 ${index % 2 !== 0 ? '-left-10' : '-right-10'} w-full h-full bg-green-100/50 rounded-2xl`}></div>
              <div className={`absolute -z-10 -bottom-10 ${index % 2 !== 0 ? '-right-10' : '-left-10'} w-40 h-40 bg-green-200/30 rounded-full blur-2xl`}></div>
            </motion.div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default PreBook;
