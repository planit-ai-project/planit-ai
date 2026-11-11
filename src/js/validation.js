const form = $('#form').parsley();
export function next(){
    const progre =document.getElementById('progress')
    const formule1= document.querySelector('#formule1')
    const formule2 = document.querySelector('#formule2')
    const cercle = document.getElementById('cercle')
    const suivant = document.getElementById('suivant')
    const presedent = document.getElementById('precedent')
    suivant.addEventListener('click',()=>{
        if (form.validate({group:'step1'})) {
            progre.style.width='100%'
            formule1.classList.add('hidden')
            formule2.classList.remove('hidden')
            cercle.children[1].style.cssText=`background-color: #176B55;color: white;`
            presedent.classList.remove('hidden')
            suivant.parentElement.style.justifyContent='space-between'
            suivant.textContent='Générer'
            // form.resetValidation()
        }
    })
    presedent.addEventListener('click',()=>{
            form.resetValidation()
            formule2.classList.add('hidden')
            formule1.classList.remove('hidden')
            progre.style.width='50%'
            cercle.children[1].style.removeProperty('background-color')
            cercle.children[1].style.removeProperty('color')
            presedent.classList.add('hidden')
            suivant.parentElement.style.justifyContent='end'
            suivant.textContent='suivant'            
    })

}
next()
// const suivant = document.getElementById('suivant')
// suivant.addEventListener('click' ,()=>{

//     if (form.validate({ group: 'step1' })) {
//         console.log('Step 1 valide');
//     }
//         if (form.validate({ group: 'step2' })) {
//         console.log('Step 2 valide');
//     }
// })