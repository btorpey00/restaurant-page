import cheesePic from '../images/cheese.jpg';
import bbqChickenPic from '../images/bbqchicken.jpg';
import hawaiianPic from '../images/hawaiian.jpg';
import margheritaPic from '../images/margherita.jpg';
import pepporoniPic from '../images/pepporoni.jpg';
import sausagePic from '../images/sausage.jpg';
import supremePic from '../images/supreme.jpg';
import veggiePic from '../images/veggie.jpg';


const makeMenuItem = (title, description, picture) => {
    return {
        title,
        description,
        picture
    }
}

const cheese = makeMenuItem('Cheese', 'Our delicious cheese pizza is a timeless classic that features a crispy crust topped with a generous layer of rich tomato sauce and a blend of melted mozzarella and parmesan cheese.', cheesePic);
const bbqChicken = makeMenuItem('BBQ Chicken', 'Indulge in the smoky and sweet flavors of our BBQ chicken pizza! This delectable pizza features a crispy crust, smothered in tangy BBQ sauce and topped with succulent pieces of grilled chicken, red onions, and fresh cilantro.', bbqChickenPic);
const hawaiian = makeMenuItem('Hawaiian', 'Get ready for a tropical escape with our Hawaiian pizza! This delicious pizza is a customer favorite, featuring a crispy crust topped with a sweet and tangy tomato sauce, juicy slices of ham, and chunks of sweet and juicy pineapple. ', hawaiianPic);
const margherita = makeMenuItem('Margherita', 'Indulge in the simplicity and deliciousness of our classic Margherita pizza. Made with only the freshest ingredients, this pizza features a crispy crust topped with a vibrant tomato sauce, fresh mozzarella cheese, and fragrant basil leaves.', margheritaPic);
const pepporoni = makeMenuItem('Pepporoni', 'Get ready for a flavor explosion with our delicious Pepperoni pizza! This classic pizza variety features a crispy crust topped with a savory tomato sauce, a generous amount of melted mozzarella cheese, and delicious slices of spicy pepperoni sausage.', pepporoniPic);
const sausage = makeMenuItem('Sausage', 'Satisfy your hunger with our delicious Sausage pizza! This hearty pizza variety features a crispy crust, a savory tomato sauce, and a generous layer of melted mozzarella cheese, all topped off with flavorful slices of sausage.', sausagePic);
const supreme = makeMenuItem('Supreme', 'Indulge in the ultimate pizza experience with our delicious Supreme pizza! This hearty pizza variety is loaded with a savory tomato sauce, a generous layer of melted mozzarella cheese, and an assortment of toppings that includes savory slices of pepperoni, Italian sausage, green bell peppers, onions, and black olives.', supremePic);
const veggie = makeMenuItem('Veggie', 'Looking for a delicious and healthy pizza option? Look no further than our Veggie pizza! This delicious pizza features a crispy crust topped with a savory tomato sauce, a generous layer of melted mozzarella cheese, and a medley of fresh and flavorful vegetables. Our toppings include juicy mushrooms, crisp green bell peppers, ripe tomatoes, red onions, and black olives.', veggiePic);

const menuItems = [ cheese, pepporoni, bbqChicken, hawaiian, margherita, sausage, supreme, veggie];


export default function createMenu (){
    const menu = document.createElement('div');
    menu.className = 'menu';

    const menuTitle = document.createElement('h2');
    menuTitle.innerText = 'Menu';
    menuTitle.className='menu-title';
    menu.appendChild(menuTitle);
    
    for (let i = 0; i < menuItems.length; i++) {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'menu-item';
        menu.appendChild(itemContainer);

        const itemPic = document.createElement('img');
        itemPic.src = menuItems[i].picture;
        itemPic.setAttribute('alt', `Picture of ${menuItems[i].title} pizza`);
        itemContainer.appendChild(itemPic);

        const textContainer = document.createElement('div');
        textContainer.className = 'menu-text-container';
        itemContainer.appendChild(textContainer);

        const itemTitle = document.createElement('h3');
        itemTitle.innerText = menuItems[i].title;
        itemTitle.className = 'menu-item-title'
        textContainer.appendChild(itemTitle);

        const itemText = document.createElement('p');
        itemText.innerText = menuItems[i].description;
        itemText.className = 'menu-item-text'
        textContainer.appendChild(itemText);
    }


    return menu;
};

