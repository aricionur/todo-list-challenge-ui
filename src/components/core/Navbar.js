import React from "react"
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material"
import { Link, navigate } from "gatsby"

import { useAuth } from "../subjectRelated/auth/context/AuthContext"

export const Navbar = () => {
  const { user, logout } = useAuth()

  const onLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              TodoList
            </Link>
          </Typography>
          <Box alignItems="right" sx={{ flexGrow: 1, textAlign: "right" }}>
            {user ? (
              <Button style={{ textDecoration: "none", color: "white", marginRight: "10px" }} onClick={onLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: "none", color: "white", marginRight: "10px" }}>
                  Login
                </Link>
                <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
                  Register
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
