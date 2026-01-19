# Portfolio 3D React + Symfony

Application portfolio moderne combinant un frontend React/Tailwind/Three.js et un backend Symfony 6.4 (API Platform) pour la gestion des projets, compétences, avis clients et messages de contact.

## Démarrer le projet en local

### Prérequis
- Node.js 18+, npm
- PHP 8.2+, Composer, Symfony CLI (ou serveur PHP built‑in)
- MySQL en local (ou MariaDB)

### Backend (Symfony + API Platform)
1. Copier le fichier d'exemple : `cp backend/.env.example backend/.env` puis renseigner `DATABASE_URL` et `MAILER_DSN`.
2. Installer les dépendances :
   ```bash
   cd backend
   composer install
   ```
3. Créer la base et lancer les migrations :
   ```bash
   php bin/console doctrine:database:create
   php bin/console doctrine:migrations:migrate -n
   ```
4. Démarrer l'API :
   ```bash
   symfony server:start -d    # ou php -S localhost:8000 -t public
   ```

### Frontend (React)
1. Installer les dépendances :
   ```bash
   cd frontend
   npm install
   ```
2. Démarrer le serveur Vite :
   ```bash
   npm run dev
   ```
3. Ouvrir l'URL indiquée (par défaut http://localhost:5173). Le frontend consomme l'API Symfony sur http://localhost:8000.

## Détails frontend
- Stack : Vite + React 18, TailwindCSS, Zustand, React Three Fiber, Framer Motion.
- Pages : accueil (Hero 3D, projets, compétences, avis), détail projet, contact relié à l'API.
- Animations : torus 3D flottant, micro-interactions sur les cartes, transitions douces.

## Détails backend
- Entités : Project, Skill, Testimonial, ContactMessage.
- Endpoints :
  - `GET /api/projects`, `GET /api/projects/{id}`
  - `GET /api/skills`
  - `GET /api/testimonials`
  - `POST /api/contact_messages` (persist + email)
- Installation détaillée et admin : voir `backend/README.md`.

## Connexion front/back
Le formulaire de contact envoie une requête `POST http://localhost:8000/api/contact-messages`. Adaptez l'URL selon votre déploiement et configurez les CORS dans Symfony si nécessaire.
