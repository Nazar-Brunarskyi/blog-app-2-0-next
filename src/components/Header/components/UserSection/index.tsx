"use client";
import { useSignOut } from "@/src/hooks/auth/useSignOut";
import useUserInfo from "@/src/hooks/auth/useUserInfo";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";

const settings = ["Profile", "Account", "Dashboard"];

export const UserSection: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { signOut } = useSignOut();
  const { internalUser, firebaseUser, isLoading } = useUserInfo();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    handleCloseUserMenu();
    signOut();
  };

  return (
    <>
      {!isLoading && internalUser && firebaseUser ? (
        <>
          <Typography margin={"0 20px"}>{internalUser.userName}</Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}

              <MenuItem onClick={handleLogOut}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </>
      ) : (
        <>
          <Link href={"/sign-in"} style={{ color: "inherit" }}>
            <Button color="inherit">Sign in</Button>
          </Link>

          <Link href={"/sign-up"} style={{ color: "inherit" }}>
            <Button color="inherit">Sign up</Button>
          </Link>
        </>
      )}
    </>
  );
};
