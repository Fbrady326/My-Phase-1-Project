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
})