import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import lookbook1 from "@/assets/lookbook-1.png";
import lookbook2 from "@/assets/lookbook-2.png";
import lookbook3 from "@/assets/lookbook-3.png";

const lookbookItems = [
    {
        id: 1,
        image: lookbook1,
        title: "Urban Minimalism",
        description: "Refined silhouettes for the city landscape. Monochromatic tones meeting architectural precision.",
        year: "2024",
    },
    {
        id: 2,
        image: lookbook2,
        title: "Timeless Elegance",
        description: "Classic designs reimagined for modern sophistication. Flowing fabrics and graceful movements.",
        year: "2024",
    },
    {
        id: 3,
        image: lookbook3,
        title: "Architectural Streetwear",
        description: "Where structural form meets everyday functionality. Sharp lines and bold textures.",
        year: "2024",
    },
];

const Lookbook = () => {
    return (
        <>
            <Helmet>
                <title>Lookbook | TWILOOK</title>
                <meta name="description" content="Explore the TWILOOK 2024 Collection lookbook. Timeless elegance and contemporary fashion." />
            </Helmet>

            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-1 pt-32 pb-24">
                    <div className="container mx-auto px-6 lg:px-12">
                        <header className="mb-20 text-center lg:text-left">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-xs tracking-fashion text-primary font-medium mb-4"
                            >
                                EDITORIAL
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="font-display text-5xl lg:text-7xl font-medium tracking-tight mb-6"
                            >
                                Lookbook <span className="italic font-light text-primary">2024</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed"
                            >
                                An exploration of form, texture, and light. Discover our latest collection through an editorial lens.
                            </motion.p>
                        </header>

                        <div className="space-y-32 lg:space-y-48">
                            {lookbookItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full lg:w-3/5"
                                    >
                                        <div className="aspect-[4/5] overflow-hidden relative group">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.7, delay: 0.2 }}
                                        className="w-full lg:w-2/5 space-y-6"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="w-8 h-[1px] bg-primary" />
                                            <p className="text-xs tracking-widest text-primary font-medium">{item.year}</p>
                                        </div>
                                        <h2 className="font-display text-3xl lg:text-4xl font-medium">{item.title}</h2>
                                        <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                                        <div className="pt-4">
                                            <button className="text-xs tracking-fashion font-medium pb-2 border-b border-foreground hover:border-primary hover:text-primary transition-all uppercase">
                                                Explore Collection
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-48 text-center"
                        >
                            <h3 className="font-display text-3xl lg:text-4xl font-medium mb-8">Ready to Elevate Your Style?</h3>
                            <a
                                href="/products"
                                className="inline-flex items-center bg-foreground text-background px-12 py-5 rounded-none tracking-fashion font-medium hover:bg-primary transition-colors group"
                            >
                                SHOP NEW ARRIVALS
                                <motion.span
                                    className="ml-2"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight size={18} />
                                </motion.span>
                            </a>
                        </motion.div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

// Supporting icon
const ArrowRight = ({ size }: { size: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

export default Lookbook;
