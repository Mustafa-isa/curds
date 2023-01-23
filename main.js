//SATRTING CODE............
let title = document.getElementById("address");
let price = document.getElementById("price");
let taxes = document.getElementById("tax");
let ads = document.getElementById("ads");
let discount = document.getElementById("dis");
let total = document.querySelector(".totle");
let count = document.getElementById("count");
let catogrey = document.getElementById("catogry");
let submit =document.getElementById('btn');
let tbody=document.getElementById("tbody")
//local storage
let arr
if(localStorage.product){
  arr=JSON.parse(localStorage.product)
}else{
  arr=[]
}

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


 submit.onclick=function(){
let product ={
address:title.value ,
  price:price.value,
  taxes :taxes.value,
  ads :ads.value,
  discount:discount.value,
  total:total.innerHTML,
  count:count.value,
  catogrey:catogrey.value
}
arr.push(product)
localStorage.setItem("product" ,JSON.stringify(arr))
emptyFilds()
showData()
}
function emptyFilds(){
  
title.value =""
price.value=""
taxes.value=""
ads.value=""
discount.value=""
total.innerHTML=""
count.value=""
catogrey.value=""
}
function showData(){
  let tabel =''
  for(let i=0 ;i< arr.length ;i++){
tabel += `<tr>
<td>${i}</td>
<td>${arr[i].address }</td>
<td>${arr[i].price}</td>
<td>${arr[i].taxes}</td>
<td>${arr[i].ads}</td>
<td>${arr[i].discount}</td>
<td>${arr[i].total}</td>
<td>${arr[i].catogrey}</td>
<td><button id="update">update</button></td>
<td><button id="delete" onclick=delet(${i})>delete</button></td>
</tr>`
tbody.innerHTML= tabel
}
}
showData()

function delet(i){
  arr.splice(i,1)
  localStorage.product=JSON.stringify(arr)
  showData()

}