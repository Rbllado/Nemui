const searchByIngredient= "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
const button = document.querySelector("#get")
const input = document.querySelector("#input")
const form = document.querySelector("#get-form")
const allCocktails = document.querySelector("#allCocktails")
var inSearch
var drinkId



form.addEventListener("submit", (e)=>{
    allCocktails.innerHTML = "";
    e.preventDefault();


    // prueba
    const searchedCocktailIngredient = document.createElement("span");
    const searchedThing = document.createElement("div");
    const hr = document.createElement("hr");
    searchedThingDiv.innerHTML = ""
    searchedCocktailIngredient.setAttribute("id", "cocktail-result")
    searchedCocktailIngredient.setAttribute("style", "margin:20px auto; display:block; text-align:center; color:white; font-style:22px")
    searchedCocktailIngredient.innerHTML = `${(input.value).toUpperCase()} COCKTAILS`;
    searchedThing.appendChild(searchedCocktailIngredient)
    searchedThing.appendChild(hr)
    searchedThingDiv.appendChild(searchedThing)






    if(!input.value) return;
    console.log(searchByIngredient+input.value);
    
    axios.get(searchByIngredient+input.value)
    .then(function (response) {
        // handle success
        // console.log(response.data.drinks);
        response.data.drinks.forEach(drink=>{
            
            const drinkDiv = document.createElement("div")
            const drinkTitle = document.createElement("h3")
            const drinkImg = document.createElement("img")
            const drinkLink = document.createElement("a")

            drinkTitle.innerHTML = drink.strDrink
            drinkImg.setAttribute("src", drink.strDrinkThumb)
            drinkLink.setAttribute("href", "result.html")
           
            

            drinkLink.appendChild(drinkTitle)
            drinkLink.appendChild(drinkImg)
            drinkDiv.appendChild(drinkLink)
  
            allCocktails.appendChild(drinkDiv)

            drinkDiv.addEventListener("click", e=>{
              sessionStorage.setItem ("selectedDrink", JSON.stringify(drink));
            })
        })
      })
      .catch(function (error) {
        // handle error
        console.log("error to find cocktails");
        
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

})


// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
