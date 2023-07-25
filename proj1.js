const express = require("express");
 
//database
const database = require("./database1.js")

const booky = express();//initialisation


/*
route:            root or /
description:      get all the books
access:           public
parameter:        none
methods:          GET
*/
booky.get("/", (req, res) => {
  return res.json({books: database.books});
});

/*
route:            /books
description:      get specific book
access:           public
parameter:        isbn
methods:          GET
*/
booky.get("/books/:isbn", (req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.isbn === req.params.isbn
  );
  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the ISBN ${req.params.isbn}`})
  }
  return res.json({book: getSpecificBook})
});

/*
route:            /cat
description:      get specific books based on category
access:           public
parameter:        category
methods:          GET
*/
booky.get("/cat/:category", (req, res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.category.includes(req.params.category)//.includes Iterates through the category 
    //and checks whether the parameter inside the parenthesis is fulfilled or not
  );
  if(getSpecificBook === 0) {
    return res.json({error: `No books found for the category of ${req.params.category}`})
  }
  return res.json({book: getSpecificBook});
});

/*
route:            /cat
description:      get specific books based on language
access:           public
parameter:        category
methods:          GET
*/
booky.get("/lang/:language", (req, res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.language.includes(req.params.language)
  );
  if(getSpecificBook === 0){
    return res.json({error: `No book found for the language ${req.params.language}`})
  }
  return res.json({book: getSpecificBook});
});

/*
route:            /author
description:      get all the authors
access:           public
parameter:        none
methods:          GET
*/
booky.get("/author", (req,res) => {
  return res.json({authors: database.authors});
});

/*
route:            /author
description:      get specific authors
access:           public
parameter:        id
methods:          GET
*/
booky.get("/author/:id", (req,res) => {
  const getSpecificAuthor = database.authors.filter(
    (author) => author.id === parseInt(req.params.id)
  );
  if(getSpecificAuthor.length === 0) {
    return res.json({error: `No author found with the id: ${req.params.id}`})
  }
  return res.json({author: getSpecificAuthor})
});


/*
route:            /author/books
description:      get specific authors based on books
access:           public
parameter:        isbn
methods:          GET
*/
booky.get("/author/books/:isbn", (req,res) => {
  const getSpecificAuthor = database.authors.filter(
    (author) => author.books.includes(req.params.isbn)
  );
  if(getSpecificAuthor.length === 0) {
    return res.json({error: `No author found for the book having ISBN ${req.params.isbn}`});
  } 
  return res.json({authors: getSpecificAuthor});
});

/*
route:            /pub
description:      get all publications
access:           public
parameter:        none
methods:          GET
*/
booky.get("/pub", (req,res) => {
  return res.json({publications: database.publications});
});

/*
route:            /pub
description:      get specific publication
access:           public
parameter:        id
methods:          GET
*/
booky.get("/pub/:id", (req, res) => {
  const getSpecificPublication = database.publications.filter(
    (publication) => publication.id === parseInt(req.params.id)
  );
  if(getSpecificPublication === 0){
    return res.json({error: `No publication found with id: ${req.params.id}`});
  }
  return res.json({publication: getSpecificPublication});
});

/*
route:            /pub/books
description:      get specific publication bsed on books
access:           public
parameter:        none
methods:          GET
*/
booky.get("/pub/books/:isbn", (req, res) => {
  const getSpecificPublication = database.publications.filter(
    (publication) => publication.books.includes(req.params.isbn)
  );
  if(getSpecificPublication.length === 0) {
    return res.json({error: `No publications found for the book bearing ISBN: ${req.params.isbn}`});
  }
  return res.json({publication: getSpecificPublication});
});

booky.listen(3000, () => {
  console.log("Server on 3000 is up and running");
});