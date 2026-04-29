import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'order' | 'booking'>('order');

  return (
    <section className="pb-24 pt-10 px-6 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-[13px] tracking-[0.3em] text-amber-700 font-semibold mb-3 mt-10 uppercase">Experience the Best</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-6 font-playfair relative inline-block">
            Online Order & Table Booking
            
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-amber-100">
              <h3 className="text-3xl font-bold text-amber-800 mb-8 font-playfair">Why Choose Us?</h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-600/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-900 mb-2">Fast Delivery</h4>
                    <p className="text-gray-600 leading-relaxed">Get your favorite coffee and snacks delivered at your doorstep within 30 minutes.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-600/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-900 mb-2">Easy Table Booking</h4>
                    <p className="text-gray-600 leading-relaxed">Skip the wait! Book your favorite spot in advance for a perfect dining experience.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-600/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-900 mb-2">Secure Payments</h4>
                    <p className="text-gray-600 leading-relaxed">Multiple secure payment options including UPI, Cards, and Net Banking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100">
              {/* Tabs */}
              <div className="flex bg-amber-50">
                <button
                  onClick={() => setActiveTab('order')}
                  className={`flex-1 py-6 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                    activeTab === 'order' ? 'text-white bg-amber-600' : 'text-amber-800 hover:bg-amber-100'
                  }`}
                >
                  Online Order
                </button>
                <button
                  onClick={() => setActiveTab('booking')}
                  className={`flex-1 py-6 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                    activeTab === 'booking' ? 'text-white bg-amber-600' : 'text-amber-800 hover:bg-amber-100'
                  }`}
                >
                  Table Booking
                </button>
              </div>

              {/* Form Content */}
              <div className="p-8 md:p-12">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {activeTab === 'order' ? (
                    <div className="space-y-6">
                      <p className="text-amber-800/70 text-sm italic font-medium">Craving something delicious? Order now and enjoy at home.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                        <input type="text" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                      </div>
                      <textarea placeholder="Delivery Address" rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"></textarea>
                      <button className="w-full bg-amber-600 text-white font-bold py-5 rounded-xl hover:bg-amber-700 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-amber-600/20 uppercase tracking-widest text-sm">
                        Place Order Now
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <p className="text-amber-800/70 text-sm italic font-medium">Planning a special occasion? Reserve your table today.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                        <input type="text" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                        <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none cursor-pointer">
                          <option value="">Number of Guests</option>
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="4">4 People</option>
                          <option value="6">6+ People</option>
                        </select>
                      </div>
                      <button className="w-full bg-amber-600 text-white font-bold py-5 rounded-xl hover:bg-amber-700 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-amber-600/20 uppercase tracking-widest text-sm">
                        Confirm Reservation
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
