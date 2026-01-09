import HeroSection from "../components/HomeSection.jsx";
import TrendingPreview from "../components/TrendingPreview.jsx";
import FooterNote from "../components/FooterNote.jsx";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <TrendingPreview videos={[]} />
      <FooterNote />
    </div>
  );
};

export default Home;
