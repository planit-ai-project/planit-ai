import { getProjects, deleteProject } from './storage.js'
const containe = document.getElementById('projectsContainer')
export function afficherdashbord() {
    const projects = getProjects()
    const aucun = document.getElementById('aucun')
    const container = document.getElementById('projectsContainer')
    const totalProjects = document.getElementById('totalProjects')
    const totalTasks = document.getElementById('totalTasks')
    const totalDone = document.getElementById('totalDone')
    const globalProgress = document.getElementById('globalProgress')
    container.innerHTML = ''
    if (projects.length === 0) {
        aucun.style.display = 'flex'
    } else {
        aucun.style.display = 'none'
    }
    let tasks = 0
    let done = 0
    for (const project of projects) {
        const projectTasks = project.tasks || []
        const finished = projectTasks.filter(task => task.status.toLowerCase() === 'done').length
        const progress = projectTasks.length ? Math.floor((finished / projectTasks.length) * 100) : 0
        tasks += projectTasks.length;
        done += finished
        const card = `
                <article class="bg-white rounded-xl border border-[#E8F3EE] p-5 mt-5">
                <h3 class="text-lg font-bold">${project.projectName}</h3>
                <p class="text-gray-500 mt-2">${project.description || ''}</p>
                <div class="mt-5 flex justify-between">
                    <span class="text-gray-500">Tâches : ${projectTasks.length}</span>
                    <span class="font-bold">${progress}%</span>
                </div>
                <div class="w-full h-2 bg-[#E8F3EE] rounded-full mt-2">
                    <div class="h-full bg-[#176B55] rounded-full"
                         style="width: ${progress}%"></div>
                </div>
                <div class="mt-5 flex gap-3">
                   <a href="project.html?id=${project.id}"
                                   class="font-bold text-[#176B55] border rounded-xl py-2 px-3">
                      Ouvrir le projet
                   </a>
                 <button data-id="${project.id}"  class="delete-project bg-red-500 text-white rounded-xl py-2 px-3">
                   Supprimer
                 </button>
                </div>
            </article>
        `
        container.insertAdjacentHTML('beforeend', card);

    }
    totalProjects.textContent = projects.length;
    totalTasks.textContent = tasks;
    totalDone.textContent = done;
    const progressGlobal = tasks ? Math.floor((done / tasks) * 100) : 0
    globalProgress.textContent = `${progressGlobal}%`
}
if (containe) {
    containe.addEventListener('click', (e)=>{
    if (e.target.classList.contains('delete-project')) {
        const id = e.target.dataset.id;
        if (confirm('Voulez-vous vraiment supprimer ce projet ?')) {
            deleteProject(id);
            afficherdashbord();
        }}})
    }
