let container = document.getElementById("catalog");

let dealDataObj;


fetch("./assets/public/deals.json")
  .then(res => res.json())
  .then(data => dealDataObj = data)
let populate = (data, dealData) => {
  console.log(data,dealData);
  //the code below creates a row with multiple layed out cards, by filling out the template literal with data from multiple objects.

  let dealRow =
    `
  <h1 class="dealHeader"> Today's best deals: </h1>
  <div class="row" id="dealContainer">

    <div class="card mb-3 col-lg-6">
      <img class="card-img-top mainDealImg" src="${dealData.main[0].imgSrc}" alt="Card image cap">

      <div class="card-body">
        <h5 class="card-title">${dealData.main[0].prodName}</h5>
        <h5 class="card-title">${dealData.main[0].desc}</h5>
        <p class="card-text"><small class="text-muted">${dealData.main[0].price}</small></p>
        <p class="card-text"><small class="text-muted">${dealData.main[0].orinPrice}</small></p>
        <a href="#" class="btn btn-warning dealsButton">add to cart</a>
      </div>
    </div>

    <div class="row col-lg-6">

      <div class="card dealRightCard col-lg-6">
        <img class="card-img-top" src="${dealData.main[1].imgSrc}" alt="Card image cap">

        <div class="card-body">
          <h5 class="card-title">${dealData.main[1].prodName}</h5>
          <p class="card-text"><small class="text-muted">${dealData.main[1].price}</small></p>
          <p class="card-text"><small class="text-muted">${dealData.main[1].orinPrice}</small></p>
        </div>
        <a href="#" class="btn btn-warning dealsButton">add to cart</a>
      </div>

      <div class="card dealRightCard col-lg-6">
        <img class="card-img-top" src="${dealData.main[2].imgSrc}" alt="Card image cap">

        <div class="card-body">
          <h5 class="card-title">${dealData.main[2].prodName}</h5>
          <p class="card-text"><small class="text-muted">${dealData.main[2].price}</small></p>
          <p class="card-text"><small class="text-muted">${dealData.main[2].orinPrice}</small></p>
        </div>
        <a href="#" class="btn btn-warning dealsButton">add to cart</a>
      </div>

      <div class="card dealRightCard col-lg-6">
        <img class="card-img-top" src="${dealData.main[3].imgSrc}" alt="Card image cap">

        <div class="card-body">
          <h5 class="card-title">${dealData.main[3].prodName}</h5>
          <p class="card-text"><small class="text-muted">${dealData.main[3].price}</small></p>
          <p class="card-text"><small class="text-muted">${dealData.main[3].orinPrice}</small></p>
        </div>
        <a href="#" class="btn btn-warning dealsButton">add to cart</a>
      </div>

      <div class="card dealRightCard col-lg-6">
        <img class="card-img-top" src="${dealData.main[4].imgSrc}" alt="Card image cap">

        <div class="card-body">
          <h5 class="card-title">${dealData.main[4].prodName}</h5>
          <p class="card-text"><small class="text-muted">${dealData.main[4].price}</small></p>
          <p class="card-text"><small class="text-muted">${dealData.main[4].orinPrice}</small></p>
        </div>
        <a href="#" class="btn btn-warning dealsButton">add to cart</a>
      </div>

    </div>
    <hr />
    <a href="#" class="btn btn-warning dealsButton">See more deals!</a>
    <hr />
    <h1 class="dealHeader">You may also like:</h1>
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
          <a onClick="populateCart(${data.main[i].id});" class="btn btn-warning">Add to cart</a>
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
  console.log(dealDataObj,dataObj)
  populate(dataObj, dealDataObj);
});
