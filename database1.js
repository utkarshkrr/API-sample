const books = [
  {
    isbn: "12345Book",
    title: "Tesla",
    pubDate: "2023-7-24",
    language: "en",
    numPage: 250,
    author: [1, 2],
    publications: [1],
    category: ["tech", "automobile", "education"]
  },
  {
    isbn: "67890Book",
    title: "The Martian",
    pubDate: "2015-2-11",
    language: "en",
    numPage: 385,
    author: [3],
    publications: [2],
    category: ["science fiction", "adventure"]
  },
  {
    isbn: "11111Book",
    title: "Harry Potter and the Sorcerer's Stone",
    pubDate: "1997-6-26",
    language: "en",
    numPage: 320,
    author: [4],
    publications: [3],
    category: ["fantasy", "magic"]
  },
  {
    isbn: "22222Book",
    title: "The Lord of the Rings",
    pubDate: "1954-7-29",
    language: "en",
    numPage: 1178,
    author: [5],
    publications: [4],
    category: ["fantasy", "adventure"]
  },
  {
    isbn: "33333Book",
    title: "To Kill a Mockingbird",
    pubDate: "1960-7-11",
    language: "en",
    numPage: 281,
    author: [6],
    publications: [5],
    category: ["classic", "fiction"]
  }
];

const authors = [
  {
    id: 1,
    name: "Utkarsh",
    books: ["12345Book", "secretbook"]
  },
  {
    id: 2,
    name: "Elon Musk",
    books: ["12345Book", "12345SpaceX"]
  },
  {
    id: 3,
    name: "Andy Weir",
    books: ["67890Book"]
  },
  {
    id: 4,
    name: "J.K. Rowling",
    books: ["11111Book", "22222Book"]
  },
  {
    id: 5,
    name: "J.R.R. Tolkien",
    books: ["22222Book"]
  }
];

const publications = [
  {
    id: 1,
    name: "Utkarshify",
    books: ["12345Book", "12345SpaceX"]
  },
  {
    id: 2,
    name: "Publisher X",
    books: ["67890Book"]
  },
  {
    id: 3,
    name: "Wizarding World Publications",
    books: ["11111Book", "22222Book"]
  },
  {
    id: 4,
    name: "Middle-earth Publishers",
    books: ["22222Book"]
  },
  {
    id: 5,
    name: "Harper Lee Publications",
    books: ["33333Book"]
  }
];

module.exports={books, authors, publications};//exporting the file