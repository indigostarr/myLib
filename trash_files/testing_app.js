/* DOM TESTING */

// const search = document.querySelector("book-search");

// // search city
// search.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("book");
//   let book = search.elements["search"].value;
//   displayBookData(book);
// });

// async function getBookData(book) {

//   myRouter.route('/testRoute')
//     .get(function(req, res){
//     request({
//     method: 'GET',
//     uri: `https://www.googleapis.com/books/v1/volumes?q=${book}`,
//     headers: {'key': 'AIzaSyCZBZM-woQWBePfWuMZawx65nfURB1-cCM'}
//     }, function (error, response, body){
//     if(!error && response.statusCode == 200){
//         res.json(body);
//     }
//     })
// })
// }

// const url =
//   "https://www.googleapis.com/books/v1/volumes?q=crucible&key=AIzaSyCZBZM-woQWBePfWuMZawx65nfURB1-cCM";
// // function getBookData() {

// // app
// //   .get(
// //     `https://www.googleapis.com/books/v1/volumes?q=crucible&key=AIzaSyCZBZM-woQWBePfWuMZawx65nfURB1-cCM`
// //   )
// //   .then((data) => {
// //     res.render("books.ejs", { books: data });
// //   })
// //   .catch((error) => {
// //     return res.status(404).send({
// //       message: "cant get api",
// //     });
// //   });
// //   app.find(
// //     `https://www.googleapis.com/books/v1/volumes?q=crucible&key=AIzaSyCZBZM-woQWBePfWuMZawx65nfURB1-cCM`,
// //     (req, res) => {
// //       console.log(response.json);
// //       return response.json();
// //     }
// //   );
// // } catch (error) {
// //   console.log("cant get api");
// // }

// // TESTING 2
// // const displayBookData = () => {
// //   return new Promise((resolve, reject) => {
// //     const url =
// //       "https://www.googleapis.com/books/v1/volumes?q=crucible&key=AIzaSyCZBZM-woQWBePfWuMZawx65nfURB1-cCM";
// //     https
// //       .get(url, (res) => {
// //         res.setEncoding("utf8");
// //         let body = "";
// //         res.on("data", (chunk) => (body += chunk));
// //         res.on("end", () => {
// //           resolve(body);
// //         });
// //         console.log(body);
// //       })
// //       .on("error", reject);
// //   });
// // };

// // TESTING 3
// // // display data

// const req = https
//   .get(url, (res) => {
//     let data = "";
//     res.on("data", (chunk) => {
//       data += chunk;
//     });
//     res.on("end", () => {
//       data = JSON.parse(data);
//       // console.log(data.items);
//       return data.items;
//     });
//   })
//   .on("error", (err) => {
//     console.log(err.message);
//   });

// //   // req.end();

// //   // req.send(data);
// //   // app
// //   //   .get(
// //   //     "https://www.googleapis.com/books/v1/volumes?q=crucible&key=AIzaSyCZBZM-woQWBePfWuMZawx65nfURB1-cCM"
// //   //   )
// //   //   .then((response) => {
// //   //     console.log(response.json());
// //   //   })
// //   //   .then((result) => {
// //   //     console.log(result);
// //   //     // this.setState({ books: result.items });
// //   //   })
// //   //   .catch((error) => {
// //   //     console.log(error);
// //   //   });
// //   // try {
// //   //   getBookData().then(function (response) {
// //   //     console.log("book data");
// //   //     // console.log(response.items);
// //   //     // res.render('search.ejs', { books: response.items.volumeInfo});
// //   //   });
// //   // } catch (error) {
// //   //   console.log("no book data");
// //   // }
// // }

// console.log("test", req);
