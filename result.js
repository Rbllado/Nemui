const selectedDrinkDiv = document.querySelector("#selectedDrink")
const searchByIdBaseUrl= "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const selectedDrink= JSON.parse(sessionStorage.selectedDrink)

console.log(selectedDrink);

axios.get(searchByIdBaseUrl+selectedDrink.idDrink)
    .then(function (selectedDrinkData) {
        console.log(selectedDrinkData.data.drinks[0]);
        var selectedDataForTrue = selectedDrinkData.data.drinks[0];
        
        
        const divTitle = document.createElement("div")
        
        const drinkTitle = document.createElement("h3")
        const drinkType = document.createElement("h4")

        const div2 = document.createElement("div")
        const drinkImg = document.createElement("img")

        const div3 = document.createElement("div")

        const ingredients = document.createElement("div")
        const ingredientsTitle = document.createElement("h3")


        for (let i=1; i<16; i++){
            if (selectedDataForTrue[`strIngredient${i}`]) {
                const ingredientCocktail = document.createElement("p")
                const measure = document.createAttribute("span")
                div3.appendChild(ingredientCocktail)
                div3.appendChild(measure)
            }
        }
        



        const instructions = document.createElement("div")
        const information = document.createElement("div")



        const drinkIngredient = document.createElement("p")

    
        drinkTitle.innerHTML = selectedDataForTrue.strDrink
        drinkType.innerHTML = selectedDataForTrue.strAlcoholic

        drinkImg.setAttribute("src", selectedDataForTrue.strDrinkThumb)
    


        divTitle.appendChild(drinkTitle)
        divTitle.appendChild(drinkType)

        div2.appendChild(drinkImg)
        div2.appendChild(div3)

        selectedDrinkDiv.appendChild(divTitle)
        selectedDrinkDiv.appendChild(div2)


        
    
      })
      .catch(function (error) {
        // handle error
        console.log("error to find cocktails");
        
        console.log(error);
      })
      .finally(function () {
        // always executed
      });