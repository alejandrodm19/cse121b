/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};


/* Populate Profile Object with placesLive objects */

myProfile.name = "Alejandro Malvacias";
myProfile.photo = "./w02-task/images/me.png";
myProfile.favoriteFoods = ["Pizza", "Arepa", "Chocolate"];
myProfile.hobbies = ["Reading", "Swimming", "Learn about code"];
myProfile.placesLived = [];

myProfile.placesLived.push({ place: "Colombia", length: "1 month" });
myProfile.placesLived.push({ place: "Panama", length: "1 month" });
myProfile.placesLived.push({ place: "Peru", length: "Comming soon" });



/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.getElementById("favorite-foods").appendChild(li);
});


/* Hobbies List */

myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.getElementById("hobbies").appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach((place) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;
  document.getElementById("places-lived").appendChild(dt);
  document.getElementById("places-lived").appendChild(dd);
});
