# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

## Professional Portfolio 🚀

Modern, lightweight, and high-performance portfolio site built using the Astro framework. it is minimalist, accessible, and technically optimized.

![alt text](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![alt text](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![alt text](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## ✨ Main fetures

Data-Driven Architecture: All content (work experience, education, skills) is managed centrally in a single JSON file.
Ultra-Performance: The Astro architecture ensures "Zero JS by default" performance, delivering lightning-fast load times.
Responsive Design: A fully responsive interface that scales from smartphones to large screens.
Dark/Light Mode: A user-selectable theme utilizing CSS variables and subtle transitions.
Modern Tech Stack: Leverages Lucide icons, the Inter font, and typed data.

## 🛠️ Stack

- Framework: Astro 5
- Languages: TypeScript, HTML5, CSS3 (Scoped & Global)
- Components: Astro Components
- Icons: Lucide-Astro & Material UI Icons
- Data: JSON-based CV-structure

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
│ └── images/ # Profile pictures amd static files
├── src/
│ ├── components/ # Modular Astro components
│ ├── data/
│ │ └── cv_data.json # Application data for portfolio
│ ├── layouts/
│ ├── pages/
│ │ └── index.astro # Main page
│ └── styles/
│ └── global.css # Global CSS ja themes
└── package.json
```

## ✍️ Update portfolio content

Updating the site is effortless. Simply edit the `src/data/cv_data.json` file. The changes will automatically update across all components (Experience, Education, Skills, Hero).

## 🧞 Instuctions / Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Note

Ensure that Node.js (version 18.17.1 or later) is installed on your machine.

## 👀 Want to learn more?

- To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).
- Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
