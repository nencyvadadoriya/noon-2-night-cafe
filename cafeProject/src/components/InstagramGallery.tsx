import img1 from '../images/Affogato.jpg';
import img2 from '../images/Biscoff Frappe.jpg';
import img3 from '../images/Caramel Frappe.jpg';
import img4 from '../images/Hazelnut Frappe.jpg';
import img5 from '../images/Iced Matcha Latte.jpg';
import img6 from '../images/Nutella Frappe.jpg';
import img7 from '../images/Cappuccino.jpg';
import img8 from '../images/Americano.jpg';
import img9 from '../images/Latte.jpg';
import img10 from '../images/Mochalatte.jpg';
import img11 from '../images/Vanilla Frappe.jpg';
import img12 from '../images/Vietnames.jpg';

const InstagramGallery = () => {
  const galleryImages = [
    { id: 1, img: img1, likes: '1.2k', comments: '45' },
    { id: 2, img: img2, likes: '890', comments: '32' },
    { id: 3, img: img3, likes: '2.1k', comments: '68' },
    { id: 4, img: img4, likes: '1.5k', comments: '54' },
    { id: 5, img: img5, likes: '1.1k', comments: '29' },
    { id: 6, img: img6, likes: '1.8k', comments: '41' },
    { id: 7, img: img7, likes: '1.4k', comments: '38' },
    { id: 8, img: img8, likes: '950', comments: '22' },
    { id: 9, img: img9, likes: '1.7k', comments: '47' },
    { id: 10, img: img10, likes: '1.3k', comments: '35' },
    { id: 11, img: img11, likes: '2.2k', comments: '72' },
    { id: 12, img: img12, likes: '1.6k', comments: '50' },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span className="text-zinc-500 font-medium tracking-widest uppercase text-xs md:text-sm">Follow Us @noon2nightcafe</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">Our Instagram Feed</h2>
         
          <p className="text-zinc-500 mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg italic px-2">
            "Capture the moments, share the vibes. Join our community and tag us in your coffee stories!"
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {galleryImages.map((item) => (
            <div key={item.id} className="relative group overflow-hidden aspect-square rounded-xl cursor-pointer">
              <img 
                src={item.img} 
                alt={`Instagram feed ${item.id}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                  <span className="font-semibold text-sm">{item.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.19 8.19 0 0 1 3.5.8 8.19 8.19 0 0 1 3.5 13.5l3.5 3.5-3.5-3.5z"></path></svg>
                  <span className="font-semibold text-sm">{item.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 md:mt-12">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
          >
            Visit Our Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
