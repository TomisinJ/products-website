let shop = document.getElementById('all-products');


// define an array and store objects in an array > {}
// map each item to the shop item format

let shopData = [{
    "id": "1A",
        productName: "top",
        productPrice: 12.99,
        productDescription: "this is a nice top",
        productImage: "image1"
},
{
    "id": "2B",
        productName: "bottom",
        productPrice: 13.99,
        productDescription: "this is a nice bottoms",
        productImage: "image2"
},
{
    "id": "3C",
        productName: "jacket",
        productPrice: 14.99,
        productDescription: "this is a nice jacket",
        productImage: "image3"
},
{
    "id": "4D",
        productName: "hat",
        productPrice: 15.99,
        productDescription: "this is a nice hat",
        productImage: "image4"
},
{
    "id": "5E",
        productName: "shoes",
        productPrice: 16.99,
        productDescription: "this is a nice shoes",
        productImage: "image5"
}
]

let generateShop = () => {
    return (shop.innerHTML = shopData.map((item) => {
        // destructuring assignment
        let { id, productName, productDescription, productPrice, productImage } = item
        return `
        <div class="grid-item" id="product-item-${id}">
        <img src="img/drawing2.jpg" alt="a picture of the item" />
        <p><a href="product.html">${productName}</a></p>
        <p>${productDescription}</p>
        <p>${productPrice}</p>
            <div class="counter-buttons-${id}">
                <button class="buttonClass increase">+</button>
                <span id="quantity">0</span>
                <button class="buttonClass decrease">-</button>
            </div>
        </div>
        `
    }).join("")
)};

generateShop()

const quantity = document.querySelectorAll('#quantity')
const increase = document.querySelectorAll('.increase')
// const decrease = document.querySelector('.decrease')

let count = 0

function increaseCount() {
    count += 1;
    console.log(quantity);

    quantity.forEach(amount => {
        amount.innerHTML = count;
        console.log(amount);
    });
}

increase.forEach( countingclick => {
    countingclick.addEventListener('click', increaseCount);
});

// function decreaseCount() {
//     if (count > 0) {
//         count -= 1;
//         quantity.innerHTML = count;
//     } else {
//         return
//     }
// }

// decrease.addEventListener('click', decreaseCount);



// let increment = (id) => {
// };

// let decrement = (id) => {
//     console.log(id);
// };

// let update = () => {};

            // <i onclick="decrement(${id})" class="minus">-</i>
            // <div id=${id} class="quantity">0</div>
            // <i onclick="increment(${id})" class="plus">+</i>