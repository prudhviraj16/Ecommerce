import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzc0nbD5J86FajYUvMCo0HcMJbbQXbVM4",
  authDomain: "shop-224ae.firebaseapp.com",
  projectId: "shop-224ae",
  storageBucket: "shop-224ae.appspot.com",
  messagingSenderId: "764555986874",
  appId: "1:764555986874:web:698fbd7062db7ecb65ff83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app