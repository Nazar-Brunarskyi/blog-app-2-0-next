'use client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Roboto } from 'next/font/google';
import { createTheme, ThemeProvider as Provider } from '@mui/material/styles';

export const poppins = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const defaultTheme = createTheme();

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </Provider>
  );
}
