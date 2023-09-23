/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Alejandro Malvacias";
let currentYear = 2023;
let profileImage = "./images/me.png";




/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('#home');






/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profileImage);







/* Step 5 - Array */

const favoriteFoods = ["Burger", "Arepa", "Chocolate"];
foodElement.textContent = favoriteFoods.join(', ');
const newFavoriteFood = "Cheese";
favoriteFoods.push(newFavoriteFood);
foodElement.textContent = favoriteFoods.join(', ');
favoriteFoods.shift();
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");
favoriteFoods.pop();
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");






