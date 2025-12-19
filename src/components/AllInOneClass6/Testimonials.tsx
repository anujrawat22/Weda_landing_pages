import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Parent of Sainik School Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "The WEDA book set was a game-changer for my son. The concepts are explained so clearly that he didn't even need extra tuition. He cracked the AISSEE exam with flying colors!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "RMS Class 6 Aspirant",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "I was scared of Maths, but the 'Mathematics Mastery' book made it my favorite subject. The shortcut tricks are amazing and helped me solve questions very quickly in the exam.",
    rating: 5
  },
  {
    id: 3,
    name: "Col. S.K. Singh (Retd.)",
    role: "Defence Mentor",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    content: "As a former defence officer, I highly recommend this set. It not only covers the syllabus but also instills the discipline and logical thinking required for a career in the armed forces.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-green-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-green-950">
            Trusted by Parents & Toppers
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-2xl shadow-xl shadow-green-900/5 border border-green-100 hover:-translate-y-2 transition-transform duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-green-100 text-6xl font-serif leading-none -z-0">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-400 relative z-10">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                "{item.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 relative z-10">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-200"
                />
                <div>
                  <h4 className="font-bold text-green-950">{item.name}</h4>
                  <p className="text-green-600 text-sm font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
