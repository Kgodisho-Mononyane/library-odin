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

function addBookToLibrary() {
    
}