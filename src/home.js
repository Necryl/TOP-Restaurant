import drinksPic from "./images/drinks.jpg";
import pancakesPic from "./images/pancakes.jpg";
import platterPic from "./images/platter.jpg";
import saladPic from "./images/salad.jpg";

let homeElement = document.createElement("div");
homeElement.classList.add("home");
let bannerElement = document.createElement("div");
bannerElement.classList.add("banner");
let cardElements = Array(4)
  .fill(undefined)
  .reduce((final, current) => {
    let card = document.createElement("div");
    card.classList.add("card");
    final.push(card);
    return final;
  }, []);

let createImg = (sourcePath, description) => {
  let result = document.createElement("img");
  result.src = sourcePath;
  result.alt = description;
  return result;
};
let drinksElement = createImg(drinksPic, "Friends having drinks and fun");
let pancakesElement = createImg(pancakesPic, "sugary pancake yumminess");
let platterElement = createImg(
  platterPic,
  "A plater of all sorts of tasty goodness"
);
let saladElement = createImg(saladPic, "Scrumptious salad");

let bannerText = document.createElement("h1");
bannerText.textContent = "Welcome to Food Heaven";
bannerElement.appendChild(bannerText);
homeElement.appendChild(bannerElement);

let createP = (text) => {
  let result = document.createElement("p");
  result.textContent = text;
  return result;
};
cardElements[0].appendChild(platterElement);
cardElements[0].appendChild(createP("Satisfy all of your foodie desires"));

cardElements[1].appendChild(createP("Get immersed in sugary goodness!"));
cardElements[1].appendChild(pancakesElement);

cardElements[2].appendChild(saladElement);
cardElements[2].appendChild(
  createP("Discover the harmony between healthy food and deliciousness")
);

cardElements[3].appendChild(drinksElement);
cardElements[3].appendChild(createP("Make memories with your loved ones"));

cardElements.forEach((element) => {
  homeElement.appendChild(element);
});

homeElement.style.display = 'none';

export default { title: "HOME", element: homeElement };
