let addBook = document.querySelector('.add-book');
let formDiv = document.querySelector('.form-div');
let submitForm = document.querySelector('#submit');
let container = document.querySelector('.container');
let myLibrary = [];
let divList = [];
let deleteBtnList = [];

let author = document.querySelector('#author');
let book = document.querySelector('#book');
let pages = document.querySelector('#pages');
let readBtn = document.querySelector('#read-btn');

formDiv.style.display = 'none';

function addBookFunction(){
    addBook.style.display = 'none';
    formDiv.style.display = ''
    container.style.display = 'none';
}

function readFunction(){
    if(readBtn.style.background === 'red'){
        readBtn.style.background = 'green';
        readBtn.innerText = 'Read';
    }
    else{
        readBtn.style.background = 'red';
        readBtn.innerText = 'Not read';
    }
}

function createBook(authorValue, bookValue, pagesValue, readBtnValue){
    let bookDiv = document.createElement('div');
    let authorP = document.createElement('p');
    let bookP = document.createElement('p');
    let pagesP = document.createElement('p');
    newRead = document.createElement('button');
    let deleteBtn = document.createElement('button');
    authorP.innerText = authorValue;
    bookP.innerText = bookValue;
    pagesP.innerText = pagesValue;
    deleteBtn.innerText = 'X';
    if(deleteBtnList.includes(bookValue)){
        return
    }
    else{
        deleteBtn.setAttribute('id',bookValue);
        deleteBtn.setAttribute('class','deleteBtn');
        deleteBtnList.push(bookValue);
    }



    if(readBtnValue === false){

        if(divList.includes(bookDiv)){
            return
        }else{
            bookDiv.classList.add('unreadDivs');
            bookDiv.style.background = 'red';
            newRead.innerText = 'Not read';
            newRead.style.background = 'yellow';
            newRead.style.color = 'black';
            bookDiv.setAttribute('id', bookValue);
            newRead.setAttribute('class', bookValue + 'newRead');
            divList.push(bookValue);

            bookDiv.appendChild(authorP);
    bookDiv.appendChild(bookP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(newRead);
    bookDiv.appendChild(deleteBtn);
    container.appendChild(bookDiv);
        }
        
    }
    
    if(readBtnValue === true){
        
        if(divList.includes(bookDiv)){
            return
        }else{
        bookDiv.classList.add('readDivs');
        bookDiv.setAttribute('id', bookValue);
        newRead.setAttribute('class', bookValue + 'newRead');
        newRead.innerText = 'Read';
        newRead.style.background = 'yellow';
        newRead.style.color = 'black';
        bookDiv.style.background = 'green';
        divList.push(bookDiv);

        bookDiv.appendChild(authorP);
    bookDiv.appendChild(bookP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(newRead);
    bookDiv.appendChild(deleteBtn);
    container.appendChild(bookDiv);
    }
    }


    deleteBtn.onclick = function(){
        if(deleteBtn.getAttribute('id') === bookValue){
            let target = document.getElementById(bookValue);
            target.style.display = 'none';
            divList.pop(bookValue);
        }
    }

    

}



function submitFunction(){

    let authorValue = author.value;
    let bookValue = book.value;
    let pagesValue = Number(pages.value);
    if(readBtn.innerText === 'Not read'){
        readBtnValue = false;
    }else{
        readBtnValue = true;
    }

    let newBook = new Book(authorValue, bookValue, pagesValue, readBtnValue);
    console.log(newBook);

    myLibrary.push(newBook);
    createBook(authorValue, bookValue, pagesValue, readBtnValue);

    addBook.style.display = '';
    formDiv.style.display = 'none'
    container.style.display = '';
}



function Book(author, book, pages, isRead) {
  this.author = author;
  this.book = book;
  this.pages = pages;
  this.isRead = isRead;
}


