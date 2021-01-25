window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        document.getElementById('spec__cont').style.animationName = 'specialAnim';
    }
    if(window.scrollY > 1600) {
        document.getElementById('menu__cont').style.animation = 'menuAnim 0.5s forwards 0.25s';
        document.getElementById('menu-title').style.animationName = 'thenanim';
    }
    if (window.scrollY < 1200) {
        document.getElementById('menu-title').style.animationName = 'nonthenanim';
    }


    if (window.scrollY < 720) {
        document.getElementById('head-opt-1').classList.add('menu-item-active');
        document.getElementById('head-opt-2').classList.remove('menu-item-active');
        document.getElementById('head-opt-3').classList.remove('menu-item-active');
        document.getElementById('head-opt-4').classList.remove('menu-item-active');
    } else if (window.scrollY > 720  && window.scrollY <1470) {
        document.getElementById('head-opt-1').classList.remove('menu-item-active');
        document.getElementById('head-opt-2').classList.add('menu-item-active');
        document.getElementById('head-opt-3').classList.remove('menu-item-active');
        document.getElementById('head-opt-4').classList.remove('menu-item-active');
    } else if (window.scrollY > 1470 && window.scrollY < 2290) {
        document.getElementById('head-opt-1').classList.remove('menu-item-active');
        document.getElementById('head-opt-2').classList.remove('menu-item-active');
        document.getElementById('head-opt-3').classList.add('menu-item-active');
        document.getElementById('head-opt-4').classList.remove('menu-item-active');
    } else {
        document.getElementById('head-opt-1').classList.remove('menu-item-active');
        document.getElementById('head-opt-2').classList.remove('menu-item-active');
        document.getElementById('head-opt-3').classList.remove('menu-item-active');
        document.getElementById('head-opt-4').classList.add('menu-item-active');
    }
})