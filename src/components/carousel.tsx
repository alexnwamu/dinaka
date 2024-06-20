
// components/Carousel.js
'use client'
// components/Carousel.tsx

// components/Carousel.tsx

// components/Carousel.tsx

// components/Carousel.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden w-[700px] h-[300px]">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute top-0 w-full"
          initial={{ opacity: index === currentIndex ? 1 : 0, x: index * 100 }}
          animate={{ opacity: 1, x: index * 100 }}
          exit={{ opacity: 0, x: index * 100 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          {slide}
        </motion.div>
      ))}
      <button className="absolute top-0 left-0 z-10" onClick={prevSlide}>
        Prev
      </button>
      <button className="absolute top-0 right-0 z-10" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
