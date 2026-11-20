    import { next } from "./validation.js"
    import { affiche_dialoge } from "./ui.js"
    import { datademo,affichage_demo } from "./demo.js"
    import { getPlan } from "./storage.js"
    import { ModalAPI } from './ui.js'  
      
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
    }else {
        const plan = getPlan()
        if (plan) {
            affichage_demo(plan);
        } else {
            console.log('Aucun plan trouve');
        }
    }
}
//localstorage
if (document.getElementById('dialog')) {
    ModalAPI()
}