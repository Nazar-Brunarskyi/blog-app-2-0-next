import { Box, Button } from "@mui/material";
import { FC } from "react";

const pages = ['Products', 'Pricing', 'Blog'];

export const Menu: FC = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};
