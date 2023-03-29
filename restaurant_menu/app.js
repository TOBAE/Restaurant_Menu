let tabHeader = document.querySelectorAll('.tabHeader');

tabHeader.forEach((button) => {
    button.onclick = changeTabHeader;
});

function changeTabHeader() {
    let tabNumber = parseInt(this.dataset.tab);

    document.querySelector('.active-tab').classList.remove('active-tab');
    this.classList.add('active-tab');

    
    switch (tabNumber) {
        case 1:
            changeTabSection(tabNumber);
            break;
        case 2:
            changeTabSection(tabNumber);
            break;
        case 3:
            changeTabSection(tabNumber);
            break;
        case 4:
            changeTabSection(tabNumber);
            break;
        case 5:
            changeTabSection(tabNumber);
            break;
        default:
            break;
    }
}

function changeTabSection(tabNumber) {
    let currentTab = document.querySelector('.show-tab');
    currentTab.classList.remove('show-tab');
    currentTab.classList.add('hide-tab');

    let newSection = document.getElementById('tabSection-' + tabNumber);

    newSection.classList.remove('hide-tab');
    newSection.classList.add('show-tab');
}


const bars = document.querySelector('.fa-bars');
const navItems = document.querySelector('.nav_items');
const navLinks = document.querySelectorAll('.nav-link');



function openMenu(){
    navItems.style.transform = 'translateX(0%)'
}

function closeMenu(){
    navItems.style.transform = 'translateX(-100%)'
}









// openNavClick.onclick = openNavSlider;

// function openNavSlider() {
//     navSliderSection.classList.remove('closeNav');
//     navSliderSection.classList.add('openNav');
// }


// closeNavClick.onclick = closeNavSlider;

// navLinks.forEach((link) => {
//     link.onclick = closeNavSlider;
// });

// function closeNavSlider() {
//     navSliderSection.classList.remove('openNav');
//     navSliderSection.classList.add('closeNav');
// }