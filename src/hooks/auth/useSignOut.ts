import { useCallback } from "react";
import { auth } from "../../config/firebase";
import { signOut as firebaseSignOut } from "firebase/auth";

export function useSignOut() {
  const signOut = useCallback(async () => {
    try {
      await firebaseSignOut(auth);
    } catch (e: any) {
      console.log("error");
    }
  }, []);

  return { signOut };
}
