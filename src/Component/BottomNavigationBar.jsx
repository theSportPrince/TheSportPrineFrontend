import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PersonIcon from "@mui/icons-material/Person";

export default function BottomNavigationBar() {
  return (
    <BottomNavigation
      sx={{
        width: 500,
        bottom: 0,
        position: "fixed",
        marginTop: "30px",
        backgroundColor: "red",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon sx={{ fontSize: "40px", color: "white" }} />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Live"
        value="live"
        icon={<SportsCricketIcon sx={{ fontSize: "40px", color: "white" }} />}
        component={Link}
        to="/live"
      />
      <BottomNavigationAction
        label="News"
        value="news"
        icon={<EmojiEventsIcon sx={{ fontSize: "40px", color: "white" }} />}
        component={Link}
        to="/match"
      />
      <BottomNavigationAction
        label="More"
        value="more"
        icon={<MenuOpenIcon sx={{ fontSize: "40px", color: "white" }} />}
        component={Link}
        to="/more"
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonIcon sx={{ fontSize: "40px", color: "white" }} />}
        component={Link}
        to="/profile"
      />
    </BottomNavigation>
  );
}
