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
let menuWrapper1 = document.getElementById('wrapper-1');
let menuWrapper2 = document.getElementById('wrapper-2');
let menuWrapper3 = document.getElementById('wrapper-3');
let menuWrapper4 = document.getElementById('wrapper-4');
let menuWrapper5 = document.getElementById('wrapper-5');
let menuWrapper6 = document.getElementById('wrapper-6');
let menuWrapper7 = document.getElementById('wrapper-7');
let menuWrapper8 = document.getElementById('wrapper-8');

let name1 = document.getElementById('name-1');
let name2 = document.getElementById('name-2');
let name3 = document.getElementById('name-3');
let name4 = document.getElementById('name-4');
let name5 = document.getElementById('name-5');
let name6 = document.getElementById('name-6');
let name7 = document.getElementById('name-7');
let name8 = document.getElementById('name-8');


for (let i = 0; i < arr.length; i++) {
    if (i < 5) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-1').style.transform = 'rotateY(180deg)';
            menuLayer1.style.opacity = '1';
            menuLayer1.style.pointerEvents = 'all';
            menuWrapper1.style.opacity = '1';
            menuWrapper1.style.transitionDuration = '0.25s';
            menuWrapper1.style.transitionDelay = '0.25s';
            let text = arr[i].textContent;
            name1.textContent = text;
        });
        arr2[0].addEventListener('click', () => {
            document.getElementById('menu-box-1').style.transform = 'rotateY(0deg)';
            menuLayer1.style.opacity = '0';
            menuLayer1.style.pointerEvents = 'none';
            menuWrapper1.style.opacity = '0';
            menuWrapper1.style.transitionDuration = '0.25s';
            menuWrapper1.style.transitionDelay = '0.25s';
        });
    } else if (i < 10) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-2').style.transform = 'rotateY(180deg)';
            menuLayer2.style.opacity = '1';
            menuLayer2.style.pointerEvents = 'all';
            menuWrapper2.style.opacity = '1';
            menuWrapper2.style.transitionDuration = '0.25s';
            menuWrapper2.style.transitionDelay = '0.25s';
            let text = arr[i].textContent;
            name2.textContent = text;
        });
        arr2[1].addEventListener('click', () => {
            document.getElementById('menu-box-2').style.transform = 'rotateY(0deg)';
            menuLayer2.style.opacity = '0';
            menuLayer2.style.pointerEvents = 'none';
            menuWrapper2.style.opacity = '0';
            menuWrapper2.style.transitionDuration = '0.25s';
            menuWrapper2.style.transitionDelay = '0.25s';
        });
    } else if (i < 15) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-3').style.transform = 'rotateY(180deg)';
            menuLayer3.style.opacity = '1';
            menuLayer3.style.pointerEvents = 'all';
            menuWrapper3.style.opacity = '1';
            menuWrapper3.style.transitionDuration = '0.25s';
            menuWrapper3.style.transitionDelay = '0.25s';
            let text = arr[i].textContent;
            name3.textContent = text;
        });
        arr2[2].addEventListener('click', () => {
            document.getElementById('menu-box-3').style.transform = 'rotateY(0deg)';
            menuLayer3.style.opacity = '0';
            menuLayer3.style.pointerEvents = 'none';
            menuWrapper3.style.opacity = '0';
            menuWrapper3.style.transitionDuration = '0.25s';
            menuWrapper3.style.transitionDelay = '0.25s';
        });
    } else if (i < 20) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-4').style.transform = 'rotateY(180deg)';
            menuLayer4.style.opacity = '1';
            menuLayer4.style.pointerEvents = 'all';
            menuWrapper4.style.opacity = '1';
            menuWrapper4.style.transitionDuration = '0.25s';
            menuWrapper4.style.transitionDelay = '0.25s';
            let text = arr[i].textContent;
            name4.textContent = text;
        });
        arr2[3].addEventListener('click', () => {
            document.getElementById('menu-box-4').style.transform = 'rotateY(0deg)';
            menuLayer4.style.opacity = '0';
            menuLayer4.style.pointerEvents = 'none';
            menuWrapper4.style.opacity = '0';
            menuWrapper4.style.transitionDuration = '0.25s';
            menuWrapper4.style.transitionDelay = '0.25s';
        });
    } else if (i < 25) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-5').style.transform = 'rotateY(180deg)';
            menuLayer5.style.opacity = '1';
            menuLayer5.style.pointerEvents = 'all';
            menuWrapper5.style.opacity = '1';
            menuWrapper5.style.transitionDuration = '0.25s';
            menuWrapper5.style.transitionDelay = '0.25s';
            let text = arr[i].textContent;
            name5.textContent = text;
        });
        arr2[4].addEventListener('click', () => {
            document.getElementById('menu-box-5').style.transform = 'rotateY(0deg)';
            menuLayer5.style.opacity = '0';
            menuLayer5.style.pointerEvents = 'none';
            menuWrapper5.style.opacity = '0';
            menuWrapper5.style.transitionDuration = '0.25s';
            menuWrapper5.style.transitionDelay = '0.25s';
        });
    } else if (i < 30) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-6').style.transform = 'rotateY(180deg)';
            menuLayer6.style.opacity = '1';
            menuLayer6.style.pointerEvents = 'all';
            menuWrapper6.style.opacity = '1';
            menuWrapper6.style.transitionDuration = '0.25s';
            menuWrapper6.style.transitionDelay = '0.25s';
            let text = arr[i].textContent;
            name6.textContent = text;
        });
        arr2[5].addEventListener('click', () => {
            document.getElementById('menu-box-6').style.transform = 'rotateY(0deg)';
            menuLayer6.style.opacity = '0';
            menuLayer6.style.pointerEvents = 'none';
            menuWrapper6.style.opacity = '0';
            menuWrapper6.style.transitionDuration = '0.25s';
            menuWrapper6.style.transitionDelay = '0.25s';
        });
    } else if (i < 35) {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-7').style.transform = 'rotateY(180deg)';
            menuLayer7.style.opacity = '1';
            menuLayer7.style.pointerEvents = 'all';
            menuWrapper7.style.opacity = '1';
            menuWrapper7.style.transitionDuration = '0.25s';
            menuWrapper7.style.transitionDelay = '0.25s';
            let text = arr[i].textContent;
            name7.textContent = text;
        });
        arr2[6].addEventListener('click', () => {
            document.getElementById('menu-box-7').style.transform = 'rotateY(0deg)';
            menuLayer7.style.opacity = '0';
            menuLayer7.style.pointerEvents = 'none';
            menuWrapper7.style.opacity = '0';
            menuWrapper7.style.transitionDuration = '0.25s';
            menuWrapper7.style.transitionDelay = '0.25s';
        });
    } else {
        arr[i].addEventListener('click', () => {
            document.getElementById('menu-box-8').style.transform = 'rotateY(180deg)';
            menuLayer8.style.opacity = '1';
            menuLayer8.style.pointerEvents = 'all';
            menuWrapper8.style.opacity = '1';
            menuWrapper8.style.transitionDuration = '0.25s';
            menuWrapper8.style.transitionDelay = '0.25s';
            let text = arr[i].textContent;
            name8.textContent = text;
        });
        arr2[7].addEventListener('click', () => {
            document.getElementById('menu-box-8').style.transform = 'rotateY(0deg)';
            menuLayer8.style.opacity = '0';
            menuLayer8.style.pointerEvents = 'none';
            menuWrapper8.style.opacity = '0';
            menuWrapper8.style.transitionDuration = '0.25s';
            menuWrapper8.style.transitionDelay = '0.25s';
        });
    }
}
