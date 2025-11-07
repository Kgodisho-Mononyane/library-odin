const addBtn = document.querySelector("#add-btn")
const container = document.querySelector("#container")
const dialogBox = document.querySelector("#dialog")
const submitBtn = document.querySelector("#submit-btn")
const form = document.querySelector("#form");

addBtn.addEventListener("click", () => {
    dialogBox.showModal();
    form.reset();
    //remove the contents of the inputs from the previous entry
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialogBox.close();
})

const myLibrary = [];

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

console.log(myLibrary)