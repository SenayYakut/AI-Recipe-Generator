function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  console.log(response.data);
}
function generateRecipe(event) {
  event.preventDefault();
  let inputButton = document.querySelector("#input-button");
  console.log(inputButton);
  let contentButton = document.querySelector(".hidden");
  contentButton.classList.remove("hidden");

  contentButton.innerHTML = `<span class="generating">⏳Generating a recipe about ${inputButton.value}</span>`;
  let prompt = `provide a healthy recipe about ${inputButton.value} `;

  let context =
    "you are a great ai assistant , please provide me a healthy simple recipe in  5 lines, display the name of the recipe at the begining inside <strong></strong> element and give a </br> after";
  let apiKey = "7e3b4415c5b18tf300a062dfeo8d69f7";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}
recipeGeneratorElement = document.querySelector("#recipe-generator");
recipeGeneratorElement.addEventListener("submit", generateRecipe);
