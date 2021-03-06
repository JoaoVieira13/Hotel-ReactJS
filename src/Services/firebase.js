import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB9rrHCkbf2Bdwjdbx9OYqBfXMcT1lDZj4",
    authDomain: "pelourinhohotel.firebaseapp.com",
    projectId: "pelourinhohotel",
    storageBucket: "pelourinhohotel.appspot.com",
    messagingSenderId: "250699906024",
    appId: "1:250699906024:web:42bc6ba8917bdc3792425d",
    measurementId: "G-V5NQLB0D5W"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export { storage, ref, uploadBytesResumable, getDownloadURL }
