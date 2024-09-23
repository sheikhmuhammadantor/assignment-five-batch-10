addToHistory();

const donateBtn = document.getElementById('donate-btn');

donateBtn.addEventListener('click', () => {
    donateBtn.classList.add('border-lightGreen', 'bg-lightGreen');
    donateBtn.classList.remove('border-slate-300', 'bg-transparent');
    historyBtn.classList.remove('border-lightGreen', 'bg-lightGreen');
    historyBtn.classList.add('border-slate-300', 'bg-transparent');

    document.getElementById('donation-main').classList.remove('hidden');
    document.getElementById('history-main').classList.add('hidden');
})


const historyBtn = document.getElementById('history-btn');
historyBtn.addEventListener('click', () => {
    historyBtn.classList.add('border-lightGreen', 'bg-lightGreen');
    historyBtn.classList.remove('border-slate-300', 'bg-transparent');
    donateBtn.classList.remove('border-lightGreen', 'bg-lightGreen');
    donateBtn.classList.add('border-slate-300', 'bg-transparent');

    document.getElementById('history-main').classList.remove('hidden');
    document.getElementById('donation-main').classList.add('hidden');
})
