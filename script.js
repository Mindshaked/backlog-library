const myLibrary = [];


//this object constructor allows to create a new book
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.position = myLibrary.length + 1;
}



//this pushes the already created object into the library array
function addBookToLibrary(newBook) {
    
    myLibrary.push(newBook);
    
}

function removeBookFromLibrary(bookIndex) {
    myLibrary.splice(bookIndex, 1)
}


//when the person submits the form
const form = document.getElementById('new-log');

form.addEventListener("submit", function(event) {

    let author = form['author'].value;
    let title = form['title'].value;
    let pages = form['pages'].value;
    let read = form['read'].checked;

    let newBook = new Book(author, title, pages, read);

    addBookToLibrary(newBook);

    console.log(myLibrary);

    event.preventDefault();

    showLog(newBook);

    
    
 

    
});






// function that erase all books

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



//Function that displays all the books again

function showLog(){
    
    

    const logSection = document.getElementById("wrapper");
    removeAllChildNodes(logSection);

    for (let i= 0; i < myLibrary.length; i++){
    

    const card = document.createElement("div");
    card.className = 'card';
    const title = document.createElement("div");
    title.className = 'card-title';
    const author = document.createElement("div");
    author.className = 'card-author';
    const pages = document.createElement("div");
    pages.className = 'card-pages';
    const read = document.createElement("div");
    read.className = 'card-read';
    const eraseButton = document.createElement("button")
    eraseButton.className = 'erase-button';

   
    author.innerText = "author: " + myLibrary[i].author; 
    title.innerText = "title: " + myLibrary[i].title;
    pages.innerText = "n. of pages: " + myLibrary[i].pages;
    read.innerText = "read or not: " + myLibrary[i].read;
    eraseButton.innerText = "X";

    eraseButton.addEventListener('click', function(event) {
        let bookIndex = myLibrary.position;
        removeBookFromLibrary(bookIndex);
        removeAllChildNodes(logSection);
        showLog();
    });
    

    logSection.appendChild(card);
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(eraseButton)
    }
}

