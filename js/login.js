// console.log('angta lagche');
//step- 1 set event handler
document.getElementById('btn-login').addEventListener('click', function (event) {
    //step-2 call event and add preventdefault for form

    event.preventDefault(); // <---vejal for beginners//

    //step-3 get value form the input field//
    const phoneNumber = document.getElementById('phone-number').value;

    const pinNumber = document.getElementById('pin-number').value;

    //step-4 match the number and the pin//
    if(phoneNumber === '01724680597' && pinNumber === '11223'){
        console.log('You are logged in.')
        window.location.href = '/indexx.html'
    }
    else{
        alert('Wrong phone number or pin');
    }
})