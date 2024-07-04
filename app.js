// var collection = Array.from(document.getElementsByClassName('container'));
// // console.log(collection);
//  var contentToAdd =`
// <p>This is my CSS practice Day_1,wanted to clear the concepts and dive deeper into Css!</p>
//     <div class="btn">
//         <button>Click me!</button>
//     </div>
// `
// const rept = 3;
// collection.forEach(function(ele){
//     const combinedHTML ="";
//     for(i =0; i<rept.length;i++){
//         combinedHTML+=contentToAdd
//     }
//     ele.innerHTML =combinedHTML

// })

// var collection = Array.from(document.getElementsByClassName('container'));
// var contentToAdd = `
//     <p>This is my CSS practice Day_1, wanted to clear the concepts and dive deeper into CSS!</p>
//     <div class="btn">
//         <button>Click me!</button>
//     </div>`;

// var repetitions = 4; // Number of times you want to display the content within each container

// collection.forEach(function(element) {
//     let combinedHTML = ''; // Initialize an empty string to concatenate HTML content
    
//     // Append the content multiple times
//     for (var j = 0; j < repetitions; j++) {
//         combinedHTML += contentToAdd;
//     }

//     // Set the combined HTML content into the current container element
//     element.innerHTML = combinedHTML;

//     // Log the current element to the console for debugging purposes
//     console.log(element);
// });





// script.js

// Data for cards (example data, you can replace this with your own)
const cardData = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
    // Add more card data as needed
];

// Function to create a card element
function createCard(title, description) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    return card;
}

// Get the container to hold the cards
const cardContainer = document.getElementById('card-container');

// Loop through the card data and create cards
cardData.forEach(data => {
    const card = createCard(data.title, data.description);
    cardContainer.appendChild(card);
});






