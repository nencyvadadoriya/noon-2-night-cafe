import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 text-gray-800 pt-16 pb-8 border-t border-amber-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-4 pr-4">
            <h3 className="text-3xl font-extrabold text-amber-800">
              Noon 2 Night<span className="text-orange-600"> Café</span>
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Experience the perfect blend of artisanal coffee and cozy atmosphere. From morning brews to evening bites, we create moments that matter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:col-span-2">
            <h4 className="text-xl font-bold text-amber-900">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6 lg:col-span-3">
            <h4 className="text-xl font-bold text-amber-900">Opening Hours</h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between items-center border-b border-amber-100 pb-2">
                <span className="pr-4">Mon - Fri</span>
                <span className="font-semibold text-amber-800">8:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-amber-100 pb-2">
                <span className="pr-4">Saturday</span>
                <span className="font-semibold text-amber-800">9:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-amber-100 pb-2">
                <span className="pr-4">Sunday</span>
                <span className="font-semibold text-amber-800">10:00 - 21:00</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6 lg:col-span-3 lg:pl-4">
            <h4 className="text-xl font-bold text-amber-900">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <i className="fa fa-map-marker-alt"></i>
                </div>
                <p className="text-gray-600">123 Café Street, Vesu,<br />Surat, Gujarat 395007</p>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <i className="fa fa-phone"></i>
                </div>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <i className="fa fa-envelope"></i>
                </div>
                <p className="text-gray-600 text-sm xl:text-base">hello@noon2night.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-amber-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Noon 2 Night Café. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
