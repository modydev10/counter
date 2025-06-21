let countSpan = document.getElementById('count-span')
let counter = 0;


function setColor() {
    if (counter > 0) {
        countSpan.style.color = `rgb(0, ${120 + counter}, 0)`;
    } else if (counter < 0) {
        countSpan.style.color = `rgb(${200 + -counter}, 0, 0)`;
    } else {
        countSpan.style.color = 'black';
    }
}

document.querySelectorAll('#buttons-container button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.id == 'increase') {
            counter++;
        } else if (e.target.id == 'decrease') {
            counter--;
        } else {
            counter = 0;
        }

        countSpan.textContent = counter;
        setColor();
        saveCounterInLocalStorage();
    })
})



function saveCounterInLocalStorage() {
    localStorage.setItem('counter', counter);
}

function getCounterFromLocalStorage() {
    countSpan.innerHTML = localStorage.getItem('counter') || 0;
    counter = counter = +localStorage.getItem('counter') || 0;
    setColor();
}

window.addEventListener('DOMContentLoaded', getCounterFromLocalStorage);
