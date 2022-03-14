//dom element variables

let cartContainer = document.getElementById("cart");
let trueCart = document.getElementById("");
let catalogCont = document.getElementById("catalog");
let cartElem = document.getElementById("cartTotal");

//counter variables for cart total and items in cart.

let cartCounter = 0;
let priceCounter =0;

//empty variable to put our fetch data in later.

let dataObj;

//fetching data from json file and putting said data into the variable above ^

fetch("./assets/public/data.json")
.then(res => res.json())
.then(data => dataObj = data)

//populate cart uses the id thrown from the callback to create a template literal with the unique data. Then creates a div and places it in a responsive bootstrap container.

let populateCart = (id) => {
  addToTotal(dataObj.main[id].price);
  console.log(dataObj);

//html template for our cart item, it is placed in a template literal to use variables as the innerHTML

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
  cartContainer.className = "cart col-lg-3 col-md-4 col-sm-12";
  catalogCont.className = "catalog col-lg-9 col-md-8 col-sm row";
}
