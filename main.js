//SATRTING CODE............
let title = document.getElementById("title");
letprice = document.getElementById("price");
let taxes = document.getElementById("tax");
let ads = document.getElementById("ads");
let discount = document.getElementById("dis");
let total = document.querySelector(".totle");
let count = document.getElementById("count");
let catogrey = document.getElementById("catogry");
let submit =document.getElementById('btn');
let arr =[]
function totalPrice() {
  let result;
  if (price.value != "") {
    result = +price.value + +taxes.value + +ads.value - discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.style.background = "red";
    price.value=""
  }
}
//get total of product
//#################################################################################
//create data
submit.addEventListener('click', createProduct)

function createProduct(){
let product ={
  title:title.value,
  price:price.value,
  taxes :taxes.value,
  ads :ads.value,
  discount:discount.value,
  total:total.innerHTML,
  count:count.value,
  catogrey:catogrey.value
}
console.log(product)
}