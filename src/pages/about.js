export default function createAbout () {
    const about = document.createElement('div');
    about.className = 'about content';

    const aboutHeader = document.createElement('h2');
    aboutHeader.className = 'about-header content-header';
    aboutHeader.innerText = 'About TorPizza'
    about.appendChild(aboutHeader);

    const aboutText = document.createElement('p');
    aboutText.className = 'about-text content-text';
    aboutText.innerText = "Welcome to TorPizza, a pizza restaurant that offers delicious, handcrafted pizzas made with only the freshest ingredients. Our passion for pizza is evident in every slice, from the savory sauce to the perfect crust. \n\n At TorPizza, we believe that quality ingredients make all the difference. That's why we use only the finest ingredients, sourced from local farmers and suppliers whenever possible. We take pride in offering a variety of toppings, from classic pepperoni and cheese to unique and flavorful combinations that will excite your taste buds.\n\n At TorPizza, our goal is to provide a delicious and enjoyable dining experience that keeps our customers coming back for more. Come join us and taste the difference that quality ingredients and expert craftsmanship can make."
    about.appendChild(aboutText);

    return about;
}