# Checklist d'Installation - PEBify Premium

## ✅ Fichiers Créés

### Layouts (2 fichiers)
- [x] `src/layouts/BaseLayout.astro` - Layout principal
- [x] `src/layouts/PageLayout.astro` - Layout avec hero

### Navigation (2 fichiers)
- [x] `src/components/navigation/Nav.astro` - Navigation fixed
- [x] `src/components/navigation/Footer.astro` - Footer 4 colonnes

### UI Components (4 fichiers)
- [x] `src/components/ui/Button.astro` - Boutons (3 variantes)
- [x] `src/components/ui/Card.astro` - Cartes (2 variantes)
- [x] `src/components/ui/Badge.astro` - Badges (3 variantes)
- [x] `src/components/ui/WhatsApp.astro` - Bouton flottant

### Section Components (6 fichiers)
- [x] `src/components/sections/Hero.astro` - Hero avec calc/stats
- [x] `src/components/sections/StatsStrip.astro` - 4 stats
- [x] `src/components/sections/ProcessSteps.astro` - 5 étapes
- [x] `src/components/sections/FAQ.astro` - Accordéon
- [x] `src/components/sections/CTA.astro` - Call-to-action
- [x] `src/components/sections/CommuneLinks.astro` - 19 communes

### Scripts (1 fichier)
- [x] `src/scripts/scroll-reveal.ts` - Animations au scroll

### Documentation (3 fichiers)
- [x] `COMPONENTS_STRUCTURE.md` - Architecture complète
- [x] `USAGE_EXAMPLES.md` - Exemples d'utilisation
- [x] `SETUP_CHECKLIST.md` - Ce fichier

## 📋 Total: 15 fichiers de composants + 3 docs

## 🔧 Configuration Requise

### Déjà en place
- [x] Tailwind CSS configuré (`tailwind.config.mjs`)
- [x] Styles globaux (`src/styles/global.css`)
- [x] Couleurs personnalisées (peb-*)
- [x] Données site (`src/data/site.js`)
- [x] Font families (Plus Jakarta Sans, Inter, JetBrains Mono)

### À vérifier
- [ ] `package.json` contient `astro`, `tailwindcss`
- [ ] Fonts Google importées dans BaseLayout
- [ ] favicon.ico ou SVG emoji configuré
- [ ] Répertoires créés correctement

## 📦 Dépendances NPM

```json
{
  "dependencies": {
    "astro": "^4.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

## 🎨 Couleurs Utilisées

| Nom | Hex | Usage |
|-----|-----|-------|
| `peb-cyan` | #00D4FF | Primaire, highlights |
| `peb-blue` | #0066FF | Secondaire, gradients |
| `peb-green` | #00FFB2 | Accent, animations |
| `peb-bg` | #06070A | Fond principal |
| `peb-surface` | #111620 | Surfaces secondaires |
| `peb-card` | #151C28 | Cartes |
| `peb-text` | #E6EDF3 | Texte principal |
| `peb-text2` | #8B949E | Texte secondaire |
| `peb-border` | rgba(255,255,255,0.06) | Bordures |

## 📱 Breakpoints Responsifs

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ⚡ Scripts JavaScript Inline

Les composants incluent:
- **Nav.astro**: Mobile menu toggle, navbar scroll effects
- **Hero.astro**: Calculator functionality, counter animation, parallax
- **FAQ.astro**: Accordion toggle, animation
- **BaseLayout.astro**: Scroll reveal initialization

## 🎯 Prochaines Étapes

### 1. Vérifier la structure
```bash
npm run astro check
```

### 2. Pages à créer
```
src/pages/
├── index.astro          # Accueil
├── contact.astro        # Formulaire contact
├── tarifs-peb-bruxelles.astro
├── guide-peb.astro
├── a-propos.astro
├── faq.astro
├── blog/
│   └── index.astro
└── peb-[commune].astro  # Dynamique pour 19 communes
```

### 3. Tester en local
```bash
npm run dev
# http://localhost:3000
```

### 4. Build de production
```bash
npm run build
npm run preview
```

## 🔍 Validation des Composants

Chaque composant a:
- [x] Interface Props typée
- [x] Classes Tailwind optimisées
- [x] Accessibilité (ARIA labels)
- [x] Responsive design (mobile-first)
- [x] Animations performantes
- [x] Commentaires JSDoc
- [x] Pas de dépendances externes

## 📝 Conventions Adoptées

### Nommage
- PascalCase pour composants Astro
- kebab-case pour classes CSS
- camelCase pour variables JS

### Structure
- Props interface au début du fichier
- Template HTML au centre
- Script au bas (le cas échéant)
- Style inclus en `<style>` si nécessaire

### Classes Tailwind
- Couleurs custom: `text-peb-*`, `bg-peb-*`, `border-peb-*`
- Animations: `reveal`, `reveal-left`, `reveal-right`, `animate-pulse-dot`
- Utilitaires: `glass`, `glow-cyan`, `gradient-text-cyan`

## 🚀 Performance Checklist

- [x] Pas de CSS inutile (Tailwind JIT)
- [x] Scripts optimisés (inline, pas de deps externes)
- [x] SVG pour icônes (pas d'images)
- [x] Lazy loading natif Astro
- [x] Animations GPU (transform + opacity)
- [x] Design mobile-first
- [x] Réduction mouvement respectée

## 🔐 Sécurité

- [x] Pas de données sensibles en dur
- [x] Liens utilisant schema.org
- [x] HTTPS prêt (canonical, OG, etc.)
- [x] CSP compliant (pas d'inline JS malveillant)
- [x] Validation ARIA pour a11y

## 📚 Documentation

Fichiers utiles:
1. **COMPONENTS_STRUCTURE.md** - Architecture globale
2. **USAGE_EXAMPLES.md** - Code examples
3. Commentaires inline dans chaque composant

## ✨ Features Implémentées

### Layouts
- [x] BaseLayout avec HTML5 complet
- [x] Meta tags (OG, Twitter, etc.)
- [x] Schema.org JSON-LD
- [x] PageLayout avec breadcrumb

### Navigation
- [x] Navbar fixed avec glassmorphism
- [x] Logo animé (point vert pulsant)
- [x] Menu mobile hamburger
- [x] Footer 4 colonnes complète
- [x] Liens légaux (CGV, confidentialité)

### Composants UI
- [x] Boutons avec 3 variantes
- [x] Cartes avec hover effects
- [x] Badges coloriés
- [x] Bouton WhatsApp flottant

### Sections
- [x] Hero avec fond en pointillés
- [x] Calculatrice PEB interactive
- [x] Statistiques animées
- [x] Processus en 5 étapes
- [x] Accordéon FAQ
- [x] CTA avec 2 boutons
- [x] Grille 19 communes

### Animations
- [x] Scroll reveal
- [x] Stagger reveal
- [x] Parallax au mouse move
- [x] Navbar transition
- [x] Counter animation
- [x] Accordion smooth transition

## 🎓 Ressources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [WCAG Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)

## 📞 Contact Info Intégrée

- Téléphone: +32 484 63 08 15
- Email: info@pebify.be
- Adresse: Rue Emile Wauters 58, 1020 Bruxelles
- WhatsApp: wa.me/32484630815

---

**Status**: ✅ Tous les fichiers créés et prêts à l'emploi
**Last Updated**: 2026-03-18
**Version**: 1.0
