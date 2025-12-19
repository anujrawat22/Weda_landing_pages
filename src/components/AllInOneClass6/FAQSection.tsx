import { useState } from 'react';
import { FaPlus, FaMinus, FaShieldAlt, FaMedal, FaStar } from 'react-icons/fa';
import { BsBook, BsCalculator, BsGlobe, BsLightbulb, BsJournalCheck, BsCrosshair } from 'react-icons/bs';
import { motion } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: "What makes the Comprehensive English Guide unique?",
    answer: "Our English Guide goes beyond basic grammar. It includes specialized sections on reading comprehension strategies, vocabulary building techniques tailored for entrance exams, and practice exercises that mirror the actual Sainik School question patterns.",
    icon: <BsBook className="w-6 h-6" />
  },
  {
    id: 2,
    question: "How does the Mathematics Mastery book help weak students?",
    answer: "The Mathematics book is designed with a 'Zero to Hero' approach. It starts with fundamental concepts explained in simple language, followed by step-by-step solved examples, shortcut tricks for speed, and graded practice problems to build confidence gradually.",
    icon: <BsCalculator className="w-6 h-6" />
  },
  {
    id: 3,
    question: "Is the General Knowledge content updated for current affairs?",
    answer: "Yes! The General Intelligence & GK book is regularly updated. It covers static GK (History, Geography, Civics) as per the syllabus and includes a dedicated section for current affairs relevant to the exam year.",
    icon: <BsGlobe className="w-6 h-6" />
  },
  {
    id: 4,
    question: "Does the Science book cover practical applications?",
    answer: "Absolutely. The General Science Encyclopedia focuses on concept clarity through diagrams and real-life examples. It connects scientific theories to everyday phenomena, making it easier for students to retain information and answer application-based questions.",
    icon: <BsLightbulb className="w-6 h-6" />
  },
  {
    id: 5,
    question: "How many mock tests are included in the Practice Set?",
    answer: "The All-in-One Practice Set includes 10 full-length Mock Tests modeled exactly after the latest AISSEE pattern, along with 5 Previous Years' Solved Papers to help students understand the exam trend and manage time effectively.",
    icon: <BsJournalCheck className="w-6 h-6" />
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-green-50/30 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"></div>
         <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>
         
         {/* Animated Floating Icons */}
         <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] text-green-200/40 text-6xl"
         >
            <FaShieldAlt />
         </motion.div>
         
         <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 left-[5%] text-green-200/30 text-8xl"
         >
            <BsCrosshair />
         </motion.div>

         <motion.div 
            animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 right-[15%] text-green-200/40 text-5xl"
         >
            <FaMedal />
         </motion.div>

         <motion.div 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-[10%] text-green-100/50 text-9xl opacity-20"
         >
            <FaStar />
         </motion.div>
      </div>

      <div className="max-w-7xl  mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left Visual Side */}
          <div className="w-full lg:w-1/2 relative flex justify-center sticky top-24">
             <div className="relative w-3/4 md:w-2/3 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/book5.jpeg" 
                  alt="Student studying with WEDA books" 
                  className="w-full h-auto object-contain"
                />
                
                {/* Overlay Pattern (Dots) */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#14532d_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
             </div>
             
             {/* Decorative Elements behind image */}
             <div className="absolute -z-10 top-10 left-10 w-3/4 md:w-2/3 h-full border-2 border-green-200 rounded-[3rem]"></div>
             <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-green-100 rounded-full blur-xl"></div>
          </div>

          {/* Right Content Side (Accordion) */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
               <span className="text-green-700 font-bold tracking-wider uppercase text-sm mb-2 block">Common Questions</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                 Detailed Insights into <br/>
                 <span className="text-green-700">WEDA Book Series</span>
               </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${openIndex === index ? 'border-green-200 shadow-lg shadow-green-100' : 'border-transparent shadow-sm hover:shadow-md'}`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-colors duration-300 ${openIndex === index ? 'bg-green-900 text-white' : 'bg-green-50 text-green-700'}`}>
                        {item.icon}
                      </div>
                      <span className={`font-bold text-lg md:text-xl ${openIndex === index ? 'text-gray-900' : 'text-gray-700'}`}>
                        {item.question}
                      </span>
                    </div>
                    <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                       {openIndex === index ? <FaMinus className="text-green-900" /> : <FaPlus className="text-gray-400" />}
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 pl-[5.5rem] text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
