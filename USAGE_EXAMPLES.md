# Exemples d'Utilisation des Composants PEBify

## Imports Principaux

```astro
---
// Layouts
import BaseLayout from '../layouts/BaseLayout.astro';
import PageLayout from '../layouts/PageLayout.astro';

// Navigation
import Nav from '../components/navigation/Nav.astro';
import Footer from '../components/navigation/Footer.astro';

// UI Components
import Button from '../components/ui/Button.astro';
import Card from '../components/ui/Card.astro';
import Badge from '../components/ui/Badge.astro';
import WhatsApp from '../components/ui/WhatsApp.astro';

// Sections
import Hero from '../components/sections/Hero.astro';
import StatsStrip from '../components/sections/StatsStrip.astro';
import ProcessSteps from '../components/sections/ProcessSteps.astro';
import FAQ from '../components/sections/FAQ.astro';
import CTA from '../components/sections/CTA.astro';
import CommuneLinks from '../components/sections/CommuneLinks.astro';
---
```

## Page d'Accueil Complète

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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PEBify",
  "description": "Expert en certification PEB agréé à Bruxelles",
  "url": "https://pebify.be",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rue Emile Wauters 58",
    "addressLocality": "Bruxelles",
    "postalCode": "1020"
  }
};
---

<BaseLayout
  title="PEBify - Certification PEB Agréée à Bruxelles"
  description="Expert en certification de performance énergétique des bâtiments à Bruxelles. Certificats agréés, rapides et abordables."
  schemaJson={schemaData}
>
  <!-- Hero avec calculatrice et stats -->
  <Hero
    label="Certification Énergétique"
    title="Votre Certificat PEB en Quelques Jours"
    subtitle="Expert agréé à Bruxelles. Certification rapide, transparente et reconnue officiellement."
    showCalculator={true}
    showStats={true}
  />

  <!-- Bande de statistiques -->
  <StatsStrip />

  <!-- Processus en 5 étapes -->
  <ProcessSteps />

  <!-- Section FAQ -->
  <FAQ items={faqItems.slice(0, 6)} />

  <!-- Appel à l'action -->
  <CTA
    label="Prêt?"
    title="Obtenez Votre Certificat PEB Maintenant"
    subtitle="Prenez rendez-vous en ligne et complétez votre certification en quelques jours."
    primaryHref="/contact/"
    primaryText="Prendre RDV"
    secondaryHref="/guide-peb/"
    secondaryText="En Savoir Plus"
  />

  <!-- Communes -->
  <CommuneLinks />
</BaseLayout>
```

## Page Avec Breadcrumb

```astro
---
import PageLayout from '../layouts/PageLayout.astro';
import Hero from '../components/sections/Hero.astro';
import CTA from '../components/sections/CTA.astro';

const breadcrumbs = [
  { label: 'Services', href: '/services/' },
  { label: 'Guide PEB', href: '/guide-peb/' }
];
---

<PageLayout
  title="Guide Complet PEB - PEBify"
  description="Tout ce que vous devez savoir sur la certification PEB à Bruxelles"
  canonical="https://pebify.be/guide-peb/"
  breadcrumb={breadcrumbs}
  heroLabel="RESSOURCES"
  heroTitle="Guide Complet de la Certification PEB"
  heroSubtitle="Comprendre les étapes, les coûts et les bénéfices de votre certificat PEB."
>
  <!-- Contenu de la page -->
  <section class="py-16 md:py-20 bg-peb-bg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Contenu texte -->
      <div class="space-y-6">
        <h2 class="text-3xl font-display font-bold text-peb-cyan">
          Qu'est-ce qu'un Certificat PEB?
        </h2>
        <p class="text-peb-text2 leading-relaxed">
          Le certificat PEB (Performance Énergétique des Bâtiments) est un document officiel...
        </p>
      </div>

      <!-- Image ou carte -->
      <div class="bg-peb-card rounded-xl p-8 border border-peb-border">
        <!-- Contenu -->
      </div>
    </div>
  </section>

  <!-- CTA final -->
  <CTA
    title="Besoin d'un Certificat PEB?"
    subtitle="Notre équipe d'experts est prête à vous aider."
    primaryHref="/contact/"
    primaryText="Contactez-nous"
  />
</PageLayout>
```

## Composants Utilisés Individuellement

### Button Variations

```astro
<!-- Primary Button -->
<Button href="/contact/" variant="primary" size="lg" hasArrow>
  Prendre RDV
</Button>

<!-- Secondary Button -->
<Button href="/guide-peb/" variant="secondary" size="md">
  En Savoir Plus
</Button>

<!-- Ghost Button -->
<Button href="#" variant="ghost" size="sm">
  Découvrir
</Button>

<!-- Button normal (non-lien) -->
<Button type="submit" variant="primary" size="md">
  Envoyer
</Button>
```

### Card Variations

```astro
<!-- Default Card -->
<Card class="max-w-md">
  <h3 class="text-xl font-bold text-peb-cyan mb-3">Service</h3>
  <p class="text-peb-text2">Description du service...</p>
</Card>

<!-- Glass Card (Glassmorphism) -->
<Card variant="glass" hover={true}>
  <div class="space-y-4">
    <h3 class="text-lg font-bold text-peb-text">Contenu Glassmorphique</h3>
    <p class="text-sm text-peb-text2">...</p>
  </div>
</Card>

<!-- No Hover Effect -->
<Card hover={false}>
  <p>Contenu sans effet hover</p>
</Card>
```

### Badge Variations

```astro
<div class="flex gap-3">
  <Badge variant="cyan" text="✓ Agréé" />
  <Badge variant="green" text="⚡ Rapide" />
  <Badge variant="blue" text="€ Transparent" />
</div>
```

### Hero Variations

```astro
<!-- Simple Hero -->
<Hero
  title="Titre Simple"
  subtitle="Sous-titre explicatif"
/>

<!-- Avec label -->
<Hero
  label="LABEL PRINCIPAL"
  title="Titre Avec Label"
  subtitle="Description courte"
/>

<!-- Avec calculatrice -->
<Hero
  title="Estimez Votre Prix"
  subtitle="Calculez le coût de votre certificat PEB"
  showCalculator={true}
/>

<!-- Avec statistiques -->
<Hero
  title="Nos Résultats"
  subtitle="Vérifiez nos statistiques"
  showStats={true}
/>

<!-- Avec les deux -->
<Hero
  label="SERVICES"
  title="Certification PEB Complète"
  subtitle="Avec calculatrice et statistiques"
  showCalculator={true}
  showStats={true}
/>
```

### FAQ Personnalisé

```astro
---
const customFAQ = [
  {
    question: "Combien de temps pour obtenir le certificat?",
    answer: "Le certificat est généralement obtenu dans les 3-5 jours après la visite."
  },
  {
    question: "Quel est le coût?",
    answer: "Les prix varient selon le type de bien: 189€ pour un appartement, 249€ pour une maison."
  }
];
---

<!-- Afficher tous les items -->
<FAQ items={customFAQ} />

<!-- Limiter à 3 items avec bouton "Plus" -->
<FAQ items={customFAQ} limit={3} />
```

### CTA Variations

```astro
<!-- CTA Complet -->
<CTA
  label="PRÊT?"
  title="Obtenez Votre Certificat Maintenant"
  subtitle="Prenez rendez-vous avec nos experts agréés."
  primaryHref="/contact/"
  primaryText="Prendre RDV"
  secondaryHref="/guide-peb/"
  secondaryText="Plus d'Infos"
/>

<!-- CTA Simple (sans bouton secondaire) -->
<CTA
  title="Contactez-Nous"
  subtitle="Notre équipe vous répond en 24h."
  primaryHref="mailto:info@pebify.be"
  primaryText="Envoyer un Email"
/>
```

## Patterns Courants

### Section avec Cards

```astro
<section class="py-16 bg-peb-bg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl font-display font-bold mb-12 text-peb-cyan">
      Nos Services
    </h2>

    <div class="grid md:grid-cols-3 gap-6 reveal-stagger">
      <Card class="reveal">
        <div class="text-3xl mb-4">⚡</div>
        <h3 class="text-xl font-bold text-peb-text mb-2">Certificat PEB</h3>
        <p class="text-peb-text2">Certification officielle de performance énergétique.</p>
      </Card>

      <Card class="reveal">
        <div class="text-3xl mb-4">🔍</div>
        <h3 class="text-xl font-bold text-peb-text mb-2">Audit Complet</h3>
        <p class="text-peb-text2">Analyse détaillée avec préconisations.</p>
      </Card>

      <Card class="reveal">
        <div class="text-3xl mb-4">📊</div>
        <h3 class="text-xl font-bold text-peb-text mb-2">Rapport Détaillé</h3>
        <p class="text-peb-text2">Document complet avec améliorations suggérées.</p>
      </Card>
    </div>
  </div>
</section>
```

### Section Tarifs

```astro
<section class="py-16 bg-peb-bg">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl font-display font-bold mb-12 text-center gradient-text-cyan">
      Nos Tarifs
    </h2>

    <div class="grid md:grid-cols-3 gap-6 reveal-stagger">
      {[
        { type: 'Appartement', price: 189, emoji: '🏢' },
        { type: 'Maison', price: 249, emoji: '🏠' },
        { type: 'Duplex', price: 219, emoji: '🏘️' }
      ].map((item, idx) => (
        <Card
          key={idx}
          class="text-center hover:glow-cyan reveal"
          style={`animation-delay: ${idx * 0.1}s`}
        >
          <div class="text-5xl mb-4">{item.emoji}</div>
          <h3 class="text-xl font-bold text-peb-text mb-2">{item.type}</h3>
          <div class="text-3xl font-display font-bold text-peb-cyan mb-4">
            {item.price}€
          </div>
          <Button href="/contact/" variant="primary" size="sm" hasArrow>
            Commander
          </Button>
        </Card>
      ))}
    </div>

    <p class="text-center text-peb-text2 mt-12">
      * TVA incluse • Délai 3-5 jours • Valable 10 ans
    </p>
  </div>
</section>
```

### Contact Form Section

```astro
<section class="py-16 bg-peb-surface">
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 reveal">
      <h2 class="text-4xl font-display font-bold mb-4">
        Prenez Rendez-vous
      </h2>
      <p class="text-peb-text2">
        Réponse garantie sous 24h
      </p>
    </div>

    <Card class="reveal">
      <form class="space-y-6">
        <div>
          <label class="block text-sm font-semibold text-peb-text mb-2">
            Prénom et Nom
          </label>
          <input
            type="text"
            placeholder="Jean Dupont"
            class="w-full px-4 py-3 rounded-lg bg-peb-card border border-peb-border text-peb-text placeholder-peb-text2"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-semibold text-peb-text mb-2">
            Type de bien
          </label>
          <select class="w-full px-4 py-3 rounded-lg bg-peb-card border border-peb-border text-peb-text">
            <option value="apartment">Appartement</option>
            <option value="house">Maison</option>
            <option value="duplex">Duplex</option>
          </select>
        </div>

        <Button type="submit" variant="primary" size="lg" class="w-full">
          Envoyer ma demande
        </Button>
      </form>
    </Card>
  </div>
</section>
```

## Accessibility Tips

```astro
<!-- Bouton avec aria-label clair -->
<button aria-label="Fermer le menu">
  <svg>...</svg>
</button>

<!-- Lien avec texte explicatif -->
<a href="/guide-peb/" aria-label="Lire le guide complet PEB">
  En savoir plus
</a>

<!-- Card interactive avec role -->
<Card role="article" aria-label="Description du service">
  ...
</Card>

<!-- Champ requis avec aria-required -->
<input type="email" aria-required="true" required />
```

## Customization Tips

```astro
<!-- Ajouter des classes personnalisées -->
<Card class="custom-class another-class">
  Content
</Card>

<!-- Override couleurs via Tailwind -->
<Badge variant="cyan" text="Custom" class="bg-peb-blue/20 border-peb-blue/30" />

<!-- Animation delay personnalisé -->
<div class="reveal" style="animation-delay: 0.3s;">
  Content appears after 0.3s
</div>

<!-- Responsive padding/margin -->
<section class="px-safe py-section">
  <!-- Auto px-4 sm:px-6 md:px-8 lg:px-10 -->
  <!-- Auto py-12 sm:py-16 md:py-20 lg:py-24 -->
</section>
```

## Dark Mode Ready

Tous les composants utilisent les couleurs définies dans `tailwind.config.mjs`:
- Fond sombre `peb-bg`
- Texte clair `peb-text`
- Couleurs primaires: cyan, blue, green
- Bordures subtiles: `peb-border`

Pas besoin de classe `dark:` - c'est déjà du dark mode par défaut!
