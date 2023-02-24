export default function createContact() {
    const contact = document.createElement('div');
    contact.className = 'contact content';

    const contactHeader = document.createElement('h2');
    contactHeader.className = 'contact-header content-header';
    contactHeader.innerText = 'Contact TorPizza'
    contact.appendChild(contactHeader);

    const contactText = document.createElement('p');
    contactText.className = 'contact-text content-text';
    contactText.innerText = 'Come visit us at: \n 1234 Main St \n Rockford, MI 49341 \n\n\n Call us at: \n (555)-616-7119'
    contact.appendChild(contactText);

    return contact;
}