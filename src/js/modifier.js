export function modifierTache(tache, modifications, tasks){
    if (modifications.status === 'Done') {
        for (const id of tache.dependencies) {
            const dependance = tasks.find(task => task.id === id)
            if (dependance && dependance.status !== 'Done') {
                return false
            }
        }
    }
    tache.title = modifications.title
    tache.description = modifications.description
    tache.priority = modifications.priority
    tache.size = modifications.size
    tache.deadline = modifications.deadline
    tache.status = modifications.status
    // Sauvegarder
    localStorage.setItem('demoTasks', JSON.stringify(tasks))
    return true
}
export function afficherForm(t, tasks, tabContent, detailHTML, detailTach, activerTab, tabDetail) {
                //partie modifier
                // const tabContent = document.getElementById('tabContent');
                // const detailHTML = tabContent.innerHTML;
                tabModifier.addEventListener('click', () => {
                    activerTab(tabModifier)
                    tabContent.innerHTML = `
                   <form id="formModifier" class="flex flex-col gap-4">

                        <div>
                          <label>Titre</label>
                          <input id="editTitle" type="text" value="${t.title}" required class="w-full border rounded-lg p-3">
                       </div>
                       <div>
                          <label>Description</label>
                         <textarea id="editDescription" required class="w-full border rounded-lg p-3">${t.description}</textarea>
                       </div>
                      <div>
                        <label>Priorité</label>
                       <select id="editPriority" class="w-full border rounded-lg p-3">
                         <option value="Low" ${t.priority === 'Low' ? 'selected' : ''}>Low</option>
                         <option value="Medium" ${t.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                         <option value="High" ${t.priority === 'High' ? 'selected' : ''}>High</option>
                         <option value="Critical" ${t.priority === 'Critical' ? 'selected' : ''}>Critical</option>
                       </select>
                      </div>

                      <div>
                        <label>Taille</label>
                       <select id="editSize" class="w-full border rounded-lg p-3">
                          <option value="XS" ${t.size==='XS' ? 'selected':''}>XS</option>
                          <option value="S" ${t.size==='S' ? 'selected':''}>S</option>
                          <option value="M" ${t.size==='M' ? 'selected':''}>M</option>
                          <option value="L" ${t.size==='L' ? 'selected':''}>L</option>
                          <option value="XL" ${t.size==='XL' ? 'selected':''}>XL</option>
                       </select>
                     </div>
                      <div>
                     <label>Deadline</label>
                     <input id="editDeadline" type="text"
                     value="${t.deadline}" required class="w-full border rounded-lg p-3">
                    </div>
                    <div>
                        <label>Statut</label>
                        <select id="editStatus" class="w-full border rounded-lg p-3">
                            <option value="To Do" ${t.status === 'To Do' ? 'selected' : ''}>To Do</option>
                            <option value="In Progress" ${t.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                            <option value="Done" ${t.status === 'Done' ? 'selected' : ''}>Done</option>
                        </select>
                    </div>
                    <div class="flex justify-end gap-3">
                        <button type="button" id="annuler"class="border rounded-lg px-4 py-2">
                           Annuler
                        </button>
                       <button type="submit"class="bg-[#176B55] text-white rounded-lg px-4 py-2">
                          Enregistrer
                       </button>
                    </div>
                 </form>
`
    // Annuler
    document.getElementById('annuler')
        .addEventListener('click', () => {
            tabContent.innerHTML = detailHTML;
            activerTab(tabDetail);
        })
            // Enregistrer
    document.getElementById('formModifier')
        .addEventListener('submit', (e) => {

            e.preventDefault();

            const modifications = {
                title: document.getElementById('editTitle').value.trim(),
                description: document.getElementById('editDescription').value.trim(),
                priority: document.getElementById('editPriority').value,
                size: document.getElementById('editSize').value,
                deadline: document.getElementById('editDeadline').value.trim(),
                status: document.getElementById('editStatus').value
            }
            const resultat = modifierTache(t, modifications, tasks);

            if (!resultat) {
                alert('Terminez les dépendances avant de terminer cette tâche.');
                return;
            }
            detailTach.close();
            //!!!!!!!!!!!!!!!
            location.reload();
        })
                  })
}

                
