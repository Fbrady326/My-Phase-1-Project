

const bossDataTemplate= document.querySelector("[bossDataTemplate]")
const bossDataCards= document.querySelector("[bossDataCards]")
const searchInput = document.querySelector("[dataSearch]")
let lightmodeToggle = document.querySelector("#lightMode")
const allComments = document.querySelector("#allComments")



let bossArray = []

searchInput.addEventListener("input", (e) => {
     const value = e.target.value.toLowerCase()
     bossArray.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value) || item.description.toLowerCase().includes(value) || item.region.toLowerCase().includes(value) || item.location.toLowerCase().includes(value)
        item.element.classList.toggle("hide", !isVisible)
     })
     
})

fetch("https://eldenring.fanapis.com/api/bosses?limit=50")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    //let items = data.data
    bossArray = data.data.map(item => {
    const card = bossDataTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[dataHeader]") 
    const body = card.querySelector("[dataBody]")
    const region = card.querySelector("[dataRegion]")
    const location = card.querySelector("[dataLocation]")
    const image = card.querySelector("[dataImage]")
    header.textContent = item.name
    body.textContent = item.description 
    region.textContent = item.region
    location.textContent = item.location
    image.src = item.image
    bossDataCards.append(card)
    return { name: item.name, description: item.description, region: item.region, location: item.location, image: item.image, element: card}
    })
})



lightmodeToggle.addEventListener('change', () => {
    document.body.classList.toggle("light");
})

var btn1 = document.querySelector('#green');
var btn2 = document.querySelector('#red');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});




