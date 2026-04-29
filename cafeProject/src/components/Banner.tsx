import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner1 from "../images/banner-1.avif";
import Banner2 from "../images/banner-2.png";

const slides = [
  {
    img: Banner1,
    title: <>Coffee, Lights <br /> & Conversations</>,
    desc: "Discover a space where great coffee meets great conversations. Welcome to your new favorite spot.",
  },
  {
    img: Banner2,
    title: <>Delicious Moments <br /> Every Time</>,
    desc: "Cozy nights, bold flavors, and a café experience made for conversations.",
  },
  {
    img: "https://i.pinimg.com/736x/47/37/28/47372890f3a7720e3c78cbc80ad89dc0.jpg",
    title: <>Flavors Made to <br /> Remember</>,
    desc: "Experience flavors that take you from Noon to Night with every sip and bite.",
  },
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen font-sans overflow-hidden bg-black">
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <img
            src={slides[currentIndex].img}
            alt={`Cafe Banner ${currentIndex + 1}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-24">
            <span className="text-orange-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
              The Night Cafe
            </span>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              {slides[currentIndex].title}
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light">
              {slides[currentIndex].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-10 h-[3px] rounded-full cursor-pointer transition ${currentIndex === i ? "bg-orange-400" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;
