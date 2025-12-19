import Header from "../components/AllInOneClass6/Header";
import Hero from "../components/AllInOneClass6/Hero";
import BookShowcase from "../components/AllInOneClass6/BookShowcase";
import FAQSection from "../components/AllInOneClass6/FAQSection";
import Testimonials from "../components/AllInOneClass6/Testimonials";
import Footer from "../components/AllInOneClass6/Footer";
import LearningHighlights from "../components/AllInOneClass6/LearningHighlights";

const AllInOneClass6 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="books">
          <BookShowcase />
        </section>
        <section id="features">
          <LearningHighlights />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
};

export default AllInOneClass6;