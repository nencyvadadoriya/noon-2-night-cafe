import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MenuPage from "./MenuPage";
import AboutPage from "./AboutPage";
import TestimonialsPage from "./TestimonialsPage";
import ContactPage from "./ContactPage";
import CoffeeKnowledgePage from "./CoffeeKnowledgePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/coffee-knowledge" element={<CoffeeKnowledgePage />} />
      </Routes>
    </Router>
  );
}

export default App;
