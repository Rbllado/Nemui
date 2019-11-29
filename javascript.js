const searchByIdBaseUrl= "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const searchByIgredient = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
const button = document.querySelector("#get")
const input = document.querySelector("#input")
const form = document.querySelector("#get-form")


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!input.value) return;
    axios.get(searchByIgredient+input.value)
    .then(function (response) {
        // handle success
        console.log(response);
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
