//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...
let newDiv;
let newButton;
let newClass;
let brand;
let item;
let price;
let button;

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

disclaimer.innerHTML = finePrint;


//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
brand1.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 
item1.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.
price1.innerHTML = '$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
discount1.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.
newDiv = document.createElement('div');
newDiv.id = 'item2';
newDiv.innerHTML = "Hendrick's Gin";
brand2.appendChild(newDiv);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.
newDiv = document.createElement('div');
newDiv.id = 'price2';
newDiv.innerHTML = '$34.99';
brand2.appendChild(newDiv);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.
newButton = document.createElement('button');
newButton.id = 'discount3';
newButton.innerHTML = '50% OFF Axe body soap!';
newClass = document.querySelectorAll('.block3');
newClass[0].appendChild(newButton);
// newClass.forEach(event => {
//     event.appendChild(newButton)
// })

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
newClass = document.querySelectorAll('.item');
newClass[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.
newButton = document.createElement('button');
newButton.className = 'discount';
newButton.innerHTML = 'Free T-shirt and fortune cookie with purchase!'
newClass = document.querySelectorAll('.block1');
newClass[1].appendChild(newButton);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.
newClass = document.querySelectorAll('.brand');
newClass[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
newClass = document.querySelectorAll('.price');
newClass[1].innerHTML = '10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
newDiv = document.createElement('div');
newDiv.className = 'brand';
newDiv.innerHTML = "Hifiman Shangri-La";
newClass = document.querySelectorAll('.block3');
newClass[1].appendChild(newDiv);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
newDiv = document.createElement('div');
newDiv.className = 'item';
newDiv.innerHTML = "Electronstatic Headphones";
newClass[1].appendChild(newDiv);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
newDiv = document.createElement('div');
newDiv.className = 'price';
newDiv.innerHTML = "$18,000";
newClass[1].appendChild(newDiv);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.
newButton = document.createElement('button');
newButton.className = 'discount';
newButton.innerHTML = 'Free Barry Manilow CD with purchase!'
newClass[1].appendChild(newButton);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!
newClass = document.querySelectorAll('.block1');
newClass[2].children[2].innerHTML = 'H&M';
newClass[2].children[3].innerHTML = 'Unicorn-Head Slippers';
newClass[2].children[4].innerHTML = '$21.99';
newClass[2].children[5].innerHTML = 'Free knee-high tube socks with purchase!'
//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
newClass = document.querySelectorAll('.block2');
newClass[2].children[2].innerHTML = 'Frito Lay';
newClass[2].children[3].innerHTML = "Poppin' Jalapeno Doritos";
newClass[2].children[4].innerHTML = '$7.77';
newClass[2].children[5].innerHTML = '33% OFF any 6pack Budweiser or Bud Light';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!
newClass = document.querySelectorAll('.block3');
newClass[2].children[2].innerHTML = 'Any Dog Breeder';
newClass[2].children[3].innerHTML = 'Baby Puggy';
newClass[2].children[4].innerHTML = 'priceless';
newClass[2].children[5].innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.
brand = makeElem('div', 'brand', 'Grey Mart');
item = makeElem('div', 'item', 'Grey Food');
price = makeElem('div', 'price', 'Tree Fiddy');
button = makeElem('button', 'discount', 'No discount');
newClass[3].appendChild(brand);
newClass[3].appendChild(item);
newClass[3].appendChild(price);
newClass[3].appendChild(button);

newClass = document.querySelectorAll('.block2');
brand = makeElem('div', 'brand', 'Dole');
item = makeElem('div', 'item', 'Golden Banana');
price = makeElem('div', 'price', 'A Lot');
button = makeElem('button', 'discount', 'Buy 1 get 1 free!');
var newImg = newClass[3].querySelector('img');
newImg.src = 'https://www.jonathanadler.com/on/demandware.static/-/Sites-catalog-master/default/dw2ea96c2b/hi-res/ushi-res/brass_banana.jpg';
newClass[3].appendChild(brand);
newClass[3].appendChild(item);
newClass[3].appendChild(price);
newClass[3].appendChild(button);

newClass = document.querySelectorAll('.block1')
newImg = newClass[3].querySelector('img');
newImg.src = 'https://www.theuncomfortable.com/wp-content/uploads/2017/05/thick_set_02_p-1024x687.jpg';
newClass[3].children[2].innerHTML = 'Fat Silver';
newClass[3].children[3].innerHTML = 'Fat Set';
newClass[3].children[4].innerHTML = '1 Silver';
newClass[3].children[5].innerHTML = '1 per customer';


function makeElem(elem, label, info){
    let elemBox = document.createElement(elem);
    elemBox.className = label;
    elemBox.innerHTML = info;
    return elemBox;
}