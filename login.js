let btn = document.getElementById("btn")

btn.addEventListener("click",(event)=>{
  event.preventDefault()

  let user = document.getElementById("user")

  let pass = document.getElementById("pass")


  fetch('https://66e7e69bb17821a9d9da6eab.mockapi.io/login-page')
  .then((response) => response.json())
  .then((json) => console.log(json));


if(json.user===user.value&& json.pass===pass.value){
  localStorage.setItem(('user',user.value),('paa',pass.value))
  window.location.href="homepage.html"

}else{
  alert("try agin!!")
}


})

