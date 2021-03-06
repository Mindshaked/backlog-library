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

    showForm();


    

    
});


// function to turn the value of read into a text.

function readOrNot(value){
    if (value.read == true){
        const read = "read";
        return read;
    } else {
        const notread = "not read";
        return notread;
    }
}

// function that erase all books

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


//register how many books are read

function countBooksRead(){

   const readCounter = document.getElementById("books-read");

   let booksRead = getOcurrence(myLibrary);

   readCounter.innerText = booksRead;

   console.log(booksRead)
}


// Button to check a book as read or not.

function bookIsRead(bookIndex) {
       
    if (myLibrary[bookIndex].read == true){
        myLibrary[bookIndex].read = false;
    } else {
        myLibrary[bookIndex].read = true;
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
    const readBookButton = document.createElement("button");
    readBookButton.className = 'readbook-button';

    function readBookButtonColor(book){
        if (book.read == true){
            readBookButton.style.background = 'green';
        } else {
            readBookButton.style.background = 'red';
        }
    }
    readBookButtonColor(myLibrary[i]);


    console.log(myLibrary[i].position)
   
    author.innerText = "author: " + myLibrary[i].author; 
    title.innerText = "title: " + myLibrary[i].title;
    pages.innerText = "n. of pages: " + myLibrary[i].pages;
    eraseButton.innerText = "X";
    readBookButton.innerText = readOrNot(myLibrary[i]);

    eraseButton.addEventListener('click', function(event) {
        let bookIndex = myLibrary[i].position - 1;
        console.log(bookIndex);
        removeBookFromLibrary(bookIndex);
        showLog();
        countBooksRead();
    });

    readBookButton.addEventListener('click', function(event) {
        let bookIndex =  myLibrary[i].position - 1;
        bookIsRead(bookIndex);
        showLog();
        countBooksRead();

    });


    logSection.appendChild(card);
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pages);
    
    card.appendChild(eraseButton)
    card.appendChild(readBookButton);


    //register how many books are read

    countBooksRead()
    }
}



// Bring up and hide the form

const addNewBook = document.getElementById("add-book-button");
const blackBg = document.getElementById("black-bg");

function showForm(){
    if (form.style.visibility !== 'visible'){

        form.style.visibility = 'visible';
        blackBg.style.visibility = 'visible';
        

    } else {
        form.style.visibility = 'hidden';
        blackBg.style.visibility = 'hidden';

    } 
}



addNewBook.addEventListener('click', function(e) {
    
    showForm();

});

blackBg.addEventListener('click', function(e) {

    showForm();

});


// Count read books

function getOcurrence(array){
    let booksRead = 0;
    array.forEach(function(v){
     if(v.read == true)
        {booksRead++};
    });
    return booksRead;
    
}