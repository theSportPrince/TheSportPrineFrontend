import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OdiPlayerRanking from "./OdiPlayerRanking";
import TestPlayerRanking from "./TestPlayerRanking";
import T20PlayerRanking from "./T20PlayerRanking";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import OdiTeamRanking from "./OdiTeamRanking";
// import TestTeamRanking from "./TestTeamRanking";
// import T20TeamRanking from "./T20TeamRanking";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function PlayerRanking({ flag }) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (e, newTabValue) => {
    setCurrentTab(newTabValue);
  };

  const navigate = useNavigate();

  const handleback = () => {
    navigate("/more");
  };

  return (
    <Box sx={{ height: "100%", padding: "0px", margin: "10%" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <ArrowBackIcon onClick={handleback} sx={{ cursor: "pointer" }} />
        <Typography variant="h6">Player Ranking</Typography>
      </Box>
      <Box
        sx={{ width: "100%", justifyContent: "center", textAlign: "center" }}
      >
        {!flag && <Typography variant="h5"> Player Ranking</Typography>}
      </Box>
      {/* tabs */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          // marginLeft: "15%",
          // marginRight: "15%",
        }}
      >
        <Box sx={{ width: "100%", borderRadius: "20px" }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            sx={{
              backgroundColor: { xs: "black", lg: "red" },
              width: "100%",
              justifyContent: "space-evenly",
              "& .MuiTabs-indicator": {
                display: { xs: "none", lg: "block" }, // Hide indicator on mobile
              },
            }}
          >
            <Tab
              label="ODI"
              sx={{
                flexGrow: 1,
                color: "white",
                borderRadius: { xs: "20px", lg: 0 },
                backgroundColor: currentTab === 0 ? "red" : "transparent",
                textAlign: "center",
              }}
            />
            <Tab
              label="Test"
              sx={{
                flexGrow: 1,
                color: "white",
                borderRadius: { xs: "20px", lg: 0 },
                backgroundColor: currentTab === 1 ? "red" : "transparent",
                textAlign: "center",
              }}
            />
            <Tab
              label="T20"
              sx={{
                flexGrow: 1,
                color: "white",
                borderRadius: { xs: "20px", lg: 0 },
                backgroundColor: currentTab === 2 ? "red" : "transparent",
              }}
            />
          </Tabs>
          {/* <Box
            sx={{
              width: "100%",
              backgroundColor: "grey",
              paddingTop: "10px",
              display: "flex",
              height: "auto",
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                border: "2px solid red",
                backgroundColor: "white",
                height: "fit-content",
                marginLeft: "10px",
                objectFit: "contain",
                borderRadius: "10px",
                width: "25%",
                marginBottom: "10px",
              }}
            >
              BatsMan
            </Box>
            <Box
              sx={{
                border: "2px solid red",
                backgroundColor: "white",
                height: "fit-content",
                marginLeft: "10px",
                objectFit: "contain",
                borderRadius: "10px",
                width: "25%",
                marginBottom: "10px",
              }}
            >
              Bowler
            </Box>
            <Box
              sx={{
                border: "2px solid red",

                backgroundColor: "white",
                height: "fit-content",
                marginLeft: "10px",
                objectFit: "contain",
                borderRadius: "10px",
                width: "25%",
                marginBottom: "10px",
              }}
            >
              All-Rounders
            </Box>
          </Box> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "grey",
              paddingTop: "10px",
              height: "auto",
              marginBottom: "10px",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                border: "2px solid red",
                backgroundColor: "white",
                height: "fit-content",
                borderRadius: "10px",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography>BatsMan</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid red",
                backgroundColor: "white",
                height: "fit-content",
                borderRadius: "10px",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography>Bowler</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid red",
                backgroundColor: "white",
                height: "fit-content",
                borderRadius: "10px",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography>A-R</Typography>
            </Box>
          </Box>

          <TabPanel value={currentTab} index={0}>
            <OdiPlayerRanking />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <TestPlayerRanking />
          </TabPanel>
          <TabPanel value={currentTab} index={2}>
            <T20PlayerRanking />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}

export default PlayerRanking;
