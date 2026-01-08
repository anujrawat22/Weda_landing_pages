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
    image: string;
    color: string;
    textColor: string;
    borderColor: string;
    href: string
}

const originalBooks: Book[] = [
    {
        id: 1,
        title: "RIMC Book Set – Practice Set Papers + Previous Year Papers",
        image: "/RIMC-paper-set.jpg",
        color: "bg-green-50",
        textColor: "text-green-700",
        borderColor: "border-green-100",
        href: "https://wedabooks.com/product/rimc-book-set-practice-set-papers-previous-year-papers"
    },
    {
        id: 2,
        title: "RIMC – Previous Year Papers",
        image: "/RIMC-previous-paper.jpg",
        color: "bg-amber-50",
        textColor: "text-amber-700",
        borderColor: "border-amber-100",
        href: "https://wedabooks.com/product/rimc-previous-year-papers"
    },
    {
        id: 3,
        title: "National Defence Academy (NDA) – All-in-One Practice Sets and Previous Year Papers",
        image: "/GI.png",
        color: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-100",
        href: "https://wedabooks.com/product/national-defence-academy-nda-all-in-one-practice-sets-and-previous-year-papers"
    },
    {
        id: 4,
        title: "Sainik School & RMS Class 6 – All-in-One Practice Sets and Previous Year Papers",
        image: "/gs.png",
        color: "bg-red-50",
        textColor: "text-red-700",
        borderColor: "border-red-100",
        href: "https://wedabooks.com/product/sainik-school-rms-class-6-all-in-one-practice-sets-and-previous-year-papers"
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
                <div className="relative px-2 md:px-4 overflow-hidden">
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
                                    <div className={`relative h-72 ${book.color} flex items-center justify-center p-6 overflow-hidden `}>

                                        {/* Product Image */}
                                        <motion.img
                                            src={book.image}
                                            alt={book.title}
                                            whileHover={{ scale: 1.1, rotate: -3 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="w-auto h-full max-h-full object-contain z-10 drop-shadow-2xl mix-blend-multiply"
                                        />
                                    </div>

                                    {/* Bottom Section: Content */}
                                    <div className="p-6 flex flex-col flex-grow">

                                        <div className="flex justify-between items-start mb-2 h-8">
                                            <h3 className="text-md md:text-md font-bold text-gray-900 font-sans tracking-tight leading-tight group-hover:text-green-800 transition-colors">
                                                {book.title}
                                            </h3>
                                        </div>

                                        {/* Footer: Price and Button */}
                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                            <button className={`bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm w-90 cursor-pointer`} onClick={() => window.location.href = book.href}>
                                                Buy Now
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
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Unbelievable Offer!</h3>
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
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProductView;
