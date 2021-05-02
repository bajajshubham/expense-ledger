//  Object destructuring
/*
const person = {
  name: 'Shubham',
  age: 25,
  location: {
    city: 'Pune',
    temp: '35'
  }
};

const { age, name = 'Anonymous' } = person;  // setting default name in case it is abest in person
console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location;  // renaming temp variable to temperature
console.log(` It's ${temperature} in ${city}`);

const book = {
  title: 'Ikigai',
  author: 'Someone',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Self published' } = book.publisher
console.log(publisherName)
*/

//  Array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state = 'Unknown', zip] = address; // unlike obejects mapping here is done by position rather than key, so order matters
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [order, , medium] = item;
console.log(` A medium ${order} costs ${medium}`);