const AboutBanner = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          About Noon 2 Night
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 font-medium">
          Our Journey, Our Passion
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-amber-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
