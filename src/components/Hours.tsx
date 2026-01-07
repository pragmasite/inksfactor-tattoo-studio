import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Example hours - adjust as needed
  const schedule = [
    { hours: "09:00 - 19:00" },
    { hours: "09:00 - 19:00" },
    { hours: "09:00 - 19:00" },
    { hours: "09:00 - 19:00" },
    { hours: "09:00 - 18:00" },
    { hours: "10:00 - 17:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
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
      id="orari"
      ref={ref}
      className="py-24 md:py-32 bg-muted/50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-xl"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-6 text-center">
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              {t.hours.label}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-16 font-serif text-4xl md:text-5xl text-center text-foreground"
          >
            {t.hours.title}
          </motion.h2>

          {/* Hours Card */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg border border-border bg-background shadow-soft overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-serif text-lg text-foreground">
                {t.hours.header}
              </span>
            </div>

            {/* Hours List */}
            <motion.div
              variants={containerVariants}
              className="divide-y divide-border"
            >
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;

                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : "hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      )}
                      <div className={isToday ? "ml-0" : "ml-8"}>
                        <span
                          className={`block text-sm ${
                            isToday
                              ? "font-semibold text-primary"
                              : "font-medium text-foreground"
                          }`}
                        >
                          {t.hours.days[i]}
                        </span>
                        {isToday && (
                          <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full inline-block mt-1">
                            {t.hours.today}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isClosed ? "text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-foreground/70 text-sm mb-4">
              Per appuntamenti e informazioni
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+41792469840"
                className="text-accent hover:text-accent/80 font-medium"
              >
                +41 79 246 98 40
              </a>
              <span className="text-foreground/30">•</span>
              <a
                href="mailto:inksfactor@gmail.com"
                className="text-accent hover:text-accent/80 font-medium"
              >
                inksfactor@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
