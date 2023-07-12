const bossDataTemplate= document.querySelector("[bossDataTemplate]")
const bossDataCards= document.querySelector("[bossDataCards]")
const searchInput = document.querySelector("[dataSearch]")


let bossArray = []

searchInput.addEventListener("input", (e) => {
     const value = e.target.value
     console.log(bossArray)
     bossArray.forEach(item => {
        const isVisible = item.name.include(value) || item.description.include(value) || item.region.include(value) || item.location.include(value) || item.image.include(value)
        item.element.classList.toggle("hide", !isVisible)
     })
     
})

fetch("https://eldenring.fanapis.com/api/bosses")
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
    console.log(item)
    return { name: item.name, description: item.description, region: item.region, location: item.location, image: item.image, element: card}
    })
})