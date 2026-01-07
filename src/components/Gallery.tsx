import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images with descriptions
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1577722635474-91e20eed009f?w=500&h=500&fit=crop", alt: t.nav.profession },
    { id: 2, src: "https://images.unsplash.com/photo-1566827812347-f6331b66df39?w=500&h=500&fit=crop", alt: "Tatuaggio fine line" },
    { id: 3, src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=500&fit=crop", alt: "Ritratto realistico" },
    { id: 4, src: "https://images.unsplash.com/photo-1577722571315-4f9f1f90f876?w=500&h=500&fit=crop", alt: "Design artistico" },
    { id: 5, src: "https://images.unsplash.com/photo-1582207142210-66419cc68ba5?w=500&h=500&fit=crop", alt: "Tatuaggio colorato" },
    { id: 6, src: "https://images.unsplash.com/photo-1580209699941-3d854d912e6d?w=500&h=500&fit=crop", alt: "Lavoro su misura" },
  ];

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

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Show less than 6 images (grid), otherwise use slider
  const hasSlider = galleryImages.length > 6;

  return (
    <section
      id="galleria"
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
              {t.gallery.label}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-4 font-serif text-4xl md:text-5xl text-center text-foreground"
          >
            {t.gallery.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-16 text-center text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            {t.gallery.description}
          </motion.p>

          {/* Grid Layout (less than 6 images) */}
          {!hasSlider && (
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  className="group relative aspect-square overflow-hidden rounded-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium text-white">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Slider Layout (6 or more images) */}
          {hasSlider && (
            <motion.div
              variants={itemVariants}
              className="relative flex items-center justify-center gap-4"
            >
              <button
                onClick={goToPrevious}
                className="absolute -left-6 md:left-0 z-10 p-2 rounded-full bg-primary/80 text-white hover:bg-primary transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-lg">
                {galleryImages.map((image, index) => (
                  <motion.img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      transition: { duration: 0.5 },
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-sm font-medium text-white">
                    {galleryImages[currentIndex].alt}
                  </p>
                  <p className="text-xs text-white/70">
                    {currentIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>

              <button
                onClick={goToNext}
                className="absolute -right-6 md:right-0 z-10 p-2 rounded-full bg-primary/80 text-white hover:bg-primary transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-muted-foreground w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
