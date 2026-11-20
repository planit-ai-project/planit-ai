import { saveTasks } from './storage.js';
export function supprimerTache(tache, tasks) {
    const nouvellesTaches = tasks.filter(task => task.id !== tache.id)
    nouvellesTaches.forEach(task => { task.dependencies = task.dependencies.filter( id => id !== tache.id )})
    saveTasks(nouvellesTaches)
    return true
}