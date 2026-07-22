import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// The Firebase web config below is a public client identifier, not a
// secret — it is safe to ship in a static bundle. Actual authorization
// is enforced by firestore.rules (see ADMIN_UID) and Firebase Auth,
// never by hiding this object.
const firebaseConfig = {
  apiKey: "AIzaSyC76CLSivJFsi763TgcvRjFfGKkem64HRM",
  authDomain: "hora-do-rango-b57e1.firebaseapp.com",
  projectId: "hora-do-rango-b57e1",
  storageBucket: "hora-do-rango-b57e1.firebasestorage.app",
  messagingSenderId: "486582873014",
  appId: "1:486582873014:web:62d895895a52ab2bfd6f17"
};

// Must match the UID hardcoded in firestore.rules exactly.
export const ADMIN_UID = "sh2o9fiSCAdRaFFaXckYlfm7LNu2";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
