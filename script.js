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
        let newCard = document.createElement("div");
        newCard.classList.add("book-card");
        container.appendChild(newCard);

        let newTitle = document.createElement("h1");
        newTitle.textContent = elem.title;
        newTitle.classList.add("book-title");
        newCard.appendChild(newTitle);

        let newAuthor = document.createElement("h2");
        newAuthor.textContent = elem.author;
        newAuthor.classList.add("book-author");
        newCard.appendChild(newAuthor);

        let newPages = document.createElement("h3");
        newPages.textContent = `${elem.pages} pages`;
        newPages.classList.add("book-pages");
        newCard.appendChild(newPages);

        let newRead = document.createElement("button");
        newRead.classList.add("book-btn");
        newRead.setAttribute("id", "read-btn");
        newRead.textContent = "Read"; //make this dynamic
        newCard.appendChild(newRead);

        let newRemove = document.createElement("button");
        newRemove.classList.add("book-btn");
        newRemove.setAttribute("id", "remove-btn");
        newRemove.textContent = "Remove";
        newCard.appendChild(newRemove);
    });
};

console.log(myLibrary)
