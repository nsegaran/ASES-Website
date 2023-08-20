import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "../images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import "./TopBar.css";

export default function ButtonAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        width: "100%",
        backgroundColor: "white",
        zIndex: "20",
        top: "0",
      }}
    >
      <Box className="desktop" sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar
            sx={{ background: "white", borderBottom: "1px solid black" }}
          >
            <img
              src={Logo}
              alt={"ases logo"}
              style={{ marginLeft: "20px" }}
            ></img>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                marginLeft: 1,
                whiteSpace: "nowrap",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Space Grotesk",
                  fontSize: 30,
                  color: "#101828",
                  fontWeight: "bold",
                }}
              >
                ASES
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "35%",
                }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Home
                  </Typography>
                </Link>
                <a href="/#programsHome" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Programs
                    {/* <KeyboardArrowDownIcon /> */}
                  </Typography>
                  {/* </ScrollLink> */}
                </a>
                <a href="/#about" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    About
                  </Typography>
                </a>
                <a href="/#faq" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    FAQ
                  </Typography>
                </a>
                <Link to="/team" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Team
                  </Typography>
                </Link>
                <a href="/#sponsors" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Sponsors
                  </Typography>
                </a>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: 16,
                  color: "#667085",
                  fontWeight: "bold",
                  marginRight: "20px",
                  visibility: "hidden",
                }}
              >
                Login/Sign Up
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className="mobile" sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar
            sx={{
              background: "white",
              borderBottom: "1px solid black",
            }}
          >
            <img
              src={Logo}
              alt={"ases logo"}
              style={{ marginLeft: "20px" }}
            ></img>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                marginLeft: 1,
                whiteSpace: "nowrap",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Space Grotesk",
                  fontSize: 30,
                  color: "#101828",
                  fontWeight: "bold",
                }}
              >
                ASES
              </Typography>
              <Box>
                <IconButton edge="start" onClick={handleDrawerOpen}>
                  <MenuIcon sx={{ color: "#667085" }} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        className="mobile"
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              marginLeft: 1,
              whiteSpace: "nowrap",
              marginRight: 10,
            }}
          >
            <img src={Logo} alt={"ases logo"}></img>
            <Typography
              sx={{
                fontFamily: "Space Grotesk",
                fontSize: 30,
                color: "#101828",
                fontWeight: "bold",
                marginLeft: 1,
              }}
            >
              ASES
            </Typography>
          </Box>
          <IconButton edge="start" onClick={handleDrawerClose}>
            <CloseIcon sx={{ color: "#667085" }} />
          </IconButton>
        </Box>
        <ListItem
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            color: "#667085",
            fontWeight: "bold",
            marginRight: "20px",
          }}
        >
          Home
        </ListItem>
        <ListItem
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            color: "#667085",
            fontWeight: "bold",
            marginRight: "20px",
          }}
        >
          Programs
          <KeyboardArrowDownIcon />
        </ListItem>
        <ListItem
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            color: "#667085",
            fontWeight: "bold",
            marginRight: "20px",
          }}
        >
          About
        </ListItem>
        <ListItem
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            color: "#667085",
            fontWeight: "bold",
            marginRight: "20px",
          }}
        >
          FAQ
        </ListItem>
        <ListItem
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            color: "#667085",
            fontWeight: "bold",
            marginRight: "20px",
          }}
        >
          Team
        </ListItem>
        <ListItem
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            color: "#667085",
            fontWeight: "bold",
            marginRight: "20px",
          }}
        >
          Sponsors
        </ListItem>
        <ListItem
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            color: "#667085",
            fontWeight: "bold",
            marginRight: "20px",
          }}
        >
          Login/Sign Up
        </ListItem>
      </Drawer>
    </Box>
  );
}
