let btn= document.getElementById("btn")
let text=document.getElementById('text')
let email =document.getElementById('email')


btn.addEventListener('click', onClickButton)

function onClickButton(){
if(text.value !='' ){

let userinf={
    username:text.value,

}
localStorage.setItem('info' , userinf)

}
else{
    alert('pleace enter your user name and passwords')
}
}