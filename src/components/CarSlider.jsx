import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CarSlider = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoPlay, setAutoPlay] = useState(true);
  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, paginate]);

  // Handle swipe gestures
  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  // Gestion du glissement tactile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Glissement vers la gauche
      paginate(1);
    }

    if (touchStart - touchEnd < -50) {
      // Glissement vers la droite
      paginate(-1);
    }
  };

  return (
    <div 
      className="relative w-full h-full rounded-2xl overflow-hidden group"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="relative w-full h-full">
        <img
          key={page}
          src={images[imageIndex]}
          alt={`Voiture ${imageIndex + 1}`}
          className="w-full h-full object-cover object-center select-none"
          // className="w-full h-full object-contain"
          loading="lazy"
          draggable={false}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-6 h-6 text-neutral-800" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-6 h-6 text-neutral-800" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const direction = i > imageIndex ? 1 : -1;
              setPage([i, direction]);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === imageIndex ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Aller à l'image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Configuration pour le swipe
export const swipeConfidenceThreshold = 10000;
export const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
