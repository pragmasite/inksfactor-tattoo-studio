import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-2xl mb-3">InksFactor</h3>
            <p className="text-background/80 mb-4">{t.footer.tagline}</p>
            <p className="text-background/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-lg mb-6">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#chi-siamo"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galleria"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-lg mb-6">{t.nav.contact}</h4>
            <div className="space-y-4 mb-6">
              <a
                href="tel:+41792469840"
                className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+41 79 246 98 40</span>
              </a>
              <a
                href="mailto:inksfactor@gmail.com"
                className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>inksfactor@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/inksfactortattoo_flavias_art"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/inksfactor"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8" />

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between text-sm text-background/70"
        >
          <p>
            {currentYear} InksFactor Tattoo Studio. {t.footer.copyright}
          </p>
          <p>Biasca, Ticino, Switzerland</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
