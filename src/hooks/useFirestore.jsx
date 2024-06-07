import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../backend/firebase";

const useFirestore = (collectionName) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [collectionName]);

  return data;
};

export default useFirestore;
