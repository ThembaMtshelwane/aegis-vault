import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Hero/Navbar";

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default MainLayout;
