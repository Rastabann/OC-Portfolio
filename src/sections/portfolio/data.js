import Image1 from "../../assets/project1.jpg";
import Image2 from "../../assets/project2.jpg";
import Image3 from "../../assets/project3.jpg";
import Image4 from "../../assets/project4.jpg";
import Image5 from "../../assets/project5.jpg";

const data = [
  {
    id: 1,
    category: "frontend",
    image: Image2,
    title: "Booki (frontend)",
    desc: "Intégration frontend d'une application qui permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Les problématiques étaient de pouvoir intégrer une maquette en respectant le design et la mise en place des conteneurs. Les compétences que j'ai dûes acquérir sont HTML pour la structuration de la page, CSS pour le design et flexbox pour l'alignement des éléments",
    demo: "https://rastabann.github.io/OC-Booki/",
    github: "https://github.com/Rastabann/OC-Booki",
  },
  // {
  //   id: 2,
  //   category: "SEO",
  //   image: Image1,
  //   title: "Nina Carducci (SEO)",
  //   desc: "Site vitrine d'une photographe professionnelle.",
  //   demo: "https://rastabann.github.io/OC-P5/",
  //   github: "https://github.com/Rastabann/OC-P5",
  // },
  // {
  //   id: 3,
  //   category: "frontend",
  //   image: Image3,
  //   title: "Sophie Bluel (Frontend)",
  //   desc: "Portfolio d'une architecte d'intérieur.",
  //   demo: "https://rastabann.github.io/OC-ArchiWebos/",
  //   github: "https://github.com/Rastabann/OC-ArchiWebos",
  // },
  {
    id: 4,
    category: "frontend",
    image: Image4,
    title: "Kasa (frontend)",
    desc: "Intégration frontend d'une application de location immobilière avec React. Les problématiques étaient d'initialiser une application avec create-react-app, de mettre en place des composants, de configurer la navigation entre les pages et de mettre en oeuvre des animations CSS. Les compétences que j'ai dûes acquérir sont la maîtrise du framework React et des animations CSS, React Router et Sass.",
    demo: "https://rastabann.github.io/OC-P6/",
    github: "https://github.com/Rastabann/OC-P6",
  },
  {
    id: 5,
    category: "backend",
    image: Image5,
    title: "Mon vieux grimoire (backend)",
    desc: "Mise en place du backend d'une application de notation de livres. Les problématiques étaient d'implémenter un modèle logique de données conformément à la réglementation, stocker des données de manière sécurisée, mettre en oeuvre des opérations CRUD de manière sécurisée et prendre en compte le green code. Les compétences que j'ai dûes acquérir sont la maîtrise de l'environnement NodeJS et du framework Express, l'utilisation de MongoDB et l'optimisation des images.",
    demo: "https://rastabann.github.io/OC-P8/",
    github: "https://github.com/Rastabann/OC-P8",
  },
];

export default data;
