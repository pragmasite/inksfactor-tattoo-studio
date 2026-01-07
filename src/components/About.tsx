import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Shield, Award, Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const icons = [Sparkles, Shield, Award, Users];

  return (
    <section
      id="chi-siamo"
      ref={ref}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-4xl"
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-6 text-center">
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              {t.about.label}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="mb-4 font-serif text-4xl md:text-5xl text-center text-foreground"
          >
            {t.about.title1}
            <span className="block text-primary">{t.about.title2}</span>
          </motion.h2>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12 space-y-4">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {t.about.features.map((feature, index) => {
              const IconComponent = icons[index];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-lg border border-border bg-card p-6 hover:border-primary/30 transition-all"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
                15+
              </div>
              <p className="text-foreground/70">{t.about.stat1}</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
                1000+
              </div>
              <p className="text-foreground/70">{t.about.stat2}</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
                4.8/5
              </div>
              <p className="text-foreground/70">{t.about.stat3}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
