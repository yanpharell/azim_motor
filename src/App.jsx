import React, { useState, useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Car, ShieldCheck, CreditCard, MapPin, Phone, Mail, Calendar, ChevronRight } from "lucide-react";
import Map from "./components/Map";
import CarsPage from "./pages/CarsPage";
import PrivacyPolicyModal from "./components/modals/PrivacyPolicyModal";
import LegalNoticeModal from "./components/modals/LegalNoticeModal";
// Palette
const brand = {
  primary: "#000000ff",
  primaryDark: "#fadc6a",
  unpeucafe:"#f6d868",
  rouge:"red"
};

const cars = [
  {
    id: 1,
    name: "Toyota Corolla 2022",
    price: 18000,
    img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2069&auto=format&fit=crop",
    features: ["Auto", "Essence", "5 places"],
  },
  {
    id: 2,
    name: "Kia Sportage 2023",
    price: 26000,
    img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2070&auto=format&fit=crop",
    features: ["Auto", "Diesel", "SUV"],
  },
  {
    id: 3,
    name: "Hyundai i10 2021",
    price: 12000,
    img: "https://images.unsplash.com/photo-1549545933-71494b3a37ab?q=80&w=2071&auto=format&fit=crop",
    features: ["Manuelle", "Essence", "Éco"],
  },
  {
    id: 4,
    name: "Mercedes C-Class 2022",
    price: 45000,
    img: "https://images.unsplash.com/photo-1511910849309-0dffb85781e3?q=80&w=2070&auto=format&fit=crop",
    features: ["Auto", "Essence", "Premium"],
  },
];

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const PrimaryButton = ({ className = "", children }) => (
  <button
    className={`group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 ${className}`}
    style={{
      backgroundImage: `linear-gradient(135deg, ${brand.primary}, ${brand.primaryDark})`,
    }}
  >
    {children}
    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
  </button>
);

const OutlineButton = ({ className = "", children }) => (
  <button
    className={`rounded-2xl border border-neutral-300 px-5 py-3 text-base font-semibold text-neutral-800 transition hover:bg-neutral-50 ${className}`}
  >
    {children}
  </button>
);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2" onClick={closeMenu}>
            <div
              className="grid w-9 h-9 place-items-center rounded-xl text-white"
              style={{ background: brand.primary }}
            >
              {/* <Car className="w-5 h-5" /> */}
              <img src="img/logo.png" alt="Logo" className="w-20 h-50" />
            </div>
            <span className="text-lg font-bold tracking-tight">AZIM Motors Car Rental </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#voitures" className="text-sm text-neutral-700 hover:text-neutral-900" onClick={closeMenu}>Nos voitures</a>
            <a href="#services" className="text-sm text-neutral-700 hover:text-neutral-900" onClick={closeMenu}>Services</a>
            <a href="#contact" className="text-sm text-neutral-700 hover:text-neutral-900" onClick={closeMenu}>Contact</a>
            <a 
              href="#reserve" 
              className="text-sm text-neutral-700 hover:text-neutral-900" 
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Réserver
            </a>
          </nav>
          <div className="hidden md:block">
            <a 
              href="#reserve"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <PrimaryButton>
                Réserver maintenant
              </PrimaryButton>
            </a>
          </div>
          <button 
            className="md:hidden p-2 -mr-2" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
          >
            <div className={`h-4 w-6 flex flex-col justify-between transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}>
              <span className={`block h-0.5 w-6 bg-neutral-900 transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-neutral-900 transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-neutral-900 transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-1">
            <a
              href="#voitures"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={closeMenu}
            >
              Nos voitures
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={closeMenu}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={closeMenu}
            >
              Contact
            </a>
            <a
              href="#reserve"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={closeMenu}
            >
              Réserver
            </a>
            <div className="pt-4">
              <PrimaryButton className="w-full justify-center" onClick={closeMenu}>
                Réserver maintenant
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute -top-40 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full" style={{
        background: `radial-gradient(closest-side, ${brand.primary}15, transparent)`
      }} />
    </div>
    <Container>
      <div className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:min-h-[72vh]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">Location et vente de voitures au meilleur prix</span>
          <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
            SIMPLIFIEZ VOUS LA VIE ! <span className="whitespace-nowrap">COMMANDEZ VOTRE VOITURE <br /> DIRECTEMENT DES USA </span>
          </h1>
          <p className="mt-4 max-w-prose text-neutral-600">
            Soyez différent,choisissez la class et l'élégance.
          </p>
          {/* <p className="mt-4 max-w-prose text-neutral-600">
            Flotte récente, tarifs transparents, support réactif. Réservez en quelques clics et partez l’esprit léger.
          </p> */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#voitures"><PrimaryButton>Voir nos voitures</PrimaryButton></a>
            <a 
              href="#reserve"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <OutlineButton>Réserver maintenant !</OutlineButton>
            </a>
          </div>
          {/* <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Assurance incluse</li>
            <li className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> Paiement sécurisé</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Retrait en agence</li>
          </ul> */}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
<div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
  <img
    src={`${import.meta.env.BASE_URL}img/nissan-1.jpg`}
    alt="Voiture moderne sur route"
    className="w-full h-auto object-contain"
    loading="lazy"
  />
</div>

        </motion.div>
      </div>
    </Container>
  </section>
);

// Services
// const ServiceCard = ({ icon: Icon, title, text ,color}) => (
//   <div className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
//     <div className="mb-4 inline-grid w-12 h-12 place-items-center rounded-2xl text-white" style={{ background: color }}>
//       <Icon className="w-6 h-6" />
//     </div>
//     <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
//     <p className="mt-2 text-sm text-neutral-600">{text}</p>
//   </div>
// );
const ServiceCard = ({ number, title, text ,color}) => (
  <div className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="mb-4 inline-grid w-12 h-12 place-items-center rounded-2xl text-white" style={{ background: color }}>
      {/* <Icon className="w-6 h-6" /> */}
      <span className="text-2xl font-bold">{number}</span>
    </div>
    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mt-2 text-sm text-neutral-600">{text}</p>
  </div>
);
const Services = () => (
  <section id="services" className="py-16 md:py-24">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Des services pensés pour vous</h2>
        <p className="mt-3 text-neutral-600">Simplicité, rapidité, transparence. Tout ce qu’il faut pour une location sans stress.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <ServiceCard number={1} title="Location de voitures" text="Saisonnière | Journalière | Mensuelle | Longue durée (Plus de six (06) mois) " color={brand.primary}/>
        <ServiceCard number={2} title="Vente de voitures" text="Spécialité américaine | Voiture de luxe | Meilleur prix sur le marché " color={brand.primary}/>
        <ServiceCard number={3} title="AZIM Plus" text="Vous avez la possibilité de louer votre véhicule à travers le réseau de AZIM Motors.Nous trouvons des clients pour vous et vous êtes payés quand vous n'utilisez pas votre véhicule." color={brand.primary}/>
        <ServiceCard number={4} title="AZIM Chap" text="Service d'assistance tels que : Crevaisons | Remorque | Panne sèche | Lavage" color={brand.primary}/>
        
      </div>
    </Container>
  </section>
);

// Fleet
const CarCard = ({ car, onReserveClick }) => (
  <section className="border-y border-neutral-200/70 bg-neutral-50 py-16 md:py-24">
    <Container>
      <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img src={car.img} alt={car.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        </div>
    <div className="p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-neutral-900">{car.name}</h3>
        <span className="whitespace-nowrap rounded-full bg-neutral-100 px-3 py-1 text-sm font-semibold text-neutral-800">{car.price} FCFA/j</span>
      </div>
      <ul className="mt-3 flex flex-wrap gap-2 text-sm text-neutral-600">
        {car.features.map((f, i) => (
          <li key={i} className="rounded-full bg-neutral-100 px-3 py-1">{f}</li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-3">
        <a 
          href="#reserve" 
          className="flex-1"
          onClick={(e) => {
            e.preventDefault();
            if (onReserveClick) {
              onReserveClick(car);
            }
            document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <PrimaryButton className="w-full">Réserver dès maintenant !</PrimaryButton>
        </a>
        <OutlineButton className="flex-1">Détails</OutlineButton>
      </div>
    </div>
  </div>
  </Container>
</section>
  
);


const Fleet = () => {
  const handleReserveClick = (car) => {
    const reserveSection = document.getElementById('reserve');
    if (reserveSection) {
      setFormData(prev => ({
        ...prev,
        vehicleType: car.name,
        message: `Je suis intéressé par la location de ce véhicule : ${car.name} (${car.price} FCFA/jour)`
      }));
    }
  };

  return (
    <section className="border-y border-neutral-200/70 bg-neutral-50 py-16 md:py-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Nos véhicules</h2>
            <p className="mt-2 text-neutral-600">Une sélection adaptée à tous les besoins et tous les budgets.</p>
          </div>
          <a 
            href="#reserve" 
            className="hidden md:block"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <OutlineButton>Voir toutes les disponibilités</OutlineButton>
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <CarCard 
              key={car.id} 
              car={car} 
              onReserveClick={handleReserveClick}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

// Booking
const Booking = ({ formData, setFormData }) => {
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState({ success: false, message: '' });

  // Effet pour le défilement vers le formulaire
  useEffect(() => {
    if (window.location.hash === '#reserve') {
      const element = document.getElementById('reserve');
      if (element) {
        // Petit délai pour s'assurer que le composant est monté
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Le nom complet est requis';
    if (!formData.email) newErrors.email = 'L\'email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.phone) newErrors.phone = 'Le numéro de téléphone est requis';
    if (!formData.startDate) newErrors.startDate = 'La date de départ est requise';
    if (!formData.endDate) newErrors.endDate = 'La date de retour est requise';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Formatage du message pour WhatsApp
      const message = `Nouvelle demande de réservation :%0A%0A` +
        `*Nom complet*: ${formData.fullName}%0A` +
        `*Email*: ${formData.email}%0A` +
        `*Téléphone*: ${formData.phone}%0A` +
        `*Dates*: Du ${formData.startDate} au ${formData.endDate}%0A` +
        `*Type de véhicule*: ${formData.vehicleType}%0A` +
        `*Message*: ${formData.message || 'Aucun message supplémentaire'}`;
      
      // WhatsApp API URL (replace 90000000 with the actual phone number)
      const whatsappUrl = `https://wa.me/22892914359?text=${message}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        startDate: '',
        endDate: '',
        vehicleType: 'Citadine',
        message: ''
      });
      
      setSubmitStatus({
        success: true,
        message: 'Formulaire soumis avec succès ! Vous allez être redirigé vers WhatsApp.'
      });
      
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-reserve" className="py-16 md:py-24 scroll-mt-20">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
  
          <section id="contact">
          <div className="relative">
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-neutral-100 h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-white/30 rounded-2xl -z-10"></div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Prêt à prendre la route ?</h2>
          <p className="mt-3 text-neutral-700">Remplissez le formulaire et recevez une confirmation rapidement. Notre équipe vous accompagne à chaque étape.</p>
          <ul className="mt-6 space-y-3 text-neutral-700">
            <li className="flex items-center gap-3 p-3 -mx-3 rounded-lg hover:bg-black/5 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5">
                <Phone className="w-5 h-5 text-black/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">Téléphone</p>
                <a href="tel:+22899464322" className="text-base font-medium hover:text-black transition-colors">+228 99 46 43 22</a>/
                <a href="tel:+22892231295" className="text-base font-medium hover:text-black transition-colors">+228 92 23 12 95</a>
              </div>
            </li>
            <li className="flex items-center gap-3 p-3 -mx-3 rounded-lg hover:bg-black/5 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5">
                <Mail className="w-5 h-5 text-black/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">Email</p>
                <a href="mailto:azim.motors@gmail.com" className="text-base font-medium hover:text-black transition-colors">azim.motors@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-black/5 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5 mt-1">
                <MapPin className="w-5 h-5 text-black/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">Adresse</p>
                <p className="text-base font-medium">Lomé, Togo</p>
                <p className="text-sm text-neutral-500 mt-1">Notre agence principale :Agbalépédo ,Rue LK</p>
              </div>
            </li>
          </ul>
          <div className="mt-6">
            <Map />
          </div>
              </div>
              {/* Image de fond */}
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
              </div>
            </div>
          </section>
          <section id="reserve">
          <div className="sticky top-8">
              <form id="reserve-form" onSubmit={handleSubmit} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm h-full">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl mb-6">Pour faire une réservation remplissez le formulaire</h2>
          {submitStatus.message && (
            <div className={`mb-6 p-4 rounded-xl ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-neutral-800">Nom complet</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-neutral-300'} bg-white px-4 py-1 outline-none ring-neutral-900/10 placeholder:text-neutral-400 focus:ring-2`}
                placeholder="Ex. Kossi Akakpo"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-800">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-xl border ${errors.email ? 'border-red-500' : 'border-neutral-300'} bg-white px-4 py-3 outline-none ring-neutral-900/10 placeholder:text-neutral-400 focus:ring-2`}
                placeholder="vous@exemple.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-800">Téléphone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full rounded-xl border ${errors.phone ? 'border-red-500' : 'border-neutral-300'} bg-white px-4 py-3 outline-none ring-neutral-900/10 placeholder:text-neutral-400 focus:ring-2`}
                placeholder="+228 …"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="startDate" className="mb-2 block text-sm font-medium text-neutral-800">Date de départ</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full rounded-xl border ${errors.startDate ? 'border-red-500' : 'border-neutral-300'} bg-white px-4 py-3 outline-none ring-neutral-900/10 focus:ring-2`}
              />
              {errors.startDate && <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>}
            </div>
            <div>
              <label htmlFor="endDate" className="mb-2 block text-sm font-medium text-neutral-800">Date de retour</label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                min={formData.startDate || new Date().toISOString().split('T')[0]}
                className={`w-full rounded-xl border ${errors.endDate ? 'border-red-500' : 'border-neutral-300'} bg-white px-4 py-3 outline-none ring-neutral-900/10 focus:ring-2`}
              />
              {errors.endDate && <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="vehicleType" className="mb-2 block text-sm font-medium text-neutral-800">Type de véhicule</label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full appearance-none rounded-xl border border-neutral-300 bg-white px-4 py-1 outline-none ring-neutral-900/10 focus:ring-2"
              >

                <option value="SUV compact">SUV compact</option>
                <option value="SUV intermédiaire / familial">SUV intermédiaire / familial</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-800">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none ring-neutral-900/10 placeholder:text-neutral-400 focus:ring-2"
                placeholder="Vos besoins, horaires, options…"
              />
            </div>
          </div>
          <div className="mt-6">
            <PrimaryButton type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </PrimaryButton>
          </div>
              </form>
            </div>
          </section>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showLegalNotice, setShowLegalNotice] = useState(false);

  return (
    <>
      <footer className="border-t border-neutral-200/70 bg-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
            <p className="text-sm text-neutral-600">© {new Date().getFullYear()} AZIM Motors Car Rental. Tous droits réservés.</p>
            <div className="flex items-center gap-4 text-sm text-neutral-600">
              <button 
                onClick={() => setShowLegalNotice(true)}
                className="hover:text-neutral-900 transition-colors"
              >
                Mentions légales
              </button>
              <button 
                onClick={() => setShowPrivacyPolicy(true)}
                className="hover:text-neutral-900 transition-colors"
              >
                Politique de confidentialité
              </button>
            </div>
          </div>
        </Container>
      </footer>

      <PrivacyPolicyModal 
        isOpen={showPrivacyPolicy} 
        onClose={() => setShowPrivacyPolicy(false)} 
      />
      
      <LegalNoticeModal 
        isOpen={showLegalNotice} 
        onClose={() => setShowLegalNotice(false)} 
      />
    </>
  );
};

export default function CarRentalLanding() {
  const [formData, setFormData] = useState(() => {
    // Lire les paramètres d'URL au chargement initial
    const params = new URLSearchParams(window.location.search);
    return {
      fullName: '',
      email: '',
      phone: '',
      startDate: '',
      endDate: '',
      vehicleType: params.get('vehicleType') || '',
      message: params.get('message') || ''
    };
  });
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen scroll-smooth bg-white text-neutral-900">
        <Nav />
        <Hero />
        <Services />
        {/* <Fleet /> */}
        <CarsPage formData={formData} setFormData={setFormData} />
        <Booking formData={formData} setFormData={setFormData} />
        <Footer />
      </div>
    </MotionConfig>
  );
}
