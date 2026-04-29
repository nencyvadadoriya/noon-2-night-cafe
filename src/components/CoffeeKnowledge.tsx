import { Link } from 'react-router-dom';
import img2 from '../images/about-us-4.webp';
import imgTip from '../images/about-us-5.jpg';

const CoffeeKnowledge = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of the Perfect Pour",
      category: "Brewing Guide",
      description: "Discover the secrets behind crafting the perfect pour-over coffee, from water temperature to grind size precision.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
      date: "Oct 24, 2023"
    },
    {
      id: 2,
      title: "Understanding Bean Origins",
      category: "Coffee Science",
      description: "A deep dive into how soil, altitude, and climate shape the unique flavor profiles of beans from around the world.",
      image: img2,
      date: "Nov 12, 2023"
    },
    {
      id: 3,
      title: "Milk Texturing Secrets",
      category: "Barista Skills",
      description: "Learn how to achieve that silky, micro-foam texture for stunning latte art and a creamy mouthfeel in every cup.",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
      date: "Dec 05, 2023"
    }
  ];

  return (
    <section id="coffee-knowledge" className="py-24 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-6">
              Coffee Knowledge
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore the rich world of coffee through our expert guides, from brewing techniques to the science of the bean.
            </p>
          </div>
          <Link to="/coffee-knowledge" className="px-8 py-3 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-600/20 whitespace-nowrap">
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-amber-600 text-sm font-medium mb-3">{blog.date}</div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-amber-700 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {blog.description}
                </p>
                <Link to="/coffee-knowledge" className="inline-flex items-center gap-2 text-amber-700 font-bold hover:gap-3 transition-all">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge Highlight */}
        <div className="mt-20 p-10 md:p-16 bg-amber-800 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-700/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <span className="text-amber-200 font-bold tracking-widest uppercase text-sm mb-4 block">Pro Tip of the Month</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Master the "Golden Ratio"</h3>
              <p className="text-amber-100 text-lg leading-relaxed mb-8">
                For the perfect balance of flavor and strength, use 1 to 2 tablespoons of ground coffee for every six ounces of water. This simple rule is the foundation of every great brew.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-amber-700/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-600/30">
                  <div className="text-amber-200 text-xs uppercase font-bold mb-1">Coffee</div>
                  <div className="text-white font-bold text-xl">18g</div>
                </div>
                <div className="bg-amber-700/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-600/30">
                  <div className="text-amber-200 text-xs uppercase font-bold mb-1">Water</div>
                  <div className="text-white font-bold text-xl">300ml</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src={imgTip} 
                className="rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                alt="Coffee Tip"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeKnowledge;
