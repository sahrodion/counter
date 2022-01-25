
const addBtn = document.querySelector('.btn1');
const subBtn = document.querySelector('.btn2');
const resBtn = document.querySelector('.btn3');
const count = document.getElementById("count");

let i = 0;

addBtn.addEventListener('click', addCount);
subBtn.addEventListener('click', lowCount);
resBtn.addEventListener('click', resCount);


function addCount(){
    i++
    count.textContent = i;
    if (i > 0){
        count.style.color = 'yellow'
    }
    if (i === 0){
        count.style.color = 'white'
    }
}


function lowCount(){
    i--
    count.textContent = i;
    if (i < 0){
        count.style.color = 'red'
    }
    if (i === 0){
        count.style.color = 'white'
    }
}

function resCount(){
    count.textContent = 0
}

