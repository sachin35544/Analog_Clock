document.addEventListener('DOMContentLoaded', () => {
const numb = document.querySelector('.circle2');
const numb1 = document.querySelector('.secdot');
const numbelement1 = [];
const numbelement = [];

for (let i = 1; i <=12; i++) {
    numbelement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    );
}
numb.insertAdjacentHTML("afterbegin", numbelement.join(""));


for (let j = 1; j <=60; j++) {
    numbelement1.push(
        `<span style="--index:${j}"><p></p></span>`
    );
}
numb1.insertAdjacentHTML("afterbegin", numbelement1.join(""));


const hendhor = document.querySelector('.hend.hor');
const hendmin = document.querySelector('.hend.min');
const hendsec = document.querySelector('.hend.sec');

function currenttime(){
    let date = new Date();

    let currenthor = date.getHours();
    let currentmin = date.getMinutes();
    let currentsec = date.getSeconds();

    hendsec.style.transform =  `rotate(${currentsec * 6}deg)`;
    hendmin.style.transform =  `rotate(${currentmin * 6}deg)`;
    hendhor.style.transform =  `rotate(${currenthor * 30}deg)`;
}
currenttime();
setInterval(currenttime,1000);


const darklite = document.querySelector('.theme');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');


darklite.addEventListener("click",function(){

    const root = document.documentElement;
        const currentColor = getComputedStyle(root).getPropertyValue('--primary_color').trim();

        if (currentColor === '#d7e0e9') {
            root.style.setProperty('--primary_color', '#223442');
            darklite.style.backgroundColor = "";
            sun.style.display = "flex";
            moon.style.display = "none";
        } else {
            root.style.setProperty('--primary_color', '#d7e0e9');
            darklite.style.backgroundColor = "#223442";
            sun.style.display = "none";
            moon.style.display = "flex";
        }

});

});