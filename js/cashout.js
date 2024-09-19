document.getElementById('cashout-btn').addEventListener('click', function () {

    const addMoneyForm = document.getElementById('addmoney-form');
    addMoneyForm.setAttribute('class', 'hidden');

    const cashoutForm = document.getElementById('cashout-form');
    cashoutForm.setAttribute('class', 'card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl')

    document.getElementById('btn-cashout').addEventListener('click', function (event) {
        event.preventDefault();
        
        const cashoutAmount = parseFloat(document.getElementById('cashout-amount').value);
        const cashoutPin = document.getElementById('cashout-pin').value;
        const currentBalance = parseFloat(document.getElementById('available-balance').innerText);
        const newBalance = currentBalance - cashoutAmount;
        console.log(newBalance);
        if(cashoutPin === '11223'){
            document.getElementById('available-balance').innerText = newBalance;
        }
        else if(cashoutPin === ''){
            alert('Please put your pin number')
        }
        else{
            alert('Invalid Pin')
        }
    })
})