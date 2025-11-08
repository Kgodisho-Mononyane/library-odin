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
    let readValue = document.querySelector("#checkbox").checked;

    if (readValue === 'on' || readValue === true) {
        readValue = true;
    } else {
        readValue = false;
    }

    addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
    dialogBox.close();
    console.log(myLibrary)
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
    displayBook();
}

function displayBook() {
    container.innerHTML = "";
    myLibrary.forEach(elem => {
        let testElement = document.createElement("p");
        testElement.textContent = `${elem.title}, ${elem.author}, ${elem.pages} pages, ${elem.read}`;
        container.appendChild(testElement);
    });
};

console.log(myLibrary)
