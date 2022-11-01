let contactElement = document.createElement('div');
contactElement.classList.add('contact');

let titleElement = document.createElement('h1');
titleElement.classList.add('title');
titleElement.textContent = "Contact us:";
contactElement.appendChild(titleElement);

let formElement = document.createElement('form');
contactElement.appendChild(formElement);

let createLabel = (forAttr, text) => {
    let result = document.createElement('label');
    result.for = forAttr;
    result.textContent = text;
    return result;
}

formElement.appendChild(createLabel('name', 'Name: '));

let nameField = document.createElement('input');
nameField.type = 'text';
nameField.id = 'name';
nameField.name = 'name';
nameField.required = true;
formElement.appendChild(nameField);

formElement.appendChild(createLabel('email', 'Email: '));

let emailField = document.createElement('input');
emailField.type = 'email';
emailField.id = 'email';
emailField.name = 'email';
emailField.required = true;
formElement.appendChild(emailField);

formElement.appendChild(createLabel('message', 'Message: '));
let messageElement = document.createElement('textarea');
messageElement.id = 'message';
messageElement.name = 'message';
messageElement.required = true;
formElement.appendChild(messageElement);

let submitBtn = document.createElement('input');
submitBtn.type = 'submit';
submitBtn.text = 'Send';
formElement.appendChild(submitBtn);

export default { title: "CONTACT", element: contactElement };