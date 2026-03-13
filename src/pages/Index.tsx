import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStatement from "@/components/BrandStatement";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TWILOOK | Elevate Your Style - Premium Fashion</title>
        <meta
          content="Discover timeless elegance and contemporary fashion at TWILOOK. Shop curated collections for men and women that speak to your unique sense of style."
        />
        <meta name="keywords" content="fashion, luxury clothing, designer wear, elegant dresses, tailored suits, premium fashion" />
        <link rel="canonical" href="https://twilook-fashion.com" />

        {/* Open Graph */}
        <meta property="og:title" content="TWILOOK | Elevate Your Style" />
        <meta property="og:description" content="Discover timeless elegance and contemporary fashion at TWILOOK." />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TWILOOK | Elevate Your Style" />
        <meta name="twitter:description" content="Discover timeless elegance and contemporary fashion at TWILOOK." />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <CategorySection />
          <FeaturedProducts />
          <BrandStatement />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
