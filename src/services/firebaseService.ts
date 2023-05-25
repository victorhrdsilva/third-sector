import { initializeApp } from "firebase/app";

export default async function firebaseFunction () {

const firebaseConfig = {
    apiKey: "AIzaSyCRcyzpDUAfUcWtwfFYcnH5L4kyU_SolYU",
    authDomain: "escolafire-38e72.firebaseapp.com",
    projectId: "escolafire-38e72",
    storageBucket: "escolafire-38e72.appspot.com",
    messagingSenderId: "241136752705",
    appId: "1:241136752705:web:f1f2715feb493a1d128ec0"
  };
  
  initializeApp(firebaseConfig);

};