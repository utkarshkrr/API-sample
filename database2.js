const books = [
  {
    ISBN: "12345Book",
    title: "Tesla",
    pubDate: "2023-7-24",
    language: "en",
    numPage: 250,
    author: [1, 2],
    publications: [1],
    category: ["tech", "automobile", "education"]
  }
];

const authors = [
  {
    id:1,
    name: "Utkarsh",
    books: ["12345Book", "secretbook"]
  },
  {
    id:2,
    name: "Elon Musk",
    books: ["12345Book", "12345SpaceX"]
  }
];

const publications = [
  {
    id: 2,
    name: "Utkarshify",
    books: ["12345Book", "12345SpaceX"]
  }
]

module.exports={books, authors, publications};//exporting the file