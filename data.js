const content = {
    es: {
        heroTitle: "Hola, soy ",
        heroSubtitle: "Ingeniero de sistemas",
        navSkills: "Habilidades",
        navStudies: "Estudios/Experiencia",
        contact: "Contacto",
        viewRepo: "Ver Repositorio",
        otherLanguages: "Habilidades para Idiomas",
        englishLevel: "Inglés - B1 (Usuario Independiente)",
        espanolLevel: "Español - Nativo",
        screenshots: "Capturas",
        contactTitle: "Contacto",
        contactSubtitle: "¡Hablemos! Estoy disponible para nuevas oportunidades.",
        connect: "Conectar",
        sendEmail: "Enviar mensaje",
        call: "Llamar",
        phonesTitle: "Teléfonos",
        copy: "Copiar",
        downloadCV: "Descargar CV (PDF)",
        cvFile: "Mario_Portacio_CV_ES.pdf",
        cvStatus: "Listo para descargar",
        navHome: "Inicio",
        navProjects: "Proyectos",
        navContact: "Contacto",
        navCV: "Descargar CV",
        btnSkills: "Ver Proyectos",
        btnContact: "Ver Contacto",
        btnStudies: "Ver habilidades y estudios"
    },
    en: {
        heroTitle: "Hi, I'm ",
        heroSubtitle: "Systems Engineer",
        navStudies: "Education/Experience",
        contact: "Contact",
        viewRepo: "View Repository",
        otherLanguages: "Language Skills",
        englishLevel: "English - B1 (Independent User)",
        espanolLevel: "Spanish - Native",
        screenshots: "Screenshots",
        contactTitle: "Contact",
        contactSubtitle: "Let's talk! I'm available for new opportunities.",
        connect: "Connect",
        sendEmail: "Send message",
        call: "Call",
        phonesTitle: "Phones",
        downloadCV: "Download CV (PDF)",
        cvFile: "Mario_Portacio_CV_EN.pdf",
        cvStatus: "Ready to download",
        navHome: "Home",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        navCV: "Download CV",
        btnSkills: "View Projects",
        btnContact: "View Contact",
        btnStudies: "View skills and education"
    }
};

    //hacer que cada skill tenga su icono asociado, por ejemplo, usando una función que mapee cada skill a un icono de una librería como FontAwesome o similar. Esto haría que la sección de habilidades sea más visual y atractiva para los visitantes del portafolio.
const skills = ["JavaScript", "Python", "Dart", "Angular", "HTML", "Java", "CSS", "Svelte", "FastAPI", "PostgreSQL", "Git", "GitHub", "Tailwind CSS", "Flutter", "Tauri", "SQLite", "React", "TypeScript", "Vite", "C++", "MongoDb", "Firebase"];

const languages = [
    { 
        name: "Spanish", 
        levelKey: "espanolLevel" 
    },

    { 
        name: "English", 
        levelKey: "englishLevel" 
    }

    


];

const studies = [

     { 
        title: { 
            es: "Ingeniero de Sistemas", 
            en: "Systems Engineer" 
        }, 
        place: {
            es: "Universidad de Cartagena",
            en: "University of Cartagena"
        },
        date: { 
            es: "Febrero 2018 - Septiembre 2024", 
            en: "February 2018 - September 2024" 
        } 
    },

     { 
        title: { 
            es: "Apoyo en el desarrollo de aplicaciones web APIS en el nuevo software de biblioteca de código abierto multilingüe, multiusuario que integra recursos físicos y electrónicos del centro de recursos para el aprendizaje y la investigación, para integrarlo con otros programas de la universidad.", 
            en: "Support in the development of web applications APIs in the new multilingual, multi-user open-source library software that integrates physical and electronic resources of the learning and research resource center, to integrate it with other university programs." 
        }, 
        place: {
            es: "Practicas en Universidad de Cartagena", 
            en: "Internship at University of Cartagena" 
        },
        date: { 
            es: "Septiembre 2023 - Diciembre 2023", 
            en: "September 2023 - December 2023" 
        } 
    },

   

     { 
        title: { 
            es: "Técnico en sistemas", 
            en: "Systems Technician" 
        }, 
        place: {
            es: "Servicio Nacional de Aprendizaje (SENA)", 
            en: "National Learning Service (SENA)" 
        },
        date: { 
            es: "Febrero 2016 - Mayo 2018", 
            en: "February 2016 - May 2018" 
        } 
    },

    { 
        title: { 
            es: "Bachiller Académico", 
            en: "Academic Graduate" 
        }, 
        place: {
            es: "Institución Educativa Comfamiliar", 
            en: "Comfamiliar Educational Institution" 
        },
        date: { 
            es: "Febrero 2006 - Mayo 2017", 
            en: "February 2006 - May 2017" 
        } 
    },
    





];

const projects = [

    

    
    {
        title: "Mind Map App",
        desc: { es: "Herramienta interactiva para mapas mentales.", en: "Interactive tool for mind mapping." },
        tags: ["Flutter", "Dart"],
        repo: "https://github.com/MarioPortacio/mind_map_app/tree/main",
        images: ["img/mind map app/home_page.png", "img/mind map app/editing.png", "img/mind map app/templates_page.png"]
    },
    {
        title: "Notebook App",
        desc: { es: "Aplicación de escritorio multiplataforma con SQLite.", en: "Cross-platform desktop app with SQLite." },
        tags: ["Svelte","TypeScript" ,"Tauri", "SQLite"],
        repo: "https://github.com/MarioPortacio/notebook-app",
        images: ["img/Notebook_app/p1.jpg", "img/Notebook_app/p2.jpg"] 
    },
    {
        title: "Gestor de colecciones",
        desc: { es: "Gestor de colecciones web con backend en Python.", en: "Web collection manager with Python backend." },
        tags: ["Python", "FastAPI", "PostgreSQL", "Tailwind CSS"],
        repo: "https://github.com/MarioPortacio/gestor-colecciones",
        images: ["img/gestor de colecciones/p1.jpg", "img/gestor de colecciones/p2.jpg", "img/gestor de colecciones/p3.jpg"]
    },
    {
        title: "App de America del Sur",
        desc: { es: "Aplicación para explorar y aprender sobre América del Sur.", en: "App for exploring and learning about South America." },
        tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        repo: "https://github.com/MarioPortacio/south-america-map",
        images: ["img/south america app/p1.jpg", "img/south america app/p2.jpg"]
    },
    {
        title: "TaskFlow",
        desc: { es: "Este portafolio dinámico con modo oscuro e idiomas.", en: "This dynamic portfolio with dark mode and languages." },
        tags: ["Angular", "HTML", "Tailwind CSS"],
        repo: "https://github.com/MarioPortacio/task-flow",
        images: ["img/taskflow/home.jpg","img/taskflow/edicion.jpg","img/taskflow/p1.jpg","img/taskflow/p2.jpg","img/taskflow/plantillajpg.jpg","img/taskflow/light_p2.jpg","img/taskflow/light_home.jpg"]
    }
];



const contactLinks = [
    {
        name: "Email",
        user: "mario.portacio", // Solo la parte antes del @
        domain: "gmail.com",    // Solo el dominio
        icon: "devicon-google-plain",
        color: "hover:text-red-500",
        btnTextKey: "sendEmail",
        isEmail: true
    },
    {
        name: "LinkedIn",
        value: "Mario Portacio",
        icon: "devicon-linkedin-plain",
        link: "https://linkedin.com/in/marioportacio",
        color: "hover:text-blue-600",
        btnTextKey: "connect"
    },

     {
        name: "GitHub",
        value: "@MarioPortacio",
        icon: "devicon-github-original",
        link: "https://github.com/MarioPortacio",
        color: "hover:text-slate-500",
        btnTextKey: "connect"
    },
];

const phoneNumbers = [
    { label: "Fijo", number: "+57 300 XXX XXXX" },
    { label: "Celular", number: "+57 301 XXX XXXX" }
];

