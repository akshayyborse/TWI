import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Shipping = () => {
    return (
        <>
            <Helmet>
                <title>Shipping & Returns | TWILOOK</title>
                <meta name="description" content="Shipping and Return Policy for TWILOOK" />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl mb-12">Shipping & Returns</h1>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-medium mb-6">Shipping Policy</h2>
                            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                                <li>Orders are processed within 1–2 business days</li>
                                <li>Standard delivery time is 3–7 working days</li>
                                <li>Shipping charges may apply depending on location or promotions</li>
                                <li>Tracking information will be provided once your order is dispatched</li>
                            </ul>
                        </section>

                        <Separator />

                        <section>
                            <h2 className="text-2xl font-medium mb-6">Return Policy</h2>
                            <p className="text-muted-foreground mb-6">
                                If you receive a damaged or incorrect product, you may request a return within 7 days of delivery.
                            </p>

                            <h3 className="text-lg font-medium mb-4">Conditions for returns:</h3>
                            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
                                <li>Item must be unused</li>
                                <li>Original packaging must be intact</li>
                                <li>Proof of purchase required</li>
                            </ul>

                            <div className="bg-muted/30 p-4 rounded-lg flex items-center border">
                                <p className="text-sm">
                                    Refunds will be processed after the returned item is inspected.
                                </p>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Shipping;
