    import { next } from "./validation.js";
    import { affiche_dialoge } from "./ui.js";
    import { affichage_demo } from "./demo.js";
    affiche_dialoge()
 if (document.getElementById('form')) {
    next();
}

if (document.getElementById('demoprogress')) {
    affichage_demo();
}
