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

        downloadCV: "Descargar Hoja de Vida (PDF)",
        cvFileSource: "asdjlk20301293kasjdlhasd213ases.pdf",
        cvDownloadName: "Mario_Portacio_HV_ES.pdf",
        cvFile: "Mario_Portacio_HV_ES.pdf",
        cvStatus: "Listo para descargar",

        navHome: "Inicio",
        navProjects: "Proyectos",
        navContact: "Contacto",
        navCV: "Descargar Hoja de Vida",
        btnSkills: "Ver Proyectos",
        btnContact: "Ver Contacto",
        btnStudies: "Ver habilidades y estudios",

        labelMobile: "Celular",
        labelPhone: "Teléfono"
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

        cvFileSource: "sadkj02137kajsl903asdasd2en.pdf",
        cvDownloadName: "Mario_Portacio_CV_EN.pdf",
        downloadCV: "Download Resume (PDF)",
        cvFile: "Mario_Portacio_CV_EN.pdf",
        cvStatus: "Ready to download",

        navHome: "Home",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        navCV: "Download Resume",
        btnSkills: "View Projects",
        btnContact: "View Contact",
        btnStudies: "View skills and education",

        labelMobile: "Mobile",
        labelPhone: "Phone"
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
        desc: { es: "Una solución para la creación de mapas mentales en Flutter. Organiza tus ideas en un canvas, personaliza cada detalle y exporta tus proyectos con facilidad.", en: "A solution for creating mind maps in Flutter. Organize your ideas on a canvas, customize every detail, and export your projects with ease." },
        tags: ["Flutter", "Dart"],
        repo: "https://github.com/MarioPortacio/mind_map_app/tree/main",
        images: ["img/mind map app/home_page.png", "img/mind map app/editing.png", "img/mind map app/templates_page.png"]
    },
    {
        title: "Notebook App",
        desc: { es: "Una solución de software ágil y segura para la gestión de notas personales, que combina alto rendimiento con bajo consumo de recursos. Desarrollada con Tauri, SvelteKit y SQLite, ofrece una experiencia rápida, moderna y completamente local para maximizar tu productividad.", en: "An agile and secure software solution for managing personal notes, combining high performance with low resource consumption. Built using Tauri, SvelteKit, and SQLite, it offers a fast, modern, and fully local experience to maximize your productivity." },
        tags: ["Svelte","TypeScript" ,"Tauri", "SQLite"],
        repo: "https://github.com/MarioPortacio/notebook-app",
        images: ["img/Notebook_app/p1.jpg", "img/Notebook_app/p2.jpg"] 
    },
    {
        title: "Gestor de colecciones",
        desc: { es: "Una plataforma web moderna y escalable para gestionar todo tipo de colecciones en un solo lugar. Desarrollada con FastAPI, PostgreSQL y Tailwind CSS, ofrece alto rendimiento, diseño atractivo y una experiencia fluida para organizar, explorar y hacer crecer tus colecciones con facilidad.", en: "A modern, scalable web platform for managing all types of collections in one place. Built with FastAPI, PostgreSQL, and Tailwind CSS, it offers high performance, an attractive design, and a seamless experience for organizing, exploring, and growing your collections with ease." },
        tags: ["Python", "FastAPI", "PostgreSQL", "Tailwind CSS"],
        repo: "https://github.com/MarioPortacio/gestor-colecciones",
        images: ["img/gestor de colecciones/p1.jpg", "img/gestor de colecciones/p2.jpg", "img/gestor de colecciones/p3.jpg"]
    },
    {
        title: "App de America del Sur",
        desc: { es: "Una aplicación web interactiva que transforma la exploración de Sudamérica en una experiencia visual e intuitiva. A través de un mapa SVG dinámico, ofrece información detallada, tooltips, panel lateral y soporte multilenguaje (Español / Inglés), ideal para educación, análisis y descubrimiento de datos geográficos.", en: "An interactive web application that transforms the exploration of South America into a visual and intuitive experience. Through a dynamic SVG map, it provides detailed information, tooltips, a sidebar, and multilingual support (Spanish / English), making it ideal for education, analysis, and geographic data discovery." },
        tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        repo: "https://github.com/MarioPortacio/south-america-map",
        images: ["img/south america app/p1.jpg", "img/south america app/p2.jpg"]
    },
    {
        title: "TaskFlow",
        desc: { es: "TaskFlow es una solución integral para la gestión de tareas que potencia la organización visual. Construida con Angular, ofrece alto rendimiento y control total de los datos mediante exportación e importación de archivos .tflow, eliminando la dependencia de servicios externos y garantizando una experiencia segura, eficiente y bajo completo dominio del usuario.", en: "TaskFlow is an integrated solution for task management that enhances visual organization. Built with Angular, it offers high performance and complete data control through .tflow file export and import, eliminating dependency on external services and ensuring a secure, efficient experience under full user control." },
        tags: ["Angular", "HTML", "Tailwind CSS"],
        repo: "https://github.com/MarioPortacio/task-flow",
        images: ["img/taskflow/home.jpg","img/taskflow/edicion.jpg","img/taskflow/p1.jpg","img/taskflow/p2.jpg","img/taskflow/plantillajpg.jpg","img/taskflow/light_p2.jpg","img/taskflow/light_home.jpg"]
    }
];



const contactLinks = [
    {
        name: "Email",
        icon: "devicon-google-plain",
        color: "hover:text-red-500",
        btnTextKey: "sendEmail",
        isEmail: true,
        image: "img/contacto/mail.jpg"
    },
    {
        name: "LinkedIn",
        value: "Mario Portacio",
        icon: "devicon-linkedin-plain",
        link: "https://www.linkedin.com/in/mario-miguel-portacio-aparicio-848b42313/",
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
    { labelKey: "labelMobile", image: "img/contacto/tel1.jpg", raw: "3001234567" },
    { labelKey: "labelPhone", image: "img/contacto/tel2.jpg", raw: "3017654321" }
];

