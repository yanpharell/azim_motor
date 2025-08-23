import React from "react";
import { PrimaryButton, OutlineButton } from "./Buttons";
import { CarSlider } from "../components/CarSlider";
import { section } from "framer-motion/m";

export default function CarCard({ car, onReserveClick }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md h-full">
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="md:w-1/2 lg:w-3/5 relative h-64 md:h-auto">
          <CarSlider images={car.images} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Details Section */}
        <div className="p-6 md:w-1/2 lg:w-2/5 flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-neutral-900">{car.name}</h3>
              <span className="whitespace-nowrap rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
                {car.price} FCFA/j
              </span>
            </div>
            <div className="flex items-start justify-between gap-2 wrap pt-2">
              <span className="rounded-lg bg-black px-4 py-1.5 text-sm font-semibold text-white whitespace-normal break-words">
                Catégorie : {car.category} | Couleur extérieure : {car.ExtérieurColor} |
                 Couleur intérieure : {car.interiorColor} | Transmission : {car.transmission} |
                 Carburant : {car.fuel} | Boite de vitesse : {car.gearbox} |
                Moteur :  {car.engine}
              </span>
            </div>

            <div className="flex items-start justify-between gap-2 wrap pt-2">
               <span className="rounded-lg bg-black px-4 py-1 text-sm font-semibold text-white whitespace-normal break-words">
                Statut : {car.statut}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              {Object.entries(car.features).map(([category, items], i) => (
                <div key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-gray-800 mb-1.5">{category}</h4>
                  <ul className="grid grid-cols-2 gap-1.0">
                    {items.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex gap-3">
              <a
                href="#reserve"
                onClick={(e) => {
                  e.preventDefault();
                  onReserveClick(car);
                  document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1"
              >
                <PrimaryButton className="w-full">Réserver dès maintenant !</PrimaryButton>
              </a>
              {/* <OutlineButton className="flex-1">Détails</OutlineButton> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
