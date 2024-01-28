/**
 * Use this HOC when you have page that should be shown only for non-authorized users,
 * e.g: login, sign-up, reset-password, etc
 */

'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ClientOnly from '../ClientOnly/ClientOnly';
import { useAuthContext } from '@/src/providers/AuthProvider';

function withoutAuth(Component: React.ComponentType<any>) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const { user, initializing } = useAuthContext();

    useEffect(() => {
      if (initializing) return;
      if (user) {
        router.replace('/');
      }

      // if (user && user.emailVerified) {
      //   router.replace('/');
      // }

      // if (user && !user.emailVerified) {
      //   router.replace('/auth/verify-email');
      // }
    }, [user, initializing]);

    return !initializing ? (
      <ClientOnly>
        <Component {...props} />
      </ClientOnly>
    ) : null;
  };
}

export default withoutAuth;
