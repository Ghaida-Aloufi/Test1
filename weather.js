


  fetch('https://api.openweathermap.org/data/2.5/weather?q=riyadh&appid=5f74d3e27adfcb74937e10bf51239cef')
  .then((response) =>response.json())
  .then((data) =>{
 
    let div=document.createElement("div")
    div.classList="div1"
    let name=document.createElement("p")
    let deg=document.createElement("p")
    let deg2=document.createElement("p")
    let h=document.createElement("p")
    let w=document.createElement("p")
    
    name.textContent=data.name
    deg.textContent=data.temp
    h.textContent=data.lon
    w.textContent=data.lat
    deg2.textContent=data.humidity

    div.appendChild(name)
    div.appendChild(deg)
    div.appendChild(deg2)
    div.appendChild(h)
    div.appendChild(w)
    document.body.appendChild(div)

    console.log(data)});
  


