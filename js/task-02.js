const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngredients = document.querySelector("#ingredients")
let array = [];
ingredients.forEach(ingredient => {
 const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");

  array.push(ingredientEl);

  
})
 allIngredients.append(...array);


