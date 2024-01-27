'use client';
import React from 'react';
import { createTheme, ThemeOptions, ThemeProvider as Provider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Figtree, Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const figtree = Figtree({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const themeOptions: ThemeOptions = {
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: '48px',
      lineHeight: '72px',
      fontWeight: 400,
    },
    h2: {
      fontSize: '40px',
      lineHeight: '60px',
      fontWeight: 400,
    },
    h3: {
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: 400,
    },
    h4: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 400,
    },
    h5: {
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: 400,
    },
    body1: {
      fontSize: '18px',
      lineHeight: '26px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
      lineHeight: '26px',
    },
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '16px',
    //       fontWeight: 600,
    //       padding: '12px 40px',
    //       borderRadius: '32px',
    //       color: colors.BASIC_WHITE,
    //       backgroundColor: colors.INTERNAL_MAIN_BLUE,
    //       textTransform: 'none',
    //       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    //       '&:hover': {
    //         backgroundColor: colors.INTERNAL_MAIN_BLUE,
    //         transform: 'translate(4px, -4px)',
    //         boxShadow: `-4px 4px 0px 0px rgba(0, 117, 255, 0.50)`,
    //       },
    //       '&:disabled': {
    //         backgroundColor: colors.BASIC_BLUE_GRAY,
    //         color: colors.BASIC_WHITE,
    //       },
    //       '&.MuiButton-sizeLarge': {
    //         padding: '14px 40px',
    //         fontSize: '18px',
    //       },
    //       '&.MuiButton-sizeMedium': {
    //         padding: '12px 32px',
    //         fontSize: '16px',
    //       },
    //       '&.MuiButton-sizeSmall': {
    //         padding: '8px 24px',
    //         fontSize: '14px',
    //       },
    //       '&.MuiButton-textSecondary': {
    //         color: colors.BASIC_DARK_GRAY,
    //         backgroundColor: colors.BASIC_WHITE,
    //         border: `1px solid ${colors.BASIC_BLUE_GRAY}`,
    //         transition: 'border 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    //       },
    //       '&.MuiButton-textSecondary:hover': {
    //         backgroundColor: colors.BASIC_LIGHT_GRAY_1,
    //         border: `1px solid ${colors.BASIC_LIGHT_GRAY_1}`,
    //         transform: 'translate(0px, 0px)',
    //         transition: 'border 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    //         boxShadow: `none`,
    //       },
    //       '&.MuiButton-textSecondary:disabled': {
    //         backgroundColor: colors.BASIC_LIGHT_GRAY_1,
    //         border: `1px solid ${colors.BASIC_LIGHT_GRAY_1}`,
    //       },
    //       '&.MuiButton-textInfo': {
    //         backgroundColor: 'transparent',
    //         color: colors.INTERNAL_MAIN_BLUE,
    //         transition: 'background-color 0.3s ease',
    //       },
    //       '&.MuiButton-textInfo:hover': {
    //         backgroundColor: colors.BASIC_LIGHT_GRAY_1,
    //         color: colors.INTERNAL_MAIN_BLUE,
    //         transform: 'translate(0px, 0px)',
    //         boxShadow: `none`,
    //         transition: 'background-color 0.3s ease',
    //       },
    //       '&.MuiButton-textInfo:disabled': {
    //         backgroundColor: colors.BASIC_LIGHT_GRAY_1,
    //         color: colors.INTERNAL_MAIN_BLUE,
    //         transform: 'translate(0px, 0px)',
    //         boxShadow: `none`,
    //       },
    //       '&.MuiButton-textError': {
    //         color: colors.BASIC_WHITE,
    //         backgroundColor: colors.SYSTEM_RED_MAIN,
    //       },
    //       '&.MuiButton-textError:hover': {
    //         boxShadow: `-4px 4px 0px 0px ${colors.SYSTEM_RED_LIGHT}`,
    //       },
    //       '&.MuiButton-textError:disabled': {
    //         backgroundColor: colors.BASIC_BLUE_GRAY,
    //       },
    //     },
    //   },
    // },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '16px',
    //       border: `1px solid ${colors.BASIC_BLUE_GRAY}`,
    //       borderRadius: '32px !important',
    //       padding: '16px',
    //       background: colors.BASIC_WHITE,
    //       transition: 'all 0.3s ease',
    //       '& .MuiInputBase-input': {
    //         '&::-ms-reveal': {
    //           display: 'none',
    //         },
    //       },

    //       '&.MuiInputBase-sizeSmall': {
    //         fontSize: '14px',
    //         padding: '10px 12px',
    //       },
    //       '::before': {
    //         content: 'none',
    //         display: 'none',
    //       },
    //       '::after': {
    //         content: 'none',
    //         display: 'none',
    //       },
    //       '&:hover': {
    //         border: `1px solid ${colors.BLUE_MAIN}`,
    //         boxShadow: '0px 0px 0px 4px rgba(0, 117, 255, 0.10)',
    //       },
    //       '&.Mui-error': {
    //         border: `1px solid ${colors.SYSTEM_RED_MAIN}`,
    //       },
    //       '&.Mui-error:hover': {
    //         boxShadow: '0px 0px 0px 4px rgba(240, 68, 56, 0.10)',
    //       },
    //       '&.Mui-disabled': {
    //         background: colors.BASIC_MEDIUM_GRAY_2,
    //       },
    //       '& .MuiOutlinedInput-notchedOutline': {
    //         border: `none`,
    //         outline: 'none',
    //       },
    //     },
    //     input: {
    //       padding: 0,

    //       '&:disabled': {
    //         background: colors.BASIC_MEDIUM_GRAY_2,
    //       },
    //       '&.Mui-disabled': {
    //         color: colors.BASIC_DARK_GRAY,
    //       },
    //       '&::-webkit-inner-spin-button': {
    //         '-webkit-appearance': 'none',
    //         margin: '0',
    //       },
    //       '&::-webkit-outer-spin-button': {
    //         '-webkit-appearance': 'none',
    //         margin: '0',
    //       },
    //     },
    //   },
    // },
    // MuiSelect: {
    //   styleOverrides: {
    //     root: {
    //       '& .MuiSelect-select': {
    //         margin: '0px',
    //         padding: '0px',
    //       },
    //       '& .MuiOutlinedInput-notchedOutline': {
    //         border: `none`,
    //         outline: 'none',
    //       },
    //     },
    //   },
    // },
    // MuiRadio: {
    //   styleOverrides: {
    //     root: {
    //       color: colors.BASIC_BLUE_GRAY,
    //       '&.Mui-disabled': {
    //         color: colors.BASIC_MEDIUM_GRAY,
    //       },
    //       '&.Mui-checked': {
    //         color: colors.INTERNAL_MAIN_BLUE,
    //       },
    //       '&.Mui-checked.Mui-disabled': {
    //         color: colors.BASIC_MEDIUM_GRAY,
    //       },
    //     },
    //   },
    // },
    // MuiAlert: {
    //   styleOverrides: {
    //     root: {
    //       border: `1px solid ${colors.SYSTEM_RED_MAIN}`,
    //       backgroundColor: colors.SYSTEM_RED_LIGHT,
    //       color: colors.SYSTEM_RED_MAIN,
    //       borderRadius: '32px',
    //     },
    //   },
    // },
    // MuiChip: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '18px',
    //       lineHeight: '24px',
    //       borderRadius: 20,
    //       backgroundColor: colors.BASIC_LIGHT_GRAY_1,
    //       span: {
    //         padding: '0',
    //         lineHeight: '26px',
    //       },
    //       '&.MuiChip-sizeSmall': {
    //         padding: '6px 12px',
    //       },

    //       '&.MuiChip-sizeMedium': {
    //         // Default size
    //         padding: '8px 16px',
    //       },

    //       '&.MuiChip-colorPrimary': {
    //         backgroundColor: colors.BLUE_MAIN,
    //         span: {
    //           color: colors.BASIC_WHITE,
    //         },
    //       },

    //       '&.MuiChip-colorSecondary': {
    //         backgroundColor: colors.BLUE_LIGHT_2,
    //         span: {
    //           color: '#212121',
    //         },
    //       },

    //       '&.MuiChip-colorSuccess': {
    //         backgroundColor: colors.SYSTEM_GREEN_LIGHT,
    //         span: {
    //           color: colors.SYSTEM_GREEN_SUCCESS,
    //         },
    //       },

    //       '&.MuiChip-colorError': {
    //         backgroundColor: colors.SYSTEM_RED_LIGHT,
    //         span: {
    //           color: colors.SYSTEM_RED_MAIN,
    //         },
    //       },

    //       '&.MuiChip-colorInfo': {
    //         borderRadius: 16,
    //         backgroundColor: colors.LIGHT_PURPLE,
    //         '&.MuiChip-outlined': {
    //           borderColor: colors.SYSTEM_PURPLE,
    //         },
    //         span: {
    //           color: colors.SYSTEM_PURPLE,
    //         },
    //       },
    //     },
    //     label: {
    //       fontsize: 16,
    //       color: colors.BASIC_DARK_GRAY,
    //       fontWeight: 500,
    //     },
    //   },
    // },
    // MuiRating: {
    //   styleOverrides: {
    //     iconFilled: {
    //       color: '#FDB022',
    //     },
    //     iconEmpty: {
    //       color: colors.BASIC_LIGHT_GRAY_1,
    //     },
    //     iconHover: {
    //       color: '#FDB022',
    //     },
    //   },
    //   defaultProps: {
    //     emptyIcon: <StarIcon fontSize="inherit" />,
    //   },
    // },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius:'6px',
    //       overflow: 'hidden',
    //       backgroundColor: '#fff',
    //       '& .MuiSvgIcon-root': {
    //         color: 'transparent',
    //         borderRadius: '50px',
    //       },
    //       '&.Mui-checked .MuiSvgIcon-root': {
    //         color: colors.INTERNAL_MAIN_BLUE,
    //         transform: "scale(1.25)"
    //       },
    //       '&.MuiButtonBase-root': {
    //         border: `1px solid ${colors.BASIC_BLUE_GRAY}`,
    //         width: '24px',
    //         height: '24px',
    //       }
    //     },
    //   },
    // },
    // MuiLinearProgress: {
    //   styleOverrides: {
    //     root: {
    //       height: 10,
    //       borderRadius: 5,

    //       '& .MuiLinearProgress-bar': {
    //         backgroundColor: '#2395FE !important',
    //         borderRadius: 5,
    //       },

    //       '&.MuiLinearProgress-colorPrimary': {
    //         backgroundColor: colors.BASIC_BLUE_GRAY,
    //       },
    //     },
    //   },
    // },
    // MuiPopper: {
    //   styleOverrides: {
    //     root: {
    //       '.MuiAutocomplete-listbox': {
    //         padding: '4px 8px',
    //       },
    //       '.MuiAutocomplete-option': {
    //         borderRadius: '12px',
    //         margin: '4px 0px',
    //         ':hover': {
    //           background: '#FAFAFA !important',
    //         }
    //       }
    //     },
    //   }
    // }
  },
};

const theme = createTheme(themeOptions);
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
}
