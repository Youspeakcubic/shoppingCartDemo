const data = JSON.parse("assets\data\data.json")

for (i = 0; i <= data.length; i++) {
  const card =
    `<div class="product" style="width: 18rem;">
        <img src="${data.main[i].imageSrc}" class="card-img-top" alt="productIMgNotAvailable">
        <div class="card-body">
          <h5 class="card-title">${data.main[i].prodName}</h5>
          <p class="card-text">${data.main[i].desc}</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>`
};
