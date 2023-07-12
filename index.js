const bossDataTemplate= document.querySelector("[bossDataTemplate]")
const bossDataCards= document.querySelector("[bossDataCards]")

fetch("https://eldenring.fanapis.com/api/bosses")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    //let items = data.data
    data.data.forEach(item => {
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
    })
})