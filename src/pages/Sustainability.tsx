import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sustainability = () => {
    return (
        <>
            <Helmet>
                <title>Sustainability | TWILOOK</title>
                <meta name="description" content="Our commitment to fashion with responsibility." />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl mb-2">Sustainability</h1>
                    <h2 className="text-xl text-muted-foreground mb-8">Fashion with Responsibility</h2>

                    <div className="prose prose-neutral max-w-none space-y-6">
                        <p>
                            At Twilook, we believe fashion should not come at the expense of the planet. We are committed to making responsible choices in the way our products are designed, produced, and delivered.
                        </p>

                        <h3 className="text-lg font-medium mt-8 mb-4">Our sustainability efforts include:</h3>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Using high-quality materials that last longer</li>
                            <li>Minimizing fabric waste during production</li>
                            <li>Working with responsible manufacturing partners</li>
                            <li>Using eco-friendly packaging wherever possible</li>
                            <li>Encouraging customers to buy consciously and wear longer</li>
                        </ul>

                        <p className="mt-8">
                            We continuously look for ways to improve our environmental impact while maintaining the style and quality our customers love.
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Sustainability;
