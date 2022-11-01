function importAll(r) {
  return r.keys().map(r);
}
const imagesURL = importAll(
  require.context("./images/menu/", false, /\.(png|jpe?g|svg|gif|webp|ico)$/)
);

let menuElement = document.createElement("div");
menuElement.classList.add("menu");

let titleElement = document.createElement("h1");
titleElement.textContent = "Food Heaven Menu";
titleElement.classList.add("title");
menuElement.appendChild(titleElement);

let getFoodName = (imgURL) => {
  let result = imgURL.split("/");
  return result[result.length - 1].split(".")[0];
};
const foodItems = imagesURL.reduce((final, current) => {
  final.push([getFoodName(current), current]);
  return final;
}, []);

let itemsElement = document.createElement("div");
itemsElement.classList.add("items-container");
menuElement.appendChild(itemsElement);

let createFoodCard = ([name, url]) => {
  let result = document.createElement("div");
  result.classList.add("food-card");
  let image = document.createElement("img");
  image.alt = name;
  image.src = url;
  let text = document.createElement("h3");
  text.textContent = name;
  result.appendChild(image);
  result.appendChild(text);
  return result;
};
foodItems.forEach((item) => {
  itemsElement.appendChild(createFoodCard(item));
});

export default { title: "MENU", element: menuElement };
