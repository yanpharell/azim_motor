import React from 'react';

const Map = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4819661413894!2d1.2046246999999999!3d6.199968500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102159d4457dc3dd%3A0xeef1acd3f950c45c!2sAzim%20Motors%20lom%C3%A9!5e0!3m2!1sfr!2stg!4v1755940707012!5m2!1sfr!2stg";
  return (
    <div className="mt-6 rounded-xl overflow-hidden h-60 md:h-60 w-full">
      <iframe
        title="Localisation sur la carte"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-sm"
      ></iframe>
    </div>
  );
};

export default Map;
