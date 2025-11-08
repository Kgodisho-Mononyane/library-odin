//QUERY SELECTORS & DECLARATIONS
const addBtn = document.querySelector("#add-btn")
const container = document.querySelector("#container")
const dialogBox = document.querySelector("#dialog")
const submitBtn = document.querySelector("#submit-btn")
const form = document.querySelector("#form");

const myLibrary = [];


//EVENT LISTENERS
addBtn.addEventListener("click", () => {
    dialogBox.showModal();
    form.reset();
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialogBox.close();
})

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const title = document.querySelector("#title").value;
//     const author = document.querySelector("#author").value;
//     const pages = document.querySelector("#pages").value;
//     // const read = document.querySelector

//     const newBook = new Book(title, author, pages, true)
//     myLibrary.push(newBook)
// })


//FUNCTIONS
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

addBookToLibrary("1984", "George Orwell", 295, true);
addBookToLibrary("The intelligent investor", "Benjamin Graham", 450, false)
addBookToLibrary("Animal farm", "George Orwell", 240, true)

// function LoopArray(arr) {
//     arr.forEach(function(elem) {
//         container.textContent += elem.title;
//     })
// }

console.log(myLibrary)
