# PEBify Premium - Astro Components Library

Bibliothèque complète de composants Astro pour le site PEBify, spécialiste en certification PEB à Bruxelles.

## Démarrage Rapide

### 1. Tous les composants sont prêts à l'emploi

Les 15 fichiers composants sont créés et configurés :
- 2 Layouts (BaseLayout, PageLayout)
- 2 Navigation (Nav, Footer)
- 4 UI Components (Button, Card, Badge, WhatsApp)
- 6 Section Components (Hero, Stats, Process, FAQ, CTA, Communes)
- 1 Script d'animations (scroll-reveal.ts)

### 2. Créer votre première page

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/sections/Hero.astro';
import StatsStrip from '../components/sections/StatsStrip.astro';
import ProcessSteps from '../components/sections/ProcessSteps.astro';
---

<BaseLayout
  title="PEBify - Certificat PEB Agréé à Bruxelles"
  description="Expert en certification PEB agréé. Rapide, transparent, efficace."
>
  <Hero
    label="CERTIFICATION ÉNERGÉTIQUE"
    title="Votre Certificat PEB en Quelques Jours"
    subtitle="Expert agréé à Bruxelles. Certification rapide et transparente."
    showCalculator={true}
    showStats={true}
  />
  
  <StatsStrip />
  <ProcessSteps />
</BaseLayout>
```

### 3. Lancer en local

```bash
npm run dev
# http://localhost:3000
```

## Documentation

| Fichier | Contenu |
|---------|---------|
| **COMPONENTS_INDEX.md** | Référence rapide, matrice d'utilisation |
| **COMPONENTS_STRUCTURE.md** | Architecture complète, hiérarchie |
| **USAGE_EXAMPLES.md** | 20+ exemples de code, patterns |
| **SETUP_CHECKLIST.md** | Checklist d'installation, validation |

## Fichiers Composants

### Layouts
- `src/layouts/BaseLayout.astro` - Layout principal (HTML5, SEO, meta tags)
- `src/layouts/PageLayout.astro` - Layout avec breadcrumb et hero

### Navigation
- `src/components/navigation/Nav.astro` - Navbar fixed avec glassmorphism
- `src/components/navigation/Footer.astro` - Footer 4 colonnes

### UI Components
- `src/components/ui/Button.astro` - Boutons (3 variantes × 3 tailles)
- `src/components/ui/Card.astro` - Cartes (2 variantes)
- `src/components/ui/Badge.astro` - Badges (3 couleurs)
- `src/components/ui/WhatsApp.astro` - Bouton flottant

### Section Components
- `src/components/sections/Hero.astro` - Hero section (calc + stats optionnels)
- `src/components/sections/StatsStrip.astro` - Bande 4 stats
- `src/components/sections/ProcessSteps.astro` - Processus 5 étapes
- `src/components/sections/FAQ.astro` - Accordéon FAQ
- `src/components/sections/CTA.astro` - Call-to-action
- `src/components/sections/CommuneLinks.astro` - Grille 19 communes

### Scripts
- `src/scripts/scroll-reveal.ts` - Animations au défilement

## Design & Couleurs

### Palette
- **Fond**: #06070A (peb-bg)
- **Surface**: #111620 (peb-surface)
- **Carte**: #151C28 (peb-card)
- **Cyan** (primaire): #00D4FF
- **Blue** (secondaire): #0066FF
- **Green** (accent): #00FFB2
- **Text**: #E6EDF3 (peb-text)

### Typography
- **Display**: Plus Jakarta Sans (titres)
- **Body**: Inter (texte)
- **Code**: JetBrains Mono

### Effets
- Glassmorphism sur navbar
- Glow shadows (cyan/blue/green)
- Parallax on mouse move
- Scroll reveal animations
- Gradient text & backgrounds

## Composants - Vue d'ensemble

### BaseLayout - Structure Globale
```astro
<BaseLayout 
  title="Titre Page"
  description="Description pour SEO"
  canonical="https://pebify.be/..."
  ogImage="/og-image.jpg"
  schemaJson={{...}}
  noindex={false}
>
  <!-- Contenu page -->
</BaseLayout>
```

Inclut automatiquement:
- Nav fixe avec glassmorphism
- Footer 4 colonnes
- Bouton WhatsApp flottant
- Scroll reveal script

### PageLayout - Avec Breadcrumb
```astro
<PageLayout
  title="Guide PEB"
  description="Tout ce qu'il faut savoir"
  breadcrumb={[
    { label: "Services", href: "/services/" },
    { label: "Guide PEB", href: "/guide-peb/" }
  ]}
  heroLabel="RESSOURCES"
  heroTitle="Guide Complet PEB"
  heroSubtitle="Comprendre la certification"
>
  <!-- Contenu page -->
</PageLayout>
```

### Hero - Section d'Introduction
```astro
<Hero
  label="CERTIFICATION"
  title="Certificat PEB"
  subtitle="En quelques jours"
  showCalculator={true}
  showStats={true}
/>
```

Options:
- `showCalculator` - Calculatrice interactive
- `showStats` - 4 cartes de statistiques
- Parallax orbs sur mouse move
- Gradient text title

### FAQ - Accordéon
```astro
<FAQ 
  items={[
    { question: "Combien coûte?", answer: "189€ pour..." }
  ]}
  limit={5}
/>
```

Features:
- Smooth accordion
- Auto-close others
- ARIA compliant

### Button - Boutons Réutilisables
```astro
<Button 
  href="/contact/" 
  variant="primary" 
  size="lg" 
  hasArrow={true}
>
  Prendre RDV
</Button>
```

Variantes: primary, secondary, ghost
Tailles: sm, md, lg

### Card - Conteneurs Stylisés
```astro
<Card variant="default" hover={true}>
  Contenu card
</Card>
```

Variantes: default, glass

## Animations Incluses

### Scroll Reveal
```html
<div class="reveal">Apparaît au scroll</div>
<div class="reveal-left">Glisse depuis gauche</div>
<div class="reveal-right">Glisse depuis droite</div>
```

### Stagger Animation
```html
<div class="reveal-stagger">
  <div>Item 1 (delay 0s)</div>
  <div>Item 2 (delay 0.1s)</div>
  <div>Item 3 (delay 0.2s)</div>
</div>
```

### Parallax
```html
<div data-parallax="30">Parallax orb</div>
```

## Accessibilité

Tous les composants incluent:
- ARIA labels
- Focus rings visibles (cyan)
- Semantic HTML
- Reduced motion support
- Color contrast compliant
- Skip links
- Role attributes

## Responsive Design

Tous les composants utilisent:
- Mobile-first approach
- Tailwind breakpoints (sm/md/lg/xl)
- Flexible grids
- Touch-friendly buttons
- Responsive typography

## Performance

- Pas de dépendances externes
- CSS Tailwind optimisé (JIT)
- Scripts inline uniquement
- SVG pour icônes
- GPU-accelerated animations
- Lazy loading natif Astro

## Configuration Existante

Fichiers pré-configurés (ne pas modifier):
- `tailwind.config.mjs` - Couleurs custom (peb-*)
- `src/styles/global.css` - Styles globaux, animations
- `src/data/site.js` - Config entreprise
- `astro.config.mjs` - Config Astro

## Contact Information Intégrée

**PEBify** - Certification PEB agréée à Bruxelles
- **Téléphone**: +32 484 63 08 15
- **Email**: info@pebify.be
- **Adresse**: Rue Emile Wauters 58, 1020 Bruxelles
- **WhatsApp**: wa.me/32484630815
- **VAT**: BE0541771724
- **Agrément**: Région bruxelloise

## Prochaines Étapes

1. **Créer les pages** dans `src/pages/`
   - `index.astro` (accueil)
   - `contact.astro` (formulaire)
   - `tarifs-peb-bruxelles.astro`
   - `guide-peb.astro`
   - `faq.astro`
   - Et autres...

2. **Personnaliser le contenu** dans `src/data/`
   - `site.js` - Infos entreprise
   - `faq.js` - Contenu FAQ
   - `pricing.js` - Tarifs

3. **Tester et valider**
   ```bash
   npm run dev        # Développement
   npm run build      # Build production
   npm run preview    # Aperçu build
   ```

## Structure Complète

```
src/
├── layouts/
│   ├── BaseLayout.astro          ← Utilisez cette pour TOUTES les pages
│   └── PageLayout.astro          ← Utilisez pour pages avec breadcrumb
│
├── components/
│   ├── navigation/
│   │   ├── Nav.astro             ← Inclus auto dans BaseLayout
│   │   └── Footer.astro          ← Inclus auto dans BaseLayout
│   │
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   └── WhatsApp.astro        ← Inclus auto dans BaseLayout
│   │
│   └── sections/
│       ├── Hero.astro
│       ├── StatsStrip.astro
│       ├── ProcessSteps.astro
│       ├── FAQ.astro
│       ├── CTA.astro
│       └── CommuneLinks.astro
│
├── pages/              ← À CRÉER
│   ├── index.astro
│   ├── contact.astro
│   └── [autres pages]
│
├── data/
│   ├── site.js         ← Config entreprise
│   ├── faq.js          ← Contenu FAQ
│   └── pricing.js      ← Tarifs
│
└── scripts/
    └── scroll-reveal.ts
```

## Tips & Tricks

1. **Réutilisabilité**: Combinez Hero + StatsStrip + ProcessSteps + CTA pour page type
2. **Classes personnalisées**: Tous les composants acceptent `class` pour Tailwind
3. **Limite FAQ**: Utilisez `limit={n}` pour afficher aperçu sur accueil
4. **Animations**: `.reveal` classe auto sur éléments
5. **Dark mode**: Déjà intégré par défaut

## Support & Documentation

Consultez les fichiers markdown:
- **COMPONENTS_INDEX.md** pour guide rapide
- **USAGE_EXAMPLES.md** pour 20+ exemples
- **COMPONENTS_STRUCTURE.md** pour architecture
- **SETUP_CHECKLIST.md** pour validation

---

**Status**: ✅ Production Ready
**Version**: 1.0
**Created**: 2026-03-18
**Framework**: Astro 4+
**Styling**: Tailwind CSS 3+
