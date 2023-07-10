
const search = document.getElementById("search")
const results = document.getElementById("results")
const clearButton = document.getElementById("clearButton")
const recentlyViewed = document.getElementById("recentlyViewed")
const loading = document.getElementById("loading")
const errorMessage = document.getElementById("errorMessage")

const maxRecentlyViewed = 5
let recentlyViewedItems = []

search.addEventListener("submit",function(event) {
    event.preventDefault()
    
    const name = event.target.name.value
    const updatedName = name.replace("_").toLowerCase()

    loading.style.display = "block"
    results.innerHTML = " "
    errorMessage.textContent = " "

    
    fetch("http://localhost:3000/data")
    .then(function(response) {
        if(response.status !== 200) {
            console.log("Error occured. The boss you entered was not found on https://eldenring.fanapis.com/api/bosses")
        }
        return response.json()
    })
    .then(function(data) {
        let items = data

        items.map(function(item) {
            let itemName = document.createElement("h2")
            let itemImage = document.createElement("h2")
            let itemDescription = document.createElement("h2")

             itemName.textContent = `${item.name}`
             itemImage.src = `${item.image}`
             itemDescription.textContent = `${item.description}`


             results.appendChild(itemName)
             results.appendChild(itemImage)
             results.appendChild(itemDescription)

             addToRecentlyViewed(updatedName)
             updateRecentlyViewed()
        })
            
            })
             
            
    })
    

    clearButton.addEventListener('click', function() {
        search.reset();
        results.innerHTML = '';
        errorMessage.textContent = '';
        recentlyViewed.innerHTML = '';
        recentlyViewedItems = [];
      });


      recentlyViewed.addEventListener('click', function(event) {
        if (event.target.classList.contains('recentlyViewedItem')) {
          const clickedItem = event.target.dataset.thing;
          if (clickedItem) {
            const nameInput = document.getElementById('name');
            nameInput.value = clickedItem;
          }
        }
      });



















