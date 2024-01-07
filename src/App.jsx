import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import BannerSection from "./components/banner/BannerSection";
import PopularSection from "./components/popular/PopularSection";
import RecomendSection from "./components/popular/RecomendSection";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <main className="bg-[#EEEFF0]">
        <BannerSection />
        <PopularSection />
        <RecomendSection />
      </main>
      <Footer />
    </>
  );
}
