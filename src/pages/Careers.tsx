import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
    return (
        <>
            <Helmet>
                <title>Careers | TWILOOK</title>
                <meta name="description" content="Join the Twilook Team" />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl mb-2">Careers</h1>
                    <h2 className="text-xl text-muted-foreground mb-8">Join the Twilook Team</h2>

                    <div className="prose prose-neutral max-w-none space-y-6">
                        <p>
                            At Twilook, we are always looking for passionate individuals who love fashion, creativity, and innovation. Our team works together to build a brand that reflects modern style and customer satisfaction.
                        </p>

                        <h3 className="text-lg font-medium mt-8 mb-4">We offer opportunities in areas such as:</h3>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Fashion design</li>
                            <li>Marketing &amp; branding</li>
                            <li>E-commerce management</li>
                            <li>Customer support</li>
                            <li>Content creation</li>
                        </ul>

                        <p className="mt-8">
                            If you’re excited about shaping the future of fashion and working in a dynamic environment, we’d love to hear from you.
                        </p>

                        <div className="bg-muted/30 p-6 rounded-lg mt-8 border">
                            <h3 className="font-medium mb-2">Send your resume to:</h3>
                            <a href="mailto:careers@twilook.com" className="text-primary hover:underline">careers@twilook.com</a>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Careers;
