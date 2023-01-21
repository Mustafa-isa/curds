//SATRTING CODE............
const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("tax");
const ads = document.getElementById("ads");
const discount = document.getElementById("dis");
const total = document.querySelector(".totle");

const count = document.getElementById("count");
const catogrey = document.getElementById("catogry");
const search = document.getElementById("search");

function totalPrice() {
  let result;
  if (price.value != "") {
    result = +price.value + +taxes.value +  +ads.value  -discount.value;
    total.innerHTML= result;
    total.style.background = '#040'
  }else{
    total.style.background = 'red'
    
  }
}


//get total of product
