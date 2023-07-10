const bossUrl = "http://localhost:3000/data"

let bossArray = []

const getCharacters = (url) => {
    fetch(url)
    .then(response => response.json()) 
    .then(characters => {
        characters.forEach(character => bossArray.push(character))
        characterList(bossArray)
    })
}

let bossAttributes = {name: [], region: [], description: [], location: []}

const createObjectOfCharacterValues = () => {
    for(let index in bossArray) {
        let characterInfo = bossArray[index]
        for (let charKey in characterInfo) {
            if(charKey !== "id" && charKey !== "name" && charKey !== "image") {
                let attValue = bossAttributes[charKey]
                let objAtKey = characterInfo[charKey]
                let infoOption = attValue.find(element => element === objAtKey)
                if (infoOption === undefined) {
                    attValue.push(objAtKey)
                }
            }
        }
    }
}