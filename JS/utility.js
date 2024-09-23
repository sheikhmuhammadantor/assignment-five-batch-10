// Add To History Function ;
function addToHistory(amount, title) {
    const historyDev = document.getElementById('history-div');

    const div = `
    <div class="border-2 border-green-400 rounded-lg p-4 mb-5">
        <h1 class="text-xl mb-2">${amount} Taka is Donated <span class="text-2xl font-semibold">"${title}"</span></h1>
        <p class="bg-slate-100 p-2 font-semibold rounded-lg">
            Date : ${new Date}
        </p>
    </div>
    `
    historyDev.innerHTML += div;
}

// Donate
function donate(btn, input, total, hading) {
    document.getElementById(btn).addEventListener('click', () => {
        const heading = document.getElementById(hading).innerText;
        const balance = document.getElementById('my-balance');
        const donateValue = document.getElementById(input);
        const totalDonation = document.getElementById(total);

        const balanceNum = parseFloat(balance.innerText);
        const donateAmount = parseFloat(donateValue.value);

        if (!isNaN(donateAmount) && donateAmount < balanceNum && donateAmount > 0) {
            const newBalance = balance.innerText - donateAmount;
            balance.innerHTML = newBalance;

            const newTotalDonation = parseFloat(totalDonation.innerText) + donateAmount;
            totalDonation.innerHTML = newTotalDonation;

            addToHistory(donateAmount, heading)
        } else {
            alert("Enter Valid Amount")
        }

        donateValue.value = '';
    })
}

