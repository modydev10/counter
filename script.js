let countSpan = document.getElementById('count-span')
let counter = 0;

let h2 = document.querySelector('h2');
// rgb(0, 35, 17)

function setColor() {
    if (counter == 0) {
        countSpan.style.color = 'black'
    } else if (counter > 0) {
        countSpan.style.color = `rgb(0, ${140 + counter}, 0)`
    } else {
        countSpan.style.color = `rgb(${145 + counter}, 0, 0)`
    }
}

document.querySelector('#decrease').addEventListener('click', function() {
    counter--;
    countSpan.innerText = counter;
    setColor();
    saveData();
})

document.querySelector('#reset').addEventListener('click', function() {
    counter = 0;
    countSpan.innerText = counter;
    setColor();
    saveData();
})

document.querySelector('#increase').addEventListener('click', function() {
    counter++;
    countSpan.innerText = counter;
    setColor();
    saveData();
})



function saveData() {
    localStorage.setItem('counter', counter);
}

function getData() {
    countSpan.innerHTML = localStorage.getItem('counter')
    counter = counter = localStorage.getItem('counter')
    setColor();
}

window.addEventListener('load', getData);


let btn = document.querySelector('#buttons-container')
console.log(window.getComputedStyle(btn).width)
// console.log(btn)
// console.log(window.getComputedStyle(btn).fontSize)

