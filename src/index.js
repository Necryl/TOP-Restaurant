import initiate from "./initiate.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import style from "./style.css";

const mainElements = initiate();

let createBTN = (text) => {
  let result = document.createElement("button");
  result.textContent = text;
  return result;
};

let pages = [home, menu, contact];
pages = pages.reduce((final, current) => {
  final.push({
    name: current.title,
    btn: createBTN(current.title),
    element: current.element,
  });
  return final;
}, []);

let viewPage = (pageTitle) => {
    pages.forEach(page => {
        if (pageTitle === page.name) {
            page.element.style.display = 'grid';
        } else {
            page.element.style.display = 'none';
        }
    });
}

pages.forEach((page) => {
    page.btn.addEventListener('click', () => {
        viewPage(page.name);
    });
  mainElements.header.appendChild(page.btn);
  mainElements.content.appendChild(page.element);
});


viewPage("HOME");