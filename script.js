const myLibrary = [];


//this object constructor allows to create a new book
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}



//this pushes the already created object into the library array
function addBookToLibrary(newBook) {
    
    myLibrary.push(newBook);
    
}


//when the person submits the form
const form = document.getElementById('new-log');

form.addEventListener("submit", function(event) {


    //HACER ESTO COGIENDO EL MÉTODO DE UN PROTOTIPO Y NO TENER QUE LLAMAR CADA VEZ AL BOOK
    let author = form['author'].value;
    let title = form['title'].value;
    let pages = form['pages'].value;
    let read = form['read'].checked;

    let newBook = new Book(author, title, pages, read);

    addBookToLibrary(newBook);

    console.log(myLibrary);

    event.preventDefault();

});



