document.getElementById('add-money').addEventListener('click', function () {
    const addMoneyForm = document.getElementById('addmoney-form');
    addMoneyForm.setAttribute('class', 'card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl');

    document.getElementById('btn-add-money').addEventListener('click', function (event) {
        event.preventDefault();
        const amountValue = parseFloat(document.getElementById('addmoney-amount').value);
        const addMoneyPin = document.getElementById('addmoney-pin').value;
        const availableBalance = parseFloat(document.getElementById('available-balance').innerText);
        const updatedAmount = availableBalance  + amountValue;
        
        // console.log(amountValue, addMoneyPin, availableBalance);
        if(addMoneyPin === '11223'){
            document.getElementById('available-balance').innerText = updatedAmount;
        }
        else{
            alert('Invalid Pin');
        }
         
        

    })

});
