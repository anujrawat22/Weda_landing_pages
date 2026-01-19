import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {

  const handleButtonClick = () => {
    window.open('https://wedabooks.com/cart-2?productId=5621', '_blank')
  }

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
      <div className="relative max-w-7xl mx-auto py-20 lg:py-28 flex flex-col-reverse md:flex-row items-center justify-between gap-16 lg:gap-24 z-10">

        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8 pl-4 lg:pl-8">

          {/* Tagline / Trust Strip */}
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-12 bg-green-600"></div>
            <span className="text-green-800 font-bold uppercase tracking-wider text-sm">Designed by Ex-Defence Officers</span>
          </div>

          {/* Headlines */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-green-950 leading-[1.1]">
              Complete <span className="text-green-700">WEDA</span> Book Set
              <span className="block text-xl md:text-4xl mt-3 font-sans font-light text-gray-600">for Sainik School & RMS Class 6</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-600 max-w-lg leading-relaxed">
              An integrated and NEP 2020, aligned preparation solution for AISSEE and RMS CET candidates.
            </p>
          </div>

          {/* Pricing Section */}
          <div className="flex items-end gap-4">
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm md:text-lg line-through decoration-red-500 decoration-2">₹4,296.00</span>
              <span className="text-2xl md:text-4xl font-bold text-green-900">₹2,148</span>
            </div>
            <span className="mb-2 px-3 py-1 bg-red-100 text-red-600 text-[10px] md:text-xs font-bold rounded-full border border-red-200 uppercase tracking-wide">
              Save ₹2,148
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 items-center pr-5">
            <button className="w-full md:w-fit px-6 md:px-8 py-3 md:py-4 bg-green-900 hover:bg-green-800 text-white text-base md:text-lg font-medium rounded-full shadow-xl shadow-green-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105" onClick={handleButtonClick}>
              Get Complete Set Now
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
        <div className="w-full max-w-[280px] md:max-w-none md:w-1/2 relative flex justify-center items-center mx-auto">

          {/* The Main Organic Blob Shape behind image */}
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
            className="absolute w-[120%] h-[120%] bg-green-100/60 z-0"
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
            className="absolute w-[110%] h-[110%] bg-green-200/40 z-0"
          />

          {/* Image Container */}
          <div className="relative z-10 w-full max-w-lg md:max-w-xl aspect-[4/5] md:aspect-square flex items-center justify-center">
            {/* Main Book Image */}
            <div className="relative w-full h-full transform transition-transform duration-500 hover:scale-105">
              <img
                src="/HeroImage.png"
                alt="WEDA All in One Book Set"
                className="w-full h-full object-contain drop-shadow-2xl transform rotate-3 scale-125 hover:rotate-0 transition-all duration-500"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 md:gap-3 animate-bounce-slow scale-90 md:scale-100 origin-bottom-left">
              <div className="bg-green-100 p-1.5 md:p-2 rounded-full">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-500">Success Rate</p>
                <p className="font-bold text-sm md:text-base text-green-900">95% Qualified</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
