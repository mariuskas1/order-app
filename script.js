let names = [];
let prices = [];
let amounts = [];

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
  basket.innerHTML = "";

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const price = prices[i];
    const amount = amounts[i];

    basket.innerHTML += `
        <div class="item">
            <span class="amount">${amount}x</span>
            <span class="item-name">${name}</span>
            <div>
                <img class="item-icon amount-change" src="./img/icons/minus-solid.svg">
                <img class="item-icon amount-change" src="./img/icons/plus-solid (1).svg">
            </div>
            <span class="price">${price}</span>
            <img class="item-icon" src="./img/icons/trash-solid.svg">
        </div>
    `;
  }
}


function updateShoppingSum() {
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i] * amounts[i];
  }

  let finalSum = sum + 1;

  document.getElementById("sum").innerHTML = sum;
  document.getElementById("finalSum").innerHTML = finalSum;
}


window.onscroll = function () {
  let shoppingCart = document.getElementById("shoppingCart");

  if (window.scrollY > 0) {
    shoppingCart.style = "top: 0";
  } else {
    shoppingCart.style = "top: 100px";
  }
};
