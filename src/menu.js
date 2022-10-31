let menuElement = document.createElement('div');
menuElement.classList.add('menu');

let titleElement = document.createElement('h1');
titleElement.textContent = "Food Heaven Menu";
titleElement.classList.add("menu-title");
menuElement.appendChild(titleElement);

export default { title: "MENU", element: menuElement };