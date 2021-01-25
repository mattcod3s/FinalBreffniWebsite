(function returnthisshit() {
    let myNodeList = document.querySelectorAll('.menu-item');
    for (let i = 0; i < 40; i++) {
        myNodeList[i].addEventListener('mouseenter', () => {
            myNodeList[i].style.color = 'red';
            myNodeList[i].style.cursor = 'pointer';
        });
        myNodeList[i].addEventListener('mouseleave', () => {
            myNodeList[i].style.color = 'rgb(46, 46, 46)';
            myNodeList[i].style.cursor = 'pointer';
        });
    }
})();
