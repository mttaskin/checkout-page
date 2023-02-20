const taxRate = 0.18;
const shippingPrice = 20;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  // sessionStorage.setItem('taxRate', taxRate);
  // sessionStorage.setItem('shippingPrice', shippingPrice);
  // sessionStorage.setItem('shippingFreePrice', shippingFreePrice);
  calculateCartPrice();
});
const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
    }else{
        if(confirm(`${event.target.parentElement.parentElement.querySelector("h2").innerText} will be deleted!!!`)){
            event.target.closest(".product").remove();
        }
    }
  } else if (event.target.className == "fa-solid fa-plus") {
    event.target.parentElement.querySelector(".quantity").innerText++;

  } else if (event.target.className == "remove-product") {
    event.target.closest(".product").remove();
  }
  calculateProductPrice(event.target);
  calculateCartPrice();
});