import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAJ-RhQyq8cVXwhzbYGgzRchMT6SP5fedg",
  authDomain: "expense-ledger-62637.firebaseapp.com",
  databaseURL: "https://expense-ledger-62637-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "expense-ledger-62637",
  storageBucket: "expense-ledger-62637.appspot.com",
  messagingSenderId: "732912420457",
  appId: "1:732912420457:web:a589b9cd30679261a284f8",
  measurementId: "G-7VRHN7WQG9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();

const notes = [{
  id: 12,
  title: 'first note',
  body: 'This is note 1'
}, {
  id: 2,
  title: 'second note',
  body: 'This is note 2'
}, {
  id: 5,
  title: 'thhird note',
  body: 'This is note 3'
}];

database.ref('notes').set(notes);

/*
database.ref().on('value', (snapshot) => {  // subscribed to changes in data
  console.log(snapshot.val());
});

setTimeout(() => {
  database.ref().off(); // off method unsubscribes all subscriptions on ref()
}, 7000)
*/
/*
database.ref().once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  }).catch((e) => {
    console.log('Error:', e);
  });
*/
/*
firebase.database().ref().set({
  name: 'Shubham Bajaj',
  age: 25,
  married: 'no'
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('Failed with error:',e);
});
*/

/*
database.ref('married').remove().then(() => {
  console.log('Property removed');
}).catch((e) => {
  console.log('Property cannot be removed.', e);
});
*/