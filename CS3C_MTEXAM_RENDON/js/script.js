let cart = []; // declared an emtpy array to store the cart of the product.

function addToCart(productName, price) { // A function created to add a product to the cart.
    let productAvailable = cart.find(item => item.name === productName); // another variable decalred to check the condition of the product if is added in the cart.
    if (productAvailable) { // If Else Statement use to check the condition of the product,
        productAvailable.quantity++; // Increment the quantity of the product.
    } else { 
        cart.push({ name: productName, price: price, quantity: 1 }); // Addedd a new product object to the cart with quantity set to 1 quantity.
    }
    updateCartList(); // Call the function to update the displayed cart list.
}

function removeFromCart(index) { // A function created to remove a product from adding to the cart.
    cart.splice(index, 1); // the product will remove at the specified index from the cart.
    updateCartList(); // Call the function to update the displayed cart list after removal.
}

function updateCartList() { // A function created to update the cart list displayed on the webpage.
    let cartListHTML = ''; // declared an emtpy string to build the HTML for the cart list.
    let totalPrice = 0; // declared an emtpy variable to keep track of the total price of items in the cart.
    cart.forEach(item => { // Iterate over each item in the cart.
        cartListHTML += `<li>${item.name} x${item.quantity} = PHP${item.price * item.quantity}</li>`; // Append the item's details to the cart list HTML.
        totalPrice += item.price * item.quantity; // Calculating the total price by adding the price of the item multiplied by number of quantity.
    });
    document.getElementById('cart-list').innerHTML = cartListHTML; // Update the inner HTML of the cart list element with the generated HTML.
    document.getElementById('total-price').innerText = `Total: PHP${totalPrice}`; // Will dipslay the total price of the product  in the webpage.
}
