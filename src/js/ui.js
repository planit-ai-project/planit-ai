import { saveapi, removeapi, savedemo } from './storage.js'
export function affiche_dialoge() {
    const dialog=document.getElementById('dialog')
    const parametre = document.getElementById('Parametre')
    const x=document.getElementById('closedialoge')
    parametre.addEventListener('click',()=>{
        dialog.showModal();
    })
    x.addEventListener('click',()=>{
        dialog.close()
    })
}


export function ModalAPI() {
    const dialog = document.getElementById('dialog')
    const apiKey = document.getElementById('apiKey')
    const enregistrer = document.getElementById('Enregistrer')
    const supprimer = document.getElementById('Supprimer')
    const demo = document.getElementById('demo')
    // const closeDialog = document.getElementById('closedialoge')
  enregistrer.addEventListener('click', () => {
    const api = apiKey.value.trim()
    if (api === '') {
        alert('Veuillez entrer votre clé API')
        return
    }   
    saveapi(api)
    savedemo(false)
    dialog.close()
})
    // Supprimer
    supprimer.addEventListener('click', () => {
        removeapi();
        apiKey.value = ''
    })
    // Mode Demo
    demo.addEventListener('click', () => {
        savedemo(true)
    })
    //     // Fermer
    // closeDialog.addEventListener('click', () => {
    //     dialog.close()
    // })
}
