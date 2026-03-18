# Structure des Composants Astro - PEBify Premium

## Architecture

```
src/
├── layouts/
│   ├── BaseLayout.astro          # Layout principal avec Nav, Footer, WhatsApp
│   └── PageLayout.astro          # Layout étendu avec hero section et breadcrumb
│
├── components/
│   ├── navigation/
│   │   ├── Nav.astro             # Navigation fixe avec glassmorphism
│   │   └── Footer.astro          # Footer 4 colonnes avec liens légaux
│   │
│   ├── ui/
│   │   ├── Button.astro          # Bouton avec 3 variantes (primary, secondary, ghost)
│   │   ├── Card.astro            # Carte réutilisable (default, glass)
│   │   ├── Badge.astro           # Badge/Tag (cyan, green, blue)
│   │   └── WhatsApp.astro        # Bouton flottant WhatsApp
│   │
│   └── sections/
│       ├── Hero.astro            # Hero section avec calculatrice/stats optionnels
│       ├── StatsStrip.astro      # Bande de statistiques 4 colonnes
│       ├── ProcessSteps.astro    # Processus en 5 étapes (horizontal/vertical)
│       ├── FAQ.astro             # Accordéon FAQ
│       ├── CTA.astro             # Section appel à l'action
│       └── CommuneLinks.astro    # Grille des 19 communes
│
└── scripts/
    └── scroll-reveal.ts          # Script d'animations au défilement
```

## Layouts

### BaseLayout.astro
- **Props**: `title`, `description`, `canonical`, `ogImage`, `schemaJson`, `noindex`
- HTML5 complet avec meta tags, OG, Twitter cards
- Inclut Nav, Footer, WhatsApp, scroll-reveal script
- Favicon SVG emoji ⚡
- Schema.org JSON-LD automatique

### PageLayout.astro
- **Étend**: BaseLayout
- **Props**: Hérite + `breadcrumb`, `heroLabel`, `heroTitle`, `heroSubtitle`
- Section hero avec fond en pointillés
- Navigation breadcrumb avec lien actif
- Titre avec gradient cyan

## Composants Navigation

### Nav.astro
- Navigation fixe avec transparence → glassmorphism au scroll
- Logo "PEB" + "ify" cyan + point vert animé
- 5 liens: Tarifs, Guide, Blog, FAQ, À propos
- Bouton CTA "Prendre RDV"
- Menu mobile avec slide-in panel
- Animation icône burger
- Sélection du lien actif

### Footer.astro
- 4 colonnes: Brand, Services, Ressources, Contact
- Logo et badges de confiance (Agréé, certifications)
- Diviseur de lueur en haut
- Liens légaux: CGV, Confidentialité, Cookies
- Contact info avec liens (tel, email, adresse)
- Copyright dynamique

## Composants UI

### Button.astro
- **Variantes**: `primary` (gradient), `secondary` (border), `ghost` (subtle)
- **Tailles**: `sm`, `md`, `lg`
- Peut être lien (`href`) ou bouton (`type`)
- Option flèche droite (`hasArrow`)
- Effets: hover glow, scale actif, focus ring

### Card.astro
- **Variantes**: `default` (dark), `glass` (glassmorphism)
- **Options**: `hover` (actif par défaut), `class` personnalisée
- Effets: lift on hover, glow subtle, border cyan au hover

### Badge.astro
- **Variantes**: `cyan`, `green`, `blue`
- Petit pill/tag arrondi
- Texte personnalisé

### WhatsApp.astro
- Bouton flottant fixe bottom-right
- Lien vers wa.me avec message pré-rempli
- Hover scale effect, glow green
- Responsif (taille réduite mobile)

## Composants Sections

### Hero.astro
- **Props**: `label`, `title`, `subtitle`, `showCalculator`, `showStats`
- Fond en pointillés + orbes animées (parallax au mouse move)
- Titre avec gradient cyan
- 2 boutons CTA
- **Calculatrice** (optionnel):
  - Tabs pour type (Appart, Maison, Duplex)
  - Range slider pour surface (20-300 m²)
  - Affichage prix dynamique
  - TVA incluse + délai 3-5j
- **Stats** (optionnel):
  - 4 cartes: 1000+ certs, 98% satisfaction, 24h RDV, 4+ ans expertise
  - Animation compteur

### StatsStrip.astro
- Bande statique 4 colonnes (responsive)
- Stats: 24h RDV, 100% Agréé, 0€ Frais, 10 ans Validité
- Icônes emoji + nombres gros
- Animation reveal au scroll

### ProcessSteps.astro
- 5 étapes: Contact → RDV → Visite → Encodage → Certificat
- **Desktop**: Horizontal avec ligne connectée dégradée
- **Mobile**: Vertical avec connecteurs
- Cercles numérotés avec gradient
- Badge durée pour chaque étape
- CTA en bas

### FAQ.astro
- **Props**: `items` (array {question, answer}), `limit` (optionnel)
- Accordéon avec icône +/- rotatif
- Animation max-height smooth
- Click handler inline
- ARIA: expanded, controls, labels
- Fermeture d'autres items au clic

### CTA.astro
- **Props**: `label`, `title`, `subtitle`, `primaryHref`, `primaryText`, `secondaryHref`, `secondaryText`
- Card centré avec glow background
- 2 boutons (primary gradient + secondary border)
- Titre avec gradient
- Effets: box shadow, glow, scale actif

### CommuneLinks.astro
- Grille 2-5 colonnes (responsive) des 19 communes
- Génération automatique des slugs (accent handling)
- Liens vers `/peb-{commune}/`
- Hover cyan + glow subtle
- Animation stagger
- Info box si commune non trouvée

## Scripts

### scroll-reveal.ts
- `initScrollReveal()`: Observer pour .reveal/.reveal-left/.reveal-right
- `initStaggerReveal()`: Animation stagger pour .reveal-stagger > *
- `initParallax()`: Effet parallax au mouse move sur éléments `[data-parallax]`
- `initNavbarScroll()`: Effet glassmorphism navbar au scroll
- `initAllAnimations()`: Initialise tout (auto-appelé)

## Styles Tailwind Personnalisés

### Couleurs (peb-*)
- `bg` (#06070A)
- `bg2` (#0B0E14)
- `surface` (#111620)
- `card` (#151C28)
- `card-hover` (#1A2332)
- `cyan` (#00D4FF)
- `blue` (#0066FF)
- `green` (#00FFB2)
- `text` (#E6EDF3)
- `text2` (#8B949E)
- `muted` (#5A6370)
- `border`, `border2`

### Classes Globales (global.css)
- `.gradient-text-cyan`: Texte dégradé cyan-blue
- `.gradient-text-multi`: Texte dégradé cyan-blue-green
- `.gradient-bg-cyan`: Fond dégradé subtil
- `.glass`, `.glass-lg`: Glassmorphism
- `.glow-cyan`, `.glow-blue`, `.glow-green`: Ombre de lueur
- `.reveal`, `.reveal-left`, `.reveal-right`: Animations scroll
- `.card`, `.card-interactive`: Styles de carte
- `.btn-*`: Styles de bouton hérités
- `.faq-*`: Styles accordéon

### Animations
- `animate-pulse-dot`: Pulsation verte
- `fade-in`: Apparition avec translateY
- `slide-up`: Glissement vers le haut
- `reveal`: Animation scroll (définie en CSS)

## Utilisation Typique

### Page d'accueil
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/sections/Hero.astro';
import StatsStrip from '../components/sections/StatsStrip.astro';
import ProcessSteps from '../components/sections/ProcessSteps.astro';
import CTA from '../components/sections/CTA.astro';
---

<BaseLayout title="Accueil" description="...">
  <Hero 
    title="Certificat PEB Agréé"
    subtitle="Obtenez votre certification énergétique en quelques jours"
    showCalculator={true}
    showStats={true}
  />
  <StatsStrip />
  <ProcessSteps />
  <CTA
    title="Prêt à démarrer?"
    subtitle="Prenez rendez-vous dès aujourd'hui"
    primaryHref="/contact/"
    primaryText="Prendre RDV"
  />
</BaseLayout>
```

### Page avec breadcrumb
```astro
---
import PageLayout from '../layouts/PageLayout.astro';
---

<PageLayout
  title="Guide PEB"
  description="Tout ce que vous devez savoir"
  breadcrumb={[
    { label: 'Ressources', href: '/ressources/' },
    { label: 'Guide PEB', href: '/guide-peb/' }
  ]}
  heroTitle="Guide Complet PEB"
  heroSubtitle="Comprendre la certification énergétique"
>
  <!-- Contenu page -->
</PageLayout>
```

## Accessibilité
- ARIA labels sur tous les boutons interactifs
- `aria-expanded` sur accordéons
- `aria-controls` liant boutons et contenu
- Focus ring visible avec ring-peb-cyan
- Skip link en haut du document
- Alt text sur SVG
- Sélection de lien actif en navigation

## Performance
- CSS Tailwind: Pas de fichiers CSS inutiles
- Scripts inline: Minimal footprint
- Images optimisées (SVG pour icônes)
- Lazy loading: natif Astro
- Animations GPU: transform + opacity

## Responsive Design (Mobile-first)
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grilles flexibles: col-span auto → fixed
- Padding responsif: `px-safe` classe utilitaire
- Typography responsive: `text-display-*` classes
- Menu mobile avec hamburger menu
- Réduction mouvement: `prefers-reduced-motion`

## Conventions
- Noms composants: PascalCase
- Props interfaces en début de fichier
- Classes Tailwind groupées par fonction
- Scripts inline avec `<script>` tags
- Commentaires pour logique complexe
- Colons d'accessibilité (aria-labels, roles)
