import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Outlet } from "@/data/paramount";

const OutletCard = ({ outlet, index }: { outlet: Outlet; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group h-full"
    >
      {/* Color accent bar */}
      <div className="h-1.5 bg-primary" />

      {/* CONTENT */}
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {outlet.category}
            </span>
            <h3 className="text-xl font-display font-bold text-card-foreground mt-1">
              {outlet.name}
            </h3>
          </div>
          <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium shrink-0">
            <Star className="w-3.5 h-3.5 fill-primary" />
            {outlet.rating}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {outlet.description}
        </p>

        {/* Details */}
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{outlet.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>{outlet.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{outlet.hours}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {outlet.features.map((feature) => (
            <span
              key={feature}
              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS — ALWAYS AT BOTTOM */}
        <div className="flex gap-2 mt-auto">
          <a href={`tel:${outlet.phone.replace(/\s/g, "")}`} className="flex-1">
            <Button variant="default" size="sm" className="w-full gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              Call
            </Button>
          </a>

          <a
            href={outlet.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" size="sm" className="w-full gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Directions
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default OutletCard;