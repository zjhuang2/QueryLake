import { collection } from "firebase/firestore";
import { db } from "./firebase-config";

export const mentalPerformanceCollectionRef = collection(
  db,
  "mentalperformance"
);

export const immunityRef = collection(db, "immunity");
