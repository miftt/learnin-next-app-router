// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe_4bAMn7ZjhjAnVnUx4gcoaRZChbC3CU",
  authDomain: "my-next-app-e4c2b.firebaseapp.com",
  projectId: "my-next-app-e4c2b",
  storageBucket: "my-next-app-e4c2b.appspot.com",
  messagingSenderId: "1061604375439",
  appId: "1:1061604375439:web:6f1d67dcf383da4546e9fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;