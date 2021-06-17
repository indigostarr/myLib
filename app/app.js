// // import express
// const express = require('express');
// const bodyParser = require('body-parser')

// // start App
// const app = express()
// app.use(express.static('dist'));
// // CRUD handler
// app.use(bodyParser.urlencoded({ extended: true}))
// app.set('view engine', 'ejs')

const search = document.querySelector('form');

// search city
search.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('book')
    let book = search.elements['search'].value;
    displayBookData(book);

});

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
  
async function getBookData(book) {
  await app.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCZBZM-woQWBePfWuMZawx65nfURB1-cCM`, (req, res) => {
    return res.json();
  })
    
  };

// display data
function displayBookData(book) {
    try {
    getBookData(book)
    .then(function(response) {
        console.log(response.items.volumeInfo)
        // res.render('search.ejs', { books: response.items.volumeInfo});
    });
    } catch(error) {
        alert(error);
}
}