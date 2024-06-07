import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../src/backend/firebase.js";
import { MenuCompleto } from "../src/data/db.js";

const uploadMenuToFirestore = async () => {
  try {
    const menuRef = collection(db, "menu");
    await Promise.all(
      MenuCompleto.map(async (item) => {
        const itemRef = doc(menuRef, item.id);
        await setDoc(itemRef, item);
      })
    );
    console.log("Menu uploaded successfully");
  } catch (error) {
    console.error("Error uploading menu: ", error);
  }
};

uploadMenuToFirestore();
