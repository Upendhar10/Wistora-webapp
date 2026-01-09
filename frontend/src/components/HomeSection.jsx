import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 px-6 flex flex-col items-center text-center gap-6">
      <p className="text-gray-400 max-w-3xl text-6xl font-semibold tracking-wide leading-normal">
        A YouTube-inspired video streaming platform.
      </p>
    </section>
  );
};

export default HeroSection;
