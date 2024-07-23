function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: "new recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

recipeGeneratorElement = document.querySelector("#recipe-generator");
recipeGeneratorElement.addEventListener("submit", generateRecipe);
