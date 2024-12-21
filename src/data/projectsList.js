import img1 from "../assets/webp/py_1.webp";
import img2 from "../assets/webp/py_2.webp";
import img3 from "../assets/webp/py_3.webp";
import img4 from "../assets/webp/py_4.webp";
import img5 from "../assets/webp/py_5.webp";
import img6 from "../assets/webp/py_6.webp";
import img7 from "../assets/webp/py_7.webp";
import img8 from "../assets/webp/py_8.webp";
import img9 from "../assets/webp/py_9.webp";
import img10 from "../assets/webp/py_10.webp";

export const projectsList = [
  {
    id: 1,
    title: { en: "I Restaurant", es: "Yo Restaurante" },
    description: {
      en: "Page that presents a restaurant, as a chef and products, a project that I did in 1 day.",
      es: "Página que presenta un restaurante, como chef y productos, un proyecto que hice en 1 día."
    },
    image: img1,
    url: "https://dazzling-narwhal-ecf3bb.netlify.app/",
    github: null,
    tools: ["HTML", "CSS", "Aos js", "Bootstrap"],
    type: 1,
  },
  {
    id: 2,
    title: { en: "KITARA", es: "KITARA" },
    description: {
      en: "Website representing the sandals brand, responsive web and mobile only",
      es: "Sitio web que representa la marca de sandalias, web responsive y solo móvil"
    },
    image: img2,
    url: "https://resilient-halva-5599d9.netlify.app/",
    github: "https://github.com/luisdevelop23/KITARA",
    tools: ["HTML", "CSS", "Javascript", "React", "Tailwind", "Vite"],
    type: 1,
  },
  {
    id: 3,
    title: { en: "Market Met", es: "Mercado Met" },
    description: {
      en: "Ecommers developed in react, with database stored in supabase",
      es: "Ecommerce desarrollado en react, con base de datos almacenada en supabase"
    },
    image: img3,
    url: "https://market-met.vercel.app/",
    github: "https://github.com/luisdevelop23/MarketMet",
    tools: ["HTML", "CSS", "Javascript", "Supabase", "Tailwind", "Vite"],
    type: 2,
  },
  {
    id: 4,
    title: { en: "MetProfile", es: "PerfilMet" },
    description: {
      en: "Web application in React to create virtual resumes, in a work environment",
      es: "Aplicación web en React para crear currículums virtuales, en un entorno laboral"
    },
    image: img4,
    url: "https://met-profile.vercel.app/",
    github: "https://github.com/luisdevelop23/MetProfile",
    tools: ["HTML", "CSS", "Javascript", "Supabase", "Tailwind", "Vite"],
    type: 2,
  },
  {
    id: 5,
    title: { en: "PokeDex", es: "PokeDex" },
    description: {
      en: "Web application, developed in React that shows information about all the pokemon, consuming its API",
      es: "Aplicación web, desarrollada en React que muestra información sobre todos los pokémon, consumiendo su API"
    },
    image: img5,
    url: "https://pokemon-page-react-tailwindcss-vite.vercel.app/",
    github:
      "https://github.com/luisdevelop23/Pokemon-Page-React-Tailwindcss-Vite",
    tools: ["HTML", "CSS", "Javascript", "React", "Tailwind", "Vite"],
    type: 2,
  },
  {
    id: 6,
    title: { en: "Todo List", es: "Lista de Tareas" },
    description: {
      en: "Task web application, stored in localstorage developed in React.js",
      es: "Aplicación web de tareas, almacenada en localstorage desarrollada en React.js"
    },
    image: img6,
    url: "https://todo-list-react-vite.vercel.app/",
    github: "https://github.com/luisdevelop23/Todo-List-React-Vite",
    tools: ["HTML", "CSS", "Javascript", "React", "Tailwind", "Vite"],
    type: 2,
  },
  {
    id: 7,
    title: { en: "Nfs Wallet - (deprecated)", es: "Cartera Nfs - (obsoleta)" },
    description: {
      en: "web application, which brings the nfs of different crypto wallets",
      es: "aplicación web, que trae los nfs de diferentes carteras de criptomonedas"
    },
    image: img7,
    url: "https://frabjous-croissant-2d3695.netlify.app/",
    github: "https://github.com/luisdevelop23/NFTS",
    tools: ["HTML", "CSS", "Javascript", "React", "Tailwind", "Vite"],
    type: 2,
  },
  {
    id: 8,
    title: { en: "Vet", es: "Vet" },
    description: {
      en: "application to manage patients in a veterinary clinic developed in React.js",
      es: "aplicación para gestionar pacientes en una clínica veterinaria desarrollada en React.js"
    },
    image: img8,
    url: "https://legendary-rugelach-573d87.netlify.app/",
    github: "https://github.com/luisdevelop23/Veterinari-react",
    tools: ["HTML", "CSS", "Javascript", "React", "Tailwind", "Vite"],
    type: 2,
  },
  {
    id: 9,
    title: { en: "Countries", es: "Países" },
    description: {
      en: "Responsive page, which queries graphql API countries",
      es: "Página responsive, que consulta la API de graphql de países"
    },
    image: img9,
    url: "https://paises-react--six.vercel.app/",
    github: "https://github.com/luisdevelop23/paises-react-tailwindcss-graphql",
    tools: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Tailwind",
      "Vite",
      "GraphQL",
    ],
    type: 2,
  },
  {
    id: 10,
    title: { en: "Calculator", es: "Calculadora" },
    description: {
      en: "Application developed with native javascript",
      es: "Aplicación desarrollada con javascript nativo"
    },
    image: img10,
    url: "https://calculator-tailwinds-java-script.vercel.app/",
    github:
      "https://github.com/luisdevelop23/calculator---tailwinds---javaScript-",
    tools: ["HTML", "CSS", "Javascript", "Tailwind"],
    type: 2,
  },
];
export default projectsList;
