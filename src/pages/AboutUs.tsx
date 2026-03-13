import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About Us | TWILOOK</title>
                <meta name="description" content="About Twilook - Style That Speaks for You" />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl mb-2">About Us</h1>
                    <h2 className="text-xl text-muted-foreground mb-8">Twilook – Style That Speaks for You</h2>

                    <div className="prose prose-neutral max-w-none space-y-6">
                        <p>
                            Twilook is a modern fashion brand focused on delivering stylish, comfortable, and affordable clothing for everyday wear. Our goal is to create apparel that blends contemporary design with quality materials so that everyone can express their individuality with confidence.
                        </p>
                        <p>
                            Founded with the idea that fashion should be accessible and expressive, Twilook offers a range of clothing including oversized tees, sweatshirts, sweatpants, and lifestyle apparel designed for both men and women. Every product is carefully crafted to ensure comfort, durability, and style.
                        </p>
                        <p>
                            We believe fashion is more than clothing — it’s a form of self-expression. Whether you're looking for casual streetwear or statement pieces, Twilook is committed to helping you look your best every day.
                        </p>
                        <div className="bg-muted/30 p-6 rounded-lg mt-8 text-center border">
                            <h3 className="text-lg font-medium mb-2">Our mission is simple:</h3>
                            <p className="text-muted-foreground">Affordable fashion, modern designs, and quality you can trust.</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default AboutUs;
