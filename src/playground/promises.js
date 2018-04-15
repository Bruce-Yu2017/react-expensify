const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("resolve here");
  }, 2000);
});
promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
  
})
