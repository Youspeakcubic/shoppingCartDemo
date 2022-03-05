let hideCart = () => {
  if (cartContainer.dataset.state == "visible") {
    container.className = "catalog col-lg-12 col-md-12 col-sm-12 row"
    cartContainer.className = "cart cartNone";
    cartContainer.dataset.state ="hidden";
  }
  else if (cartContainer.dataset.state == "hidden") {
    cartContainer.className = "cart col-lg-3 col-md-4 col-sm-12";
    catalogCont.className = "catalog col-lg-9 col-md-8 col-sm row";
    cartContainer.dataset.state = "visible";
  }
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
