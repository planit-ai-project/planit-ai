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
        demoCard.innerHTML= 
    `<section id="demoTache" class="w-[90%] m-auto p-3 flex flex-col gap-3">
        <article class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
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
        } catch (error) {
        console.log('errore de telechargement', error.message)
    }
}
