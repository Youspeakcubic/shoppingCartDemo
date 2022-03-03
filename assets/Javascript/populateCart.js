//dom element variables
let cartContainer = document.getElementById("cart");
let catalogCont = document.getElementById("catalog");
let cartElem = document.getElementById("cartTotal");
//counter variables for cart total and items in cart.
let cartCounter = 0;
let priceCounter =0;
//empty variable to put our fetch data in later.
let dataObj;
//fetching data from json file and putting said data into the variable above ^
fetch("data.json")
.then(res => res.json())
.then(data => dataObj = data)
//populate cart uses the id thrown from the callback to create a template literal with the unique data. Then creates a div and places it in a responsive bootstrap container.
let populateCart = (id) => {
  addToTotal(dataObj.main[id].price);
  console.log(dataObj);
  let cartItem =
  `<div class="card cartItem" id="product${id}">
    <h5 class="card-header">${dataObj.main[id].prodName}</h5>
    <div class="card-body">
      <p class="card-text">${dataObj.main[id].desc}</p>
      <div class="row">
      <div class="col-lg-6"><h5 class="card-title">$${dataObj.main[id].price}</h5></div>
      <div class="col-lg-6"><a onClick="removeElement(product${id}, ${id})" class="btn btn-primary" style="background-color:transparent; border-color:transparent; color: blue;">Remove</a></div>
      </div>
    </div>
  </div>`
  let createDiv = document.createElement("div");
  createDiv.innerHTML = cartItem;
  cartContainer.appendChild(createDiv);
  cartContainer.className = "cart col-lg-3 col-md col-sm";
  catalogCont.className = "catalog col-lg-9 row";
}

//add to total adds values to our counters and manipulates dom to show price of new items
let addToTotal = (price) => {
  cartCounter++;
  priceCounter += price;
  cartElem.innerHTML = `${cartCounter} items in your cart`;
  document.getElementById("totalCount").innerHTML = `Total:$${priceCounter}`
}
//remove Element takes the element and the element id, firstly empties the div outerhtml as to not make it visible. updates our counter updates and then refreshes the dom elements displaying them.
let removeElement = (elem, id) => {
  elem.outerHTML = "";
  cartCounter--;
  priceCounter -= `${dataObj.main[id].price}`;
  cartElem.innerHTML = `${cartCounter} items in your cart`;
  document.getElementById("totalCount").innerHTML = `Total: $${priceCounter}`
  console.log("totals changed");
}
