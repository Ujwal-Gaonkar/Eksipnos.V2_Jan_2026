import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export const LazyImage = ({ src, alt, className = "", placeholderClassName = "" }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton Placeholder */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-secondary via-secondary/50 to-secondary animate-pulse ${placeholderClassName}`}
        />
      )}
      
      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-full h-full object-cover ${className}`}
        />
      )}
    </div>
  );
};
