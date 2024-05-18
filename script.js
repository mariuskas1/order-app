let names = [];
let prices = [];


function addToBasket(name, price) {
  names.push(name);
  prices.push(price);

  let basket = document.getElementById("basket");
  basket.innerHTML = "";

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const price = prices[i];

    basket.innerHTML += `
        <div class="item">
            <span class="amount">1x</span>
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
  updateShoppingBasket();
}


function updateShoppingBasket() {
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }

  let finalSum = sum + 1;

  document.getElementById("sum").innerHTML = sum;
  document.getElementById("finalSum").innerHTML = finalSum;
}
