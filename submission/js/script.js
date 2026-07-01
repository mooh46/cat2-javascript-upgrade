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