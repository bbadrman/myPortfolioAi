# Portfolio 3D React + Symfony

Application portfolio moderne combinant un frontend React/Tailwind/Three.js et un backend Symfony 6.4 (API Platform) pour la gestion des projets, compétences, avis clients et messages de contact.

## Frontend (React)
- Stack : Vite + React 18, TailwindCSS, Zustand, React Three Fiber, Framer Motion.
- Pages : accueil (Hero 3D, projets, compétences, avis), détail projet, contact relié à l'API.
- Animations : torus 3D flottant, micro-interactions sur les cartes, transitions douces.
- Lancer :
  ```bash
  cd frontend
  npm install
  npm run dev
  ```

## Backend (Symfony + API Platform)
- Entités : Project, Skill, Testimonial, ContactMessage.
- Endpoints :
  - `GET /api/projects`, `GET /api/projects/{id}`
  - `GET /api/skills`
  - `GET /api/testimonials`
  - `POST /api/contact_messages` (persist + email)
- Installation : voir `backend/README.md`.

## Connexion front/back
Le formulaire de contact envoie une requête `POST http://localhost:8000/api/contact-messages`. Adaptez l'URL selon votre déploiement et configurez les CORS dans Symfony si nécessaire.
