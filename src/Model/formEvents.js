const formArea = document.getElementById('booking-form-area');
const bookingButton = document.getElementById('booking-button');
const bookingBtnArea = document.getElementById('booking-buttonArea');
const exitBtn = document.getElementById('exit-btn');

bookingButton.addEventListener('click', () => {
    bookingBtnArea.style.opacity = '0';
    bookingBtnArea.style.pointerEvents = 'none';
    formArea.style.opacity = '1';
    formArea.style.pointerEvents = 'all';
    bookingBtnArea.style.zIndex = '2';
    formArea.style.zIndex = '3';

});

exitBtn.addEventListener('click', () => {
    bookingBtnArea.style.opacity = '1';
    bookingBtnArea.style.pointerEvents = 'all';
    formArea.style.opacity = '0';
    formArea.style.pointerEvents = 'none';
    bookingBtnArea.style.zIndex = '3';
    formArea.style.zIndex = '2';
})