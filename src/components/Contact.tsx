function Contact() {
  return (
    <section id="contact" className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">
          Contact Us
        </h2>
        <p className="text-center mb-10 text-gray-700">
          Get in touch with us for bookings or inquiries.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 p-3 rounded outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 p-3 rounded outline-none"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 p-3 rounded outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 p-3 rounded outline-none"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Embedded Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg ">
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
