import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Press = () => {
    return (
        <>
            <Helmet>
                <title>Press | TWILOOK</title>
                <meta name="description" content="Twilook in the Media" />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl mb-2">Press</h1>
                    <h2 className="text-xl text-muted-foreground mb-8">Twilook in the Media</h2>

                    <div className="prose prose-neutral max-w-none space-y-6">
                        <p>
                            Twilook is an emerging fashion brand focused on delivering trendy and affordable apparel for modern consumers. As we continue to grow, we welcome media collaborations, brand partnerships, and influencer features.
                        </p>

                        <div className="bg-muted/30 p-8 rounded-lg mt-12 text-center border">
                            <p className="mb-4">
                                For press inquiries, interviews, collaborations, or media requests, please contact:
                            </p>
                            <a href="mailto:press@twilook.com" className="text-xl font-medium hover:underline">press@twilook.com</a>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Press;
