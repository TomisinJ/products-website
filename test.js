// const counter = document.querySelector('#counter')
// const allButtons = document.querySelectorAll('.buttonClass');
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const quantity = document.getElementById('quantity')

let count = 0

function increaseCount() {
    count += 1;
    quantity.innerHTML = count;
}

increase.addEventListener('click', increaseCount);

function decreaseCount() {
    if (count > 0) {
        count -= 1;
        quantity.innerHTML = count;
    } else {
        return
    }
}

decrease.addEventListener('click', decreaseCount);