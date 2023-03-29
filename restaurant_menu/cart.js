// SHOW CART
const cartInfo = document.getElementById("cart-info");
const cart = document.getElementById("cart");

cartInfo.addEventListener("click", function(){
 cart.classList.toggle("show-cart");
});


if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}


function ready(){
    // Remove Cart Items
    let delBtn = document.getElementsByClassName('cart-item-remove');
    for(var i = 0; i < delBtn.length; i++){
        let btn = delBtn[i]
        btn.addEventListener('click', removeCartItem)
    }

    // Quantity Changes
    let quantityInputs = document.getElementsByClassName("cart-quantity")
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    // Add To Cart
    let orderBtn = document.getElementsByClassName("order_btn");
    for(var i = 0; i < orderBtn.length; i++){
        let order = orderBtn[i]
        order.addEventListener('click', addToCart)
    }

    // Checkout Button
    document.getElementsByClassName('checkout')[0].addEventListener('click', checkOutClicked)
}  

function checkOutClicked(){
    alert('Order Received')
    let cartContents = document.getElementsByClassName('cart-contents')[0]
    while(cartContents.hasChildNodes()){
        cartContents.removeChild(cartContents.firstChild)
    }
    updateTotal()
}


// remove Cart Items
function removeCartItem(event){
    let btnClicked = event.target
    btnClicked.parentElement.remove();
    updateTotal()
}

// Quantity Change
function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}

// Add Cart
function addToCart(event){
    let button = event.target
    let orderItems = button.parentElement.parentElement
    let menuTitle = orderItems.getElementsByClassName('menuFood')[0].innerText;
    let menuPrice = orderItems.getElementsByClassName('price')[0].innerText;
    let menuImg = orderItems.getElementsByClassName('menu-img')[0].src;
    addMenuToCart(menuTitle, menuPrice, menuImg)
    
    alert('item added to the cart');
    updateTotal()
}


// Create Item Div
function addMenuToCart(menuTitle, menuPrice, menuImg){
    let cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-item')
    let cartContents = document.getElementsByClassName('cart-contents')[0]
    let cartTitle = cartContents.getElementsByClassName('menuFood')
    for(var i = 0; i < cartTitle.length; i++){
        alert("Order Added To Cart");
        if(cartTitle[i].innerText == menuTitle){
          
            return;
        }
    }

    let cartContentBox =`
                    <img src="${menuImg}" class="item-img" id="item-img" alt="">
                    <div class="item-text">
                        <p class="cart-item-title">${menuTitle}</p>
                        <p class="cart-item-price">${menuPrice}</p>
                    </div>

                    <input class='cart-quantity' type='number' value='1'>

                    <i class="fas fa-trash-alt cart-item-remove"></i>
    `

    cartShopBox.innerHTML = cartContentBox
    cartContents.append(cartShopBox)   
    cartShopBox.getElementsByClassName('cart-item-remove')[0].addEventListener('click', removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}


// Update Total
function updateTotal(){
    let cartContent = document.getElementsByClassName('cart-contents')[0]
    let cartItems = cartContent.getElementsByClassName("cart-item")
    let total = 0;

    for(var i = 0; i < cartItems.length; i++){
        let cartItemValue = cartItems[i]
        let priceElement = cartItemValue.getElementsByClassName("cart-item-price")[0]
        let quantityElement = cartItemValue.getElementsByClassName("cart-quantity")[0]
        let quantity = quantityElement.value

        let price = parseFloat(priceElement.innerHTML)
    
       

        // grandMoney = total
      

        // let price = total.push(parseFloat(priceElement.innerHTML.replace('&#8358;', '')))
    }

    let grandMoney = total + (price * quantity)
    // const finalMoney = total.toFixed(2);

    document.getElementsByClassName("cart-total-price")[0].innerHTML = total
    
    document.getElementsByClassName("item-total")[0].innerHTML = total
    document.getElementById("item-count").innerHTML = cartItems.length;
}
