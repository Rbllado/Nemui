const selectedDrinkDiv = document.querySelector("#selectedDrink")
const searchByIdBaseUrl= "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const selectedDrink= JSON.parse(sessionStorage.selectedDrink)

console.log(selectedDrink);

axios.get(searchByIdBaseUrl+selectedDrink.idDrink)
    .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        // handle error
        console.log("error to find cocktails");
        
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    // const drinkDiv = document.createElement("div")
    // const drinkTitle = document.createElement("h3")
    // const drinkImg = document.createElement("img")

    // drinkTitle.innerHTML = sessionStorage.strDrink
    // // drinkImg.setAttribute("src", sessionStorage.strDrinkThumb)


    // drinkDiv.appendChild(drinkTitle)
    // drinkDiv.appendChild(drinkImg)

    // selectedDrink.appendChild(drinkDiv)