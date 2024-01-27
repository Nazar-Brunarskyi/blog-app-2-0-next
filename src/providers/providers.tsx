'use client';
import React from 'react';
import ThemeProvider from './ThemeProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <ReduxProvider>
      // <AuthProvider>
        <ThemeProvider>
          {/* <NotificationProvider> */}
            {/* <BlockProvider> */}
              {/* <LayoutProvider> */}
                {/* <PersistGate loading={children} persistor={persistor}> */}
                  {children}
                {/* </PersistGate> */}
              {/* </LayoutProvider> */}
            {/* </BlockProvider> */}
          {/* </NotificationProvider> */}
        </ThemeProvider>
      // </AuthProvider>
    // </ReduxProvider>
  );
};
