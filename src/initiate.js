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

    let createA = (text, href) => {
        let result = document.createElement('a');
        result.textContent = text;
        result.setAttribute("href", href);
        result.setAttribute("target", "_blank");
        return result;
    }
    
    let linkNecryl = createA("Necryl", "https://github.com/Necryl");

    author.textContent = "Created by ";
    author.appendChild(linkNecryl);
    author.append(document.createTextNode(' as part of '));
    author.append(createA("The Odin Project", "https://www.theodinproject.com"));
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