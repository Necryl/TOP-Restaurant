let bodyElement;
let contentElement;

let getInitialElements = () => {
    bodyElement = document.querySelector('body');
    contentElement = document.querySelector('#content');
}

let addHeaderFooter = () => {
    bodyElement.prepend(document.createElement('header'));
    
    let footer = document.createElement('footer');
    let author = document.createElement('div');
    let link = document.createElement('a');

    let href="https://github.com/Necryl"
    let target="_blank"

    link.setAttribute("href", href);
    link.setAttribute("target", target);

    link.innerText = "Necryl";
    author.textContent = "Created by";
    author.appendChild(link);
    footer.appendChild(author);
    bodyElement.appendChild(footer);
}

export default function initiate() {
    getInitialElements();
    addHeaderFooter();
}