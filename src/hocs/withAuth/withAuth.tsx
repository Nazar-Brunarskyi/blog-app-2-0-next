'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import ClientOnly from '../ClientOnly/ClientOnly';
import { useAuthContext } from '@/src/providers/AuthProvider';
import { useGetUserByFirebaseUidQuery } from '@/src/redux/services/user/user';

function withAuth(Component: React.ComponentType<any>) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const pathname = usePathname();
    const { user, initializing } = useAuthContext();
    const {
      data: internalUser,
      isLoading,
      isFetching,
    } = useGetUserByFirebaseUidQuery(undefined, { skip: initializing || !user });
    
    useEffect(() => {
      if (initializing) return;

      if (!user) {
        if (pathname.startsWith('/profile/settings/account')) {
          return;
        }

        router.replace('/sign-in');
        return;
      } 
      // else {
      //   if (!user.emailVerified) {
      //     router.replace('/auth/verify-email');
      //     return;
      //   }
      // }
    }, [user, initializing]);

    return !initializing && !isLoading && !isFetching && user && internalUser ? (
      <ClientOnly>
        <Component {...props} />
      </ClientOnly>
    ) : null;
  };
}

export default withAuth;
