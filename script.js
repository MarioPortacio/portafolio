let currentLang = localStorage.getItem('lang') || 'es';
const imageIndices = {}; // Guardamos en qué imagen va cada proyecto

// Diccionario de iconos (Añádelo al inicio de tu script.js)
const skillIcons = {
    "JavaScript": "devicon-javascript-plain",
    "Python": "devicon-python-plain",
    "Dart": "devicon-dart-plain",
    "Angular": "devicon-angularjs-plain",
    "HTML": "devicon-html5-plain",
    "Java": "devicon-java-plain",
    "CSS": "devicon-css3-plain",
    "Svelte": "devicon-svelte-plain",
    "FastAPI": "devicon-fastapi-plain",
    "PostgreSQL": "devicon-postgresql-plain",
    "Git": "devicon-git-plain",
    "GitHub": "devicon-github-original",
    "Tailwind CSS": "devicon-tailwindcss-original",
    "Flutter": "devicon-flutter-plain",
    "Tauri": "devicon-tauri-plain",
    "SQLite": "devicon-sqlite-plain",
    "React": "devicon-react-original",
    "TypeScript": "devicon-typescript-plain",
    "Vite": "devicon-vite-original",
    "C++": "devicon-cplusplus-plain",
    "MongoDb": "devicon-mongodb-plain",
    "Firebase": "devicon-firebase-plain"
};

function init() {
    setupTheme();
    setupAnimations();
    renderProjects(); 
    renderSkills();
    renderStudies();
    updateLanguage();
    renderLanguages();
    renderPhones();
    renderContact();
}

function setupAnimations() {
    const elements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 100); // 👈 delay escalonado
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
}

// Asegúrate de que esta sea la ÚLTIMA línea del archivo
// document.addEventListener('DOMContentLoaded', init);

function updateLanguage() {
    const hTitle = document.getElementById('heroTitle');
    const hSub = document.getElementById('heroSubtitle');
    
    if(hTitle) hTitle.innerText = content[currentLang].heroTitle;
    if(hSub) hSub.innerText = content[currentLang].heroSubtitle;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n').replace('nav-', 'nav');
        if(content[currentLang][key]) {
            el.innerText = content[currentLang][key];
        }
    });

    renderProjects(); 
    renderStudies();
    renderSkills();
    renderLanguages();  
    renderContact();
    renderPhones();
    
}

document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
});

function renderProjects() {
    const container = document.getElementById('projects-list');
    if (!container) return;

    // Limpiamos el contenedor antes de renderizar
    container.innerHTML = "";

    projects.forEach((p, pIndex) => {
        // Validación de imagen robusta
        // const initialImg  = (p.images && p.images.length > 0) ? p.images : 'https://via.placeholder.com/800x450?text=No+Image+Available';

        const initialImg = (p.images && p.images.length > 0) 
            ? p.images[0] 
            : 'https://via.placeholder.com/800x450';

        const projectHTML = `
        <article class="group bg-white dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 mb-16">
            <div class="flex flex-col lg:flex-row min-h-[450px]">
                
                <div class="w-full lg:w-3/5 relative overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img id="img-${pIndex}" 
                         src="${initialImg}" 
                         alt="Preview de ${p.title}"
                         class="w-full h-full object-cover transition-all duration-700 opacity-100 group-hover:scale-[1.03]"
                         onclick="nextImage(${pIndex})"
                         style="cursor: pointer; display: block;">
                    
                    <div class="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
                        ${p.images.length} ${p.images.length === 1 ? 'Captura' : content[currentLang].screenshots}
                    </div>

                    <div class="absolute bottom-6 inset-x-0 flex justify-center gap-3 z-10">
                        ${p.images.map((_, i) => `
                            <button onclick="setImage(${pIndex}, ${i})" 
                                    class="h-1.5 transition-all duration-300 rounded-full border border-white/50 ${i === 0 ? 'bg-white w-8' : 'bg-white/40 w-4 hover:bg-white/60'}" 
                                    data-dot="${pIndex}-${i}"
                                    aria-label="Ver imagen ${i + 1}">
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${p.tags.map(t => `
                            <span class="text-[10px] font-black px-3 py-1 rounded-md bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 uppercase tracking-tighter border border-blue-100 dark:border-blue-800">
                                ${t}
                            </span>
                        `).join('')}
                    </div>

                    <h3 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                        ${p.title}
                    </h3>

                    <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                        ${p.desc[currentLang]}
                    </p>

                    <div class="flex items-center gap-4">
                        <a href="${p.repo}" target="_blank" 
                            class="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all transform active:scale-95 shadow-lg shadow-blue-500/10">
                                
                                <span>${content[currentLang].viewRepo}</span>
                                
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                        </a>
                    </div>
                </div>
            </div>
        </article>
        `;
        container.innerHTML += projectHTML;
    });
}

function setImage(pIdx, iIdx) {
    imageIndices[pIdx] = iIdx;
    const imgElement = document.getElementById(`img-${pIdx}`);
    if (!imgElement) return;

    imgElement.classList.add('opacity-50'); // Efecto rápido de carga
    
    setTimeout(() => {
        imgElement.src = projects[pIdx].images[iIdx];
        imgElement.onload = () => imgElement.classList.remove('opacity-50');
        updateDots(pIdx, iIdx);
    }, 100);
}

function nextImage(pIdx) {
    const project = projects[pIdx];
    let nextIdx = (imageIndices[pIdx] !== undefined ? imageIndices[pIdx] + 1 : 1) % project.images.length;
    setImage(pIdx, nextIdx);
}

function updateDots(pIdx, iIdx) {
    // Limpiamos todos los puntos de ese proyecto específico
    document.querySelectorAll(`[data-dot^="${pIdx}-"]`).forEach(dot => {
        dot.className = "w-3 h-3 rounded-full border-2 border-white bg-white/30 transition-all";
    });
    // Activamos el punto correspondiente
    const activeDot = document.querySelector(`[data-dot="${pIdx}-${iIdx}"]`);
    if(activeDot) {
        activeDot.className = "w-8 h-3 rounded-full border-2 border-white bg-white transition-all";
    }
}

function renderSkills() {
    const list = document.getElementById('skills-list');
    if (!list) return;

    list.innerHTML = skills.map(s => {
        const iconClass = skillIcons[s] || 'devicon-code-plain';
        
        return `
        <div class="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <i class="${iconClass} colored text-2xl"></i>
            <span class="text-sm font-bold text-slate-700 dark:text-slate-200">${s}</span>
        </div>
        `;
    }).join('');
}

function renderLanguages() {
    const list = document.getElementById('languages-list');
    if (!list) return;

    list.innerHTML = languages.map(l => `
        <div class="flex items-center gap-3 px-5 py-3 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 rounded-2xl shadow-sm">
            <span class="text-sm font-bold text-slate-700 dark:text-slate-200">
                ${content[currentLang][l.levelKey]}
            </span>
        </div>
    `).join('');
}

function renderStudies() {
    const list = document.getElementById('studies-list');
    if (!list) return;

    list.innerHTML = studies.map(s => `
        <div class="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-700 last:border-0">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 shadow-sm"></div>
            
            <div class="bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 class="font-bold text-xl text-slate-800 dark:text-slate-100 leading-tight">
                    ${s.title[currentLang]}
                </h4>
                
                <p class="text-blue-600 dark:text-blue-400 font-semibold mt-2 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"></path>
                    </svg>
                    ${s.place[currentLang]}
                </p>
                
                <p class="text-sm text-slate-500 dark:text-slate-500 mt-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    ${s.date[currentLang]}
                </p>
            </div>
        </div>
    `).join('');
}

function setupTheme() {
    const themeBtn = document.getElementById('theme-btn');
    if(!themeBtn) return;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    themeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
}

document.addEventListener('DOMContentLoaded', init);


function renderPhones() {
    const container = document.getElementById('phones-list');
    if (!container) return;

    container.innerHTML = phoneNumbers.map(p => {
        // Creamos una versión "sucia" para los bots (ej: +57_300_123)
        const safeNumber = p.number.replace(/\s/g, '_');
        
        return `
        <div class="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div>
                <p class="text-[10px] uppercase tracking-widest text-slate-500 font-bold">${p.label}</p>
                <p class="font-mono text-slate-800 dark:text-slate-200">${p.number}</p>
            </div>
            <button onclick="handlePhoneCall('${safeNumber}')" 
                    class="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    title="${content[currentLang].call}">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </button>
        </div>
    `}).join('');
}


// Lógica de seguridad para el email
function handleSecureEmail(user, domain) {
    window.location.href = `mailto:${user}@${domain}`;
}

// Función para manejar la llamada de forma segura
function handlePhoneCall(encodedNumber) {
    // Decodificamos el número (en este ejemplo, simplemente quitamos los guiones bajos de seguridad)
    const cleanNumber = encodedNumber.replace(/_/g, '');
    window.location.href = `tel:${cleanNumber}`;
}


function handleSecureLink(url) {
    // Abrimos en nueva pestaña con protecciones de seguridad
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
}

function renderContact() {
    const container = document.getElementById('contact-grid');
    if (!container) return;

    // Generamos las tarjetas de redes sociales
    let html = contactLinks.map(c => {
        let clickAction = c.isEmail 
            ? `handleSecureEmail('${c.user}', '${c.domain}')` 
            : `handleSecureLink('${c.link}')`;

        return `
        <div onclick="${clickAction}" 
             class="cursor-pointer group bg-white dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                <i class="${c.icon} text-2xl ${c.color}"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-lg">${c.name}</h3>
                <span class="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                    ${content[currentLang][c.btnTextKey]} →
                </span>
            </div>
        </div>
    `; }).join('');

    // AÑADIMOS EL BOTÓN DE CV AL FINAL DEL HTML
    html += `
    <div onclick="downloadMyCV()" 
         class="cursor-pointer group bg-blue-600 hover:bg-blue-700 p-6 rounded-3xl shadow-lg shadow-blue-500/20 transition-all duration-300 flex items-center gap-6">
        <div class="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
        </div>
        <div class="flex-1">
            <h3 class="font-bold text-lg text-white">${content[currentLang].downloadCV}</h3>
            <span class="text-blue-100 font-medium text-sm opacity-80 uppercase tracking-wider">
                ${content[currentLang].cvStatus} ↓
            </span>
        </div>
    </div>
    `;

    container.innerHTML = html;
}

// Función para ejecutar la descarga
function downloadMyCV() {
    const fileName = content[currentLang].cvFile;
    const link = document.createElement('a');
    // Asegúrate de que tus PDFs estén en esta carpeta
    link.href = `./assets/pdf/${fileName}`; 
    link.download = fileName;
    link.click();
}


const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}


