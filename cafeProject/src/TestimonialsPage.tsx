import Layout from "./components/Layout";
import Testimonial from "./components/Testimonial";
import PageBanner from "./components/PageBanner";

function TestimonialsPage() {
  return (
    <Layout>
      <PageBanner 
        title="Testimonials" 
        subtitle="What Our Guests Say"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="pb-12 bg-white">
        <Testimonial />
      </div>
    </Layout>
  );
}

export default TestimonialsPage;
