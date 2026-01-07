import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="servizi"
      ref={ref}
      className="py-24 md:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-5xl"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-6 text-center">
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              {t.services.label}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-4 font-serif text-4xl md:text-5xl text-center text-foreground"
          >
            {t.services.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-16 text-center text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            {t.services.description}
          </motion.p>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-lg border border-border bg-background p-6 hover:border-accent/50 hover:shadow-soft transition-all"
              >
                <div className="mb-4 h-1 w-12 bg-accent rounded group-hover:w-16 transition-all" />
                <h3 className="mb-2 font-serif text-xl text-foreground">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
