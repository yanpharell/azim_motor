import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
              <h2 className="text-2xl font-bold text-neutral-900">Politique de confidentialité</h2>
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
            
            <div className="prose prose-sm text-neutral-600 space-y-4">
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">1. Collecte des informations</h3>
                <p>Nous recueillons des informations lorsque vous remplissez un formulaire sur notre site. Ces informations peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone, etc.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">2. Utilisation des informations</h3>
                <p>Les informations que nous recueillons peuvent être utilisées pour :</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                  <li>Améliorer notre site web</li>
                  <li>Améliorer le service client et vos besoins de prise en charge</li>
                  <li>Vous contacter par e-mail ou téléphone</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">3. Protection des informations</h3>
                <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">4. Divulgation à des tiers</h3>
                <p>Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles à des tiers.</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">5. Consentement</h3>
                <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
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

export default PrivacyPolicyModal;
