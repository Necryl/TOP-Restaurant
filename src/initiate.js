let bodyElement;
let contentElement;
let headerElement;

let getInitialElements = () => {
    bodyElement = document.querySelector('body');
    contentElement = document.createElement('div');
    contentElement.setAttribute("id", "content");
    bodyElement.appendChild(contentElement);
}

let addHeaderFooter = () => {
    headerElement = document.createElement('header');
    bodyElement.prepend(headerElement);
    
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
    return {
        body: bodyElement,
        header: headerElement,
        content: contentElement,
    }
}