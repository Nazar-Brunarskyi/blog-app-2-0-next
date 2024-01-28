import { useAuthContext } from "@/src/providers/AuthProvider";
import { useGetUserByFirebaseUidQuery } from "@/src/redux/services/user/user";

export default function useUserInfo() {
  const { user, initializing } = useAuthContext();
  
  const { data: internalUser, isLoading, isFetching } = useGetUserByFirebaseUidQuery(user?.uid, {
    skip: initializing || !user,
  });

  return {
    firebaseUser: user,
    internalUser,
    isLoading: isLoading || initializing || isFetching,
  };
}
