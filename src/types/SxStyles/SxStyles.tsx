import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import { CSSProperties } from 'react';

export type SxStyles = {
  [key: string]: SxProps<Theme>;
};

export type CssStyles = {
  [key: string]: CSSProperties;
};