import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LegalNoticeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div 
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-neutral-900">Mentions Légales</h2>
              <button 
                onClick={onClose}
                className="p-2 -m-2 text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="prose prose-sm text-neutral-600 space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Éditeur du site</h3>
                <p>Le site web <strong>AZIM Motors Car Rental</strong> est édité par :</p>
                <address className="not-italic mt-2">
                  AZIM Motors SARL<br />
                  Agbalépédo, Rue LK<br />
                  Lomé, Togo<br />
                  Tél : +228 99 46 43 22 / +228 92 23 12 95<br />
                  Email : azim.motors@gmail.com
                </address>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Directeur de la publication</h3>
                <p>M. AZIM</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Hébergement</h3>
                <p>
                  [Github]<br />
                  {/* [Adresse de l'hébergeur]<br />
                  [Téléphone de l'hébergeur]<br />
                  [Site web de l'hébergeur] */}
                </p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Propriété intellectuelle</h3>
                <p>L'ensemble des éléments constituant le site (textes, images, vidéos, logos, etc.) sont la propriété exclusive d'<strong>AZIM Motors</strong> ou font l'objet d'une autorisation d'utilisation. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Responsabilité</h3>
                <p>AZIM Motors s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, AZIM Motors ne peut en garantir l'exactitude, la précision ou l'exhaustivité.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Droit applicable et juridiction compétente</h3>
                <p>Les présentes mentions légales sont soumises au droit togolais. En cas de litige, les tribunaux de Lomé seront seuls compétents.</p>
              </section>
              
              <p className="text-sm text-neutral-500 mt-6">Dernière mise à jour : 21/08/2025</p>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LegalNoticeModal;
