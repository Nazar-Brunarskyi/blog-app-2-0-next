'use client';
import React from 'react';
import ThemeProvider from './ThemeProvider';
import { ReduxProvider } from './ReduxProvider';
import { AuthProvider } from './AuthProvider';
import LayoutProvider from './LayoutProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <AuthProvider>
        <ThemeProvider>
          {/* <NotificationProvider> */}
            {/* <BlockProvider> */}
              <LayoutProvider>
                {/* <PersistGate loading={children} persistor={persistor}> */}
                  {children}
                {/* </PersistGate> */}
              </LayoutProvider>
            {/* </BlockProvider> */}
          {/* </NotificationProvider> */}
        </ThemeProvider>
      </AuthProvider>
    </ReduxProvider>
  );
};
