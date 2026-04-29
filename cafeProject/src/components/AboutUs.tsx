import img1 from "../images/about-us-1.webp"
import img2 from "../images/about-us-2.webp"
import img3 from "../images/about-us-3.webp"

function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-amber-800 relative inline-block">
            About Us
           
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to{" "}
            <strong className="text-amber-700">Noon 2 Night Café</strong>, your
            all-day destination for comfort and connection.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From peaceful mornings and productive afternoons to lively evenings
            filled with flavors, laughter, and music, we’re here to make every
            hour memorable.
          </p>
          <button className="mt-4 px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 hover:scale-105 transition duration-300">
            Explore More
          </button>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4 h-[400px]">
          {/* First Image full height */}
          <img
            src={img1}
            alt="About"
            className="w-full h-full object-cover rounded-2xl shadow-lg row-span-2 transform hover:scale-105 transition duration-300"
          />
          {/* Right side top image */}
          <img
            src={img2}
            alt="About"
            className="w-full h-[195px] object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          />
          {/* Right side bottom image */}
          <img
            src={img3}
            alt="About"
            className="w-full h-[195px] object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
