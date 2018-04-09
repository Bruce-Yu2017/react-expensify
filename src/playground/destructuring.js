// const book = {
//   // title: "Ego is the enemy",
//   author: "baobaodan",
//   publisher: {
//     name: "Penguin"
//   }
// }

// const {title: boname = "bookName", author="authorName"} = book;
// const {name = "publName"} = book.publisher;

// console.log(`"${boname}" is written by ${author}, published by ${name} `)

// const address = [1,2,3,4,5];
// const [,,,,four] = address;
// console.log(`${four} is one `)

const item = ['Coffee', '$2.00', '2.50', '3.00'];
const [coffee,, two_point_five] = item;
console.log(`A ${coffee} costs ${two_point_five}. `)