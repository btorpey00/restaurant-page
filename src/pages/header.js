// export default function createHeader() {
//     const header = document.createElement('div');
//     header.className = 'header';
    
//     const logo = document.createElement('h1');
//     logo.className = 'logo';
//     logo.textContent= 'TorPizza';
//     header.appendChild(logo);
//     logo.addEventListener('click', (e) => console.log('Home'))
    
//     const headerList = document.createElement('ul');
//     headerList.className = 'header-list';
//     header.appendChild(headerList);

//     const links = ['Home', 'Menu', 'About', 'Contact'];

//     for (let i = 0; i < links.length; i++) {
//         const link = document.createElement('li');
//         link.className = 'nav-link';
//         link.textContent = links[i];
//         headerList.appendChild(link);
//         link.addEventListener('click', (e) => console.log(e.target.innerText))
//     }

//     return header;
// }
