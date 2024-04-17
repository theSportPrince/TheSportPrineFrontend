import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Modal, RadioGroup, Radio, Button } from "@mui/material";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DescriptionIcon from "@mui/icons-material/Description";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import PersonIcon from "@mui/icons-material/Person";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LanguageIcon from "@mui/icons-material/Language";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import WorkIcon from "@mui/icons-material/Work";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import GavelIcon from "@mui/icons-material/Gavel";
import LockIcon from "@mui/icons-material/Lock";

function More() {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLanguageChange = (event) => {
    console.log("-----------------------", event.target.value);
    setSelectedLanguage(event.target.value);
  };

  const handleSaveLanguage = () => {
    // Your logic to change the application's language
    console.log("Selected Language:", selectedLanguage);
    handleClose(); // Close the modal after saving language
  };

  return (
    <Box sx={{ marginTop: "60px", height: "80vh", overflowY: "auto " }}>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mb: 2, color: "white" }}
          >
            Select Language
          </Typography>
          <RadioGroup value={selectedLanguage} onChange={handleLanguageChange}>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Radio value="en" />
                </ListItemIcon>
                <ListItemText primary="English" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Radio value="hi" />
                </ListItemIcon>
                <ListItemText primary="Hindi" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Radio value="mr" />
                </ListItemIcon>
                <ListItemText primary="Marathi" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Radio value="ta" />
                </ListItemIcon>
                <ListItemText primary="Tamil" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Radio value="kn" />
                </ListItemIcon>
                <ListItemText primary="Kannada" />
              </ListItem>
              {/* Add more languages as needed */}
            </List>
          </RadioGroup>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              onClick={handleSaveLanguage}
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              Save
            </Button>
            <Button onClick={handleClose} variant="contained">
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>

      <List>
        <ListItem
          button
          component={Link}
          to="/trending-series"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <TrendingUpIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Trending series" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/blog"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <DescriptionIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Blog" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/team-ranking"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <SportsSoccerIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Team Ranking" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/player-ranking"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <PersonIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Player Ranking" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/course"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <PersonIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Courses" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/women-ranking"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <EmojiPeopleIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Women Ranking" />
        </ListItem>
        <ListItem
          button
          onClick={handleOpen}
          // component={Link}
          // to="/app-language"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <LanguageIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="App Language" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/change-theme"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <ColorLensIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Change Theme" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/#"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <WorkIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Job Portal" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/videos"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <VideoLibraryIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Videos" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="https://www.facebook.com/thesportsprinceofficial "
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <FacebookIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Facebook" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="https://www.instagram.com/the_sportsprince/"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <InstagramIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Instagram" />
        </ListItem>
        {/* <ListItem
          button
          component={Link}
          to="/twitter"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText sx={{color:"white"}} primary="Twitter" />
        </ListItem> */}
        <ListItem
          button
          component={Link}
          to="/rate-us"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <StarIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Rate Us" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/about-us"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <InfoIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="About Us" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/contactus"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <ContactPageIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Contact Us" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/term-and-condition"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <GavelIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Term and Condition" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/privacy-policy"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          <ListItemIcon>
            <LockIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Privacy Policy" />
        </ListItem>
      </List>
    </Box>
  );
}

export default More;
