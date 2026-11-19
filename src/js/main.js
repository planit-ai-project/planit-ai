    import { next } from "./validation.js"
    import { affiche_dialoge } from "./ui.js"
    import { affichage_demo } from "./demo.js"
    import { ModalAPI } from './ui.js'    
    // import { buildPrompt } from './prompt.js'
    // import { generatePlan } from './api.js'
    affiche_dialoge()
    //input
 if (document.getElementById('form')) {
    next()
    // const prompt = buildPrompt(project)
    // const plan = await generatePlan(prompt)
}
//demo
if (document.getElementById('demoprogress')) {
    affichage_demo()
}
//localstorage
if (document.getElementById('dialog')) {
    ModalAPI()
}