import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 mt-8 md:mt-12">
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-3 md:mb-4 tracking-tight uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-orange-400 font-medium italic">
            {subtitle}
          </p>
        )}
       
      </div>
    </div>
  );
};

export default PageBanner;
