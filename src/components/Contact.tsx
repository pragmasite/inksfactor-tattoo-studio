import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
      id="contatti"
      ref={ref}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-6 text-center">
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              {t.contact.label}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-4 font-serif text-4xl md:text-5xl text-center text-foreground"
          >
            {t.contact.title1}
            <span className="block text-primary">{t.contact.title2}</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-16 text-center text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            {t.contact.description}
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              className="space-y-8"
            >
              {/* Phone */}
              <motion.a
                variants={itemVariants}
                href="tel:+41792469840"
                className="group flex gap-4 rounded-lg border border-border p-6 hover:border-accent/50 hover:bg-muted/30 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg text-foreground">
                    {t.contact.phone}
                  </h3>
                  <p className="text-foreground/70">+41 79 246 98 40</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                variants={itemVariants}
                href="mailto:inksfactor@gmail.com"
                className="group flex gap-4 rounded-lg border border-border p-6 hover:border-accent/50 hover:bg-muted/30 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg text-foreground">
                    {t.contact.email}
                  </h3>
                  <p className="text-foreground/70">inksfactor@gmail.com</p>
                </div>
              </motion.a>

              {/* Address */}
              <motion.div
                variants={itemVariants}
                className="group flex gap-4 rounded-lg border border-border p-6 hover:border-accent/50 hover:bg-muted/30 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg text-foreground">
                    {t.contact.address}
                  </h3>
                  <p className="text-foreground/70">
                    Via Bellinzona 4<br />
                    6710 Biasca, Ticino<br />
                    Switzerland
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <Button asChild size="lg" className="w-full">
                  <a href="tel:+41792469840" className="justify-center">
                    {t.contact.cta}
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={itemVariants}
              className="rounded-lg overflow-hidden border border-border shadow-soft h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.1234567890!2d8.973273!3d46.35303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479298d4f4b4b4b4%3A0x4b4b4b4b4b4b4b4b!2sVia%20Bellinzona%204%2C%206710%20Biasca%2C%20Switzerland!5e0!3m2!1sit!2sch!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="InksFactor Tattoo Studio Location"
              />
            </motion.div>
          </div>

          {/* Service Area */}
          <motion.div
            variants={itemVariants}
            className="mt-16 rounded-lg bg-primary/5 border border-primary/10 p-8 text-center"
          >
            <h3 className="mb-3 font-serif text-xl text-foreground">
              Zone di servizio
            </h3>
            <p className="text-foreground/70">
              Serviamo clienti da Biasca e da tutta la regione del Ticino: Lugano, Bellinzona, Locarno, Mendrisio, Chiasso, Airolo, Faido, Quinto e Ambrì
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
