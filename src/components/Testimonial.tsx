import { Card } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import img1 from "../images/testimonial-1.png";
import img2 from "../images/testimonial-2.png";
import img3 from "../images/testimonial-3.png";
import img4 from "../images/testimonial-4.png";
import img5 from "../images/testimonial-5.png";

const testimonials = [
  {
    name: "Aarav Sharma",
    text: "Noon 2 Night Cafe is my go-to spot for relaxing evenings. The atmosphere is cozy, and the staff is incredibly friendly!",
    img: img2
  },
  {
    name: "Ishani Patel",
    text: "Love their iced lattes and desserts! It's the perfect hangout place for friends or even for catching up on some work.",
    img: img1
  },
  {
    name: "Rohan Gupta",
    text: "Weekend live music nights make it so special! The combination of great food and live performances is unbeatable.",
    img: img3
  },
  {
    name: "Meera Reddy",
    text: "I came for brunch and stayed till dinner. Amazing food and consistent quality. Definitely recommend  signature brews!",
    img: img4
  },
  {
    name: "Arjun Mehta",
    text: "The best cafe in town! Their attention to detail in every dish and drink is what keeps me coming back every week.",
    img: img1
  },
  {
    name: "Sanya Malhotra",
    text: "A great place for quick meetings. Quiet enough to talk, with excellent service and the best espresso I've had in a while.",
    img: img5
  }
];

function Testimonial() {
  return (
    <section id="testimonial" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 tracking-tight">What Our Customers Say</h2>
          
          <p className="text-zinc-600 mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg italic px-2 font-medium">
            "We take pride in serving our community with the finest coffee and delicious meals. Here's what some of our regulars have to say about their experience."
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper pb-20"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <Card className="h-full border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-zinc-50/50 border">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="relative mb-6">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-amber-600 text-white p-2 rounded-full shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4.5 4 6"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4.5 4 6"></path></svg>
                    </div>
                  </div>
                  <p className="text-zinc-800 italic leading-relaxed mb-6 text-base font-medium">
                    "{t.text}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-lg font-bold text-zinc-950">{t.name}</h4>
                    
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, index) => (
                      <svg key={index} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #d97706 !important;
        }
        .testimonial-swiper .swiper-pagination {
          bottom: -15px !important;
          position: relative !important;
          margin-top: 40px;
        }
      `}</style>
    </section>
  );
}

export default Testimonial;

