import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore, AiOutlineRise } from "react-icons/ai";

const data = [
  {
    id: 1,
    icon: <AiOutlineRise />,
    title: "Optimisation SEO",
    desc: "Votre site sera optimisé pour les moteurs de recherche. Apparaissez devant tout vos concurrents.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Développement frontend",
    desc: "Votre produit aura un design attrayant et sera accessible sur tous les appareils, y compris les téléphones mobiles, les tablettes et les ordinateurs.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Développement backend",
    desc: "La sécurité de votre entreprise/produit est prise au sérieux dès le début du projet. Je m'assurerai que votre site/application est à l'abri des attaques.",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "Gestion de projet",
    desc: "Je peux m'occuper de la construction de votre projet de A à Z. Allant de la veille technologique à la planification des tâches",
  },
];

export default data;
