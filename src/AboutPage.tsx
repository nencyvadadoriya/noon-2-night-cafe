import Layout from "./components/Layout";
import AboutUs from "./components/AboutUs";
import PageBanner from "./components/PageBanner";

function AboutPage() {
  return (
    <Layout>
      <PageBanner 
        title="About Noon 2 Night" 
        subtitle="Our Journey, Our Passion"
        image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
      />
      <AboutUs />
    </Layout>
  );
}

export default AboutPage;
