import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  dark?: boolean;
}

function Header({ dark = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header background logic: 
  // - Transparent initially, dark when scrolled on all pages.
  const headerBg = scrolled 
    ? "bg-black/90 backdrop-blur-md py-4" 
    : "bg-transparent py-6";

  // Text color logic:
  // - White when scrolled (on dark background)
  // - White when not scrolled but on dark banner pages (default)
  // - Zinc-900 when not scrolled and on a light background page (dark prop)
  const textColor = scrolled ? "text-white" : (dark ? "text-zinc-900" : "text-white");

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          <span className="text-orange-400">ռ</span>
          <span className={textColor}>օօռ 2</span>{" "}
          <span className="text-orange-400">ռ</span>
          <span className={textColor}>ɨɢɦȶ</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className={`${textColor} block md:hidden text-3xl`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navbar Links */}
        <nav className={`absolute md:static top-full left-0 w-full md:w-auto transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60 bg-white shadow-lg md:bg-transparent" : "max-h-0"} md:max-h-full`}>
          <ul className={`flex flex-col md:flex-row md:space-x-8 text-lg font-medium p-6 md:p-0 ${isOpen ? "text-zinc-900" : textColor}`}>
            <li>
              <Link 
                to="/" 
                className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full ${isActive("/") ? "text-orange-400 after:w-full" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full ${isActive("/about") ? "text-orange-400 after:w-full" : ""}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full ${isActive("/menu") ? "text-orange-400 after:w-full" : ""}`}
              >
                Our Menu
              </Link>
            </li>
            <li>
              <Link 
                to="/testimonials" 
                className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full ${isActive("/testimonials") ? "text-orange-400 after:w-full" : ""}`}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full ${isActive("/contact") ? "text-orange-400 after:w-full" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
