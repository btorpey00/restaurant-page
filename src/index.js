import './style.css';
import createHome from './pages/home.js';
import createMenu from './pages/menu.js';
import createAbout from './pages/about.js';
import createContact from './pages/contact.js';

document.body.appendChild(createHeader());
document.body.appendChild(createHome());

function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';
    
    const logo = document.createElement('h1');
    logo.className = 'logo';
    logo.textContent= 'TorPizza';
    header.appendChild(logo);
    logo.addEventListener('click', function() {
        document.body.innerHTML = '';
        document.body.appendChild(createHeader());
        document.body.appendChild(createHome());
    });
    
    const headerList = document.createElement('ul');
    headerList.className = 'header-list';
    header.appendChild(headerList);

    const links = ['Home', 'Menu', 'About', 'Contact'];

    for (let i = 0; i < links.length; i++) {
        const link = document.createElement('li');
        link.className = 'nav-link';
        link.textContent = links[i];
        headerList.appendChild(link);
        link.addEventListener('click', function(e) {
            document.body.innerHTML = '';
            document.body.appendChild(createHeader());
            if(e.target.innerText === 'Home') {
                document.body.appendChild(createHome());
            }
            else if(e.target.innerText === 'Menu') {
                document.body.appendChild(createMenu());
            }
            else if(e.target.innerText === 'About') {
                document.body.appendChild(createAbout());
            }
            else if(e.target.innerText === 'Contact') {
                document.body.appendChild(createContact());
            }
        })
    }

    return header;
}


