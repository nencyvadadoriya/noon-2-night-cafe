function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-600">
          Contact Us
        </h2>
        <p className="text-center mb-10 text-gray-700 text-base md:text-lg">
          Get in touch with us for bookings or inquiries.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="flex flex-col gap-4 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-orange-50">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 p-3 rounded-lg outline-none transition-all"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 p-3 rounded-lg outline-none transition-all"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 p-3 rounded-lg outline-none transition-all"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 p-3 rounded-lg outline-none transition-all"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message
            </button>
          </form>

          {/* Embedded Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-orange-50 h-[350px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9106660782763!2d72.87047817471993!3d21.235390780650473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f534f5c7a0f%3A0x657b820145d8a8aa!2sNoon%202%20Night%20Cafe%20N'%20Restro!5e0!3m2!1sen!2sin!4v1757059012744!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Noon 2 Night Cafe Location"
              className="w-full h-full min-h-[400px]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
