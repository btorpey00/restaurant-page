export default function createHome() {
    const home = document.createElement('div');
    home.className = 'home content';

    const homeHeader = document.createElement('h2');
    homeHeader.className = 'home-header content-header';
    homeHeader.innerText = 'Welcome to TorPizza';
    home.appendChild(homeHeader);

    const homeText = document.createElement('p');
    homeText.className = 'home-text content-text';
    homeText.innerText = 'TorPizza was created in 2023 as a fictional pizza restaurant for the restaurant page of The Odin Project.  The name is inspired from combining the last name of the creator (Torpey) with Pizza.';
    home.appendChild(homeText);

    return home;
}