const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridients = document.querySelector(`#ingredients`);
console.log(listIngridients);

const listItems = ingredients.map((ingredient) => { 

  const listEl = document.createElement(`li`);
  listEl.classList.add(`item`);
  
  
  const listElText = document.createElement(`p`);
  listElText.textContent = ingredient;
listEl.appendChild(listElText);
 
  return listEl;
 
});

// console.log(listItems);

listIngridients.append(...listItems);


