export default function createHome() {
    const home = document.createElement('div');
    home.className = 'home';

    const homeHeader = document.createElement('h2');
    homeHeader.className = 'home-header';
    homeHeader.innerText = 'Welcome to TorPizza';
    home.appendChild(homeHeader);

    const homeText = document.createElement('p');
    homeText.className = 'home-paragraph';
    homeText.innerText = 'Here at TorPizza, we serve the freshest and most delicious pizzas on Earth. Come in today to experience this mind-blowing pizza';
    home.appendChild(homeText);

    return home;
}