// const promise = new Promise((resolve, reject) => {
//   setTimeout(()=> {
//     // resolve('This is my resolved data');
//     // resolve('This is my other resolved data');
//     reject('something went wrong');
//   }, 1500);
// });
//
// console.log('before');
//
// promise.then((data) => {
//   console.log('1', data);
// }).catch((error) => {
//   console.log('error: ', error);
// });
//
// console.log('after')

// FIREBASE REFERENCES

// database.ref('notes/-LhfOETmerLFmLdt54oC').update({
//   body: 'Buy Food'
// });
// database.ref('notes').push({
//       title: 'To Do',
//       body: 'Go running'
//     });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data:', e);
//   });

// database.ref().set({
//   name: 'Rupert Adams',
//   age: 28,
//   stressLevel: 6,
//   isSingle: false,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'London',
//     country: 'UK'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Glasgow'
// });
//
// // database.ref().remove().then(() => {
// //     console.log("Remove succeeded.")
// //   }).catch((e) => {
// //     console.log("Remove failed: " + e)
// //   });

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
