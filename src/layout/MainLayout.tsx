import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Hero/Navbar";

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;
