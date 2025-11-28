import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import portifolioImg from "../public/instagram/portifolio.jpg";
import tenhaseuaplicativoImg from "../public/instagram/tenhaseuaplicativo.jpg";
import acquaecoralImg from "../public/instagram/acquaecoral.jpg";
import post1Img from "../public/instagram/post-1.png";
import gemini1Img from "../public/instagram/Gemini_Generated_Image_863zgm863zgm863z.png";
import gemini2Img from "../public/instagram/Gemini_Generated_Image_uabvcxuabvcxuabv.png";

const InstagramCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const instagramPosts = [
    portifolioImg,
    tenhaseuaplicativoImg,
    acquaecoralImg,
    post1Img,
    gemini1Img,
    gemini2Img,
  ];

  // Duplicar posts para criar loop infinito
  const duplicatedPosts = [...instagramPosts, ...instagramPosts];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }
      carousel.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight">
              Siga-me no <span className="text-gradient-primary">Instagram</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            Acompanhe meus projetos e novidades
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-2.5 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {duplicatedPosts.map((post, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg overflow-hidden glass border border-border hover:border-primary transition-all group"
              >
                <img
                  src={post}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;

