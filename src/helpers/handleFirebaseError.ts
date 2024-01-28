export const handleFirebaseError = (code: string): string => {
  switch (code) {
    case 'auth/too-many-requests':
      return 'You have exceeded the rate limit for reset password. Please try again later.';
    case 'auth/wrong-password':
      return 'You did not enter the correct password';
    case 'auth/user-not-found':
      return 'We couldn`t find an account';
    case 'auth/permission-denied':
      return 'Access Denied: You do not have the required permissions to perform this action.';
    case 'auth/unauthorized':
      return 'Unauthorized Access. Please log in or provide the necessary credentials to access this resource.';
    case 'auth/invalid-email':
      return 'The email address you entered doesn`t look quite right. Please double-check it for any typos or errors and try again.';
    case 'auth/account-exists-with-different-credential':
      return 'An account already exists with the same email address';
    case 'auth/invalid-credential':
      return 'Incorrect credentials. Try again';
    case 'auth/credential-already-in-use':
      return 'The provided credentials are already associated with an existing account.';
    case 'auth/email-already-in-use':
      return 'Something went wrong. Try again';
    case 'auth/user-disabled':
      return 'The user corresponding to the provided credential has been disabled.';
    case 'auth/weak-password':
      return 'The password is too weak.';
    case 'auth/operation-not-allowed':
      return 'The operation is not allowed.';
    case 'auth/expired-action-code':
      return 'The action code has expired. Please request a new one.';
    default:
      return 'An unknown error occurred.';
  }
}