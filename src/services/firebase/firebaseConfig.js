import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPo1ap_qErbHGZbMrr_mdHOK7OEqoUQ58",
  authDomain: "francoappcod.firebaseapp.com",
  projectId: "francoappcod",
  storageBucket: "francoappcod.appspot.com",
  messagingSenderId: "396630081196",
  appId: "1:396630081196:web:ef6a54435bf489bd33a909"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };