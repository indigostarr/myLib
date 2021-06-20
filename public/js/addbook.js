// mobile button slider
const mobileBtn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

mobileBtn.addEventListener("click", (e) => {
  console.log(e.target);
  sidebar.classList.toggle("-translate-x-full");
});

// Status change
const toReadButton = document.getElementById("toRead");
const readingButton = document.getElementById("reading");
const readButton = document.getElementById("read");
const buttons = [toReadButton, readingButton, readButton];

toReadButton.addEventListener("click", function (event) {
  if (!toReadButton.classList.contains("bg-blue-50")) {
    toggleStatusStyle(toReadButton);
    updateStatus("toRead");
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
  const bookId = document.getElementById("bookId").value;
  const route = bookId ? `/books/${bookId}` : "/books";

  let data = {
    status: status,
    title: document.getElementById("title").value,
    bookId: bookId,
    thumbnail: document.getElementById("search-image").src,
    authors: document.getElementById("authors").value,
    pages: document.getElementById("pages").value,
    description: document.getElementById("description").value,
  };

  fetch(route, {
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

// // search results
// const search = document.getElementById("search");
// const searchWord = document.getElementById("searchWord").value;

// search.addEventListener("click", searchResults(searchWord));

// function searchResults(searchWord) {
//   const bookData = displaySearchResultData(searchWord);

//   const thumbnail = bookData.imageLinks.thumbnail;
//   thumbnail
//     ? thumbnail
//     : "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-07-300x300.png";

//   let data = {
//     status: status,
//     title: document.getElementById("title").value,
//     bookId: bookId,
//     thumbnail: thumbnail,
//     authors: document.getElementById("authors").value,
//     pages: document.getElementById("pages").value,
//     description: document.getElementById("description").value,
//   };

//   fetch("/search", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       console.log("Request complete! response:", res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
