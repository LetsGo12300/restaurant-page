function addMenu(){
    let mainContent = document.querySelector('.main-content');

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Exquisite Japanese Menu';
    mainContent.appendChild(menuTitle);

    createMenu('Set A - Omakase', 'Seasonal Apetizer, 2 kinds seasonal sashimi with garnish, big prawn and scallop, tofu steak, garlic fried rice', 'Php 2,700');

    createMenu('Set B - Sakura', 'Seasonal Apetizer, 2 kinds seasonal sashimi with garnish, Lobster in soy and butter sauce, seaweed with eel, US Black Angus Tenderloin Steak (100g), matcha ice cream', 'Php 3,800');

    createMenu('Set C - Kaiseki', 'Seasonal Apetizer, 3 kinds seasonal sashimi with garnish, fresh tofu with truffle ankake sauce, Lobster dashi red miso soup, unagi kabayaki, wagyu mini steak, Ogura ice cream', 'Php 5,200');

}

// set (title, description, price)
function createMenu(title, description, price){
    let mainContent = document.querySelector('.main-content');
    const menuItem = document.createElement('div');
    const menuSet = document.createElement('h3');
    menuSet.textContent = title;
    menuSet.classList.add('yellow-font');
    menuItem.appendChild(menuSet);
     
    const menuDescription = document.createElement('div');
    menuDescription.textContent = description;
    menuItem.appendChild(menuDescription);

    const menuPrice = document.createElement('div');
    menuPrice.textContent = price;
    menuItem.appendChild(menuPrice);

    mainContent.appendChild(menuItem);
}

export default addMenu;