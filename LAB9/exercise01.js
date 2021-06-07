let shoppingCart = (function () {
    let basket = [];
    return {
        getCart() {
            basket.forEach(function (el) {
                console.log(`Product = { id: '${el.id}' , name: '${el.name}' , description: '${el.description}' ,price: '$ ${el.price}', count: '${el.count}'}`);
            })
        },
        upsertItem: function (values) {
            let y = 0;
            basket.forEach((product) => {
                if (values.id === product.id) {
                    product.count = product.count + 1;
                    y++;
                }
            })
            if (!y) {
                basket = [...basket, values]// basket.push(values)
            }
            ;
            return this;
        },

        removeItemById: function (id) {
            basket.forEach(function (product, index) {
                if (id === product.id) {
                    basket.splice(index, 1);
                }
            });
            return this;
        },

        getItemCount: function () {
            return basket.length;
        },

        getTotalPrice: function () {
            let total = 0;
            basket.forEach(function (item) {
                total += item.price * item.count;
            })
            return total;
        }

    }

}());

shoppingCart.upsertItem({
    id: 0,
    name: 'coffee',
    description: 'Bench maji coffe',
    price: 1.99,
    count: 10
}).upsertItem({
    id: 1,
    name: 'T-shirt',
    description: 'Yellow tshirt',
    price: 99,
    count: 30
}).upsertItem({
    id: 2,
    name: 'cigaret',
    description: 'Newport',
    price: 5.99,
    count: 50
}).upsertItem({
    id: 3,
    name: 'Laptop',
    description: 'HP laptop',
    price: 1099,
    count: 10
}).upsertItem({
    id: 5,
    name: 'Books',
    description: 'Fiction books',
    price: 37,
    count: 5
});
shoppingCart.getCart();
console.log("getTotalPrice", (shoppingCart.getTotalPrice()).toFixed(2));
console.log("before removing anything itemcount :5 ==", shoppingCart.getItemCount());
console.log(`After i add 2 items`)
shoppingCart.upsertItem({
    id: 10,
    name: 'car',
    description: 'Toyota',
    price: 14499,
    count: 1
}).upsertItem({
    id: 3,
    name: 'Phone',
    description: 'Apple Phone',
    price: 566,
    count: 1
}).upsertItem({
    id: 0,
    name: 'coffee',
    description: 'Bench maji coffe',
    price: 1.99,
    count: 10
}).upsertItem({
    id: 3,
    name: 'Phone',
    description: 'Apple Phone',
    price: 566,
    count: 1
}).upsertItem({
    id: 33,
    name: 'Phone',
    description: 'Apple Phone',
    price: 566,
    count: 1
})
shoppingCart.getCart();
console.log("getTotalPrice", (shoppingCart.getTotalPrice()).toFixed(2));
console.log("getItemCount add two items 7 == ", shoppingCart.getItemCount());
console.log(``)
shoppingCart.removeItemById(33);
console.log("getTotalPrice", (shoppingCart.getTotalPrice()).toFixed(2));
console.log("After i removed id 33 getItemCount 6 ==", shoppingCart.getItemCount());
shoppingCart.getCart();