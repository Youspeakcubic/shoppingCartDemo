let container = document.getElementById("main");
fetch("data.json")
.then(res => res.json())
.then(data => populate(data))
let populate = (data) => {
  for (i = 0; i <= data.main.length; i++) {
    let card =
      `<div class="product" style="width: 18rem;">
        <img src= ${data.main[i].imgSrc} class="card-img-top prodImg" alt="productIMgNotAvailable">
        <div class="card-body">
          <h5 class="card-title">${data.main[i].prodName}</h5>
          <p class="card-text">${data.main[i].desc}</p>
          <p class="card-text">${data.main[i].price}</p>
          <a onClick="populateCart(${data.main[i].id});" class="btn btn-primary">Add to cart</a>
        </div>
      </div>`;
      const element = document.createElement('div');
      element.innerHTML = card;
      element.className = "col col-lg-2 col-md-4 col-sm-6";
    container.appendChild(element);
  };
}
