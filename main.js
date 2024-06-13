const coffeeBlends = [
    "Iced Americano",
    "Hot Espresso",
    "Iced Latte",
    "Hot Cappuccino",
    "Iced Mocha",
    "Hot Flat White"
];

// Array of unique IDs for each coffee blend
 const coffeeIDs = [
    101,
    102,
    103,
    104,
    105,
    106
];

// Array of prices for each coffee blend
 const coffeePrices = [
    3.50, // Price for Iced Americano
    2.50, // Price for Hot Espresso
    4.00, // Price for Iced Latte
    3.75, // Price for Hot Cappuccino
    4.50, // Price for Iced Mocha
    3.25  // Price for Hot Flat White
];

 const coffeeStocks = [
    20, 
    15, 
    25, 
    10, 
    30, 
    12  
];


let pizzaMenuItems = [
    { id: 1008, name: "Tapa Pizza", price: 172.5, image: "tapaPizza.JPEG" },
    { id: 1009, name: "Taco Pizza", price: 172.5, image: "tacopizza.jpg" },
    { id: 1010, name: "Hawaiian Pizza", price: 172.5, image: "hawaiian.webp" },
    { id: 1011, name: "Cheese Pizza", price: 172.5, image: "cheese-pizza.jpg" },
    { id: 1012, name: "Ham & Cheese Pizza", price: 172.5, image: "hamcheese.jpg" }
        
    ];

let snackAppetizerMenuItems = [
    { id: 1013, name: "Buttermilk Toast", price: 40.25, image: "buttermilktoast.jpg" },
    { id: 1014, name: "Baked Mac", price: 80.5, image: "bakedmac.jpeg" },
    { id: 1015, name: "Carbonara", price: 115, image: "carbornara.jpeg" },
    { id: 1016, name: "Tacos", price: 80.5, image: "tacos.jpg" },
    { id: 1017, name: "Spaghetti", price: 97.75, image: "spaghetti.jpeg" },
    { id: 1018, name: "Egg Sandwich", price: 69, image: "eggsandwich.webp" },
    { id: 1019, name: "Ham & Egg Sandwich", price: 80.5, image: "hamandegg.jpg" },
    { id: 1020, name: "Fish & Chips", price: 201.25, image: "fishnchips.jpg" },
    { id: 1021, name: "Chicken in a Basket", price: 195.5, image: "chicken-in-a-basket.jpeg" },
    { id: 1022, name: "French Fries", price: 69, image: "fries.jpg" },
    { id: 1023, name: "Fried Tofu", price: 115, image: "friedtofu.jpg" },
    { id: 1024, name: "Mocha Buttermilk Toast", price: 46, image: "mochabuttermiltoast.jpeg" }
    ];


    let riceMealMenuItems = [
        { id: 1001, name: "Beef Tapa w. Rice", price: 115, image: "beeftapaWrice.jpg" },
        { id: 1002, name: "Pork Tocino w. Rice", price: 115, image: "porktocinowithrice.jpeg" },
        { id: 1003, name: "Chicken Tocino w. Rice", price: 115, image: "chicken-tocino.webp" },
        { id: 1004, name: "Chicken Longganisa w. Rice", price: 115, image: "chickenlongganisa.jpeg" },
        { id: 1005, name: "Honey Chicken w. Rice", price: 155.25, image: "honeychickenwithrice.jpeg" },
        { id: 1006, name: "Pork Chop w. Rice", price: 166.75, image: "porkchop-with-rice.jpeg" },
        { id: 1007, name: "Fried Bangus w. Rice", price: 166.75, image: "bangus.jpeg" },
        { id: 1111, name: "Fried hotdog w. Rice", price: 200.75, image: "bangus.jpeg" }
        ];


        let extrasMenuItems = [
        { id: 1025, name: "Caesar Salad", price: 97.75, image: "" },
        { id: 1026, name: "Extra Plain Rice", price: 28.75, image: "" },
        { id: 1027, name: "Rice w/ Egg", price: 46, image: "" },
        { id: 1028, name: "Garlic Rice", price: 40.25, image: "" },
        { id: 1029, name: "Pink Ice", price: 82.8, image: "" },
        { id: 1030, name: "Buttermilk Spread", price: 138, image: "" }
         ];
        
        let drinkMenuItems = [
            { id: 1031, name: "Iced Tea", price: 63.25, image: "" },
            { id: 1032, name: "Bottled Water", price: 34.5, image: "" },
            { id: 1033, name: "Cucumber", price: 63.25, image: "" },
            { id: 1034, name: "Lemonade", price: 63.25, image: "" },
            { id: 1035, name: "Root Beer Float", price: 132.25, image: "" }
        ];

        let milkteaMenuItems =[
            { id: 1036, name: "Chocolate Milk Tea", price: 115, image: "" },
            { id: 1037, name: "Wintermelon", price: 115, image: "" },
            { id: 1038, name: "Okinawa Large", price: 115, image: "" },
            { id: 1039, name: "Taro Large", price: 115, image: "" },
            { id: 1040, name: "Hokkaido Large", price: 115, image: "" },
            { id: 1041, name: "Classic Milk Tea", price: 103.5, image: "" }
        ];

        let icedCoffeeMenuItems = [
            { id: 1042, name: "Iced Cafe Latte", price: 128.8, image: "" },
            { id: 1043, name: "Iced White Mocha", price: 181.7, image: "" },
            { id: 1044, name: "Iced Vanilla", price: 166.75, image: "" }
        ];

        let frappeMenuItems = [
            { id: 1045, name: "White Mocha Frappe", price: 181.7, image: "" },
            { id: 1046, name: "Mocha Frappe", price: 181.7, image: "" },
            { id: 1047, name: "Frozen Coffee Coolers", price: 155.25, image: "" },
            { id: 1048, name: "Cookies n' Cream Frappe", price: 195.5, image: "" }
        ];

        let shakesMenuItems = [
            { id: 1049, name: "Four Season Shake", price: 63.25, image: "" },
            { id: 1050, name: "Mango Burst Shake", price: 115, image: "" },
            { id: 1051, name: "Chocolate Shake", price: 103.5, image: "" }
        ];




    const thePizzaContainer = document.getElementById('pizza-container');

    pizzaMenuItems.forEach((item,index)=> {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("food-box");

        const foodImage = document.createElement('img');
        foodImage.src = `assets/${item.image}`;
        foodImage.alt = `${item.name}`;
        foodImage.classList.add("food-image-class");
        
        const foodId = document.createElement('p');
        foodId.classList.add("food-name-class");
        foodId.textContent= item.id;

        const foodName = document.createElement('p');
        foodName.classList.add("food-name-class");
        foodName.textContent= item.name;


        const foodPrice = document.createElement('p');
        foodPrice.classList.add("food-price-class");
        let textContentForPrice = `${item.price} Php`;
        foodPrice.textContent = textContentForPrice;
        
        const addButton = document.createElement('button');
        addButton.textContent = "Add order";

        itemDiv.appendChild(foodImage);
        // itemDiv.appendChild(foodId);
        itemDiv.appendChild(foodName);
        itemDiv.appendChild(foodPrice);
        itemDiv.appendChild(addButton);

        thePizzaContainer.appendChild(itemDiv);

        });

    const riceMealContainer = document.getElementById('rice-meal-container');

    riceMealMenuItems.forEach((item,index)=> {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("food-box");

        const foodImage = document.createElement('img');
        foodImage.src = `assets/${item.image}`;
        foodImage.alt = `${item.name}`;
        foodImage.classList.add("food-image-class");
        
        const foodId = document.createElement('p');
        foodId.classList.add("food-name-class");
        foodId.textContent= item.id;

        const foodName = document.createElement('p');
        foodName.classList.add("food-name-class");
        foodName.textContent= item.name;


        const foodPrice = document.createElement('p');
        foodPrice.classList.add("food-price-class");
        let textContentForPrice = `${item.price} Php`;
        foodPrice.textContent = textContentForPrice;
        
        const addButton = document.createElement('button');
        addButton.textContent = "Add order";
        
        addButton.addEventListener('click', function(){
            const itemFoodName = item.name;
            const itemFoodID = item.id;
            const itemFoodPrice = item.price;
            const index = riceMealMenuItems.findIndex(menuItem => menuItem.id === item.id);

            addOrderToList(itemFoodID, itemFoodName, itemFoodPrice, index);
        })


        itemDiv.appendChild(foodImage);
        // itemDiv.appendChild(foodId);
        itemDiv.appendChild(foodName);
        itemDiv.appendChild(foodPrice);
        itemDiv.appendChild(addButton);

        riceMealContainer.appendChild(itemDiv);

        });





    const snackAppetizerContainer = document.getElementById('snack-container');

    snackAppetizerMenuItems.forEach((item,index)=> {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("food-box");

        const foodImage = document.createElement('img');
        foodImage.src = `assets/${item.image}`;
        foodImage.alt = `${item.name}`;
        foodImage.classList.add("food-image-class");
        
        const foodId = document.createElement('p');
        foodId.classList.add("food-name-class");
        foodId.textContent= item.id;

        const foodName = document.createElement('p');
        foodName.classList.add("food-name-class");
        foodName.textContent= item.name;

        const foodValueTextBox = document.createElement('input');
        foodValueTextBox.classList.add('foodValueTextBox');
        foodValueTextBox.id = "foodValue";
        foodValueTextBox.value = item.id;
        foodValueTextBox.hidden = true;



        const foodPrice = document.createElement('p');
        foodPrice.classList.add("food-price-class");
        let textContentForPrice = `${item.price} Php`;
        foodPrice.textContent = textContentForPrice;
        
        const addButton = document.createElement('button');
        addButton.textContent = "Add order";
        addButton.classList.add ("addToOrderButtons");

        itemDiv.appendChild(foodImage);
        // itemDiv.appendChild(foodId);
        itemDiv.appendChild(foodName);
        itemDiv.appendChild(foodPrice);
        itemDiv.appendChild(addButton);
        itemDiv.appendChild(foodValueTextBox);

        snackAppetizerContainer.appendChild(itemDiv);

        });
        


    
    const addToOrderButtons = document.querySelectorAll('.addToOrderButtons');


    addToOrderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const foodBox = this.closest('.food-box');

            const inputField = foodBox.querySelector('.foodValueTextBox');
            const foodID = inputField.value;

            console.log(`Adding to order: ${foodID}`);

             addToList(foodID);
        })
    })

    function addToList(foodID){
        let listFoodContainer = document.querySelector(".ordered-food-position");
        
        if (!listFoodContainer) {
            console.error("List container not found");
            return;
        }

        let getIdItem = snackAppetizerMenuItems.find(item => item.id == foodID);

        if (!getIdItem) {
            console.error("Item not found");
            return;
        }

        let newPositionDiv = document.createElement('div');
        newPositionDiv.classList.add('order-item-row');
        let newPositionP = document.createElement('p');
        let newPositionPtwo = document.createElement('p');
        
        newPositionP.textContent = getIdItem.name;
        newPositionPtwo.textContent = `₱${getIdItem.price.toFixed(2)}`;

        newPositionDiv.appendChild(newPositionP);
        newPositionDiv.appendChild(newPositionPtwo);

        listFoodContainer.appendChild(newPositionDiv);
        
        
    }




let getIndexVariable;
let allOrderPrices = [];
let totalRevenue = 0;

// function orderedCoffee(index){
//     getIndexVariable = index;
//   let tbody = document.querySelector(".list_id");

//   let newRow = document.createElement("tr");

//   newRow.innerHTML = `
//     <th scope="row">${coffeeIDs[getIndexVariable]}</th>
//     <td>${coffeeBlends[getIndexVariable]}</td>
//     <td>$${coffeePrices[getIndexVariable]}</td>
//     <td>${coffeeStocks[getIndexVariable]}</td>
//     `;

//     tbody.appendChild(newRow);

//     temporaryPriceVar = coffeePrices[getIndexVariable];
//     allOrderPrices.push(temporaryPriceVar);


//     allOrderPrices.forEach(function(price){
//     totalRevenue += price;
//     console.log(`$${totalRevenue}`);
// })
// document.querySelector("#theTotalPrice").innerHTML = `$${totalRevenue}`;
// }
// let totalChange= 0;

// function getChange(){
//     customerPayment = document.getElementById("customerPayment").value;
//     customerPayment = parseInt(customerPayment);

//     if(customerPayment > totalRevenue){
//         totalChange = customerPayment - totalRevenue;
//         console.log(`The total change is $${totalChange}`);
//     }else{
//         console.log(`The payment amount is not sufficient`);
//     }



// }
// function computeAllOrder(){

// }

// temporaryPriceVar = 4.50;
// allOrderPrices.push(temporaryPriceVar);
// console.log(allOrderPrices);
// temporaryPriceVar = 6.75;
// allOrderPrices.push(temporaryPriceVar);
// console.log(allOrderPrices);
// let totalRevenue = 0;
// allOrderPrices.forEach(function(price){
//     totalRevenue += price;
//     console.log(totalRevenue);
// })