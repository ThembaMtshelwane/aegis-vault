import About from "../components/About";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/Products/FeaturedProducts";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <About />
      <FeaturedProducts />
      <CategorySection />
      <Footer />
    </section>
  );
};

export default HomePage;
