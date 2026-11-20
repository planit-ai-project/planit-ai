export function saveapi(api) {
    sessionStorage.setItem('api',api)
}
export function removeapi() {
    sessionStorage.removeItem('api')
}
export function savedemo(demo) {
    sessionStorage.setItem('demo',demo)
}
export function geteapi() {
    return sessionStorage.getItem('api')
}
export function getdemo() {
    return sessionStorage.getItem('demo') === 'true'
}

export function saveTasks(tasks){
        const params = new URLSearchParams(window.location.search)
         const mode = params.get('mode')
        if (mode === 'demo') {
        localStorage.setItem('demoTasks', JSON.stringify(tasks))
    } else {
        const id = params.get('id')
        const projects = getProjects()
        const project = projects.find(p => p.id === id)
        if (project) {
            project.tasks = tasks
            localStorage.setItem('projects', JSON.stringify(projects))
        }
    }
}
// pleusieur-project
export function getProjects() {
    return JSON.parse(localStorage.getItem('projects')) || []
}
export function saveProject(plan) {
    const projects = getProjects()
    const project = {...plan,id: Date.now().toString()}
    projects.push(project)
    localStorage.setItem('projects', JSON.stringify(projects))
    return project
}
export function getProject(id) {
    const projects = getProjects()
    return projects.find(project => project.id === id)
}
//suprimer un projet
export function deleteProject(id) {
    const projects = getProjects()
    const updatedProjects = projects.filter(
        project => project.id !== id
    )
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
}