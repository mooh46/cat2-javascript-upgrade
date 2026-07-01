//loop rendered dynamic content - lisy of items stored in a js array of objects
const featuredBooks = [
    {name:"The disease and The Cure" , author:"Ibn al-Qayyim", price: "Ksh 1200", img: "images/dc.jpg" },
    {name:"How to Purify Your Soul" , author:"", price: "Ksh 1000", img: "images/hps.jpg" },
    {name:"The Quest for love and mercy" , author:"Muhammad al-Jibali", price: "Ksh 2700", img: "images/l&m.jpg" }


    

];

// finding the empty div 
const  featuredGrid = document.getElementById("featured-grid");

//loop through each book object in the array
featuredBooks.forEach(function(book){
    //create a new article element
    const card =  document.createElement("article");
    //giving it class name
    card.className = "book-card";
    card.innerHTML = "<img src='"+ book.img +"' class='book-img'><h3>" + "<h3>" + book.name + "</h3><p>" + book.author + "</p><p>" + book.price + "</p>";
    featuredGrid.appendChild(card);
    

});


// Add and remove wishlist 
//so first we get the elements on the page by their id
const wishlistInput = document.getElementById("wishlist-input");
const wishlistBtn = document.getElementById("wishlist-btn");
const wishlistList = document.getElementById("wishlist-list");

//adding an event listener which tells us when the button is clicked
wishlistBtn.addEventListener("click", function() {
    // i am assigning whatvere the user type in to a variable
    const value = wishlistInput.value;
    
    if (value === "") return;

    //here we create a new list item
    const li = document.createElement("li");
    //put whatever the user typed into that list item
    li.textContent = value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(removeBtn);
    wishlistList.appendChild(li);
    wishlistInput.value = "";
});