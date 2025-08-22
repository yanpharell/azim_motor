import React, { useState, useEffect } from "react";
import { cars } from "../data/cars";
import CarsCarousel from "../components/CarsCarousel";

export default function CarsPage({ formData, setFormData }) {
  const [category, setCategory] = useState("Tous les modèles");
  const [selectedCar, setSelectedCar] = useState(null);
  const categories = ["Tous les modèles", "SUV compact", "SUV intermédiaire / familial"];

  const filteredCars = category === "Tous les modèles" ? cars : cars.filter(c => c.category === category);

  return (
    <div id="voitures" className="py-12 px-4 max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2.5 rounded-full border-2 transition-Tous les modèles duration-200 text-sm md:text-base ${
                category === cat 
                  ? "bg-black text-white border-black font-medium shadow-md" 
                  : "border-neutral-300 text-neutral-700 hover:border-black hover:text-black bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* Cars Carousel */}
      <div className="relative">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-gray-900 mb-8 px-4">
          Nos véhicules {category !== "Tous les modèles" ? category : "disponibles"}
        </h2>
        {filteredCars.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Ce modèle de véhicule n'est pas encore disponible dans notre flotte.
            </p>
            <p className="mt-2 text-gray-500">
              N'hésitez pas à nous contacter pour plus d'informations sur nos véhicules disponibles.
            </p>
          </div>
        ) : (
          <CarsCarousel 
            cars={filteredCars} 
            onReserveClick={(car) => {
              setSelectedCar(car);
              // Mettre à jour l'état du formulaire avant de faire défiler
              setFormData(prev => ({
                ...prev,
                vehicleType: car.name, // Utiliser le nom du véhicule comme type de véhicule
                message: `Je suis intéressé par la location de ce véhicule : ${car.name} (${car.price} FCFA/jour)`
              }));
              
              // Faire défiler jusqu'à la section de réservation après un court délai
              setTimeout(() => {
                const reserveSection = document.getElementById('reserve');
                if (reserveSection) {
                  reserveSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          />
        )}
      </div>
    </div>
  );
};
