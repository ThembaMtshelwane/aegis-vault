import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/Products/FeaturedProducts";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <FeaturedProducts />
      <CategorySection />
    </section>
  );
};

export default HomePage;
