let shop = document.getElementById('all-products');


// define an array and store objects in an array > {}
// map each item to the shop item format

let shopData = [{
    "id": 1,
        productName: "top",
        productPrice: 12.99,
        productDescription: "this is a nice top",
        productImage: "image1"
},
{
    "id": 2,
        productName: "bottom",
        productPrice: 13.99,
        productDescription: "this is a nice bottoms",
        productImage: "image2"
},
{
    "id": 3,
        productName: "jacket",
        productPrice: 14.99,
        productDescription: "this is a nice jacket",
        productImage: "image3"
},
{
    "id": 4,
        productName: "hat",
        productPrice: 15.99,
        productDescription: "this is a nice hat",
        productImage: "image4"
},
{
    "id": 5,
        productName: "shoes",
        productPrice: 16.99,
        productDescription: "this is a nice shoes",
        productImage: "image5"
}
]


let generateShop = () => {
    return (shop.innerHTML = shopData.map((item) => {
        return `
        <div class="grid-item" id="product-item-${item.id}">
        <img src="img/drawing2.jpg" alt="a picture of the item" />
        <p><a href="product.html">${item.productName}</a></p>
        <p>${item.productDescription}</p>
        <p>${item.productPrice}</p>
        </div>
        `
    }).join("")
)};

generateShop()

console.log(shop);