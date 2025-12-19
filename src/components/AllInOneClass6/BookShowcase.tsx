import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const books = [
  {
    id: 1,
    title: "Comprehensive English Guide",
    subtitle: "Grammar, Vocabulary & Comprehension",
    description: "Master the English language with our comprehensive guide designed for Sainik School aspirants. Includes detailed grammar rules, extensive vocabulary lists, and practice comprehension passages to boost your confidence.",
    image: "/book1.jpeg",
    color: "bg-green-100",
    accent: "text-green-600"
  },
  {
    id: 2,
    title: "Mathematics Mastery",
    subtitle: "Concepts, Tricks & Practice",
    description: "Conquer numbers with our Mathematics Mastery book. Featuring step-by-step concept explanations, shortcut tricks for quick calculations, and hundreds of practice questions ranging from basic to advanced levels.",
    image: "/book2.jpeg",
    color: "bg-amber-100",
    accent: "text-amber-600"
  },
  {
    id: 3,
    title: "General Intelligence & Logic",
    subtitle: "Verbal & Non-Verbal Reasoning",
    description: "Sharpen your logical thinking with our General Intelligence book. Covers verbal and non-verbal reasoning topics extensively, helping you solve complex puzzles and patterns with ease.",
    image: "/book3.jpeg",
    color: "bg-blue-100",
    accent: "text-blue-600"
  },
  {
    id: 4,
    title: "General Science Encyclopedia",
    subtitle: "Physics, Chemistry & Biology",
    description: "Explore the world of science with our General Science Encyclopedia. Simplified explanations of complex scientific concepts, accompanied by diagrams and real-world examples to make learning fun and effective.",
    image: "/book4.jpeg",
    color: "bg-red-100",
    accent: "text-red-600"
  },
  {
    id: 5,
    title: "All-in-One Practice Set",
    subtitle: "Previous Papers & Mock Tests",
    description: "The ultimate practice companion. Contains previous years' question papers and carefully curated mock tests to simulate the actual exam environment and assess your preparation level.",
    image: "/book5.jpeg",
    color: "bg-purple-100",
    accent: "text-purple-600"
  }
];

const BookShowcase = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-950 mb-4">
            Inside the WEDA Preparation Pack
          </h2>
          <div className="h-1 w-20 bg-green-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our meticulously crafted books designed to cover every aspect of the Sainik School & RMS entrance syllabus.
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
              <div className="flex flex-col md:flex-row items-center gap-12 p-4 md:p-8 bg-white rounded-3xl">
                
                {/* Left Side: Visual (Image + Shape) */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                  {/* Organic Shape Background */}
                  <div className={`absolute w-[90%] h-[90%] ${book.color} rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0 transform rotate-12 opacity-70`}></div>
                  <div className={`absolute w-[80%] h-[80%] ${book.color} rounded-full z-0 transform -translate-x-4 translate-y-4 blur-xl opacity-50`}></div>
                  
                  {/* Book Image */}
                  <div className="relative z-10 w-64 md:w-80 aspect-[3/4] transform transition-transform duration-500 hover:scale-105">
                    <img 
                      src={book.image} 
                      alt={book.title} 
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 ${book.color} ${book.accent}`}>
                      Book {book.id} of 5
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                      {book.title}
                    </h3>
                    <h4 className={`text-xl font-medium ${book.accent} mb-4`}>
                      {book.subtitle}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {book.description}
                  </p>

                  <div className="pt-4">
                    <button className="px-6 py-3 bg-white border-2 border-green-900 text-green-900 font-semibold rounded-full hover:bg-green-900 hover:text-white transition-all duration-300">
                      View Sample Chapter
                    </button>
                  </div>
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
