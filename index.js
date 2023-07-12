const bossDataTemplate = document.querySelector("[bossDataTemplate]")

fetch("https://eldenring.fanapis.com/api/bosses")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    //let items = data.data
    data.data.forEach(item => {
    const card = bossDataTemplate.content.cloneNode(true).children[0]
    console.log(item)
    })
})