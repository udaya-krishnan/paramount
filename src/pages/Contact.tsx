import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  return (
    <Layout>
      <section className="relative py-24 bg-warm-section">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Paramount Restaurant & Supermarket</h2>
              <p className="text-muted-foreground text-sm">(Main Branch)</p>

              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "Kadambazhipuram Junction, Kadampazhipuram, Kerala 678633" },
                  { icon: Phone, label: "Phone", value: "099466 66541", href: "tel:09946666541" },
                  { icon: Mail, label: "Email", value: "info@paramountgroup.in", href: "mailto:info@paramountgroup.in" },
                  { icon: Clock, label: "Hours", value: "Mon – Sun: 11:00 AM – 11:00 PM" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="text-card-foreground font-medium hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-card-foreground font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <a href="tel:09946666541" className="flex-1">
                  <Button className="w-full gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919946666541" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden border border-border shadow-lg h-[400px] md:h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d76.3!3d10.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAwLjAiTiA3NsKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paramount Restaurant Location"
              />
            </motion.div>
          </div>

          {/* Additional Info */}
          <div className="bg-warm-section rounded-xl p-8 text-center">
            <SectionHeading
              subtitle="Pricing"
              title="₹200 – ₹400 per person"
              description="Enjoy a full dining experience at an affordable price range. Family-friendly, vegetarian options available, and high chairs for kids."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
