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

var collection = Array.from(document.getElementsByClassName('container'));
var contentToAdd = `
    <p>This is my CSS practice Day_1, wanted to clear the concepts and dive deeper into CSS!</p>
    <div class="btn">
        <button>Click me!</button>
    </div>`;

var repetitions = 3; // Number of times you want to display the content within each container

collection.forEach(function(element) {
    let combinedHTML = ''; // Initialize an empty string to concatenate HTML content
    
    // Append the content multiple times
    for (var j = 0; j < repetitions; j++) {
        combinedHTML += contentToAdd;
    }

    // Set the combined HTML content into the current container element
    element.innerHTML = combinedHTML;

    // Log the current element to the console for debugging purposes
    console.log(element);
});





