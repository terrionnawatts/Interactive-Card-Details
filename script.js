let nameInput = document.getElementById('name');
let cardHolderName = document.getElementById('on-cardholder-name');

let numberInput = document.getElementById('myNumberInput');
let cardNumber = document.getElementById('on-card-number');

let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');
let monthYear = document.getElementById('card-month-year');

let cvcInput = document.getElementById('cvc');
let cvc = document.getElementById('on-card-cvc');

let form = document.querySelector('form')

let thankYou = document.querySelector('.thank-you-message');
let formContainer = document.querySelector('.form-container');
let confirmButton = document.querySelector('.confirm');
let continueButton = document.querySelector('.continue');

function format(s){
return s.toString().replace(/(\d{4})(?=.)/g, '$1 ');
}

function showThankYouScreen(){
    thankYou.style.display = 'flex';
    formContainer.style.display = 'none';
};

confirmButton.onclick = showThankYouScreen;

function showFormScreen(){
    thankYou.style.display = 'none';
    formContainer.style.display = 'flex';
};

continueButton.onclick = showFormScreen;

function setCardNumber(event){
    cardNumber.innerHTML = format(event.target.value);
};

function setCardHolderName(event){
    cardHolderName.innerHTML = event.target.value;
};

function setCVC(event){
    cvc.innerHTML = event.target.value;
}

function formatMonthYear(month, year){
    return `${month}/${year}`;
}

function setCardMonthYear(){
    monthYear.innerHTML = formatMonthYear(monthInput.value, yearInput.value);
}



nameInput.addEventListener('keyup', setCardHolderName);
numberInput.addEventListener('keyup', setCardNumber);
monthInput.addEventListener('input', setCardMonthYear);
yearInput.addEventListener('input', setCardMonthYear);
cvcInput.addEventListener('keyup', setCVC);


function validateForm(event){
event.preventDefault();

    if (!nameInput.value || !numberInput.value || !monthInput.value || !yearInput.value || !cvcInput.value){
        alert('Please fill in all required fields.');
    } else {
        displaySuccessMessage();
    }

}
function displaySuccessMessage() {

    form.style.display = 'none';
    thankYou.style.display = 'flex';
}


