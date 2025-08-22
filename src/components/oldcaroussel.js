// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import CarCard from './CarCard';

// export default function CarsCarousel({ cars }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [translateX, setTranslateX] = useState(0);
//   const carouselRef = useRef(null);
//   const slideRef = useRef(null);

//   // Update items per view - toujours 1 colonne
//   useEffect(() => {
//     const updateItemsPerView = () => {
//       setItemsPerView(1);
//       setCurrentIndex(0);
//     };

//     updateItemsPerView();
//     window.addEventListener('resize', updateItemsPerView);
//     return () => window.removeEventListener('resize', updateItemsPerView);
//   }, []);

//   // Handle touch events for swipe
//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     setStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
//     const x = e.touches[0].clientX;
//     const diff = startX - x;
//     setTranslateX(-diff);
//   };

//   const handleTouchEnd = () => {
//     if (Math.abs(translateX) > 50) {
//       if (translateX > 0) {
//         nextSlide();
//       } else {
//         prevSlide();
//       }
//     }
//     setIsDragging(false);
//     setTranslateX(0);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex >= Math.ceil(cars.length / itemsPerView) - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex <= 0 ? Math.ceil(cars.length / itemsPerView) - 1 : prevIndex - 1
//     );
//   };

//   const visibleCars = cars.slice(
//     currentIndex * itemsPerView,
//     (currentIndex * itemsPerView) + itemsPerView
//   );

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div 
//         className="relative"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ 
//               opacity: 1, 
//               x: 0,
//               transform: `translateX(${translateX}px)`
//             }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.3 }}
//             className="grid grid-cols-1 gap-6 px-2"
//           >
//             {visibleCars.map((car) => (
//               <CarCard key={car.id} car={car} />
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all z-10"
//         aria-label="Précédent"
//       >
//         <ChevronLeft className="w-6 h-6 text-red-600" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all z-10"
//         aria-label="Suivant"
//       >
//         <ChevronRight className="w-6 h-6 text-red-600" />
//       </button>

//       {/* Indicators */}
//       <div className="flex justify-center mt-6 gap-2">
//         {Array.from({ length: Math.ceil(cars.length / itemsPerView) }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-2 rounded-full transition-all ${
//               index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-300 w-3'
//             }`}
//             aria-label={`Aller au slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
