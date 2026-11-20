import { buildPrompt } from './prompt.js'
import { generatePlan } from './api.js'
import { saveProject } from './storage.js'
import { getanimation, headanimation } from './ui.js';
const form = $('#form').parsley();
let step = 0
export function next() {
    const progre = document.getElementById('progress')
    const formule1 = document.querySelector('#formule1')
    const formule2 = document.querySelector('#formule2')
    const cercle = document.getElementById('cercle')
    const suivant = document.getElementById('suivant')
    const presedent = document.getElementById('precedent')
    suivant.addEventListener('click', async () => {
        if (step === 0) {
            if (form.validate({ group: 'step1' })) {
                progre.style.width = '100%'
                formule1.classList.add('hidden')
                formule2.classList.remove('hidden')
                cercle.children[1].style.cssText = `background-color: #176B55;color: white;`
                presedent.classList.remove('hidden')
                suivant.parentElement.style.justifyContent = 'space-between'
                suivant.textContent = 'Générer'
                step = 1
            }
        } else if (step === 1) {
            if ((form.validate({ group: 'step2' }))) {
                const project = {
                    name: document.getElementById('projectName').value,
                    description: document.getElementById('description').value,
                    brief: document.getElementById('brief').value,
                    duration: Number(document.getElementById('duration').value),
                    developers: Number(document.getElementById('developers').value),
                    technologies: document.getElementById('Technologies').value,
                    difficulty: document.getElementById('difficulty').value
                }
                try {
                    suivant.disabled = true
                    suivant.textContent = 'Generation...'
                    suivant.style.width = '100px'
                    getanimation("L'IA analyse votre projet...")
                    const prompt = buildPrompt(project);
                    const plan = await generatePlan(prompt)
                    const projectSaved = saveProject(plan)
                    alert('Plan sauvegardé avec succès !')
                    window.location.href = `project.html?id=${projectSaved.id}`
                } catch (error) {
                    alert(error.message)
                } finally {
                    suivant.disabled = false;
                    suivant.textContent = 'Génerer'
                    headanimation()
                }
            }

        }
    })
    presedent.addEventListener('click', () => {
        formule2.classList.add('hidden')
        formule1.classList.remove('hidden')
        progre.style.width = '50%'
        cercle.children[1].style.removeProperty('background-color')
        cercle.children[1].style.removeProperty('color')
        presedent.classList.add('hidden')
        suivant.parentElement.style.justifyContent = 'end'
        suivant.textContent = 'suivant'
        // suivant.setAttribute('id','suivant')
        step = 0
    })




}
// next()

// export function genere() {
//     if (form.validate({ group: 'step1' }) && form.validate({ group: 'step2' })) {
//        console.log('Formulaire valide');
//     }
// }



// const suivant = document.getElementById('suivant')
// suivant.addEventListener('click' ,()=>{

//     if (form.validate({ group: 'step1' })) {
//         console.log('Step 1 valide');
//     }
//         if (form.validate({ group: 'step2' })) {
//         console.log('Step 2 valide');
//     }
// })