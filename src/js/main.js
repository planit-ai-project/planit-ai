import { next } from "./validation.js"
import { affiche_dialoge } from "./ui.js"
import { datademo, affichage_demo } from "./demo.js"
import { getProject } from "./storage.js"
import { ModalAPI } from './ui.js'
import { afficherdashbord } from './dashbord.js';
//dialoge 
affiche_dialoge()
//input
if (document.getElementById('form')) {
    next()
}
//demo
if (document.getElementById('demoprogress')) {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode')
    if (mode === 'demo') {
        datademo();
    } else {
        const id = params.get('id');
        const plan = getProject(id);
        if (plan) {
            affichage_demo(plan);
        } else {
            console.log('Aucun projet trouvé');
        }
    }
}
//localstorage
if (document.getElementById('dialog')) {
    ModalAPI()
}
//affichage dashbord
if (document.getElementById('projectsContainer')) {
    afficherdashbord();
}