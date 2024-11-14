// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// let firebaseConfig = {
//     apiKey: "AIzaSyBAFwi4ZoPJBD0v7KxCSGqvz4hmaRRqHFs",
//     authDomain: "techzen-3e8da.firebaseapp.com",
//     projectId: "techzen-3e8da",
//     storageBucket: "techzen-3e8da.firebasestorage.app",
//     messagingSenderId: "1063365093284",
//     appId: "1:1063365093284:web:df47f611576567f8660331",
//     measurementId: "G-NTRZJ3XTGX"
//   };


//   if(!firebase.apps.length){
//     console.log(`conectanto... ${firebase.apps.length}`);
//     firebase.initializeApp(firebaseConfig);
//     console.log(`conectado: ${firebase.apps.length}`);

//   }

//   export default firebase; 




import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyBAFwi4ZoPJBD0v7KxCSGqvz4hmaRRqHFs",
    authDomain: "techzen-3e8da.firebaseapp.com",
    projectId: "techzen-3e8da",
    storageBucket: "techzen-3e8da.firebasestorage.app",
    messagingSenderId: "1063365093284",
    appId: "1:1063365093284:web:df47f611576567f8660331",
    measurementId: "G-NTRZJ3XTGX"
};

if (!firebase.apps.length) {
    console.log(`conectando... ${firebase.apps.length}`);
    firebase.initializeApp(firebaseConfig);
    console.log(`conectado: ${firebase.apps.length}`);
}

// Configuração e exportação do Firestore
const db = firebase.firestore();
export { db };
export default firebase;
