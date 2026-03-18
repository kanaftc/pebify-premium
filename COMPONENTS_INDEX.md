# Index des Composants - PEBify Premium

## Vue d'ensemble rapide

### 1️⃣ Commencer par les Layouts
- **BaseLayout.astro** - Utilisez ceci pour toutes les pages
- **PageLayout.astro** - Utilisez ceci pour les pages avec breadcrumb

### 2️⃣ Ajouter Navigation et Footer
- **Nav.astro** - Inclus automatiquement dans BaseLayout
- **Footer.astro** - Inclus automatiquement dans BaseLayout

### 3️⃣ Ajouter le Contenu avec Sections
- **Hero.astro** - Section d'introduction (presque toujours nécessaire)
- **StatsStrip.astro** - Bande de statistiques (optionnel)
- **ProcessSteps.astro** - Processus en 5 étapes (optionnel)
- **FAQ.astro** - Questions fréquentes (optionnel)
- **CTA.astro** - Appel à l'action (optionnel)
- **CommuneLinks.astro** - Lien aux communes (pour accueil/tarifs)

### 4️⃣ Composants réutilisables
- **Button.astro** - Boutons dans n'importe quelle section
- **Card.astro** - Conteneurs avec styles définis
- **Badge.astro** - Petits étiquettes/pills
- **WhatsApp.astro** - Bouton flottant (inclus dans BaseLayout)

---

## Arborescence Complète

```
src/
├── layouts/
│   ├── BaseLayout.astro
│   │   ├── Imports: Nav, Footer, WhatsApp, global.css
│   │   ├── Contient: HTML5 + meta tags + Schema.org
│   │   └── Utilisé: Par TOUTES les pages
│   │
│   └── PageLayout.astro
│       ├── Étend: BaseLayout
│       ├── Ajoute: Section Hero avec breadcrumb
│       └── Utilisé: Pages avec hiérarchie (tarifs, guide, etc.)
│
├── components/
│   ├── navigation/
│   │   ├── Nav.astro
│   │   │   ├── Logo PEB + ify + point vert
│   │   │   ├── 5 liens menu
│   │   │   ├── CTA "Prendre RDV"
│   │   │   ├── Menu mobile hamburger
│   │   │   └── Effects: Glassmorphism au scroll
│   │   │
│   │   └── Footer.astro
│   │       ├── 4 colonnes: Brand, Services, Ressources, Contact
│   │       ├── Badges confiance
│   │       ├── Liens légaux (CGV, Confidentialité)
│   │       └── Copyright automatique
│   │
│   ├── ui/
│   │   ├── Button.astro
│   │   │   ├── Props: href, variant, size, hasArrow
│   │   │   ├── Variantes: primary, secondary, ghost
│   │   │   └── Tailles: sm, md, lg
│   │   │
│   │   ├── Card.astro
│   │   │   ├── Props: variant, hover, class
│   │   │   ├── Variantes: default, glass
│   │   │   └── Effects: Lift on hover, glow subtle
│   │   │
│   │   ├── Badge.astro
│   │   │   ├── Props: variant, text
│   │   │   ├── Variantes: cyan, green, blue
│   │   │   └── Style: Small pill/tag
│   │   │
│   │   └── WhatsApp.astro
│   │       ├── Fixed bottom-right
│   │       ├── Lien wa.me avec message
│   │       └── Effects: Scale hover, glow green
│   │
│   └── sections/
│       ├── Hero.astro
│       │   ├── Props: label, title, subtitle, showCalculator, showStats
│       │   ├── Features:
│       │   │   ├── Fond en pointillés
│       │   │   ├── Orbes animées (parallax)
│       │   │   ├── Calculatrice interactive
│       │   │   ├── Stats avec counter animation
│       │   │   └── 2 boutons CTA
│       │   └── Utilisé: Sur presque chaque page
│       │
│       ├── StatsStrip.astro
│       │   ├── Affiche: 4 statistiques fixes
│       │   ├── Stats: 24h RDV, 100% Agréé, 0€ Frais, 10 ans validité
│       │   └── Utilisé: Accueil, pages tarifs
│       │
│       ├── ProcessSteps.astro
│       │   ├── Affiche: 5 étapes du processus
│       │   ├── Desktop: Horizontal avec ligne connectée
│       │   ├── Mobile: Vertical avec connecteurs
│       │   └── Utilisé: Accueil, page guide
│       │
│       ├── FAQ.astro
│       │   ├── Props: items (array), limit (optionnel)
│       │   ├── Features:
│       │   │   ├── Accordéon smooth
│       │   │   ├── Icône +/- rotatif
│       │   │   ├── Fermeture auto des autres items
│       │   │   └── ARIA compliant
│       │   └── Utilisé: Page FAQ, accueil si limite à 5-6
│       │
│       ├── CTA.astro
│       │   ├── Props: label, title, subtitle, primaryHref, secondaryHref
│       │   ├── Features:
│       │   │   ├── Card centré avec glow
│       │   │   ├── 2 boutons (primary + secondary optionnel)
│       │   │   └── Effects: Box shadow, glow, scale
│       │   └── Utilisé: Fin de page, entre sections
│       │
│       └── CommuneLinks.astro
│           ├── Affiche: Grille 19 communes
│           ├── Features:
│           │   ├── Génération slugs automatique
│           │   ├── Liens vers /peb-{commune}/
│           │   └── Animation stagger
│           └── Utilisé: Accueil, page tarifs
│
└── scripts/
    └── scroll-reveal.ts
        ├── Exports: initScrollReveal, initStaggerReveal, initParallax, etc.
        ├── Auto-initialisation
        └── Utilisé: Inclus dans BaseLayout
```

---

## Matrice d'Utilisation par Page

| Page | BaseLayout | PageLayout | Hero | Stats | Process | FAQ | CTA | Communes |
|------|-----------|-----------|------|-------|---------|-----|-----|----------|
| Accueil | ✅ | ❌ | ✅ (calc+stats) | ✅ | ✅ | ✅ (limit:5) | ✅ | ✅ |
| Tarifs | ✅ | ✅ | ✅ (calc) | ✅ | ❌ | ✅ (limit:3) | ✅ | ✅ |
| Guide | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ (limit:4) | ✅ | ❌ |
| FAQ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ (all) | ✅ | ❌ |
| À Propos | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Blog | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Commune | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

---

## Hiérarchie des Dépendances

```
BaseLayout
├── Nav (toujours)
├── Footer (toujours)
├── WhatsApp (toujours)
└── <slot> pour contenu

PageLayout
└── BaseLayout (hérite tout)
    └── Ajoute Hero + Breadcrumb

Pages utilisant BaseLayout/PageLayout
├── Hero
│   ├── Button (x2)
│   └── Badge (x3)
├── Card (réutilisable)
├── Button (réutilisable)
└── Badge (réutilisable)

Sections (indépendantes, utilisables ensemble)
├── StatsStrip
├── ProcessSteps
├── FAQ
│   └── Script accordion inline
├── CTA
│   └── Button (x2)
└── CommuneLinks
    └── Badge (optionnel)
```

---

## Quick Start: Template Page Accueil

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/sections/Hero.astro';
import StatsStrip from '../components/sections/StatsStrip.astro';
import ProcessSteps from '../components/sections/ProcessSteps.astro';
import FAQ from '../components/sections/FAQ.astro';
import CTA from '../components/sections/CTA.astro';
import CommuneLinks from '../components/sections/CommuneLinks.astro';
import { faqItems } from '../data/faq';
---

<BaseLayout
  title="PEBify - Certification PEB Agréée à Bruxelles"
  description="Expert en certification PEB. Agréé, rapide, transparent."
>
  <Hero
    label="CERTIFICATION ÉNERGÉTIQUE"
    title="Votre Certificat PEB en Quelques Jours"
    subtitle="Expert agréé à Bruxelles"
    showCalculator={true}
    showStats={true}
  />
  
  <StatsStrip />
  <ProcessSteps />
  <FAQ items={faqItems} limit={6} />
  <CTA
    title="Prêt à démarrer?"
    subtitle="Prenez rendez-vous"
    primaryHref="/contact/"
    primaryText="Prendre RDV"
  />
  <CommuneLinks />
</BaseLayout>
```

---

## Quick Start: Template Page Intérieure

```astro
---
import PageLayout from '../layouts/PageLayout.astro';
import CTA from '../components/sections/CTA.astro';
import FAQ from '../components/sections/FAQ.astro';

const breadcrumbs = [
  { label: 'Services', href: '/services/' },
  { label: 'Guide PEB', href: '/guide-peb/' }
];
---

<PageLayout
  title="Guide Complet PEB"
  description="Tout ce qu'il faut savoir"
  breadcrumb={breadcrumbs}
  heroTitle="Guide Complet PEB"
  heroSubtitle="Comprendre la certification"
>
  <!-- Contenu personnalisé -->
  <section class="py-20 max-w-7xl mx-auto px-4">
    <h2 class="text-4xl font-display font-bold mb-8 gradient-text-cyan">
      Comment ça marche?
    </h2>
    <!-- Votre contenu -->
  </section>

  <FAQ items={faqItems} limit={5} />
  <CTA
    title="Des questions?"
    primaryHref="/contact/"
    primaryText="Nous contacter"
  />
</PageLayout>
```

---

## Props Principales par Composant

### BaseLayout
```ts
title?: string
description?: string
canonical?: string
ogImage?: string
schemaJson?: Record<string, any>
noindex?: boolean
```

### PageLayout (hérite BaseLayout +)
```ts
breadcrumb: Array<{ label: string, href: string }>
heroLabel?: string
heroTitle: string
heroSubtitle: string
```

### Hero
```ts
label?: string
title: string
subtitle: string
showCalculator?: boolean
showStats?: boolean
```

### FAQ
```ts
items: Array<{ question: string, answer: string }>
limit?: number
```

### CTA
```ts
label?: string
title: string
subtitle: string
primaryHref: string
primaryText: string
secondaryHref?: string
secondaryText?: string
```

### Button
```ts
href?: string
variant?: 'primary' | 'secondary' | 'ghost'
size?: 'sm' | 'md' | 'lg'
class?: string
type?: string
hasArrow?: boolean
disabled?: boolean
```

### Card
```ts
variant?: 'default' | 'glass'
hover?: boolean
class?: string
```

### Badge
```ts
variant?: 'cyan' | 'green' | 'blue'
text: string
```

---

## Tips & Tricks

1. **Réutilisabilité**: Tous les composants sont conçus pour être réutilisés
2. **Combinaison**: Combinez Hero + ProcessSteps + CTA pour une page type
3. **Limite FAQ**: Utilisez `limit={n}` pour afficher un aperçu sur accueil
4. **Classes personnalisées**: Tous les composants acceptent `class` pour Tailwind
5. **Responsive**: Tout est mobile-first, pas besoin de code supplémentaire
6. **Dark mode**: Déjà intégré, pas besoin de classe `dark:`
7. **Animations**: Ajoutez `.reveal` ou `.reveal-left` pour animation au scroll
8. **Scripts**: Inclus inline, aucune dépendance externe requise

---

## Fichiers Essentiels

**À ne pas toucher:**
- `src/layouts/BaseLayout.astro` - Structure globale
- `src/components/navigation/Nav.astro` - Navigation
- `src/components/navigation/Footer.astro` - Footer
- `src/styles/global.css` - Styles de base
- `tailwind.config.mjs` - Configuration Tailwind

**À personnaliser:**
- `src/data/site.js` - Infos entreprise, URLs
- `src/data/faq.js` - Contenu FAQ
- `src/data/pricing.js` - Tarifs

**À utiliser dans vos pages:**
- Tous les autres composants!

---

## Avant/Après: Évolution Page

**Avant (HTML classique):**
```html
<html>
  <head><!-- meta --></head>
  <body>
    <nav><!-- nav --></nav>
    <header><!-- hero --></header>
    <section><!-- stats --></section>
    <section><!-- process --></section>
    <footer><!-- footer --></footer>
  </body>
</html>
```

**Après (Composants Astro):**
```astro
<BaseLayout title="..." description="...">
  <Hero ... />
  <StatsStrip />
  <ProcessSteps />
</BaseLayout>
```

✨ Tout est géré automatiquement!

