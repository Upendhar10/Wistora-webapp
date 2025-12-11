const Home = () => {
  return (
    <div className="grid min-h-full place-content-center gap-3 p-4 italic">
      <h1 className="text-4xl font-bold leading-relaxed tracking-wide text-purple-500 md:text-7xl md:leading-relaxed">
        A <span className="text-red-500">Youtube</span> inspired <br /> Video
        Streaming <br className="hidden md:block" /> Platform
      </h1>
      <p className="text-sm">
        Explore multiple feature of this app using the Side Menu bar!
      </p>
    </div>
  );
};

export default Home;
