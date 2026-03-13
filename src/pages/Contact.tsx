import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | TWILOOK</title>
                <meta name="description" content="Get in touch with TWILOOK support." />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl mb-2">Contact</h1>
                    <h2 className="text-xl text-muted-foreground mb-8">We’d Love to Hear From You</h2>

                    <div className="prose prose-neutral max-w-none space-y-6">
                        <p className="text-lg">
                            If you have questions about orders, products, or anything else, our team is here to help.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="border p-6 rounded-lg bg-white flex flex-col items-center text-center">
                                <Mail className="mb-4 text-muted-foreground" size={32} />
                                <h3 className="font-medium mb-2">Email Support</h3>
                                <a href="mailto:support@twilook.com" className="text-primary hover:underline mb-2">support@twilook.com</a>
                                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                                    <Clock size={14} /> Response time: Within 24–48 hours
                                </p>
                            </div>

                            <div className="border p-6 rounded-lg bg-white flex flex-col items-center text-center">
                                <MessageSquare className="mb-4 text-muted-foreground" size={32} />
                                <h3 className="font-medium mb-2">Online Form</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    You can also reach us through our website contact form.
                                </p>
                                <button className="text-sm bg-foreground text-background px-4 py-2 rounded-md hover:bg-primary transition-colors">
                                    Open Form
                                </button>
                            </div>
                        </div>

                        <p className="mt-8 text-center text-muted-foreground italic">
                            Customer satisfaction is our priority, and we strive to provide quick and helpful support.
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Contact;
