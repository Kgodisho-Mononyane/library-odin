const addBtn = document.querySelector("#add-btn")
const container = document.querySelector("#container")
const dialogBox = document.querySelector("#dialog")
const submitBtn = document.querySelector("#submit-btn")

addBtn.addEventListener("click", () => {
    dialogBox.showModal()
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialogBox.close();
})

const myLibrary = [];

function Book() {

}

function addBookToLibrary() {
    
}