import { useCallback } from 'react';
import { auth } from '../../config/firebase';
import { updatePassword as firebaseUpdatePassword } from 'firebase/auth';

export function useUpdatePassword() {
  const updatePassword = useCallback(async (newPassword: string) => {
    try {
      const user = auth.currentUser;

      if (user) {
        await firebaseUpdatePassword(user, newPassword);
      }
    } catch (e: any) {
      console.log('error');
    }
  }, []);

  return updatePassword;
}
