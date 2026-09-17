```javascript
let foods = [
    { name: "Pizza", price: 150 },
    { name: "Burger", price: 100 },
    { name: "Biryani", price: 180 },
    { name: "Dosa", price: 60 }
];

let cart = [];

function displayFoods() {

    let output = "";

    foods.forEach((food, i) => {
        output += `
            <div class="food">
                <h3>${food.name}</h3>
                <p class="price">₹${food.price}</p>
                <button onclick="addToCart(${i})">
                    Add to Cart
                </button>
            </div>
        `;
    });

    document.getElementById("foods").innerHTML = output;
}

function addToCart(index) {

    cart.push(foods[index]);

    displayCart();
}

function displayCart() {

    let output = "";
    let total = 0;

    cart.forEach(food => {

        output += `
            <div class="cart-item">
                ${food.name} - ₹${food.price}
            </div>
        `;

        total += food.price;
    });

    document.getElementById("cart").innerHTML = output;
    document.getElementById("total").innerText = total;
}

displayFoods();
```

