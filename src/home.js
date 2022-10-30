let homeElement = document.createElement('div').classList.add('home');
let bannerElement = document.createElement('div').classList.add('banner');
let cardElements = Array(3).fill(undefined).reduce((final, current) => {
    let card = document.createElement('div').classList.add('card');
    final.push(card);
    return final;
}, [])

let bannerText = document.createElement('h1');
bannerText.textContent = "Welcome to Food Heaven";
bannerElement.appendChild(bannerText);
homeElement.appendChild(bannerElement);