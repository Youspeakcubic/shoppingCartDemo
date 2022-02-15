let cartContainer = document.getElementById("cart");
let dataObj;
fetch("data.json")
.then(res => res.json())
.then(data => dataObj = data)
let populateCart = (id) => {
  console.log(dataObj);
  let cartItem =
  `<div class="card">
    <h5 class="card-header">${dataObj.main[id].prodName}</h5>
    <div class="card-body">
      <h5 class="card-title">${dataObj.main[id].desc}</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  let createDiv = document.createElement("div");
  createDiv.innerHTML = cartItem;
  cartContainer.appendChild(createDiv);
  cartContainer.className = "cart col-lg-3 col-md col-sm"
}
