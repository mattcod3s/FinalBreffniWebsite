const submitbtn = document.getElementById("sbmbtn");

let nameInput = document.getElementById('nameInput');
let phoneInput = document.getElementById('phoneInput');
let emailInput = document.getElementById('emailInput');
let seatingInput = document.getElementById('seatingInput');
let dateInput = document.getElementById('dateInput');
let timeInput = document.getElementById('timeInput');

let nameLabel = document.getElementById('nameLabel');
let phoneLabel = document.getElementById('phoneLabel');
let emailLabel = document.getElementById('emailLabel');
let seatingLabel = document.getElementById('seatingLabel');
let dateLabel = document.getElementById('dateLabel');
let timeLabel = document.getElementById('timeLabel');

let inputArr = [nameInput, phoneInput, emailInput, seatingInput, dateInput, timeInput];
let labelArr = [nameLabel, phoneLabel, emailLabel,seatingLabel, dateLabel, timeLabel];

submitbtn.addEventListener('click', () => {
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i].value === '') {
            document.getElementById('invalid'+(i+1)).style.color = 'red';
            document.getElementById('invalid'+(i+1)).style.visibility = 'visible';
            document.getElementById('invalid'+(i+1)).innerHTML = 'Required Field';
        } 
    }
})