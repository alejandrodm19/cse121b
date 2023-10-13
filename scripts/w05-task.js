/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples"); 
const templeList = []; 


const displayTemples = (temples) => {
  
  temples.forEach((temple) => {
    
    const article = document.createElement("article"); 
    const h3 = document.createElement("h3"); 
    h3.textContent = temple.templeName; 
    const img = document.createElement("img"); 
    img.src = temple.imageUrl; 
    img.alt = temple.location; 

    article.appendChild(h3); 
    article.appendChild(img); 
    templesElement.appendChild(article); 
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  const data = await response.json();
  templeList.push(
    ...data.map((temple) => ({
      ...temple,
      dedicatedDate: new Date(temple.dedicated.replace(/,/, "")),
    }))
  );
  displayTemples(templeList);
};


/* reset Function */
const reset = () => {
  templesElement.innerHTML = ""; 
};

/* sortBy Function */
const sortBy = (temples) => { 
    reset(); 
    const filter = document.querySelector("#sortBy").value; 
    switch (filter) { 
        case "utah":
            displayTemples(temples.filter(t => t.location.includes("Utah"))); 
            break;
        case "notutah":
            displayTemples(temples.filter(t => !t.location.includes("Utah"))); 
            break;
        case "older":
            displayTemples(temples.filter(t => new Date(t.dedicatedDate) < new Date(1950, 0, 1))); 
            break;
        case "all":
            displayTemples(temples); 
            break;
    }
};


getTemples(); // Step 13

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
}); 
