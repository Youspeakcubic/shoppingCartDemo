let cartContainer = document.getElementById("cart");
let catalogCont = document.getElementById("catalog")
let dataObj;
fetch("data.json")
.then(res => res.json())
.then(data => dataObj = data)
let populateCart = (id) => {
  console.log(dataObj);
  let cartItem =
  `<div class="card cartItem" id="product${id}">
    <h5 class="card-header">${dataObj.main[id].prodName}</h5>
    <div class="card-body">
      <p class="card-text">${dataObj.main[id].desc}</p>
      <div class="row">
      <div class="col-lg-6"><h5 class="card-title">$${dataObj.main[id].price}</h5></div>
      <div class="col-lg-6"><a onClick="removeElement(product${id})" class="btn btn-primary" style="background-color:transparent; border-color:transparent; color: blue;">Remove</a></div>
      </div>
    </div>
  </div>`
  let createDiv = document.createElement("div");
  createDiv.innerHTML = cartItem;
  cartContainer.appendChild(createDiv);
  cartContainer.className = "cart col-lg-3 col-md col-sm";
  catalogCont.className = "catalog col-lg-9 row";
}
