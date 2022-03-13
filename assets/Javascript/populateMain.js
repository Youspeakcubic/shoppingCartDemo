let container = document.getElementById("catalog");

let mainDataObj;
let dealDataObj;


fetch("./assets/public/deals.json")
  .then(res => res.json())
  .then(data => dealDataObj = data)
fetch("./assets/public/data.json")
  .then(res => res.json())
  .then(data => mainDataObj = data)
let populate = (data, dealData) => {

  //the code below creates a row with multiple layed out cards, by filling out the template literal with data from multiple objects.

  dealData.length = 4;

  let dealRow =
    `
  <h1> Today's deals: </h1
  <div class="row">
    <div class="card mb-3 col-lg-6">
      <img class="card-img-top" src="${dealData.main[0].imgSrc}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${dealData.main[0].prodName}</h5>
        <p class="card-text">${dealData.main[0].desc}</p>
        <p class="card-text"><small class="text-muted">${dealData.main[0].price}</small></p>
        <p class="card-text"><small class="text-muted">${dealData.main[0].orinPrice}</small></p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="row">
        <div class="card mb-3 col-lg-6">
          <img class="card-img-top" src="${dealData.main[0].imgSrc}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${dealData.main[0].prodName}</h5>
            <p class="card-text">${dealData.main[0].desc}</p>
            <p class="card-text"><small class="text-muted">${dealData.main[0].price}</small></p>
            <p class="card-text"><small class="text-muted">${dealData.main[0].orinPrice}</small></p>
          </div>
        </div>
        <div class="card mb-3 col-lg-6">
          <img class="card-img-top" src="${dealData.main[0].imgSrc}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${dealData.main[0].prodName}</h5>
            <p class="card-text">${dealData.main[0].desc}</p>
            <p class="card-text"><small class="text-muted">${dealData.main[0].price}</small></p>
            <p class="card-text"><small class="text-muted">${dealData.main[0].orinPrice}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  const dealElement = document.createElement('div');
  dealElement.innerHTML = dealRow;
  container.appendChild(dealElement);
  //the code below creates a bootstrap card for every object in the main data by filling the template literal with each relevant key from the object.

  for (i = 0; i <= data.main.length; i++) {
    let card =
      `<img src= ${data.main[i].imgSrc} class="card-img-top prodImg" alt="productIMgNotAvailable">
        <div class="card-body">
          <h5 class="card-title">${data.main[i].prodName}</h5>
          <p class="card-text">${data.main[i].desc}</p>
          <p class="card-text">${data.main[i].price}</p>
          <a onClick="populateCart(${data.main[i].id});" class="btn btn-primary">Add to cart</a>
        </div>
        `;
    const element = document.createElement('div');
    element.innerHTML = card;
    element.className = "product col-lg-1;";
    element.style = "width: 18rem";
    container.appendChild(element);
  };
}

window.addEventListener('load', (event) => {
  populate(mainDataObj, dealDataObj);
});
