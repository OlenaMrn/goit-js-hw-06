const categoriesEl = document.querySelector(`#categories`);

console.log(`Number of categories: ${categoriesEl.childElementCount}`);

const items = categories.querySelectorAll("li.item");


items.forEach((item) => {
    const headerElem = item.querySelector(`h2`);
   
    console.log(`Category: ${headerElem.textContent}`);

    const numberOfElements = item.querySelectorAll(`li`);
    
    console.log(`Elements: ${numberOfElements.length}`);
});


