
import { getStorage } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";
import { ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

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


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

let images = []
listAll(storage, "images/").then((response) => {
    response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
            images.push(url)
        });
    });
    console.log(images)
});