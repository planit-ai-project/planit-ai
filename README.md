# planit-ai
AI-powered project planning and task management application
# PLANIT AI

**Planifiez vos projets intelligemment avec l'aide de l'intelligence artificielle.**

PLANIT AI est une application web qui permet de générer automatiquement un plan de développement à partir des informations d'un projet. Elle facilite l'organisation des tâches, le suivi de leur progression et la gestion du travail en équipe.

## Fonctionnalités

- **Gestion des projets :** création et consultation des projets.
- **Génération IA :** création automatique d'un plan de développement avec Gemini API.
- **Mode Démo :** utilisation d'un plan prédéfini sans connexion à l'IA.
- **Task Board :** organisation des tâches en trois colonnes : To Do, In Progress et Done.
- **Gestion des tâches :** consultation, modification et suppression.
- **Suivi de progression :** calcul automatique de l'avancement du projet.
- **Gestion des dépendances :** vérification des tâches à terminer avant de valider une autre tâche.
- **Sauvegarde :** conservation des données avec LocalStorage et SessionStorage.

## Technologies utilisées

- HTML5
- CSS3
- Tailwind CSS
- JavaScript (ES6 Modules)
- Fetch API
- Gemini API
- LocalStorage / SessionStorage

## Structure du projet

```text
PLANIT-AI/
│
├── index.html
├── new-project.html
├── project.html
│
├── src/
│   ├── images/
│   │
│   ├── js/
│   │   ├── api.js
│   │   ├── dashboard.js
│   │   ├── demo.js
│   │   ├── main.js
│   │   ├── modifier.js
│   │   ├── prompt.js
│   │   ├── storage.js
│   │   ├── supprimer.js
│   │   ├── ui.js
│   │   └── validation.js
│   │
│   ├── data/
│   │   └── sample-plan.json
│   │
│   └── css/
│       ├── input.css
│       └── output.css
│
├── Prompt.txt
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation et lancement

1. Cloner le repository :

```bash
git clone URL_DU_REPOSITORY
```

2. Accéder au dossier :

```bash
cd PLANIT-AI
```

3. Installer les dépendances :

```bash
npm install
```

4. Lancer Tailwind CSS :

```bash
npm run dev
```

5. Ouvrir `index.html` avec Live Server.

## Configuration de l'API

Pour utiliser la génération avec l'intelligence artificielle :

1. Obtenir une clé API depuis [Google AI Studio](https://aistudio.google.com/).
2. Ouvrir les Paramètres IA dans l'application.
3. Saisir la clé API et l'enregistrer.

La clé API est conservée uniquement dans `sessionStorage`.

**Remarque :** une clé API utilisée dans une application Front-End reste accessible depuis le navigateur. Cette solution est destinée à un projet pédagogique et ne remplace pas une architecture sécurisée côté serveur.

## Mode Démo

Le Mode Démo permet de tester l'application sans utiliser l'API Gemini.

Il charge un plan prédéfini depuis :

```text
src/data/sample-plan.json
```

Les données sont récupérées avec Fetch API.

## Auteur

**Yassine OUBRIK**

Projet réalisé dans le cadre de la formation YouCode.

---

*PLANIT AI — Planifiez mieux, développez intelligemment.*