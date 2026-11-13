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
