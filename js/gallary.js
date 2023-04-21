
// import { getStorage } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";
// import { ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDF6mS0WvJKkzSaGA2DkdrA9z2s3lFcX34",
//     authDomain: "image-upload-5e77c.firebaseapp.com",
//     databaseURL: "https://image-upload-5e77c-default-rtdb.firebaseio.com",
//     projectId: "image-upload-5e77c",
//     storageBucket: "image-upload-5e77c.appspot.com",
//     messagingSenderId: "612533799200",
//     appId: "1:612533799200:web:301543a0682b9fe8cc2f45",
//     measurementId: "G-KKGXBBQ6LW"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// let images = [];

// // Get a reference to the Firebase Storage instance
// const storageRef = firebase.storage().ref();

// // Get a reference to the "images" folder
// const imagesRef = storageRef.child('images');

// // List all items (files and subdirectories) in the "images" folder
// imagesRef.listAll().then((result) => {
//   // Loop through each item in the result
//   result.items.forEach((itemRef) => {
//     // Get the download URL for the item
//     itemRef.getDownloadURL().then((url) => {
//       // Add the download URL to the images array
//       images.push(url);
//       // Check if all images have been retrieved
//       if (images.length === result.items.length) {
//         // Log the images array when all images have been retrieved
//         console.log(images);
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   });
// }).catch((error) => {
//   console.error(error);
// });

const firebaseConfig = {
  apiKey: "AIzaSyDF6mS0WvJKkzSaGA2DkdrA9z2s3lFcX34",
  authDomain: "image-upload-5e77c.firebaseapp.com",
  databaseURL: "https://image-upload-5e77c-default-rtdb.firebaseio.com",
  projectId: "image-upload-5e77c",
  storageBucket: "image-upload-5e77c.appspot.com",
  messagingSenderId: "612533799200",
  appId: "1:612533799200:web:301543a0682b9fe8cc2f45",
  measurementId: "G-KKGXBBQ6LW"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();
const imagesRef = storageRef.child('images');

let images = [];

imagesRef.listAll().then((result) => {
  result.items.forEach((itemRef) => {
    itemRef.getDownloadURL().then((url) => {
      images.push(url);
      // Code to display image or add URL to array
    });
  });
});
