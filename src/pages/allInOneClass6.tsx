import Header from "../components/AllInOneClass6/Header";
import Hero from "../components/AllInOneClass6/Hero";
import About from "../components/AllInOneClass6/About";
import InstituteOverview from "../components/AllInOneClass6/InstituteOverview";
import BookShowcase from "../components/AllInOneClass6/BookShowcase";
import FAQSection from "../components/AllInOneClass6/FAQSection";
import Testimonials from "../components/AllInOneClass6/Testimonials";
import Footer from "../components/AllInOneClass6/Footer";
import LearningHighlights from "../components/AllInOneClass6/LearningHighlights";
import ProductView from "../components/AllInOneClass6/ProductView";
import PreBook from "../components/AllInOneClass6/PreBook";


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
        <section id="about">
          <About />
        </section>
        <section id="institute">
          <InstituteOverview />
        </section>
        <section id="products">
          <ProductView />
        </section>
        <section id="prebook">
          <PreBook />
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