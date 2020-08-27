"use strict";

let allTabs = document.querySelector('.services-tabs');
let tabItems = document.querySelectorAll('.services-tabs-title');
let listText = document.querySelectorAll('.services-tabs-item');
let indexSelectedItem = tabItems[0].dataset.id;
let indexChosen = 0;

/*-Делаем все невидимые-*/
for (let item of listText) {
    item.hidden = true;
}
/*-Выставляем значение первому элементу-*/
listText[indexSelectedItem].hidden = false;
tabItems[indexChosen].classList.toggle('services-tabs-title-selected');

/*-Слушаем клик по вкладке -*/
allTabs.addEventListener('click', (e) => {
    let selectedTab = e.target;
    selectedTab.classList.toggle('services-tabs-title-selected');
    tabItems[indexChosen].classList.toggle('services-tabs-title-selected');
    for (let element of tabItems){
        if (element.dataset.id === e.target.dataset.id) {
            indexChosen = element.dataset.id;
        }
    }

    let num = e.target.dataset.id;
    listText[indexSelectedItem].hidden = true;
    indexSelectedItem = num;
    listText[num].hidden = false;
});


new Glide(".glide", {
    type: "carousel",
}).mount();
