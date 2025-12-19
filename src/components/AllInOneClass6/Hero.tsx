import React from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Shapes (Abstract Blobs) */}
      
      {/* 1. Large Light Green Blob (Right side background) */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-green-50/80 rounded-bl-[200px] z-0 hidden md:block transform translate-x-20 -translate-y-20 scale-125"></div>
      
      {/* 2. Smaller Accent Blob (Top Left - Faint) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-100/50 rounded-full blur-3xl z-0"></div>
      
      {/* 3. Decorative Plus Signs (Military/Tactical feel) */}
      <div className="absolute top-40 right-[45%] text-green-200 text-6xl opacity-40 z-0 font-light">+</div>
      <div className="absolute bottom-20 left-[10%] text-green-200 text-4xl opacity-40 z-0 font-light">+</div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8 pl-4 lg:pl-8">
          
          {/* Tagline / Trust Strip */}
          <div className="flex items-center gap-3">
             <div className="h-0.5 w-12 bg-green-600"></div>
             <span className="text-green-800 font-bold uppercase tracking-wider text-sm">Designed by Ex-Defence Officers</span>
          </div>

          {/* Headlines */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-green-950 leading-[1.1]">
              Complete <span className="text-green-700">WEDA</span> Book Set 
              <span className="block text-3xl md:text-4xl mt-3 font-sans font-light text-gray-600">for Sainik School & RMS Class 6</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Your All-in-One Solution to Crack AISSEE & RMS CET with Confidence! The Ultimate Preparation Pack aligned with NEP 2020.
            </p>
          </div>

          {/* Pricing Section */}
           <div className="flex items-end gap-4">
              <div className="flex flex-col">
                 <span className="text-gray-400 text-lg line-through decoration-red-500 decoration-2">₹2,499</span>
                 <span className="text-4xl font-bold text-green-900">₹1,499</span>
              </div>
              <span className="mb-2 px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full border border-red-200 uppercase tracking-wide">
                Save ₹1,000
              </span>
           </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="px-8 py-4 bg-green-900 hover:bg-green-800 text-white text-lg font-medium rounded-full shadow-xl shadow-green-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              Get Complete Set Now
            </button>
            <button className="px-8 py-4 bg-white hover:bg-green-50 text-green-900 border-2 border-green-900 text-lg font-medium rounded-full transition-all duration-300">
              View Sample Pages
            </button>
          </div>
          
          {/* Secondary Info (Trust Indicators) */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600 w-5 h-5" />
              <span>10,000+ Students Trusted</span>
            </div>
            <div className="flex items-center gap-2">
               <FaExclamationCircle className="text-orange-500 w-5 h-5" />
              <span>Limited Stock Available</span>
            </div>
          </div>

        </div>

        {/* Right Visual (Blob Image Container) */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          
          {/* The Main Organic Blob Shape behind image */}
          <div className="absolute w-[120%] h-[120%] bg-green-100 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0 animate-pulse-slow"></div>
          
          {/* Image Container */}
          <div className="relative z-10 w-full max-w-md aspect-[4/5] md:aspect-square flex items-center justify-center">
             {/* Main Book Image */}
             <div className="relative w-full h-full transform transition-transform duration-500 hover:scale-105">
                <img 
                  src="/book1.jpeg" 
                  alt="WEDA All in One Book Set" 
                  className="w-full h-full object-contain drop-shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500"
                />
             </div>

             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full">
                   <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                   <p className="text-xs text-gray-500">Success Rate</p>
                   <p className="font-bold text-green-900">95% Qualified</p>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
