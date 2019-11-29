const selectedDrinkDiv = document.querySelector("#selectedDrink");
const searchByIdBaseUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const selectedDrink = JSON.parse(sessionStorage.selectedDrink);
console.log(searchByIdBaseUrl + selectedDrink.idDrink);

const form = document.querySelector("#get-form")


form.addEventListener("submit", e => {
    allCocktails.innerHTML = "";
    e.preventDefault();
    if (!input.value) return;
    console.log(searchByIngredient + input.value);
  
    axios
      .get(searchByIngredient + input.value)
      .then(function(response) {
        // handle success
        // console.log(response.data.drinks);
        response.data.drinks.forEach(drink => {
          const drinkDiv = document.createElement("div");
          const drinkTitle = document.createElement("h3");
          const drinkImg = document.createElement("img");
          const drinkLink = document.createElement("a");
  
          drinkTitle.innerHTML = drink.strDrink;
          drinkImg.setAttribute("src", drink.strDrinkThumb);
          drinkLink.setAttribute("href", "result.html");
  
          drinkLink.appendChild(drinkTitle);
          drinkLink.appendChild(drinkImg);
          drinkDiv.appendChild(drinkLink);
  
          allCocktails.appendChild(drinkDiv);
  
          drinkDiv.addEventListener("click", e => {
            sessionStorage.setItem("selectedDrink", JSON.stringify(drink));
          });
        });
      })
      .catch(function(error) {
        // handle error
        console.log("error to find cocktails");
  
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  });
  

axios
  .get(searchByIdBaseUrl + selectedDrink.idDrink)
  .then(function(selectedDrinkData) {
    console.log(selectedDrinkData.data.drinks[0]);
    var selectedDataForTrue = selectedDrinkData.data.drinks[0];

    const divTitle = document.createElement("div");

    const drinkTitle = document.createElement("h2");

    const div2 = document.createElement("div");
    div2.classList.add("cocktail-details");
    div2.classList.add("row");

    const divImg = document.createElement("div");
    divImg.classList.add("coktail-img-container");
    divImg.classList.add("col-md-6");

    const drinkImg = document.createElement("img");
    drinkImg.classList.add("cocktail-img");
    drinkImg.setAttribute("src", selectedDataForTrue.strDrinkThumb);
    divImg.appendChild(drinkImg);

    const div3 = document.createElement("div");
    div3.classList.add("col-md-6");

    const div4 = document.createElement("div");

    const ingredients = document.createElement("article");
    ingredients.classList.add("cocktail-detail");

    //TYPE
    const drinkType = document.createElement("span");
    drinkType.classList.add("is-alcoholic");
    drinkType.innerHTML = selectedDataForTrue.strAlcoholic;
    div3.appendChild(drinkType);

    //INGREDIENTS
    const ingredientsTitle = document.createElement("p");
    ingredientsTitle.classList.add("cocktail-detail__title");
    ingredientsTitle.innerHTML = "Ingredients";

    ingredients.appendChild(ingredientsTitle);
    for (let i = 1; i < 16; i++) {
      if (selectedDataForTrue[`strIngredient${i}`]) {
        ingredientsTitle.classList.add("cocktail-detail__title");
        const ingredientCocktail = document.createElement("p");
        ingredientCocktail.classList.add("cocktail-detail__item");

        ingredientCocktail.innerHTML =
          selectedDataForTrue[`strIngredient${i}`] +
          " - " +
          selectedDataForTrue[`strMeasure${i}`];
        // const measure = document.createAttribute("span")
        ingredients.appendChild(ingredientCocktail);
        // div3.appendChild(measure)
      }
    }
    div3.appendChild(ingredients);

    //GLASS
    const glass = document.createElement("article");
    glass.classList.add("cocktail-detail");
    const glassTitle = document.createElement("p");
    glassTitle.classList.add("cocktail-detail__title");
    const glassType = document.createElement("p");
    glassType.classList.add("cocktail-detail__item");

    glassTitle.innerHTML = "Served in: ";
    glassType.innerHTML = selectedDataForTrue.strGlass;
    glass.appendChild(glassTitle);
    glass.appendChild(glassType);

    div3.appendChild(glass);

    const instructions = document.createElement("article");
    instructions.classList.add("cocktail-detail");

    const instructionsTitle = document.createElement("p");
    instructionsTitle.classList.add("cocktail-detail__title");
    instructionsTitle.innerHTML = "Instructions";
    instructions.appendChild(instructionsTitle);

    const instruction = document.createElement("p");
    instruction.innerHTML = selectedDataForTrue.strInstructions;
    instructions.appendChild(instruction);

    drinkTitle.innerHTML = selectedDataForTrue.strDrink;

    divTitle.appendChild(drinkTitle);

    div2.appendChild(divImg);
    div2.appendChild(div3);

    selectedDrinkDiv.appendChild(divTitle);
    selectedDrinkDiv.appendChild(div2);
    selectedDrinkDiv.appendChild(instructions);
  })
  .catch(function(error) {
    // handle error
    console.log("error to find that cocktail");

    console.log(error);
  })
  .finally(function() {
    // always executed
  });

