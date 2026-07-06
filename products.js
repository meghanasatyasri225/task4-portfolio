const products = [

{
    name:"Laptop",
    category:"electronics",
    price:55000,
    rating:4.8,
    image:"laptop.jpeg"
},

{
    name:"Headphones",
    category:"electronics",
    price:3000,
    rating:4.5,
    image:"headphones.jpeg"
},

{
    name:"Smart Watch",
    category:"electronics",
    price:5000,
    rating:4.7,
    image:"smartwatch.jpeg"
},

{
    name:"Shoes",
    category:"fashion",
    price:2500,
    rating:4.7,
    image:"shoes.jpeg"
},

{
    name:"T-Shirt",
    category:"fashion",
    price:700,
    rating:4.2,
    image:"T-shirt.jpeg"
},

{
    name:"Handbag",
    category:"fashion",
    price:1800,
    rating:4.5,
    image:"handbag.jpeg"
},

{
    name:"YOU BECOME WHAT YOU THINK BOOk",
    category:"books",
    price:500,
    rating:4.9,
    image:"ybytbook2.jpeg"
},

{
    name:"THE ART OF SAYING NO BOOK",
    category:"books",
    price:450,
    rating:4.4,
    image:"book1.jpeg"
}

];

displayProducts(products);

function displayProducts(list){

    const container =
    document.getElementById("productContainer");

    container.innerHTML = "";

    list.forEach(product => {

        container.innerHTML += `
        <div class="card">

            <img src="${product.image}">

            <div class="card-content">

                <h3>${product.name}</h3>

                <p>Category: ${product.category}</p>

                <p>Price: ₹${product.price}</p>

                <p>⭐ ${product.rating}</p>

                <button onclick="addToCart(${products.indexOf(product)})">
                    Add to Cart
                </button>

            </div>

        </div>
        `;
    });
}

function filterAndSortProducts(){

    let filtered = [...products];

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const category =
    document.getElementById("categoryFilter")
    .value;

    const sort =
    document.getElementById("sortOption")
    .value;

    filtered = filtered.filter(product =>
        product.name.toLowerCase()
        .includes(search)
    );

    if(category !== "all"){
        filtered = filtered.filter(product =>
            product.category === category
        );
    }

    if(sort === "priceLow"){
        filtered.sort((a,b) => a.price - b.price);
    }
    else if(sort === "priceHigh"){
        filtered.sort((a,b) => b.price - a.price);
    }
    else if(sort === "ratingHigh"){
        filtered.sort((a,b) => b.rating - a.rating);
    }

    displayProducts(filtered);
}
let cart = [];

function addToCart(index){

    cart.push(products[index]);

    displayCart();
}

function displayCart(){

    const cartDiv =
    document.getElementById("cartItems");

    const totalBill =
    document.getElementById("totalBill");

    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach((item,i)=>{

        total += item.price;

        cartDiv.innerHTML += `
        <div class="cart-card">

            <span>
                ${item.name}
                - ₹${item.price}
            </span>

            <button
                onclick="removeFromCart(${i})">
                Remove
            </button>

        </div>
        `;
    });

    totalBill.innerHTML =
    `Total: ₹${total}`;
}

function removeFromCart(index){

    cart.splice(index,1);

    displayCart();
}