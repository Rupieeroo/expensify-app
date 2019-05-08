console.log('destructuring');

const person = {
  name: 'Rupert',
  age: 28,
  location: {
    city: 'London',
    temp: 5
  }
};

const { name: firstName = 'Anonymous', age } = person;

// const name = person.name;
//
// const age = person.age;

console.log(`${firstName} is ${age} years old.`);

const { city, temp: temperature } = person.location;

if ( city && temperature ) {
  console.log(`it's ${temperature} degrees in ${city}`);
}

const book = {
  title: 'The Castle',
  author: 'Franz Kafka',
  publisher: {
    name: 'Folio Society'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

const address = ['30  Cunnery Rd', 'London', 'UK', 'E1 2AD'];

const [, capital = 'Unknown', country = 'Unknown'] = address;

console.log(`You are in ${capital}, ${country}`);

const item = ['Iced Coffee', '£2.00', '£2.50', '£3.00'];

const [drink, small, medium, large] = item;

console.log(`a medium ${drink} is ${medium}`);
