'use client';
import React from 'react';
import { BasicLayout } from '../layouts/BasicLayout';

const LayoutProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  return <BasicLayout>{children}</BasicLayout>;
};

export default LayoutProvider;
