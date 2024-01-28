import {
  createUserWithEmailAndPassword,
  deleteUser,
  reload,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { handleFirebaseError } from "@/src/helpers/handleFirebaseError";
import {
  useCheckUserNameMutation,
  useCreateUserMutation,
} from "@/src/redux/services/user/user";

export default function useSignup() {
  const [createUser] = useCreateUserMutation();
  const [checkUserName] = useCheckUserNameMutation();

  const createUserInInternalSystem = async (
    userName: string,
    email: string,
    firebaseUid: string
  ) => {
    try {
      await createUser({
        userName,
        email,
        firebaseId: firebaseUid,
      }).unwrap();
    } catch (internalError) {
      // If internal user creation fails, cleanup Firebase user
      if (auth.currentUser) {
        await deleteUser(auth.currentUser);
      }

      throw {
        message: "Failed to add user internally.",
        originalError: internalError,
      };
    }
  };

  const handleSignup = async (
    userName: string,
    email: string,
    password: string
  ) => {
    let result = null,
      error = null;

    try {
      const isUserNameTaken = await checkUserName({ userName }).unwrap();

      if (isUserNameTaken) {
        return { result, error: 'This user name is taken' };
      }

      result = await createUserWithEmailAndPassword(auth, email, password);

      if (result?.user) {
        await createUserInInternalSystem(
          userName,
          email,
          result.user.uid
        );

        await reload(result.user);
      }
    } catch (e: any) {
      error = handleFirebaseError(e.code);
    }

    return { result, error };
  };

  return {
    handleSignup,
  };
}
