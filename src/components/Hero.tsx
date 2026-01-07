import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.svg"
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-40 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -left-40 bottom-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container relative mx-auto flex flex-col items-center justify-center px-4 text-center py-32"
      >
        {/* Badge */}
        <motion.span
          variants={itemVariants}
          className="mb-6 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm tracking-widest text-white backdrop-blur-sm"
        >
          {t.hero.badge}
        </motion.span>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 max-w-5xl font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
        >
          {t.hero.title1}
          <br />
          <span className="text-accent">{t.hero.title2}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <a href="tel:+41792469840" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              +41 79 246 98 40
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            <a href="mailto:inksfactor@gmail.com" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              {t.hero.sendEmail}
            </a>
          </Button>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center gap-2 text-white/70 text-sm"
        >
          <MapPin className="h-4 w-4 text-accent" />
          {t.hero.location}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#chi-siamo"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 rounded-full border border-white/30 p-3 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
