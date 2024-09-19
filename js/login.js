// console.log('angta lagche');
//step- 1 set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
    //step-2 call event and add preventdefault for form

    event.preventDefault(); // <---vejal for beginners//

    //step-3 get value form the input field//
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);

    const pin = document.getElementById('pin-number').value;
    console.log(pin);

    //step-4 match the number and the pin//

})