let names = [];
let prices = [];
let amounts = [];


function displayEmptyBasket(){
  let basket = document.getElementById("basket");
  let priceDisplay = document.getElementById("price-table");

  basket.innerHTML= `
        <div class="empty-basket">
          <img class="empty-basket-icon" src="./img/icons/basket-shopping-solid.svg">
          <span class="empty-header">Fülle deinen Warenkorb</span>
          <span id="empty-text">"Füge leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen"</span>
        </div>
    `;
   priceDisplay.style.display = 'none';
}


function addToBasket(name, price, amount) {
  let index = names.indexOf(name);
  if (index == -1) {
    names.push(name);
    prices.push(price);
    amounts.push(amount);
  } else {
    amounts[index]++;
  }
    
    displayShoppingBasket();
    updateShoppingSum();
}


function displayShoppingBasket() {
  let basket = document.getElementById("basket");
  let priceDisplay = document.getElementById("price-table");

  basket.innerHTML = "";

  if(names.length == 0){
    displayEmptyBasket();
  } else {
    priceDisplay.style.display = 'block';
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const price = prices[i];
        const amount = amounts[i];
        
        renderFilledBasket(name, price, amount);
      }
  }  
}


function renderFilledBasket(name, price, amount){
  let basket = document.getElementById("basket");
  basket.innerHTML += `
            <div class="item">
                <span class="amount">${amount}x</span>
                <span class="item-name">${name}</span>
                <div>
                    <img class="item-icon amount-change" src="./img/icons/minus-solid.svg">
                    <img class="item-icon amount-change" src="./img/icons/plus-solid (1).svg">
                </div>
                <span class="price">${price.toFixed(2)}</span>
                <img class="item-icon" src="./img/icons/trash-solid.svg">
            </div>
        `;
}


function updateShoppingSum() {
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i] * amounts[i];
  }

  let finalSum = sum + 1;

  document.getElementById("sum").innerHTML = sum.toFixed(2);
  document.getElementById("finalSum").innerHTML = finalSum.toFixed(2);
}


window.onscroll = function () {
  let shoppingCart = document.getElementById("shoppingCart");

  if (window.scrollY > 0) {
    shoppingCart.style = "top: 0";
  } else {
    shoppingCart.style = "top: 100px";
  }
};
