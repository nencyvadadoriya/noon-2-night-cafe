import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import BookingSection from "./components/BookingSection";
import Testimonial from "./components/Testimonial";
import CoffeeKnowledge from "./components/CoffeeKnowledge";
import InstagramGallery from "./components/InstagramGallery";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

function Home() {
  return (
    <Layout>
      <Banner />
      <AboutUs />
      <div className="bg-zinc-900">
        <div className=" text-center">
          <Menu limit={8} hideCategories={true} />
        </div>
        <BookingSection />
      </div>
      <Testimonial />
      <CoffeeKnowledge />
      <InstagramGallery />
      <Contact />
    </Layout>
  );
}

export default Home;
