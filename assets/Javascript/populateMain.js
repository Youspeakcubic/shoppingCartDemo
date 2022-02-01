fetch("data.json")
.then(res => res.json())
.then(data => populate(data))
let populate = (data) => {
  for (i = 0; i <= data.length; i++) {
    console.log(data[i])
    const card =
      `<div class="product" style="width: 18rem;">
        <img src="${data[i].imageSrc}" class="card-img-top" alt="productIMgNotAvailable">
        <div class="card-body">
          <h5 class="card-title">${data[i].prodName}</h5>
          <p class="card-text">${data[i].desc}</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>`
  };
}
