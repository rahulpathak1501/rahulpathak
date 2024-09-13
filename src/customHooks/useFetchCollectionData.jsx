import { useState, useCallback, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../Utills/Firebase";

const useFetchCollectionData = (collectionName) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCollectionData = useCallback(async () => {
    try {
      const docRef = doc(db, "experience", "F4SSKXTMa4WOZwWpnc8G");
      const collectionRef = collection(docRef, collectionName);
      const snapshot = await getDocs(collectionRef);
      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
    } catch (error) {
      console.error(`Error fetching ${collectionName}:`, error);
      setError(`Error fetching ${collectionName}.`);
    } finally {
      setLoading(false);
    }
  }, [collectionName]);

  useEffect(() => {
    fetchCollectionData();
  }, [fetchCollectionData]);

  return { data, error, loading };
};

export default useFetchCollectionData;
