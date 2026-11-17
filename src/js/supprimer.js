export function supprimerTache(tache, tasks) {
    const nouvellesTaches = tasks.filter(task => task.id !== tache.id);
    localStorage.setItem('demoTasks', JSON.stringify(nouvellesTaches));
    return true;
}