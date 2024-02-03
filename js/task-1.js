const items = document.querySelectorAll('li.item');
console.log('Number of categories:', items.length);

const text = document.querySelectorAll('h2');

const words = text.forEach(elem => {
    console.log('Category:', elem.textContent);
    console.log('Elements:', elem.nextElementSibling.children.length);
});

