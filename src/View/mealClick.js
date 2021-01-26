let arr = document.getElementsByClassName('menu-item');
let arr2 = document.getElementsByClassName('menu-layer-exit');
let menuLayer1 = document.getElementById('m-b-l-1');
let menuLayer2 = document.getElementById('m-b-l-2');
let menuLayer3 = document.getElementById('m-b-l-3');
let menuLayer4 = document.getElementById('m-b-l-4');
let menuLayer5 = document.getElementById('m-b-l-5');
let menuLayer6 = document.getElementById('m-b-l-6');
let menuLayer7 = document.getElementById('m-b-l-7');
let menuLayer8 = document.getElementById('m-b-l-8');


for (let i = 0; i < arr.length; i++) {
    if (i < 5) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-1').style.transform = 'rotateY(180deg)';
            menuLayer1.style.opacity = '1';
            menuLayer1.style.pointerEvents = 'all';
        });
        arr2[0].addEventListener('click', () => {
            document.getElementById('menu-box-1').style.transform = 'rotateY(0deg)';
            menuLayer1.style.opacity = '0';
            menuLayer1.style.pointerEvents = 'none';
        });
    } else if (i < 10) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-2').style.transform = 'rotateY(180deg)';
            menuLayer2.style.opacity = '1';
            menuLayer2.style.pointerEvents = 'all';
        });
        arr2[1].addEventListener('click', () => {
            document.getElementById('menu-box-2').style.transform = 'rotateY(0deg)';
            menuLayer2.style.opacity = '0';
            menuLayer2.style.pointerEvents = 'none';
        });
    } else if (i < 15) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-3').style.transform = 'rotateY(180deg)';
            menuLayer3.style.opacity = '1';
            menuLayer3.style.pointerEvents = 'all';
        });
        arr2[2].addEventListener('click', () => {
            document.getElementById('menu-box-3').style.transform = 'rotateY(0deg)';
            menuLayer3.style.opacity = '0';
            menuLayer3.style.pointerEvents = 'none';
        });
    } else if (i < 20) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-4').style.transform = 'rotateY(180deg)';
            menuLayer4.style.opacity = '1';
            menuLayer4.style.pointerEvents = 'all';
        });
        arr2[3].addEventListener('click', () => {
            document.getElementById('menu-box-4').style.transform = 'rotateY(0deg)';
            menuLayer4.style.opacity = '0';
            menuLayer4.style.pointerEvents = 'none';
        });
    } else if (i < 25) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-5').style.transform = 'rotateY(180deg)';
            menuLayer5.style.opacity = '1';
            menuLayer5.style.pointerEvents = 'all';
        });
        arr2[4].addEventListener('click', () => {
            document.getElementById('menu-box-5').style.transform = 'rotateY(0deg)';
            menuLayer5.style.opacity = '0';
            menuLayer5.style.pointerEvents = 'none';
        });
    } else if (i < 30) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-6').style.transform = 'rotateY(180deg)';
            menuLayer6.style.opacity = '1';
            menuLayer6.style.pointerEvents = 'all';
        });
        arr2[5].addEventListener('click', () => {
            document.getElementById('menu-box-6').style.transform = 'rotateY(0deg)';
            menuLayer6.style.opacity = '0';
            menuLayer6.style.pointerEvents = 'none';
        });
    } else if (i < 35) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-7').style.transform = 'rotateY(180deg)';
            menuLayer7.style.opacity = '1';
            menuLayer7.style.pointerEvents = 'all';
        });
        arr2[6].addEventListener('click', () => {
            document.getElementById('menu-box-7').style.transform = 'rotateY(0deg)';
            menuLayer7.style.opacity = '0';
            menuLayer7.style.pointerEvents = 'none';
        });
    } else {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-8').style.transform = 'rotateY(180deg)';
            menuLayer8.style.opacity = '1';
            menuLayer8.style.pointerEvents = 'all';
        });
        arr2[7].addEventListener('click', () => {
            document.getElementById('menu-box-8').style.transform = 'rotateY(0deg)';
            menuLayer8.style.opacity = '0';
            menuLayer8.style.pointerEvents = 'none';
        });
    }
}
