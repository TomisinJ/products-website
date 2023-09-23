let shop = document.getElementById('all-products');


// define an array and store objects in an array > {}
// map each item to the shop item format

let shopData = [{
    id: "1A",
    productName: "TOP",
    productPrice: 12.99,
    productDescription: "this is a nice top",
    productImage: "img/top.webp"
},
{
    id: "2B",
    productName: "TROUSER",
    productPrice: 13.99,
    productDescription: "this is a nice bottoms",
    productImage: "img/shorts.webp"
},
{
    id: "3C",
    productName: "JACKET",
    productPrice: 14.99,
    productDescription: "this is a nice jacket",
    productImage: "img/jumper.webp"
},
{
    id: "4D",
    productName: "HAT",
    productPrice: 15.99,
    productDescription: "this is a nice hat",
    productImage: "img/hat.webp"
},
{
    id: "5E",
    productName: "JEWELLERY",
    productPrice: 16.99,
    productDescription: "this is a nice necklace",
    productImage: "img/keyring.webp"
},
{
    id: "6F",
    productName: "BAG",
    productPrice: 23.99,
    productDescription: "this is a nice bag",
    productImage: "img/bag.webp"
}
]

let generateShop = () => {
    return (shop.innerHTML = shopData.map((item) => {
        // destructuring assignment
        let { id, productName, productDescription, productPrice, productImage, count} = item
        return `
        <div class="grid-item" id="product-item-${id}">
            <img src="${productImage}" alt="a picture of the item" />
            <div class="details">
                <div class="text-details"><a href="product.html">
                    <p>${productName}</p>
                    <p>${productDescription}</p>
                    <p>${productPrice}</p>
                    </a>
                </div>
                <div class="counter" id="counter-buttons-${id}">
                    <button class="buttonClass increase">+</button>
                    <span id="quantity">0</span>
                    <button class="buttonClass decrease">-</button>
                </div>
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
    console.log(count)
    quantity.forEach(amount => {
        amount.innerHTML = count;
        // console.log(amount);
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