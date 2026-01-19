import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const books = [
  {
    id: 1,
    title: "English BOOK",
    subtitle: "WEDA Class 6 English Mastery – Sainik & RMS Guidebook",
    description: "WEDA Class 6 English Guidebook for Sainik & RMS aspirants offers NEP-aligned concepts, grammar and comprehension practice, critical thinking tasks, previous year papers and mock tests. Designed by defence mentors, it builds strong language skills and exam confidence for AISSEE and RMS CET success.",
    image: "/eng.png",
    color: "bg-green-100",
    accent: "text-green-600"
  },
  {
    id: 2,
    title: "Maths BOOK",
    subtitle: "Master Numbers with Confidence: WEDA Class 6 Maths Mastery – Sainik & RMS Guidebook",
    description: "WEDA Class 6 Mathematics Guidebook builds strong foundations for AISSEE & RMS with NEP-aligned theory, step-by-step solutions, visuals, graded exercises, previous year questions and full-length mocks, covering Numbers, Geometry, Algebra, Mensuration, Data Handling and Logical Maths for faster problem-solving and higher scores.",
    image: "/maths.png",
    color: "bg-amber-100",
    accent: "text-amber-600"
  },
  {
    id: 3,
    title: "Intelligence BOOK",
    subtitle: "WEDA Class 6 General Intelligence Mastery – Sainik & RMS Guidebook",
    description: "WEDA Class 6 General Intelligence Guidebook sharpens logical, verbal and non-verbal reasoning for AISSEE & RMS with NEP-aligned concepts, puzzles, visual-spatial exercises, step-by-step methods, topic-wise practice, previous year questions and full-length mock tests—building analytical thinking and exam confidence.",
    image: "/GI.png",
    color: "bg-blue-100",
    accent: "text-blue-600"
  },
  {
    id: 4,
    title: "General Science Book",
    subtitle: "Master Science Concepts with Clarity: WEDA Class 6 Science Mastery – Sainik & RMS Guidebook",
    description: "WEDA’s Class 6 General Science Guidebook simplifies Physics, Chemistry, Biology and Everyday Science for AISSEE & RMS aspirants with NEP-aligned theory, real-life examples, diagrams, MCQs, assertion-reason questions, previous papers and mock tests—building strong concepts and exam readiness.",
    image: "/gs.png",
    color: "bg-red-100",
    accent: "text-red-600"
  },
];

const BookShowcase = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-950 mb-4">
            Your All-in-One Solution to Crack AISSEE & RMS CET with Confidence!
          </h2>
          <div className="h-1 w-20 bg-green-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Prepare smarter and save more with the WEDA Complete Book Set — a curated bundle of four expertly crafted guidebooks in English, Mathematics, General Intelligence, and General Science for Class 6 entrance exams (AISSEE & RMS CET).
          </p>
        </div>

        {/* Slider Section */}
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          className="w-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-4 md:p-8 bg-white rounded-3xl">

                {/* Left Side: Visual (Image + Shape) */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                  {/* Organic Shape Background */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      borderRadius: [
                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                        "30% 70% 70% 30% / 30% 30% 70% 70%"
                      ]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`absolute w-[90%] h-[90%] ${book.color} z-0 opacity-70`}
                  />

                  <motion.div
                    animate={{
                      rotate: [360, 0],
                      scale: [1, 1.1, 1],
                      borderRadius: [
                        "50% 50% 50% 50% / 50% 50% 50% 50%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "40% 60% 60% 40% / 40% 40% 60% 60%",
                        "50% 50% 50% 50% / 50% 50% 50% 50%"
                      ]
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`absolute w-[80%] h-[80%] ${book.color} z-0 blur-xl opacity-50`}
                  />

                  {/* Book Image */}
                  <div className="relative z-10 w-40 md:w-80 aspect-[3/4] transform transition-transform duration-500 hover:scale-105">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide mb-2 md:mb-3 ${book.color} ${book.accent}`}>
                      Book {book.id} of 4
                    </span>
                    <h3 className="text-xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                      {book.title}
                    </h3>
                    <h4 className={`text-base md:text-xl font-medium ${book.accent} mb-3 md:mb-4`}>
                      {book.subtitle}
                    </h4>
                  </div>

                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    {book.description}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default BookShowcase;
