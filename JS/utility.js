// Add To History Function ;
function addToHistory(amount, title) {
    const historyDev = document.getElementById('history-div');

    const div = `
    <div class="border-2 border-green-400 rounded-lg p-4 mb-5">
        <h1 class="text-xl mb-2">${amount} Taka is Donated ${title}</h1>
        <p class="bg-slate-100 p-2 font-semibold rounded-lg">
            Date : ${new Date}
        </p>
    </div>
    `
    historyDev.innerHTML += div;
}




