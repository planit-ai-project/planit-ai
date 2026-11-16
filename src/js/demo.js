export async function affichage_demo() {
    try {
        const res = await fetch('./src/js/demo.json')
        if (!res.ok) {
            throw new Error(` http ${res.status}`);
        }
        const data = await res.json()
        //affichaes des taches demo
        const total = data.tasks.length
        const termine = data.tasks.filter(e => e.status === 'done').length
        const progress = Math.floor((termine / total) * 100)
        const demoCard = document.getElementById('demoprogress')
        demoCard.innerHTML =
            `<section id="demoTache" class="w-[90%] m-auto p-3 flex flex-col gap-3">
        <article class="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 ">
            <div class="flex justify-between items-start gap-4">
                <div>
                   <h1 class="text-2xl md:text-3xl font-bold text-[#123C32]">
                    ${data.projectName}
                   </h1>
                   <p class="text-gray-500 text-[15px] mt-2">
                    ${data.description}
                   </p>
                </div>
                <span class="bg-emerald-50 text-[#176B55] text-xl font-bold px-5 py-3 rounded-xl">${progress}%
                </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 py-5 border-y border-gray-100">
                     <p>taches : <span class="text-[#123C32]"> ${termine} / ${total} </span></p>  
                     <p> heures estimees : <span class="text-[#123C32]">${data.totalEstimatedHours} h</span></p>
                     <p >taches restantes :<span class="text-[#123C32]">${total - termine}</span></p>     
            </div>
            <div class="w-full h-3 bg-gray-100 rounded-full mt-5">
                  <div class="h-full bg-[#176B55] rounded-full" style="width: ${progress}%">
                  </div>
            </div>
        </article>
     
    </section>`
        const todoTache = document.getElementById('todoTache');
        const progressTache = document.getElementById('progressTache')
        const doneTache = document.getElementById('doneTache')
        data.tasks.forEach(t => {
            const card = `
        <article id="${t.id}" class="bg-[#E8F3EE]  cursor-pointer border border-gray-100 rounded-lg p-3 flex flex-col gap-2">
            <p class="text-xs text-gray-500">
                ${t.id}
            </p>
            <h3 class=" text-sm text-[#123C32]">
                ${t.title}
            </h3>
            <div class="flex font-bold text-[#123C32] gap-3 text-xs text-gray-500">
                <span>${t.priority}</span>
                <span>${t.size}</span>
                <span>${t.estimatedTime} h</span>
                <span>${t.deadline}</span>
            </div>
            <p class="text-xs text-gray-500">
                ${t.dependencies}
            </p>
        </article>`
            if (t.status === 'To Do') {
                todoTache.insertAdjacentHTML('beforeend', card);
            } else if (t.status === 'In Progress') {
                progressTache.insertAdjacentHTML('beforeend', card);
            } else if (t.status === 'done') {
                doneTache.insertAdjacentHTML('beforeend', card);
            }
        })
        //if click in tasck
        const detailTach = document.getElementById('detaille');
        const detailContent = document.getElementById('detailContent');
        const closeDetail = document.getElementById('closedetaille');
        data.tasks.forEach(t => {
            const article = document.getElementById(t.id);
            article.addEventListener('click', () => {
                let stories = ''
                let criteria = ''
                let dependencies = ''
                t.userStories.forEach(s => { stories += `<li>${s}</li>` });
                t.acceptanceCriteria.forEach(c => { criteria += `<li>${c}</li>` });
                t.dependencies.forEach(d => { dependencies += `<li>${d}</li>` });
                if (t.dependencies.length === 0) {
                    dependencies = '<li>Aucune dépendance</li>';
                }
                detailContent.innerHTML = `
    <div class="flex flex-col gap-4">
        <div>
            <span class="block bg-[#E8F3EE] text-[#176B55] font-bold p-3 rounded-lg">
                ${t.id}
            </span>

            <h3 class="font-bold text-xl text-[#123C32] mt-4">
                ${t.title}
            </h3>
        </div>
        <div class="w-full flex justify-around items-center border border-gray-200 rounded-xl">
            <div class="w-1/3 text-center py-2 bg-[#E8F3EE] border-b-2 border-[#176B55] rounded-t-xl text-[#176B55] font-bold cursor-pointer">
                Détail
            </div>
            <div class="w-1/3 text-center p-2 text-gray-500 cursor-pointer">
                Modifier
            </div>
            <div class="w-1/3 text-center p-2 text-gray-500 cursor-pointer">
                Supprimer
            </div>
        </div>
        <div class="border border-gray-200 rounded-xl p-2">
            <h4 class="font-bold text-[#123C32] mb-2">
                Description
            </h4>

            <p class="text-sm text-gray-600">
                ${t.description}
            </p>
        </div>
        <div class="border border-gray-200 rounded-xl p-2">
            <h4 class="font-bold text-[#123C32] mb-2">
                User Stories
            </h4>
            <ul class="list-disc pl-2 text-sm text-gray-600">
                <li>${t.userStories[0]}</li>
            </ul>
        </div>
            <div class="border border-gray-200 rounded-xl p-3">
            <h4 class="font-bold text-[#123C32] mb-2">
                Critères d'acceptation
            </h4>
            <ul class=" list-disc pl-2 text-sm text-gray-600">
                    <li> ${t.acceptanceCriteria[0]}</li>
                    <li> ${t.acceptanceCriteria[1]}</li>
            </ul>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="border border-gray-200 rounded-xl p-3">
                <p class="text-sm text-gray-500">Priorité</p>
                <strong class="text-[#123C32]">${t.priority}</strong>
            </div>

            <div class="border border-gray-200 rounded-xl p-3">
                <p class="text-sm text-gray-500">Importance</p>
                <strong class="text-[#123C32]">${t.importance}</strong>
            </div>
            <div class="border border-gray-200 rounded-xl p-3">
                <p class="text-sm text-gray-500">Taille</p>
                <strong class="text-[#123C32]">${t.size}</strong>
            </div>

            <div class="border border-gray-200 rounded-xl p-3">
                <p class="text-sm text-gray-500">Temps estimé</p>
                <strong class="text-[#123C32]">${t.estimatedTime} h</strong>
            </div>
            <div class="border border-gray-200 rounded-xl p-3">
                <p class="text-sm text-gray-500">Deadline</p>
                <strong class="text-[#123C32]">${t.deadline}</strong>
            </div>

            <div class="border border-gray-200 rounded-xl p-3">
                <p class="text-sm text-gray-500">Statut</p>
                <strong class="text-[#123C32]">${t.status}</strong>
            </div>
        </div> 
        <div class="border border-gray-200 rounded-xl p-3">
             <h4 class="font-bold text-[#123C32] mb-2">
                    Dependencies
             </h4>
              <ul class="list-disc list-inside text-sm text-gray-600">
                    ${dependencies}
              </ul>
        </div>      
    </div>
        `
                detailTach.showModal();
            })
        })

        closeDetail.onclick = () => {
            detailTach.close();
        }
    } catch (error) {
        console.log('errore de telechargement', error.message)
    }
}
