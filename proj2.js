//POST REQUESTS
//SCROLLDOWN TO THE END OF GET REQUESTS TO FIND IT


const express = require("express");
//accessing the body parser, it is required for executing the post request
//it allows express to ask the body or convert it into the json format
var bodyParser = require("body-parser");
 
//database
const database = require("./database2");

const booky = express();//initialisation
//initialising the body parser
booky.use(bodyParser.urlencoded({extended: true}))
/*here urlencoded({extended: true}) specifies that the request you are
  passing can have any kind of value*/
booky.use(bodyParser.json());//Making sure that the body parts are uses json


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
route:            /ISBN
description:      get specific book
access:           public
parameter:        isbn
methods:          GET
*/
booky.get("/ISBN/:isbn", (req,res) => {
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
description:      get specific books based on category
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//POST REQUESTS


/*
route:            /book/new
description:      add new books
access:           public
parameter:        none
methods:          POST
*/
booky.post("/book/new", (req,res) => {
  const newBook = req.body;//giving new object and asking it to insert it into the database
  //newBook is an object which has body of our request and we'll be making our request through postman
  database.books.push(newBook);//pushing newBook to database.books
  return res.json({updatedBooks: database.books});//returning the updated database
});

/*
route:            /author/new
description:      add new author
access:           public
parameter:        none
methods:          POST
*/
booky.post("/author/new", (req,res) => {
  const newAuthor = req.body;
  database.authors.push(newAuthor);
  return res.json({updatedAuthors: database.authors});
});

/*
route:            /pub/new
description:      add new publication only if it is not present
access:           public
parameter:        none
methods:          POST
*/
booky.post("/pub/new", (req,res) => {
  const newPub = req.body;
  if ((database.publications.filter((pub) => pub.id)) === newPub.id) {
    return res.json({error: `publication already exists`});
  }
  else{
    database.publications.push(newPub);
    return res.json({updatedPub: database.publications});
  }
});



booky.listen(3000, () => {
  console.log("Server on 3000 is up and running");
});