import Layout from "./components/Layout";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 11,
    title: "The Rise of Cold Brew",
    category: "Trends",
    description: "Why cold brew is more than just iced coffee. Explore the slow-steeping process that results in low acidity and naturally sweet flavor profiles.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    date: "Jan 15, 2024"
  },
  {
    id: 12,
    title: "Espresso Machine Maintenance",
    category: "Equipment",
    description: "Keep your machine running perfectly with our daily, weekly, and monthly cleaning checklists specifically designed for home baristas.",
    image: "/Americano.jpg",
    date: "Feb 02, 2024"
  },
  {
    id: 13,
    title: "Coffee Processing Methods",
    category: "Processing",
    description: "Washed, Natural, or Honey? Understand how different processing methods impact the final taste and complexity of your morning brew.",
    image: "/Cappuccino.jpg",
    date: "Feb 28, 2024"
  },
  {
    id: 14,
    title: "The Science of Roasting",
    category: "Roasting",
    description: "What happens inside the bean during the roast? From the Maillard reaction to the critical first and second cracks.",
    image: "/Cold Brew.jpg",
    date: "Mar 10, 2024"
  },
  {
    id: 15,
    title: "Alternative Milk Guide",
    category: "Dietary",
    description: "Oat, Almond, or Soy? Learn which plant-based milks froth the best and which coffee roasts they complement most effectively.",
    image: "/Espresso.jpg",
    date: "Mar 22, 2024"
  },
  {
    id: 16,
    title: "Coffee and Sustainability",
    category: "Ethics",
    description: "The importance of Fair Trade and Direct Trade. How your daily choice of coffee can support ethical farming and global sustainability.",
    image: "/Latte.jpg",
    date: "Apr 05, 2024"
  },
  {
    id: 17,
    title: "Home Grinder Comparison",
    category: "Equipment",
    description: "Blade vs. Burr grinders. Why achieving an even grind size is the single most important factor in your home brewing setup.",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=800",
    date: "Apr 18, 2024"
  },
  {
    id: 18,
    title: "The History of Espresso",
    category: "Culture",
    description: "Trace the journey of espresso from its industrial beginnings in Italy to the modern specialty café culture we enjoy today.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800",
    date: "May 02, 2024"
  },
  {
    id: 19,
    title: "Latte Art for Beginners",
    category: "Barista Skills",
    description: "Master the basic heart and rosette patterns with our step-by-step guide to pitcher movement and milk flow control.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    date: "May 15, 2024"
  },
  {
    id: 20,
    title: "Brewing for a Crowd",
    category: "Hosting",
    description: "Tips and techniques for serving high-quality coffee at parties and gatherings without sacrificing flavor or temperature.",
    image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=800",
    date: "May 28, 2024"
  }
];

function CoffeeKnowledgePage() {
  return (
    <Layout darkHeader={true}>
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-amber-800 mb-4 md:mb-6">
                Coffee Knowledge
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Dive deep into our comprehensive collection of guides, tutorials, and insights into the world of specialty coffee.
              </p>
            </div>
            <div className="flex justify-center md:block">
              <Link to="/" className="px-8 py-3 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-600/20 whitespace-nowrap cursor-pointer">
                Back to Home
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {articles.map((article) => (
              <div key={article.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="text-amber-600 text-sm font-medium mb-2 md:mb-3 cursor-pointer">{article.date}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3 md:mb-4 group-hover:text-amber-700 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed cursor-pointer">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CoffeeKnowledgePage;
