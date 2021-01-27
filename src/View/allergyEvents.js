let allergyTab = document.getElementById('all-tab');
let allergenTab = document.getElementById('allergen-tab');

allergyTab.addEventListener('click', () => {
    allergenTab.style.right = '0px';
});
allergenTab.addEventListener('mouseleave', () => {
    allergenTab.style.right = '-370px';
});