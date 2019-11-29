const searchByIdBaseUrl= "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const searchByIgredient = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
const button = document.querySelector("#get")
const input = document.querySelector("#input")
const form = document.querySelector("#get-form")
const allCocktails = document.querySelector("#allCocktails")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!input.value) return;
    console.log(searchByIgredient+input.value);
    
    axios.get(searchByIgredient+input.value)
    .then(function (response) {
        // handle success
        console.log(response.data.drinks);
        response.data.drinks.forEach(drink=>{
            console.log("drink");
            
            const drinkDiv = document.createElement("div")
            const drinkTitle = document.createElement("h3")
            const drinkImg = document.createElement("img")

            drinkTitle.innerHTML = drink.strDrink
            drinkImg.setAttribute("src", drink.strDrinkThumb)

            drinkDiv.appendChild(drinkTitle)
            drinkDiv.appendChild(drinkImg)


            allCocktails.appendChild(drinkDiv)
        })
      })
      .catch(function (error) {
        // handle error
        console.log("HIIIIIIIii");
        
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

})


// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
