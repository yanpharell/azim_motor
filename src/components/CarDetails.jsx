import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../data/cars";
import { CarSlider } from "./CarSlider";
import { PrimaryButton, OutlineButton } from "./Buttons";

export const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === parseInt(id));

  if (!car) return <p>Voiture non trouvée</p>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CarSlider images={car.images} />
        <div className="flex flex-col gap-4">
          <p><strong>Couleur extérieure:</strong> {car.exteriorColor}</p>
          <p><strong>Couleur intérieure:</strong> {car.interiorColor}</p>
          <p><strong>Transmission:</strong> {car.transmission}</p>
          <p><strong>Carburant:</strong> {car.fuel}</p>
          <p><strong>Boîte de vitesse:</strong> {car.gearbox}</p>
          <p><strong>Moteur:</strong> {car.engine}</p>

          {Object.entries(car.features).map(([key, features]) => (
            <div key={key}>
              <h4 className="font-semibold mt-4">{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
              <ul>{features.map(f => <li key={f}>- {f}</li>)}</ul>
            </div>
          ))}

          <div className="flex gap-2 mt-6">
            <PrimaryButton>Réserver</PrimaryButton>
            <OutlineButton onClick={() => window.open("tel:+22890000000")}>Appeler</OutlineButton>
            <OutlineButton onClick={() => navigate(-1)}>Voiture suivante</OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};
