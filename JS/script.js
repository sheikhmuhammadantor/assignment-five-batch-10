const donateBtn = document.getElementById('donate-btn');
const historyBtn = document.getElementById('history-btn');
const historyMein = document.getElementById('history-main');
const donateMain = document.getElementById('donation-main');
const endPage = document.getElementById('endPage');

// Donate Section Show;
donateBtn.addEventListener('click', () => {
    donateBtn.classList.add('bg-lightGreen', 'hover:bg-lightGreen');
    historyBtn.classList.remove('bg-lightGreen', 'hover:bg-lightGreen');

    document.getElementById('donation-main').classList.remove('hidden');
    historyMein.classList.add('hidden');

    endPage.classList.remove('hidden');
})

// History Section Show;
historyBtn.addEventListener('click', () => {
    historyBtn.classList.add('bg-lightGreen', 'hover:bg-lightGreen');
    donateBtn.classList.remove('bg-lightGreen', 'hover:bg-lightGreen');

    historyMein.classList.remove('hidden');
    donateMain.classList.add('hidden');

    endPage.classList.add('hidden');
})

// Donate -
donate('donate-btn-1', 'donate-input-1', 'total-donate-1', 'hading-1');
donate('donate-btn-2', 'donate-input-2', 'total-donate-2', 'hading-2');
donate('donate-btn-3', 'donate-input-3', 'total-donate-3', 'hading-3');
