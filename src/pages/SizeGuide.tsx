import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SizeGuide = () => {
    const sizes = [
        { size: "S", chest: "36–38", length: "26" },
        { size: "M", chest: "38–40", length: "27" },
        { size: "L", chest: "40–42", length: "28" },
        { size: "XL", chest: "42–44", length: "29" },
        { size: "XXL", chest: "44–46", length: "30" },
    ];

    return (
        <>
            <Helmet>
                <title>Size Guide | TWILOOK</title>
                <meta name="description" content="Size Guide to help you find the perfect fit." />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl mb-6">Size Guide</h1>
                    <p className="text-muted-foreground mb-10 text-lg">
                        To help you find the perfect fit, refer to the size chart below.
                    </p>

                    <div className="border rounded-lg overflow-hidden mb-12 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-muted/50 border-b">
                                    <th className="py-4 px-6 font-medium text-sm">Size</th>
                                    <th className="py-4 px-6 font-medium text-sm">Chest (inches)</th>
                                    <th className="py-4 px-6 font-medium text-sm">Length (inches)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizes.map((row) => (
                                    <tr key={row.size} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                                        <td className="py-4 px-6 font-medium">{row.size}</td>
                                        <td className="py-4 px-6 text-muted-foreground">{row.chest}</td>
                                        <td className="py-4 px-6 text-muted-foreground">{row.length}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-slate-50 border rounded-lg p-8">
                        <h2 className="text-xl font-medium mb-6">Tips for choosing the right size:</h2>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0 mt-2"></span>
                                <span>Measure your chest at the widest part</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0 mt-2"></span>
                                <span>Compare your measurements with the chart above</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0 mt-2"></span>
                                <span>If between sizes, choose the larger size for a relaxed fit</span>
                            </li>
                        </ul>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default SizeGuide;
