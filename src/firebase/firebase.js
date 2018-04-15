import * as firebase from "firebase";


const config = {
  apiKey: "AIzaSyCf18KtE-3DwKV1TzGHimtwvHQ9avbdyWc",
  authDomain: "expensify-985a0.firebaseapp.com",
  databaseURL: "https://expensify-985a0.firebaseio.com",
  projectId: "expensify-985a0",
  storageBucket: "expensify-985a0.appspot.com",
  messagingSenderId: "726050167701"
};

firebase.initializeApp(config);

const database = firebase.database();

firebase.database().ref().set({
  name: "bubudan",
  age: 25,
  isSingle: "No",
  location: {
    city: "SJ",
    country: "China"
  }
})

database.ref("age").set(27);
database.ref("location/city").set({
  street: "main",
  zipcode: 12345
});
database.ref("attribute").set({
  height: 20,
  weight: 160
})