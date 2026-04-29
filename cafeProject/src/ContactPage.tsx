import Layout from "./components/Layout";
import Contact from "./components/Contact";
import PageBanner from "./components/PageBanner";

function ContactPage() {
  return (
    <Layout>
      <PageBanner 
        title="Contact Us" 
        subtitle="Get in Touch"
        image="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="pb-12 bg-white">
        <Contact />
      </div>
    </Layout>
  );
}

export default ContactPage;
