let btn = document.getElementById("btn")

let username = document.getElementById("username")
let user = document.getElementById("user")
let email = document.getElementById("email")
let pass = document.getElementById("pass")

btn.addEventListener("click", (event) => {
event.preventDefault()


  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (username.value.length > 3  && pass.value.length >4 && emailPattern.test(email.value)){

    let newLocal = 'https://66e7e69bb17821a9d9da6eab.mockapi.io/login-page'
    fetch(newLocal, {
      method: 'POST',
      body: JSON.stringify({
        username :username.value ,
        user: user.value,
        email:email.value,
        pass: pass.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  }
  else{
    alert("try agin")
  }
})