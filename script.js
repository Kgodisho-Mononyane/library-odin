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

    const titleValue = document.querySelector("#title").value;
    const authorValue = document.querySelector("#author").value;
    const pagesValue = document.querySelector("#pages").value;
    const readValue = document.querySelector("#read-checkbox").value;

    addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
    dialogBox.close();
    //form.reset() here or addBtn event listener
})



//FUNCTIONS
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);
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
