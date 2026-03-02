import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import OutletCard from "@/components/OutletCard";
import { outlets } from "@/data/paramount";

const Businesses = () => {
  return (
    <Layout>
      <section className="relative py-24 bg-warm-section">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Brands</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2">
              Paramount <span className="text-primary">Businesses</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Explore the diverse range of food and retail experiences under the Paramount Group umbrella.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outlets.map((outlet, i) => (
              <OutletCard key={outlet.id} outlet={outlet} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Businesses;
