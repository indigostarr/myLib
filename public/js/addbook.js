const mobileBtn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

mobileBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

// Status change
var toReadButton = document.getElementById("toRead");
var readingButton = document.getElementById("reading");
var readButton = document.getElementById("read");
var buttons = [toReadButton, readingButton, readButton];

toReadButton.addEventListener("click", function (event) {
  if (!toReadButton.classList.contains("bg-blue-50")) {
    toggleStatusStyle(toReadButton);
    updateStatus("to-read");
  }
});

readingButton.addEventListener("click", function (event) {
  if (!readingButton.classList.contains("bg-blue-50")) {
    toggleStatusStyle(readingButton);
    updateStatus("reading");
  }
});

readButton.addEventListener("click", function (event) {
  if (!readButton.classList.contains("bg-blue-50")) {
    toggleStatusStyle(readButton);
    updateStatus("read");
  }
});

function toggleStatusStyle(element) {
  buttons.forEach((button) => {
    button.classList.remove("bg-blue-50");
    button.classList.remove("border-blue-400");
    button.classList.remove("border-2");
  });
  element.classList.add("bg-blue-50");
  element.classList.add("border-blue-400");
  element.classList.add("border-2");
}

function updateStatus(status) {
  let data = {
    status: status,
    title: document.getElementById("title").value,
    bookId: document.getElementById("bookId").value,
    thumbnail: document.getElementById("search-image").src,
    author: document.getElementById("authors").value,
    pages: document.getElementById("pages").value,
    description: document.getElementById("description").value,
  };
  fetch("/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log("Request complete! response:", res);
    })
    .catch((err) => {
      console.log(err);
    });
}
