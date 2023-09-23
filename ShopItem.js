
class ShopItem {

    constructor(id, productName, productDescription, productPrice, productImage, count) {
        this.id = id;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productImage = productImage;
        this.count = count;

        // count method in class
    }
}


function populateShopItems() {
    shopData.forEach(product => {
        new ShopItem(
            product.id,
            product.productName,
            product.productDescription,
            product.productPrice,
            product.productImage,
            product.count
        )}
    );
}


// return an array explicitly
console.log(populateShopItems)

