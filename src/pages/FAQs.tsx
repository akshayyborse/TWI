import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQs = () => {
    const faqs = [
        {
            q: "How long does delivery take?",
            a: "Orders are processed within 24–48 hours and usually delivered within 3–7 working days, depending on your location."
        },
        {
            q: "How can I track my order?",
            a: "Once your order is shipped, you will receive a tracking link via email or SMS."
        },
        {
            q: "Can I cancel my order?",
            a: "Orders can be canceled before they are shipped. Contact our support team immediately for assistance."
        },
        {
            q: "What payment methods are accepted?",
            a: "We accept major payment options including UPI, debit/credit cards, and online payments."
        },
        {
            q: "Do you offer Cash on Delivery?",
            a: "Yes, Cash on Delivery may be available for selected locations."
        }
    ];

    return (
        <>
            <Helmet>
                <title>FAQs | TWILOOK</title>
                <meta name="description" content="Frequently Asked Questions" />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl mb-8">Frequently Asked Questions</h1>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b pb-6 last:border-0">
                                <h3 className="text-lg font-medium mb-3 flex gap-4">
                                    <span className="text-muted-foreground">{index + 1}.</span>
                                    {faq.q}
                                </h3>
                                <p className="text-muted-foreground pl-8">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default FAQs;
