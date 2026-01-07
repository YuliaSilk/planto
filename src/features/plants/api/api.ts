import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Plant } from "@/features/plants/types/plant";

export const getPlants = async (): Promise<Plant[]> => {
  const snapshot = await getDocs(collection(db, "plants"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Plant, "id">),
  }));
};
