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
    publishedDate: document.getElementById("publishedDate").value,
    averageRating: document.getElementById("averageRating").value,
    categories: document.getElementById("categories").value,
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

// function updateStatus(status) {
//   const googleBookId = document.getElementById("googlebookId").value;

//   const route = data
//     .findById(googleBookID)
//     .then((data) => {
//       if (!data) {
//         return "/books";
//       }
//       return `/books/${bookId}`;
//     })
//     .catch((error) => {
//       if (error.kind === "ObjectId") {
//         return res.status(404).send({
//           message: "unable to find " + req.params.title,
//         });
//       }
//       return res.status(500).send({
//         message: "unable to retrieve " + req.params.title,
//       });
//     });

//   let data = {
//     status: status,
//     title: document.getElementById("title").value,
//     bookId: bookId,
//     thumbnail: document.getElementById("search-image").src,
//     authors: document.getElementById("authors").value,
//     pages: document.getElementById("pages").value,
//     description: document.getElementById("description").value,
//     publishedDate: document.getElementById("publishedDate").value,
//     averageRating: document.getElementById("averageRating").value,
//     categories: document.getElementById("categories").value,
//   };

//   fetch(route, {
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
