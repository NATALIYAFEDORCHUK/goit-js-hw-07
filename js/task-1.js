const categoriesEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
    const title = category.querySelector('.title').textContent;
    const elementsCount = category.querySelectorAll('.list .list-item').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});
