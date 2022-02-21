let dataObj;

fetch("data.json")
.then(res => res.json())
.then(data => dataObj = data)

let removeElement = (id) => {
  console.log(cartCounter,priceCounter);
  id.outerHTML = "";
  cartCounter--;
  priceCounter -= dataObj.main[id].price;
  console.log(cartCounter,priceCounter);
  cartElem.innerHTML = `${cartCounter} items in your cart`;
  document.getElementById("totalCount").innerHTML = `Total: gay`
}
