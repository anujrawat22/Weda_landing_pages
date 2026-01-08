import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaLayerGroup, FaQuestionCircle, FaFileAlt, FaFont, FaPrint, FaGift, FaPercentage, FaSync, FaTags } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Book {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    price: string;
    rating: number;
    reviews: number;
    image: string;
    color: string;
    // buttonColor removed as we are standardizing to green
    textColor: string;
    borderColor: string;
}

const originalBooks: Book[] = [
    {
        id: 1,
        title: "English Mastery",
        subtitle: "Class 6",
        description: "Comprehensive guide for Sainik School & RMS entrance exams. Covers grammar, comprehension, and vocabulary.",
        price: "₹499",
        rating: 4.8,
        reviews: 120,
        image: "/eng.png",
        color: "bg-green-50",
        textColor: "text-green-700",
        borderColor: "border-green-100"
    },
    {
        id: 2,
        title: "Maths Mastery",
        subtitle: "Class 6",
        description: "Master arithmetic, algebra, and geometry with step-by-step solutions and practice problems.",
        price: "₹549",
        rating: 4.9,
        reviews: 98,
        image: "/maths.png",
        color: "bg-amber-50",
        textColor: "text-amber-700",
        borderColor: "border-amber-100"
    },
    {
        id: 3,
        title: "General Intelligence",
        subtitle: "Class 6",
        description: "Sharpen your logical reasoning and problem-solving skills with out expert designed puzzles.",
        price: "₹449",
        rating: 4.7,
        reviews: 85,
        image: "/GI.png",
        color: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-100"
    },
    {
        id: 4,
        title: "General Science",
        subtitle: "Class 6",
        description: "Explore the world of science with clear explanations, diagrams, and exam-focused topics.",
        price: "₹499",
        rating: 4.8,
        reviews: 110,
        image: "/gs.png",
        color: "bg-red-50",
        textColor: "text-red-700",
        borderColor: "border-red-100"
    },
];

// Duplicate the books array to ensure enough slides for smooth looping
const books = [...originalBooks, ...originalBooks];

const ProductView: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="py-2 px-4 rounded-full bg-green-100 text-green-800 text-sm font-semibold tracking-wide uppercase mb-4 inline-block">
                            Premium Collection
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
                    >
                        Our Best Selling Guidebooks
                    </motion.h2>
                </div>

                {/* Product Slider */}
                <div className="relative px-2 md:px-4">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={false}
                        loop={true} // Enable infinite loop
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        style={{
                            "--swiper-pagination-color": "#16a34a",
                            "--swiper-pagination-bullet-inactive-color": "#dcfce7",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "10px",
                            "--swiper-pagination-bullet-horizontal-gap": "6px"
                        } as React.CSSProperties}
                        className="pb-16 !overflow-visible"
                    >
                        {books.map((book, index) => (
                            // Using index in key because we have duplicate IDs
                            <SwiperSlide key={`${book.id}-${index}`} className="h-auto py-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (index % 4) * 0.1 }} // existing delay logic might look weird with duplicates, simple stagger is fine
                                    className={`group relative bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border ${book.borderColor}`}
                                >
                                    {/* Top Section: Soft Background + Image */}
                                    <div className={`relative h-64 ${book.color} flex items-center justify-center p-6 overflow-hidden`}>

                                        {/* Wishlist Icon */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors duration-300 shadow-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Product Image */}
                                        <motion.img
                                            src={book.image}
                                            alt={book.title}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="w-40 md:w-48 h-auto object-contain z-10 drop-shadow-lg mix-blend-multiply"
                                        />
                                    </div>

                                    {/* Bottom Section: Content */}
                                    <div className="p-6 flex flex-col flex-grow">

                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-sans tracking-tight leading-tight group-hover:text-green-800 transition-colors">
                                                {book.title}
                                            </h3>
                                        </div>

                                        {/* Tags/Subtitle */}
                                        <div className="flex gap-2 mb-4">
                                            <span className="bg-gray-100 rounded px-2 py-1 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                {book.subtitle}
                                            </span>
                                            <span className={`bg-opacity-10 rounded px-2 py-1 text-xs font-semibold uppercase tracking-wider ${book.textColor} ${book.color}`}>
                                                Guidebook
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {book.description}
                                        </p>

                                        {/* Footer: Price and Button */}
                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Price</p>
                                                <p className="text-2xl font-bold text-gray-900">{book.price}</p>
                                            </div>

                                            <button className={`bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 text-sm`}>
                                                <span>Add to cart</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Features Grid */}
                    <div className="space-y-8">
                        <div className="text-left">
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">What's Inside?</h3>
                            <div className="h-1 w-20 bg-green-500 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: FaLayerGroup, title: "1250+ Pages", desc: "Comprehensive coverage" },
                                { icon: FaQuestionCircle, title: "5000+ Questions", desc: "Extensive practice bank" },
                                { icon: FaFileAlt, title: "Mini Sets", desc: "Topic-wise practice" },
                                { icon: FaTags, title: "Mock Papers", desc: "& Previous Years’ Papers" },
                                { icon: FaFont, title: "Large Font", desc: "Widely spaced for readability" },
                                { icon: FaPrint, title: "High Quality", desc: "Premium paper & dark print" },
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="p-3 rounded-xl bg-green-50 text-green-600">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{feature.title}</h4>
                                        <p className="text-sm text-gray-500">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Offer Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-900 to-green-800 text-white p-8 md:p-12 shadow-2xl"
                    >
                        {/* Background décor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full bg-green-700/50 border border-green-600 text-green-100 text-xs font-bold uppercase tracking-wider mb-6">
                                    Limited Time Deal
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                                    Unbelievable Offer
                                </h3>
                                <p className="text-green-100 text-lg">
                                    Get more than just books with our premium bundle.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: FaPercentage, text: "Cost Adjustable (50% Online, 100% Offline)" },
                                    { icon: FaGift, text: "Discount Coupons for Digital Courses" },
                                    { icon: FaSync, text: "Free Digital Updates and Upgrades" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                            <item.icon className="w-4 h-4 text-green-300" />
                                        </div>
                                        <span className="font-medium text-lg">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full bg-white text-green-900 font-bold py-4 rounded-xl hover:bg-green-50 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                                Claim Offer Now
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProductView;
