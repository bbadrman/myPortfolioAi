# Backend Symfony (API Platform)

## Installation rapide
1. Copier `.env.example` en `.env` puis ajuster `DATABASE_URL` et `MAILER_DSN`.
2. Installer les dépendances : `composer install`.
3. Générer la base : `php bin/console doctrine:database:create` puis `php bin/console doctrine:migrations:migrate`.
4. Lancer le serveur : `symfony server:start -d` ou `php -S localhost:8000 -t public`.

## API exposée
- `GET /api/projects` : collection de projets.
- `GET /api/projects/{id}` : détail projet.
- `GET /api/skills` : liste des compétences.
- `GET /api/testimonials` : liste des avis.
- `GET /api/contact_messages` : messages reçus (protégé en prod).
- `POST /api/contact_messages` : enregistrement + envoi d'email.

## Interface admin
Ajoutez EasyAdmin ou l'admin API Platform : `composer require easycorp/easyadmin-bundle`.

## Fixtures de départ (exemple)
Ajoutez un fichier `src/DataFixtures/AppFixtures.php` pour insérer des projets/skills/tests lors du `doctrine:fixtures:load`.
