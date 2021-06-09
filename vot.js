const mobileTabletOnly = function() {
    if (window.matchMedia('(max-width: 1440px)').matches) {

        const navSlider = function() {
            const navBurger = document.querySelector('#nav-burger');
            let nav = document.querySelector('#nav-links');
        
            navBurger.addEventListener('click', function() {
                    nav.classList.toggle('nav-active');
                    nav.style.transition = 'transform 0.5s ease-out';
        
                    if (nav.getAttribute('class') === 'nav-active') {
                        nav.style.transform = 'translateX(0%)';
                    } else {
                        nav.style.transform = 'translateX(100%)';
                    }
                });
        }

        // maybe include another 2 matchMedia() functions, 1 for landscape, 1 for portrait

        navSlider();

        const prevDef = function() {
            const dontOpen = document.querySelectorAll('.mob-prev-def').forEach(dontOpen => {
                dontOpen.addEventListener('click', function(e) {
                    e.preventDefault();
                });
            }); 
        }

        prevDef();
        
        const coreSlider = function() {
            const coreContainer = document.querySelector('#dropdown-core');
            const coreLinks = document.querySelector('#core-links');
        
            coreContainer.addEventListener('click', function() {
                coreLinks.classList.toggle('core-active');

                if (coreLinks.getAttribute('class') === 'core-active') {
                    coreLinks.style.maxHeight = '500px';
                    coreLinks.style.opacity = 1;
                } else {
                    coreLinks.style.opacity = 0;

                    setTimeout(function() {
                        coreLinks.style.maxHeight = 0;
                    }, 50);
                }
            });
        }
        
        coreSlider();
        
        const classSlider = function() {
            const classContainer = document.querySelector('#dropdown-classes');
            const classLinks = document.querySelector('#classes-links');
        
            classContainer.addEventListener('click', function() {
                classLinks.classList.toggle('class-active');

                if (classLinks.getAttribute('class') === 'class-active') {
                    classLinks.style.maxHeight = '500px';
                    classLinks.style.opacity = 1;
                } else {
                    classLinks.style.opacity = 0;

                    setTimeout(function() {
                        classLinks.style.maxHeight = 0;
                    }, 50);
                }
            });
        }
        
        classSlider();
        
        const suggestSlider = function() {
            const suggestContainer = document.querySelector('#dropdown-suggest');
            let suggestLinks = document.querySelector('#suggest-links');

            suggestContainer.addEventListener('click', function() {
                suggestLinks.classList.toggle('suggest-active');

                if (suggestLinks.getAttribute('class') === 'suggest-active') {
                    suggestLinks.style.maxHeight = '500px';
                    suggestLinks.style.opacity = 1;
                } else {
                    suggestLinks.style.opacity = 0;

                    setTimeout(function() {
                        suggestLinks.style.maxHeight = 0;
                    }, 50);
                }
            });
        }
        
        suggestSlider();
    }
}

mobileTabletOnly();

const showRoleInfo = function() {
    const damageButton = document.querySelector('#damage-button');
    const damageInfo = document.querySelector('#roles-damage');

    const healerButton = document.querySelector('#healer-button');
    const healerInfo = document.querySelector('#roles-healer');

    const tankButton = document.querySelector('#tank-button');
    const tankInfo = document.querySelector('#roles-tank');

    damageButton.addEventListener('click', function() {
        damageInfo.classList.toggle('damage-active');

        if (damageInfo.getAttribute('class') === 'damage-active') {
            damageInfo.style.maxHeight = '5000px'
            damageInfo.style.opacity = 1;
        } else {
            damageInfo.style.opacity = 0;

            setTimeout(function() {
                damageInfo.style.maxHeight = 0;
            }, 50);
        }
    });

    healerButton.addEventListener('click', function() {
        healerInfo.classList.toggle('healer-active');

        if (healerInfo.getAttribute('class') === 'healer-active') {
            healerInfo.style.maxHeight = '5000px'
            healerInfo.style.opacity = 1;
        } else {
            healerInfo.style.opacity = 0;

            setTimeout(function() {
                healerInfo.style.maxHeight = 0;
            }, 50);
        }
    });

    tankButton.addEventListener('click', function() {
        tankInfo.classList.toggle('tank-active');

        if (tankInfo.getAttribute('class') === 'tank-active') {
            tankInfo.style.maxHeight = '5000px';
            tankInfo.style.opacity = 1;
        } else {
            tankInfo.style.opacity = 0;

            setTimeout(function() {
                tankInfo.style.maxHeight = 0;
            }, 50);
        }
    });
};

showRoleInfo();

const topIcon = document.querySelector('#scroll-icon');

window.addEventListener('scroll', function() {
    let y = window.scrollY;

    if (y > 500) {
        topIcon.classList.add('scroll-icon-show'); // empty CSS rule, this line of js serves as a pre-condition for getting the topIcon button to show.

        if (topIcon.getAttribute('class') === 'scroll-icon-show') { // when this class is active, fade-in the scroll button. Otherwise, hide it. 
            topIcon.style.opacity = 1;
        }
    } else {
        topIcon.style.opacity = 0;
    }
});

topIcon.addEventListener('click', function() {
    window.scrollTo( {
        top: 0,
        behavior: 'smooth'
    });
});