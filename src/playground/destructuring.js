const book = {
  // title: "Ego is the enemy",
  author: "baobaodan",
  publisher: {
    name: "Penguin"
  }
}

const {title: boname = "bookName", author="authorName"} = book;
const {name = "publName"} = book.publisher;

console.log(`"${boname}" is written by ${author}, published by ${name} `)