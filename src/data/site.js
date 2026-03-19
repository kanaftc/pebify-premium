/**
 * Site-wide constants and configuration for PEBify
 * Contains company info, branding, contact details, and SEO metadata
 */

export const siteConfig = {
  // Brand & Company Info
  siteName: 'PEBify',
  siteUrl: 'https://pebify.be',
  siteDescription:
    'Je suis votre certificateur PEB agréé à Bruxelles. Expert énergétique pour appartements, maisons et duplex. Certificats rapides et fiables.',
  language: 'fr',
  locale: 'fr-BE',

  // Company Details
  company: {
    name: 'PEBify',
    legalName: 'PEBify - Certification Énergétique',
    owner: 'Milad Mollaey Tabriz',
    type: 'Entreprise unipersonnelle',
    description:
      'Je suis expert en certification de performance énergétique des bâtiments (PEB), agréé par la Région bruxelloise',
  },

  // Contact Information
  contact: {
    phone: '+32 484 63 08 15',
    email: 'info@pebify.be',
    contactForm: 'https://pebify.be/contact',
    responseTime: '24 heures',
    whatsapp: '32484630815', // WhatsApp number for wa.me link
  },

  // Address
  address: {
    street: 'Rue Emile Wauters 58',
    city: 'Bruxelles',
    postalCode: '1020',
    country: 'Belgique',
    region: 'Région bruxelloise',
    fullAddress: 'Rue Emile Wauters 58, 1020 Bruxelles, Belgique',
  },

  // Legal & Tax Information
  legal: {
    vat: 'BE0541771724',
    vatFormatted: 'BE 0541 771 724',
    companyNumber: null,
    yearsActive: 'Depuis 2020',
    license: 'Certificateur PEB agréé Région bruxelloise',
  },

  // Business Information
  business: {
    agrementNumber: 'Agréé Région bruxelloise',
    certifications: ['Certificateur PEB', 'Expert énergétique'],
    serviceArea: 'Bruxelles-Capitale (19 communes)',
    yearsExperience: 4,
  },

  // Social Media
  social: {
    facebook: 'https://facebook.com/pebify.be',
    instagram: 'https://instagram.com/pebify.be',
    linkedin: 'https://linkedin.com/company/pebify',
    twitter: 'https://twitter.com/pebify_be',
  },

  // SEO & Meta
  seo: {
    defaultTitle: 'PEBify - Certification PEB agréée à Bruxelles',
    titleTemplate: '%s | PEBify',
    defaultDescription:
      'Je suis votre expert en certification PEB agréé à Bruxelles. Certificats énergétiques pour appartements, maisons et duplex. Audit complet et rapport d\'amélioration énergétique.',
    keywords: [
      'certificat PEB Bruxelles',
      'certification énergétique',
      'performance énergétique bâtiment',
      'PEB agréé',
      'audit énergétique',
      'classe énergétique',
      'rénovation énergétique',
    ],
    ogImage: '/og-image.jpg',
    twitterHandle: '@pebify_be',
  },

  // Colors & Branding
  branding: {
    primaryColor: '#00D4FF', // Cyan
    secondaryColor: '#0066FF', // Blue
    accentColor: '#00FFB2', // Green
    darkBg: '#06070A',
    textColor: '#E6EDF3',
  },

  // Operating Hours
  hours: {
    monday: '09:00-18:00',
    tuesday: '09:00-18:00',
    wednesday: '09:00-18:00',
    thursday: '09:00-18:00',
    friday: '09:00-18:00',
    saturday: '10:00-14:00',
    sunday: 'Fermé',
    holiday: 'Fermé',
  },

  // Service Details
  services: {
    peb: {
      name: 'Certificat PEB',
      description: 'Certification officielle de performance énergétique',
      icon: 'zap',
    },
    audit: {
      name: 'Audit Énergétique Complet',
      description: 'Analyse détaillée avec préconisations d\'amélioration',
      icon: 'search',
    },
    thermography: {
      name: 'Thermographie Infrarouge',
      description: 'Identification des déperditions thermiques',
      icon: 'thermometer',
    },
    consultation: {
      name: 'Consultation Énergétique',
      description: 'Conseils personnalisés pour optimiser votre bien',
      icon: 'help-circle',
    },
  },

  // Pricing Base
  pricing: {
    apartment: 189,
    house: 249,
    duplex: 219,
    commercial: 'Sur devis',
    currency: 'EUR',
    currencySymbol: '€',
  },

  // Service Areas (19 Brussels Communes)
  serviceAreas: [
    'Anderlecht',
    'Auderghem',
    'Berchem-Sainte-Agathe',
    'Bruxelles-Ville',
    'Etterbeek',
    'Evere',
    'Forest',
    'Ganshoren',
    'Ixelles',
    'Jette',
    'Koekelberg',
    'Molenbeek-Saint-Jean',
    'Saint-Gilles',
    'Saint-Josse-ten-Noode',
    'Schaerbeek',
    'Uccle',
    'Watermael-Boitsfort',
    'Woluwe-Saint-Lambert',
    'Woluwe-Saint-Pierre',
  ],

  // Legal Pages
  pages: {
    privacyPolicy: '/politique-de-confidentialite',
    cookiePolicy: '/politique-de-cookies',
    termsOfService: '/conditions-generales-de-vente-pebify',
    about: '/a-propos',
    contact: '/contact',
    faq: '/faq',
    blog: '/blog',
  },

  // Support
  support: {
    email: 'support@pebify.be',
    phone: '+32 485 87 88 42',
    responseTime: '24 heures',
    languages: ['Français', 'Néerlandais', 'Anglais'],
  },

  // Certifications & Standards
  compliance: {
    rgpd: true,
    bruxellesLaws: true,
    belgianStandards: true,
    iso9001: false,
    certificatePEBOfficial: true,
  },

  // Trust Signals
  trust: {
    yearsInBusiness: 4,
    certificationsCompleted: '1000+',
    customerSatisfaction: '98%',
    agreeWithBrussels: true,
    legalCompliance: 'Certification PEB agréée',
  },

  // Call to Action Texts
  cta: {
    getPEBNow: 'Obtenir votre certificat PEB',
    requestQuote: 'Demander un devis',
    scheduleAudit: 'Planifier un audit',
    contactUs: 'Nous contacter',
    learnMore: 'En savoir plus',
  },

  // Common Phrases
  commonPhrases: {
    certified: 'Agréé par la Région bruxelloise',
    fastDelivery: 'Résultats sous 3-5 jours',
    transparentPricing: 'Prix transparents, sans frais cachés',
    expertTeam: 'Équipe d\'experts énergétiques',
    legalCompliant: 'Certification légalement conforme',
  },
};

// Helper functions
export const getServiceAreaLabel = () => {
  return `${siteConfig.serviceAreas.length} communes bruxelloises`;
};

export const getFormattedPhone = () => {
  return siteConfig.contact.phone;
};

export const getFormattedEmail = () => {
  return siteConfig.contact.email;
};

export const getFormattedAddress = () => {
  return siteConfig.address.fullAddress;
};

export const getFormattedVAT = () => {
  return siteConfig.legal.vatFormatted;
};

export const getBusinessHours = (day) => {
  const dayLower = day.toLowerCase();
  return siteConfig.hours[dayLower] || 'Fermé';
};

export const isOpenToday = () => {
  const today = new Date().getDay();
  // 0 = Sunday (Closed), 1-5 = Mon-Fri (Open), 6 = Saturday (Open)
  return today >= 1 && today <= 5; // Simple check - returns true for Mon-Fri
};

export const getServicePrice = (serviceType) => {
  const prices = siteConfig.pricing;
  return prices[serviceType] || null;
};

export const getAllServiceAreas = () => {
  return siteConfig.serviceAreas;
};

export const getMetaTags = () => {
  return {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    keywords: siteConfig.seo.keywords.join(', '),
    ogImage: siteConfig.seo.ogImage,
    twitterHandle: siteConfig.seo.twitterHandle,
    author: siteConfig.company.owner,
    robots: 'index, follow',
  };
};

export default siteConfig;
