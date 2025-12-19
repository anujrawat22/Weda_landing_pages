import Header from "../components/AllInOneClass6/Header";
import Hero from "../components/AllInOneClass6/Hero";
import BookShowcase from "../components/AllInOneClass6/BookShowcase";
import FAQSection from "../components/AllInOneClass6/FAQSection";
import Testimonials from "../components/AllInOneClass6/Testimonials";
import Footer from "../components/AllInOneClass6/Footer";

const AllInOneClass6 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <BookShowcase />
        {/* <LearningHighlights /> */}
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default AllInOneClass6;