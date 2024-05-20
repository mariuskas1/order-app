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
        renderFilledBasket(name, price, amount, i);
      }
  }  
}


function renderFilledBasket(name, price, amount, i){
  let basket = document.getElementById("basket");
  let calculatedPrice = price * amount;
  basket.innerHTML += `
            <div class="item">
              <div class="item-first-part">
                <span class="amount">${amount}x</span>
                <span class="item-name">${name}</span>
              </div>
              <div class="item-second-part">
                <div>
                    <img class="item-icon amount-change" src="./img/icons/minus-solid.svg" onclick="decreaseAmount(${i})">
                    <img class="item-icon amount-change" src="./img/icons/plus-solid (1).svg" onclick="increaseAmount(${i})">
                </div>
                <span class="price">${calculatedPrice.toFixed(2)}</span>
                <img class="item-icon delete-btn" src="./img/icons/trash-solid.svg" onclick="removeItem(${i})">
              </div>
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


function removeItem(i){
  names.splice(i, 1);
  prices.splice(i, 1);
  amounts.splice(i, 1);

  document.getElementById("basket").innerHTML = '';
  displayShoppingBasket();
  updateShoppingSum();
}


function decreaseAmount(i){
  let currentAmount = amounts[i];
  if(currentAmount == 1){
    removeItem(i)
  } else {
    currentAmount--;
    amounts[i] = currentAmount;

    document.getElementById("basket").innerHTML = '';
    displayShoppingBasket();
    updateShoppingSum();
  }
}


function increaseAmount(i){
  let currentAmount = amounts[i];
  currentAmount++;
  amounts[i] = currentAmount;

  document.getElementById("basket").innerHTML = '';
  displayShoppingBasket();
  updateShoppingSum();
}


function order(){
  if (amounts.length == 0) {
    alert('Dein Warenkorb ist leer');
  } else {
    alert('Vielen Dank für deine Bestellung');
    names = [];
    prices = [];
    amounts = [];
    displayEmptyBasket();
  }
}

function showBasket(){
  let hiddenBasket = document.getElementById('shoppingCart');
  let closeBtn = document.getElementById('closeBtn');
  hiddenBasket.style.display = 'block';
  closeBtn.style.display = 'block';
}


function closeMenu(){
  let hiddenBasket = document.getElementById('shoppingCart');
  let closeBtn = document.getElementById('closeBtn');
  hiddenBasket.style.display = 'none';
  closeBtn.style.display = 'none';
}