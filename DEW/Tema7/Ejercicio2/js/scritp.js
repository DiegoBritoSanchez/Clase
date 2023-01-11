const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
    //...
  ];

const productCards = document.getElementById("product-cards");
const cartList = document.getElementById("cart-list");

for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("card", "col-md-4");
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">Price: ${product.price}</p>
        <button class="btn btn-primary add-to-cart">Add to Cart</button>
      </div>`;
    
    // add click listener to add product to cart
    card.querySelector(".add-to-cart").addEventListener("click", () => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${product.name} - ${product.price} <button class="btn btn-danger remove-from-cart">X</button>`;
        cartList.appendChild(cartItem);
    });
    
    productCards.appendChild(card);
}
    
