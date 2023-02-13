const categoriesEl = document.querySelector(`#categories`);

console.log(`Number of categories: ${categoriesEl.childElementCount}`);

const items = categories.querySelectorAll("li.item");


items.forEach((item) => {
  const headerElem = item.firstElementChild;

  console.log(`Category: ${headerElem.textContent}`);

  const element = item.firstElementChild.nextElementSibling;
  const elementsCount = element.childElementCount;

  console.log(`Elements: ${elementsCount}`);
});


