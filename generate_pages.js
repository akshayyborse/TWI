const fs = require('fs');

const pages = [
  { name: 'AboutUs', title: 'About Us', path: 'about' },
  { name: 'Sustainability', title: 'Sustainability', path: 'sustainability' },
  { name: 'Careers', title: 'Careers', path: 'careers' },
  { name: 'Press', title: 'Press', path: 'press' },
  { name: 'Contact', title: 'Contact', path: 'contact' },
  { name: 'FAQs', title: 'FAQs', path: 'faqs' },
  { name: 'Shipping', title: 'Shipping & Returns', path: 'shipping' },
  { name: 'SizeGuide', title: 'Size Guide', path: 'size-guide' }
];

pages.forEach(p => {
  const content = `import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ${p.name} = () => {
    return (
        <>
            <Helmet>
                <title>${p.title} | TWILOOK</title>
                <meta name="description" content="${p.title} page for TWILOOK" />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-4xl">
                    <h1 className="font-display text-4xl mb-8">${p.title}</h1>
                    <div className="prose prose-neutral max-w-none">
                        <p className="text-muted-foreground">Information about ${p.title} will go here. This page is currently under development.</p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default ${p.name};
`;
  fs.writeFileSync(`src/pages/${p.name}.tsx`, content);
});
console.log('Pages generated!');
