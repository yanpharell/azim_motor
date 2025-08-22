import React from 'react';

const Map = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63430.69632545004!2d1.188017!3d6.130419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e5e2c0b0b0a9%3A0x7f8f8f8f8f8f8f8f!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sen!2stg!4v1620000000000!5m2!1sen!2stg";

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
