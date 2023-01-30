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
let deletdiv= document.getElementById("delete")
let btnDeleteAll =document.getElementById('deleteall')
let serachInput = document.getElementById("search")
console.log(serachInput)
let mode ='create'
let ind
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
if( mode ==='create'){
  if(product.count > 1){
    for(let i=0 ;i<product.count ;i++){
      arr.push(product)
    }
  }else{
    arr.push(product)
  }
  
}else{
 arr[ind]= product
 mode ='create'
 count.style.display="block"
 submit.innerHTML= 'create'
}


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
<td><button onclick="updateProduct(${i})"  id="update">update</button></td>
<td><button id="delete" onclick=delet(${i})>delete</button></td>
</tr>`
tbody.innerHTML= tabel
}
if(arr.length > 0){
deletdiv.innerHTML =`<button id="deleteall" onclick =deleteAll() >delete all ${arr.length}</button>`
}
}
showData()

function delet(i){
  arr.splice(i,1)
  localStorage.product=JSON.stringify(arr)
  showData()

}
//delete all data exist in page
 function deleteAll(){
  localStorage.clear()
  arr.splice(0)
  showData()
}
///SATRTING updating
function updateProduct(i){
  title.value  =arr[i].address
  price.value =arr[i].price
  taxes.value = arr[i].taxes
  ads.value = arr[i].ads
  discount.value = arr[i].discount
  catogrey.value= arr[i].catogrey
  totalPrice()
  count.style.display="none"
  submit.innerHTML= 'update'
  ind =i
  mode ='update'

}
let search ='title'
function searchFun( id){

  if(id ==="searchTitle"){
    search ='title'
  
  }else{
    search ='catogry'
  
  }
}