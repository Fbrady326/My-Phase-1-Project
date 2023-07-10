const search = document.getElementById("search")
const clearButton = document.getElementById("clearButton")
const results = document.getElementById("results")
const errorMessage = document.getElementById("errorMessage")
const loading = document.getElementById("loading")
const recentlyViewed = document.getElementById("recentlyViewed")

const maxRecentlyViewed = 6;
let recentlyViewedItems = [];

search.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = event.target.name.value
  const updatedName = name.replace("_").toLowerCase()

  loading.style.display = "block";
  results.innerHTML = " ";
  errorMessage.textContent = " ";

  fetch(`https://eldenring.fanapis.com/api/bosses/${updatedName}`)
  .then(function(response) {
    if (!response.ok) {
        throw new Error("Error Occured. The boss you entered was not found on https://eldenring.fanapis.com/api/bosses")
    }
    return response.json()
  })
    .then(function(data) {
        if(data.error) {
         throw new Error(data.error)
        }
//to display elements to html
    const item = data.data
    loading.style.display = "none"
    const itemName = document.createElement("h2")
    itemName.textContent = item.name
    const itemImage = document.createElement("img")
    itemImage.src = item.image
    const itemRegion = document.createElement("h3")
    itemRegion.textContent = item.region 
    const itemDescription = document.createElement("h3")
    itemDescription.textContent = item.description 
    const itemLocation = document.createElement("h3")
    itemLocation.textContent = item.location 
    const itemHealthPoints = document.createElement("h3")
    itemHealthPoints.textContent = item.healthPoints
    results.appendChild(itemName)
    results.appendChild(itemImage)
    results.appendChild(itemRegion)
    results.appendChild(itemDescription)
    results.appendChild(itemLocation)
    results.appendChild(itemHealthPoints)
    addToRecentlyViewed(updatedName)
    updateRecentlyViewed()
    })
// catch goes here
   .catch(function(error) {
    console.error("Error", error)
    results.innerHTML = " "
    errorMessage.textContent = error.message 
    loading.style.display = "none"
   })
})


clearButton.addEventListener("click", function() {
    search.reset()
    results.innerHTML = " "
    errorMessage.textContent = " "
    recentlyViewedItems.innerHTML = " "
    recentlyViewedItems = [];
})


recentlyViewed.addEventListener("click", function(event) {
    if(event.target.classList.contains("recentlyViewedItem")) {
        const clickedItem = event.target.dataset.item
        if(clickedItem) {
            const inputOfName = document.getElementById("name")
            inputOfName.value = clickedItem
        }
    }
})


function addToRecentlyViewed(item) {
    recentlyViewedItems = recentlyViewedItems.filter(recItem => recItem !== item)
    recentlyViewedItems.unshift(item)
    if (recentlyViewedItems.length > maxRecentlyViewed) {
        recentlyViewedItems.pop()
    }
}