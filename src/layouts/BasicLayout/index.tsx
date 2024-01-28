import { Header } from '@/src/components/Header';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const BasicLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
