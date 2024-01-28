import { useCallback } from "react";
import { auth } from "../../config/firebase";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { handleFirebaseError } from "@/src/helpers/handleFirebaseError";

export function useSignIn() {
  const signIn = useCallback(async (email: string, password: string) => {
    let result = null,
      error = null;

    try {
      await setPersistence(auth, browserLocalPersistence);

      result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      error = handleFirebaseError(e.code);
    }

    return { result, error };
  }, []);

  return { signIn };
}
