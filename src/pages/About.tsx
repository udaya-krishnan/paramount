import { motion } from "framer-motion";
import { Target, Heart, TrendingUp, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import foodSpread from "@/assets/food-spread.jpg";

const values = [
  { icon: Heart, title: "Quality First", description: "Every ingredient is handpicked. Every dish is prepared with love and precision." },
  { icon: Users, title: "Family Values", description: "We treat every customer like family. Warm hospitality is at our core." },
  { icon: TrendingUp, title: "Constant Growth", description: "From one outlet to many, we keep growing while maintaining the quality you trust." },
  { icon: Target, title: "Customer Focus", description: "Your satisfaction drives everything we do. We listen, adapt, and serve better." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-warm-section">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2">
              The Paramount <span className="text-primary">Story</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A journey of passion, flavor, and unwavering commitment to serving happiness across Kerala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src={foodSpread}
              alt="Paramount food heritage"
              className="rounded-xl shadow-2xl w-full aspect-[4/3] object-cover"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                Born from a Passion for <span className="text-primary">Great Food</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Paramount began as a humble restaurant in Kadampazhipuram, Kerala — driven by a simple belief: everyone deserves to enjoy exceptional food in a warm, welcoming space.
                </p>
                <p>
                  Over the years, that single outlet blossomed into a multi-brand group encompassing restaurants, cafés, bakeries, supermarkets, and fresh markets. Each new venture carried the same DNA of quality, authenticity, and care.
                </p>
                <p>
                  Today, the Paramount Group is recognized as one of Kerala's most trusted food and retail brands. With multiple outlets serving thousands of happy customers daily, we continue to grow while staying true to our roots.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm-section">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Values" title="What We Stand For" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-card-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <SectionHeading subtitle="Our Vision" title="Serving Happiness, Every Day" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our vision is to be Kerala's most loved food and lifestyle brand — one that families trust, communities celebrate, and food lovers seek out. We aim to expand our reach while deepening the quality and warmth that define the Paramount experience.
          </motion.p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
