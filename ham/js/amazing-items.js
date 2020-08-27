"use strict";

/*-----Заносим все картинки ----------------*/
let arrImg = [
    {id: 0, type: 'Graphic Design', url: 'img/graphic_design/graphic-design1.jpg'},
    {id: 1, type: 'Graphic Design', url: 'img/graphic_design/graphic-design2.jpg'},
    {id: 2, type: 'Graphic Design', url: 'img/graphic_design/graphic-design3.jpg'},
    {id: 3, type: 'Graphic Design', url: 'img/graphic_design/graphic-design4.jpg'},
    {id: 4, type: 'Graphic Design', url: 'img/graphic_design/graphic-design5.jpg'},
    {id: 5, type: 'Graphic Design', url: 'img/graphic_design/graphic-design6.jpg'},
    {id: 6, type: 'Graphic Design', url: 'img/graphic_design/graphic-design7.jpg'},
    {id: 7, type: 'Graphic Design', url: 'img/graphic_design/graphic-design8.jpg'},
    {id: 8, type: 'Graphic Design', url: 'img/graphic_design/graphic-design9.jpg'},
    {id: 9, type: 'Graphic Design', url: 'img/graphic_design/graphic-design10.jpg'},
    {id: 10, type: 'Graphic Design', url: 'img/graphic_design/graphic-design11.jpg'},
    {id: 11, type: 'Graphic Design', url: 'img/graphic_design/graphic-design12.jpg'},
    {id: 12, type: 'Landing Pages', url: 'img/landing_page/landing-page1.jpg'},
    {id: 13, type: 'Landing Pages', url: 'img/landing_page/landing-page2.jpg'},
    {id: 14, type: 'Landing Pages', url: 'img/landing_page/landing-page3.jpg'},
    {id: 15, type: 'Landing Pages', url: 'img/landing_page/landing-page4.jpg'},
    {id: 16, type: 'Landing Pages', url: 'img/landing_page/landing-page5.jpg'},
    {id: 17, type: 'Landing Pages', url: 'img/landing_page/landing-page6.jpg'},
    {id: 18, type: 'Landing Pages', url: 'img/landing_page/landing-page7.jpg'},
    {id: 19, type: 'Web Design', url: 'img/web_design/web-design1.jpg'},
    {id: 20, type: 'Web Design', url: 'img/web_design/web-design2.jpg'},
    {id: 21, type: 'Web Design', url: 'img/web_design/web-design3.jpg'},
    {id: 22, type: 'Web Design', url: 'img/web_design/web-design4.jpg'},
    {id: 23, type: 'Web Design', url: 'img/web_design/web-design5.jpg'},
    {id: 24, type: 'Web Design', url: 'img/web_design/web-design6.jpg'},
    {id: 25, type: 'Web Design', url: 'img/web_design/web-design7.jpg'},
    {id: 26, type: 'Wordpress', url: 'img/wordpress/wordpress1.jpg'},
    {id: 27, type: 'Wordpress', url: 'img/wordpress/wordpress2.jpg'},
    {id: 28, type: 'Wordpress', url: 'img/wordpress/wordpress3.jpg'},
    {id: 29, type: 'Wordpress', url: 'img/wordpress/wordpress4.jpg'},
    {id: 30, type: 'Wordpress', url: 'img/wordpress/wordpress5.jpg'},
    {id: 31, type: 'Wordpress', url: 'img/wordpress/wordpress6.jpg'},
    {id: 32, type: 'Wordpress', url: 'img/wordpress/wordpress7.jpg'},
    {id: 33, type: 'Wordpress', url: 'img/wordpress/wordpress8.jpg'},
    {id: 34, type: 'Wordpress', url: 'img/wordpress/wordpress9.jpg'},
    {id: 35, type: 'Wordpress', url: 'img/wordpress/wordpress10.jpg'},
]

function filterBy(array, type) {/*-фильтруем массив по выбраной категории-*/
    return array.filter(item => item.type === type);
}

function clearItem(classVar) { /*-удаляем элементы-*/
    if (Boolean(document.querySelector(classVar))) {
        document.querySelector(classVar).remove();
        clearItem(classVar);
    }
}

function addItem(urlVar, type) { /*-Добавляем элементы-*/
    ulItems.insertAdjacentHTML('beforeend', `<li class="amazing-tabs-item" style="background-image: url(${urlVar})">
    <div class="amazing-tabs-item-elements">
    <div class="amazing-tabs-item-icons">
    <div class="circle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="chain"
                                     viewBox="0 0 31.891 31.891" width="12px">
                                    <path d="M30.543,5.74l-4.078-4.035c-1.805-1.777-4.736-1.789-6.545-0.02l-4.525,4.414c-1.812,1.768-1.82,4.648-0.02,6.424
\t\tl2.586-2.484c-0.262-0.791,0.061-1.697,0.701-2.324l2.879-2.807c0.912-0.885,2.375-0.881,3.275,0.01l2.449,2.42
\t\tc0.9,0.891,0.896,2.326-0.01,3.213l-2.879,2.809c-0.609,0.594-1.609,0.92-2.385,0.711l-2.533,2.486
\t\tc1.803,1.781,4.732,1.789,6.545,0.02l4.52-4.41C32.34,10.396,32.346,7.519,30.543,5.74z"/>
                                    <path d="M13.975,21.894c0.215,0.773-0.129,1.773-0.752,2.381l-2.689,2.627c-0.922,0.9-2.414,0.895-3.332-0.012l-2.498-2.461
\t\tc-0.916-0.906-0.91-2.379,0.012-3.275l2.691-2.627c0.656-0.637,1.598-0.961,2.42-0.689l2.594-2.57
\t\tc-1.836-1.811-4.824-1.82-6.668-0.02l-4.363,4.26c-1.846,1.803-1.855,4.734-0.02,6.549l4.154,4.107
\t\tc1.834,1.809,4.82,1.818,6.668,0.018l4.363-4.26c1.844-1.805,1.852-4.734,0.02-6.547L13.975,21.894z"/>
                                    <path d="M11.139,20.722c0.611,0.617,1.611,0.623,2.234,0.008l7.455-7.416c0.621-0.617,0.625-1.615,0.008-2.234
\t\tc-0.613-0.615-1.611-0.619-2.23-0.006l-7.457,7.414C10.529,19.103,10.525,20.101,11.139,20.722z"/>
                                </svg>
                            </div>
                            <div class="circle">
                                <div class="square"></div>
                            </div>
    </div>
    <p class="amazing-tabs-item-title">creative design</p>
<p class="amazing-tabs-item-text">${type}</p>
</div>
</li>`);
}

let carr = 0;/*-переменная отвечающая за прокрутку item-*/

function cycle(n, arr) { /*-цикл добавления элементов-*/
    let length = arr.length; /*-получаем длину массива*/
    if (carr === length) { /*-если длинна равно прокрутке выставляем прокрутке 0-*/
        carr = 0;
        n = 0;
    }
    let m = n;
    let x;
    if ((length - m) < 12) {
        x = length - m
    } else {
        x = 12
    }
    for (let i = 1; i <= x; i++) {
        addItem(arr[m].url, arr[m].type);
        m++;
    }
    carr = m;
}

let ulTabs = document.querySelector('.amazing-tabs'); /*-табы-*/
let ulTabItem = document.querySelectorAll('.amazing-tab-title'); /*-табы-*/
let ulItems = document.querySelector('.amazing-tabs-items'); /*-место для картинок-*/

ulTabItem[0].classList.toggle('amazing-tab-title-selected'); /*-выставляю all выбранным-*/
/*-добавляю первые 12 элементов на страницу-*/
cycle(carr, arrImg);
/*-Добавляем кнопку на страницу-*/
ulItems.insertAdjacentHTML('afterend', `<button class="amazing-btn"><img class="amazing-btn-img" src="img/plus.svg" alt="plus"> Load More</button>`);
/*-слушаем кнопку для смены элементов-*/
document.querySelector('.amazing-btn').addEventListener('click', () => {
    cycle(carr, arrImg);
    if (carr === arrImg.length) {
        clearItem('.amazing-btn');/*-удаляем кнопку-*/
    }
})
/*-слушаем табы для смены категорий-*/
ulTabs.addEventListener('click', (e) => {
    clearItem('.amazing-tabs-item'); /*-удаляем элементы-*/
    clearItem('.amazing-btn');/*-удаляем кнопку-*/
    let newArr;
    let cat = e.target.dataset.category;

    for (let item of ulTabItem) { /*-снимаем выбор категории-*/
        item.classList.remove('amazing-tab-title-selected');
    }

    /*-выбираем категорию-*/
    let head = e.target;
    head.classList.toggle('amazing-tab-title-selected');

    if (cat === 'all') {
        newArr = arrImg;
        carr = 0;
        cycle(carr, arrImg);
    } else {
        newArr = filterBy(arrImg, cat);
        carr = 0;
        cycle(carr, newArr);
    }
    if (newArr.length > 12) { /*-если в массиве больше 12 элементов - добавляем кнопку-*/
        ulItems.insertAdjacentHTML('afterend', `<button class="amazing-btn"><img class="amazing-btn-img" src="img/plus.svg" alt="plus"> Load More</button>`);
        document.querySelector('.amazing-btn').addEventListener('click', () => {
            cycle(carr, newArr);
            console.log(carr);
            if (carr === newArr.length) {
                clearItem('.amazing-btn');/*-удаляем кнопку-*/
            }
        })
    }
})

