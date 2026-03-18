export const faqCategories = [
  {
    id: 'definition',
    name: 'Définition & Généralités',
    icon: 'info',
  },
  {
    id: 'obligation',
    name: 'Obligations Légales',
    icon: 'scale',
  },
  {
    id: 'process',
    name: 'Processus & Délais',
    icon: 'clock',
  },
  {
    id: 'pricing',
    name: 'Tarification',
    icon: 'euro',
  },
  {
    id: 'improvement',
    name: 'Amélioration Énergétique',
    icon: 'zap',
  },
  {
    id: 'technical',
    name: 'Aspects Techniques',
    icon: 'settings',
  },
];

export const faqItems = [
  {
    category: 'definition',
    question: 'Qu\'est-ce que le certificat PEB?',
    answer: `Le certificat PEB (Performance Énergétique du Bâtiment) est un document officiel attestant la performance énergétique d'un bâtiment. Il classe le bâtiment sur une échelle de A (très performant) à G (peu performant) en fonction de sa consommation énergétique estimée. Ce certificat est obligatoire en Belgique depuis 2008 pour toute transaction immobilière.`,
  },
  {
    category: 'definition',
    question: 'Qui est autorisé à délivrer un certificat PEB?',
    answer: `Seuls les certificateurs PEB agréés par la Région bruxelloise sont habilités à délivrer des certificats. Chez PEBify, notre expert est pleinement agréé par les autorités régionales et inscrit au registre officiel des certificateurs. Vous bénéficiez ainsi d'une certification reconnue légalement et incontestable.`,
  },
  {
    category: 'definition',
    question: 'Quelle est la différence entre le PEB et un audit énergétique?',
    answer: `Le certificat PEB est un document officiel requis légalement pour les transactions immobilières. L'audit énergétique est une analyse plus approfondie permettant d'identifier les sources de déperdition et de proposer des améliorations. PEBify propose les deux services : le PEB obligatoire et des audits complets pour optimiser vos performances.`,
  },
  {
    category: 'definition',
    question: 'Qu\'est-ce que l\'échelle de classification énergétique?',
    answer: `L'échelle PEB comprend 7 classes : A (≤100 kWh/m²/an), B, C, D, E, F, et G (>450 kWh/m²/an). Chaque classe représente un niveau de consommation énergétique. Une maison classée A est très performante et consomme peu d'énergie, tandis qu'une maison G est très consommatrice. Le classement dépend du chauffage, de l'eau chaude, de la climatisation et de l'éclairage.`,
  },

  {
    category: 'obligation',
    question: 'Est-il obligatoire d\'avoir un certificat PEB à Bruxelles?',
    answer: `Oui, le certificat PEB est obligatoire à Bruxelles pour : toute vente immobilière, toute location de plus de 6 mois, et certains bâtiments neufs. Depuis 2020, il est également requis pour la location de biens commerciaux. L'absence de certificat peut entraîner des amendes substantielles et rendre la transaction invalide.`,
  },
  {
    category: 'obligation',
    question: 'Quelles sont les amendes en cas d\'absence de PEB?',
    answer: `À Bruxelles, les amendes pour absence de certificat PEB peuvent atteindre 5 000 à 10 000 euros. Pour les bâtiments commerciaux, les sanctions peuvent être encore plus importantes. De plus, la transaction immobilière peut être annulée. Il est donc crucial de vous conformer à cette obligation légale avant la conclusion de votre transaction.`,
  },
  {
    category: 'obligation',
    question: 'Qui est responsable du certificat PEB: vendeur ou acheteur?',
    answer: `Légalement, c'est le vendeur qui doit fournir le certificat PEB avant la transaction. Cependant, en pratique, l'acheteur a intérêt à s'assurer que le certificat est en place. Si le vendeur ne le fournit pas, PEBify peut rapidement établir le certificat pour regulariser la situation avant la signature.`,
  },
  {
    category: 'obligation',
    question: 'Pendant combien de temps le certificat PEB est-il valide?',
    answer: `Le certificat PEB est valide 10 ans à partir de sa date d'émission. Après cette période, pour toute nouvelle transaction (vente ou location), un nouveau certificat doit être établi. Les certificats PEB antérieurs à 2010 ne sont plus valides légalement à Bruxelles.`,
  },

  {
    category: 'process',
    question: 'Quel est le délai pour obtenir un certificat PEB?',
    answer: `Normalement, nous établissons un certificat PEB sous 3 à 5 jours ouvrables après la visite du bien. Pour les cas urgents, nous proposons un service express sous 48 heures (tarif spécifique). Le délai dépend également de la complexité du bâtiment et de la disponibilité du calendrier.`,
  },
  {
    category: 'process',
    question: 'Combien de temps dure une visite pour l\'établissement du PEB?',
    answer: `Une visite pour établir un certificat PEB dure généralement 1 à 2 heures, selon la taille et la complexité du bien. Pour un appartement, c'est plus rapide (30-45 minutes). Pour une grande maison ou un bâtiment ancien complexe, cela peut prendre plus de temps. L'expert examine l'isolation, le chauffage, l'eau chaude, les vitrages et tous les éléments pertinents.`,
  },
  {
    category: 'process',
    question: 'Quelles informations me faut-il préparer avant la visite?',
    answer: `Préparez : les plans du bâtiment si disponibles, les factures de chauffage/électricité, les documents des installations (chaudière, panneaux solaires, etc.), les certificats antérieurs si disponibles, et l'accès à tous les espaces du bâtiment. Cette préparation accélère la visite et améliore la qualité de l'audit.`,
  },
  {
    category: 'process',
    question: 'Comment se déroule concrètement la visite PEB?',
    answer: `L'expert visite tous les espaces du bâtiment, prend des photos, examine l'isolation des murs, des toits et des sol, inspecte les systèmes de chauffage et d'eau chaude, évalue l'étanchéité à l'air, examine les vitrages, et collecte les données techniques. Ensuite, il rentre ces données dans le logiciel officiel qui calcule la classe énergétique et génère le rapport.`,
  },

  {
    category: 'pricing',
    question: 'Quel est le prix d\'un certificat PEB simple?',
    answer: `Le prix d'un certificat PEB dépend du type de bien : 189€ pour un appartement, 249€ pour une maison, 219€ pour un duplex. Ces prix incluent la visite complète, le rapport d'audit et l'enregistrement légal officiel. Tous les tarifs sont TTC (TVA comprise).`,
  },
  {
    category: 'pricing',
    question: 'Y a-t-il des frais cachés ou supplémentaires?',
    answer: `Non, nos tarifs sont transparents et tout compris. Les prix affichés incluent la visite, le rapport, l'enregistrement légal et les frais administratifs. Aucun frais supplémentaire n'est facturé sauf si vous demandez des services additionnels (thermographie, infiltrométrie, etc.).`,
  },
  {
    category: 'pricing',
    question: 'Proposez-vous des forfaits groupés ou réductions?',
    answer: `Oui, nous offrons des réductions pour les propriétaires ayant plusieurs biens à certifier. Contactez-nous pour un devis personnalisé. Nous proposons également des forfaits incluant audit complet et services complémentaires à tarifs avantageux.`,
  },

  {
    category: 'improvement',
    question: 'Comment améliorer la classe énergétique de mon bien?',
    answer: `Les principales mesures d'amélioration sont : améliorer l'isolation thermique (murs, toiture, sol), remplacer les vitrages simples par du double vitrage, installer une chaudière performante, mettre en place une ventilation efficace, et installer des panneaux solaires. PEBify propose un audit détaillé avec préconisations d'amélioration pour optimiser votre classement.`,
  },
  {
    category: 'improvement',
    question: 'Quelles améliorations ont l\'impact le plus important?',
    answer: `L'isolation thermique est généralement l'action la plus impactante, suivie du remplacement du système de chauffage. Une bonne isolation réduit les déperditions de 20-40%, et un chauffage performant peut économiser 15-25% d'énergie. L'installation de panneaux solaires améliore également significativement la classification.`,
  },
  {
    category: 'improvement',
    question: 'Combien coûte une rénovation énergétique?',
    answer: `Les coûts varient énormément selon les mesures : remplacement fenêtres (100-300€/m²), isolation murs (20-50€/m²), chauffage performant (3000-8000€). Un audit complet vous proposera un plan d'action priorisé. De plus, des subventions et primes bruxelloises peuvent couvrir 25-50% des coûts.`,
  },
  {
    category: 'improvement',
    question: 'Existe-t-il des subventions pour améliorer la performance énergétique?',
    answer: `Oui! La Région bruxelloise propose des primes substantielles pour l'isolation, le chauffage, les panneaux solaires et d'autres travaux. Ces aides peuvent couvrir 25 à 50% des coûts. PEBify vous aide à préparer votre dossier de subvention et peut recommander les actions les plus subventionnées.`,
  },

  {
    category: 'technical',
    question: 'Qu\'est-ce que la thermographie infrarouge?',
    answer: `La thermographie infrarouge est une technique utilisant une caméra thermique pour identifier les déperditions de chaleur dans un bâtiment. Les zones froides apparaissent en bleu/rouge et les chaudes en jaune/blanc. Cet outil détecte les défauts d'isolation, les ponts thermiques et les fuites d'air. PEBify propose ce service en option pour un diagnostic plus détaillé.`,
  },
  {
    category: 'technical',
    question: 'Qu\'est-ce que le test d\'infiltrométrie?',
    answer: `L'infiltrométrie (test Blower Door) mesure l'étanchéité à l'air du bâtiment. Un ventilateur crée une différence de pression pour quantifier les fuites d'air. Les résultats (en ACH ou n50) indiquent la qualité de construction. Une maison étanche consomme moins d'énergie. PEBify propose ce test en complément du PEB standard.`,
  },
  {
    category: 'technical',
    question: 'Comment est calculée la classe énergétique exactement?',
    answer: `La classe est calculée par un logiciel officiel qui considère : surface habitable, orientation et localisation du bâtiment, isolation thermique, système de chauffage et rendement, système d'eau chaude, ventilation, climatisation, apports solaires, éclairage. L'algorithme réglementaire établit alors une consommation énergétique estimée (en kWh/m²/an) qui détermine la classe A à G.`,
  },
  {
    category: 'technical',
    question: 'Peut-on faire un PEB sur un bâtiment très ancien?',
    answer: `Oui, même les bâtiments très anciens doivent avoir un certificat PEB s'ils sont vendus ou loués. L'algorithme s'adapte aux bâtiments anciens. Souvent, les bâtiments anciens sans isolation reçoivent des classes F ou G, ce qui justifie des rénovations. PEBify a l'expérience pour certifier correctement les bâtiments patrimoniaux.`,
  },
];

export const faqByCategory = () => {
  const grouped = {};
  faqCategories.forEach((category) => {
    grouped[category.id] = {
      ...category,
      items: faqItems.filter((item) => item.category === category.id),
    };
  });
  return grouped;
};
