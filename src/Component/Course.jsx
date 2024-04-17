import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Button, Typography } from "@mui/material";
import meetup from "../assets/meetup.jpg";
import Thumbnail from "../assets/T6.png";

import { scrrendata } from "../utils/ScreenshotData.js";
// import Sliderimage from "../Component/Carousel/Sliderimage.jsx";

const Course = () => {
  const [time, setTime] = useState({
    minutes: 15,
    seconds: 0,
  });

  const PaymentLink = process.env.Razorpay_Payment_Link;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        } else if (prevTime.seconds === 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        marginY: 10,
        border: "1px dashed grey",
        textAlign: "center",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ flexGrow: 1, paddingY: 4, marginY: 4 }}>
        <Grid
          container
          spacing={2}
          sx={{
            textAlign: "center", // Center align on all screens
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              textAlign: "center",
              width: "80%", // Adjust width to your preference
              margin: "auto", // Center horizontally
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginTop: 4,
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              India’s First Ever Fantasy Cricket Workshop
            </Typography>
            <Typography
              variant="h3"
              sx={{
                marginTop: 4,
                color: "#ef233c",
                fontWeight: "bold",
                fontSize: { xs: "1.8rem", md: "3rem" },
              }}
            >
              Become A Fantasy Cricket Expert
            </Typography>
            <Typography
              variant="h4"
              sx={{
                marginTop: 4,
                color: "#ffffff",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              💸 SEEKHO
              <span style={{ color: "#29bf12", fontWeight: "bold" }}>
                {" "}
                PROFITABLE{" "}
              </span>
              STRATEGIES! 💸
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: 4,
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              LEARN MY INSIDER FANTASY CONTEST STRATEGIES THAT MADE ME OVER 60+
              LACS
              <br />
              WHILE ALSO WINNING MORE THAN 20+ GRAND LEAGUES
            </Typography>
          </Box>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "#03045e",
                  borderRadius: 2,
                  marginY: 2,
                  paddingY: 4,
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  2+ Hr. Live Workshop
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "#03045e",
                  borderRadius: 2,
                  marginY: 2,
                  paddingY: 4,
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  On April 14, 2024
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "#03045e",
                  borderRadius: 2,
                  marginY: 2,
                  paddingY: 4,
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  At 11:00 Am
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "#03045e",
                  borderRadius: 2,
                  marginY: 2,
                  paddingY: 4,
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  Ultimate Guide To Increase Profits <br /> In Fantasy Contests
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "#03045e",
                  borderRadius: 2,
                  marginY: 2,
                  paddingY: 4,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: 400 }}
                >
                  4.8/5 Stars
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  2539+ Students
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "#03045e",
                  borderRadius: 2,
                  marginY: 2,
                  paddingY: 4,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: 400 }}
                >
                  Get Certified by a
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Fantasy Cricket Expert
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginY: 2, paddingX: "20px" }}>
              <img
                src={Thumbnail}
                alt="This is a thumbnail"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </Box>
            <Button
              sx={{
                width: "80%",
                paddingY: 2,
                color: "white",
                backgroundColor: "#03045e",
              }}
            >
              <a
                href="https://rzp.io/i/VDjGUt2E"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Register now ₹99
              </a>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 1000,
          margin: "auto",
          marginBottom: 10,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ paddingY: 5, fontWeight: "600", color: "#ffffff" }}
          >
            What You Will Learn In this Workshop?
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#29bf12", fontWeight: "bold", paddingY: 4 }}
          >
            Research and Team Preparation Process
          </Typography>
          <Typography
            variant="section"
            sx={{ fontWeight: "600", color: "#ffffff", paddingY: 4 }}
          >
            Learn the in-depth but easy-to-follow process of researching various
            tournaments, matches,
            <br /> pitches, players, choosing captains, VCs, etc, and everything
            else to be finally
            <br /> able to make profitable teams, always.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#29bf12", fontWeight: "bold", paddingY: 4 }}
          >
            The Ins & Outs of Fantasy Cricket & Picking Right Platform
          </Typography>
          <Typography
            variant="section"
            sx={{ fontWeight: "600", color: "#ffffff", paddingY: 4 }}
          >
            A brief guide to understanding everything about fantasy cricket from
            scratch and how <br /> to avoid the biggest mistakes while selecting
            the platform to play the contents.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#29bf12", fontWeight: "bold", paddingY: 4 }}
          >
            Investment Strategies and Contest Planning
          </Typography>
          <Typography
            variant="section"
            sx={{ fontWeight: "600", color: "#ffffff", paddingY: 4 }}
          >
            The most important lesson that I have learned while selecting the
            types of contests & <br />
            allocating the budget to gain maximum profit in minimum investment.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#29bf12", fontWeight: "bold", paddingY: 4 }}
          >
            Stay Profitable & Create A Long Term Career
          </Typography>
          <Typography
            variant="section"
            sx={{ fontWeight: "600", color: "#ffffff", paddingY: 4 }}
          >
            The honest, No fluff truth about staying profitable in the long run
            and making fantasy <br />
            cricket a long-term career that I am personally pursuing right now.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#29bf12", fontWeight: "bold", paddingY: 4 }}
          >
            Complete Walk Through Of Selecting The Best 11
          </Typography>
          {/* <Typography
            variant="section"
            sx={{ fontWeight: "600", color: "#ffffff", paddingY: 4 }}
          >
            Revealing for the very first time! Watch my practical & proven
            process of doing <br /> research, collecting data from the previous
            matches, and selecting the best 11 that <br /> made me a fortune.
          </Typography> */}
        </Box>
        <Box>
          <Button
            sx={{
              marginY: 4,
              width: 690,
              paddingY: 2,
              color: "white",
              backgroundColor: "#03045e",
              borderRadius: 2,
              marginTop: 3,
              "&:hover": {
                backgroundColor: "#03045e", // Ensure the same color on hover to remove the effect
              },
            }}
          >
            <a
              href="https://rzp.io/i/VDjGUt2E"
              style={{ textDecoration: "none", color: "white" }}
            >
              Register Now at just ₹ 99
            </a>
          </Button>
        </Box>
        <Box>
          <Typography
            variant="section"
            sx={{ fontWeight: "600", color: "#ffffff", paddingY: 0 }}
          >
            Enroll before April 08, 2024 to unlock 2 extra bonuses worth ₹4500
            for FREE!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginY: { xs: 16, md: 32 },
          marginTop: { xs: 100 },
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "600", color: "#ffffff" }}>
            Win All Types Of Contests
          </Typography>
          {/* <Typography
            variant="h6"
            sx={{ marginY: 2, fontWeight: "600", color: "#ffffff" }}
          >
            A key strategy to win various kinds of contests available on various
            platforms.
          </Typography> */}
        </Box>
        <Box sx={{ flexGrow: 1, paddingY: 4, marginY: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              justifyContent: "center",
            }}
          >
            {scrrendata.map((screenshot, index) => (
              <Grid
                item
                xs={12} // For mobile screens, take full width
                sm={6} // For small screens, take half width
                md={4} // For medium screens and above, take one-third width
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "90%", // Adjust width for smaller screens
                    marginY: 4,
                    backgroundColor: "red",
                    border: "2px solid #131E29",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h4" sx={{ paddingY: "10px" }}>
                    {screenshot.title}
                  </Typography>
                  <img
                    src={screenshot.imageUrl}
                    alt={`Screenshot ${screenshot.id}`}
                    style={{
                      width: "100%",
                      borderRadius: "20px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          <Button
            sx={{
              marginY: 2,
              width: { xs: "100%", md: 690 }, // Adjust width for small and medium screens
              backgroundColor: "#03045e",
              color: "white",
              paddingY: 2,
              "&:hover": {
                backgroundColor: "blue",
                color: "white",
                textDecoration: "none",
                color: "white",
              },
              textAlign: { xs: "center", md: "inherit" }, // Center align on small screens
            }}
          >
            <a
              href="https://rzp.io/i/VDjGUt2E"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              register now at just{" "}
            </a>
            <s style={{ marginLeft: "5px", marginRight: "5px" }}> ₹ 4500 </s> ₹
            99
          </Button>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Enroll before April 09, 2024 to unlock 2 extra bonuses worth ₹4500
            for ₹99!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginY: 10,
          color: "white",
          backgroundColor: "black",
          padding: 2,
        }}
      >
        {/* Content goes here */}
        <Typography variant="h3">Know Your Coach</Typography>
        <Box
          sx={{
            width: "100%",
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginY: 2,
          }}
        >
          <img
            src={Thumbnail}
            alt="coach image"
            style={{
              maxWidth: "100%",
              padding: 2,
              objectFit: "cover",
              maxHeight: "100%",
              borderRadius: "10px",
              "@media (min-width: 768px)": {
                width: "80%",
                height: "auto",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            margin: "auto",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, marginY: 2 }}>
            Prince Kumar
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, marginY: 2 }}>
            Hi, I’m Prince Kumar. Currently, I am Founder of a The Sports Prince
            Pvt Ltd.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, marginY: 2 }}>
            I’ve been playing Fantasy Cricket for over 15+ Years now and I have
            Total Wins over 60+ Lacs and have won more than 20 Grand Leagues.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, marginY: 2 }}>
            I’ve been working extensively in the field of Cricket Analytics with
            rich data & building models around it for the past 14 years making
            it easier for me to play fantasy cricket.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, marginY: 2 }}>
            Analyzing raw Sports data and coming up with insightful conclusions
            through it is my area of expertise. And I promise you that you could
            do the same for your fantasy contests.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, marginY: 2 }}>
            This is why I feel I’m the perfect person to help in your journey in
            Fantasy Cricket and increase your Profitability in it.
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: { xs: "100%", md: "80%" },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              height: 150,
              marginBottom: 2,
              backgroundColor: "white",
              marginY: 2,
              color: "black",
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600, paddingY: 2 }}>
              Total Followers
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              5,225+
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              height: 150,
              marginBottom: 2,
              backgroundColor: "white",
              marginY: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "blue",
                }}
              >
                <span>
                  <InstagramIcon
                    style={{
                      color: "blue",
                      width: 60,
                      height: 60,
                      marginRight: 10,
                    }}
                  />
                </span>
              </Typography>
              <Typography variant="h4" sx={{ color: "blue", fontWeight: 600 }}>
                Instagram
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 600, color: "blue" }}>
              5,225+
            </Typography>
          </Box>
        </Box>
        <Button
          sx={{
            marginY: 2,
            width: { xs: "100%", md: 690 }, // Adjust width for small and medium screens
            backgroundColor: "yellow",
            color: "blue",
            fontWeight: 600,
            paddingY: 2,
            "&:hover": {
              backgroundColor: "blue",
              color: "white",
              textDecoration: "none",
              color: "white",
            },
            textAlign: { xs: "center", md: "inherit" }, // Center align on small screens
          }}
        >
          <a
            href="https://rzp.io/i/VDjGUt2E"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            register now at just{" "}
          </a>
          <s style={{ marginLeft: "5px", marginRight: "5px" }}> ₹4500 </s> ₹99
        </Button>
        <Typography variant="h5">
          Enroll before April 09, 2024 to unlock 2 extra bonuses worth ₹ 4500
          for ₹ 99!
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginY: 0,
          marginBottom: 10,
          color: "black",
          backgroundColor: "white",
          padding: 2,
        }}
      >
        {/**first box */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              "@media (max-width: 600px)": {
                // Adjust font size for screens up to 600px wide
                fontSize: "1.5rem", // Adjust font size as needed for mobile
              },
            }}
          >
            Who Is This Workshop Designed For?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              marginTop: 1,
              color: "green",
              "@media (max-width: 600px)": {
                // Adjust font size for screens up to 600px wide
                fontSize: "1.5rem", // Adjust font size as needed for mobile
              },
            }}
          >
            EACH & EVERY CRICKET ENTHUSIASTS
          </Typography>
        </Box>
        {/**second box */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: { xs: "100%", md: "90%" },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              height: 300,
              marginBottom: 2,
              backgroundColor: "red",
              marginY: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "blue",
                }}
              >
                <span>
                  <LinkedInIcon
                    style={{
                      color: "black",
                      width: 60,
                      height: 60,
                      marginRight: 10,
                    }}
                  />
                </span>
              </Typography>
              <Typography variant="h4" sx={{ color: "black", fontWeight: 600 }}>
                Beginner
              </Typography>
            </Box>
            <Box sx={{ marginX: 4 }}>
              <Typography variant="" sx={{ fontWeight: 600, color: "white" }}>
                If you have just heard or watched ads on TV about creating &
                winning fantasy contests but haven’t tried any platform yet,
                then we have covered everything from scratch to start your
                perfect winning journey.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              height: 300,
              marginBottom: 2,
              backgroundColor: "red",
              marginY: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "blue",
                }}
              >
                <span>
                  <LinkedInIcon
                    style={{
                      color: "black",
                      width: 60,
                      height: 60,
                      marginRight: 10,
                    }}
                  />
                </span>
              </Typography>
              <Typography variant="h4" sx={{ color: "black", fontWeight: 600 }}>
                Intermediate
              </Typography>
            </Box>
            <Box sx={{ marginX: 4 }}>
              <Typography variant="" sx={{ fontWeight: 600, color: "white" }}>
                If you have signed up for various platforms but haven’t cracked
                the winning formula and so you are only playing free contests.
                Then we have covered how to select the right team and contest
                type to increase your profitability.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              height: 300,
              marginBottom: 2,
              backgroundColor: "red",
              marginY: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "blue",
                }}
              >
                <span>
                  <LinkedInIcon
                    style={{
                      color: "black",
                      width: 60,
                      height: 60,
                      marginRight: 10,
                    }}
                  />
                </span>
              </Typography>
              <Typography variant="h4" sx={{ color: "black", fontWeight: 600 }}>
                Professional
              </Typography>
            </Box>
            <Box sx={{ marginX: 4 }}>
              <Typography variant="" sx={{ fontWeight: 600, color: "white" }}>
                If you have tried various contests and won a few matches already
                but now you want to maximize your profit and want to make this a
                long-term career, then we have included an in-depth guide on
                staying profitable over the long term.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Button
          sx={{
            marginY: 2,
            width: { xs: "100%", md: 690 }, // Adjust width for small and medium screens
            backgroundColor: "#fca311",
            color: "blue",
            fontWeight: 600,
            paddingY: 2,
            "&:hover": {
              backgroundColor: "blue",
              color: "white",
              textDecoration: "none",
              color: "white",
            },
            textAlign: { xs: "center", md: "inherit" }, // Center align on small screens
          }}
        >
          <a
            href="https://rzp.io/i/VDjGUt2E"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            register now at just{" "}
          </a>
          <s style={{ marginLeft: "5px", marginRight: "5px" }}> ₹ 4500 </s> ₹ 99
        </Button>
        <Typography variant="h5">
          Enroll before April 09, 2024 to unlock 2 extra bonuses worth ₹ 4500
          for FREE!
        </Typography>
      </Box>

      {/**Bonus Box here */}
      <Box
        sx={{
          width: "100%",
          marginY: 0,
          marginBottom: 10,
          color: "white",
          backgroundColor: "black",
          padding: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            "@media (max-width: 600px)": {
              // Adjust font size for screens up to 600px wide
              fontSize: "1.5rem", // Adjust font size as needed for mobile
            },
          }}
        >
          Enroll before April 09, 2024, to unlock 2 extra bonuses worth
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            marginTop: 2,
            "@media (max-width: 600px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          ₹4500 for FREE!
        </Typography>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: { xs: "100%", md: "80%" },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              height: 240,
              marginBottom: 2,
              backgroundColor: "red",
              marginY: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "black", fontWeight: 600, paddingY: 2 }}
              >
                BONUS 1
              </Typography>
            </Box>
            <Box sx={{ marginX: 2 }}>
              <Typography
                variant=""
                sx={{ fontWeight: 600, color: "white", paddingY: 2 }}
              >
                My top secrets and key insights on how to win grand leagues.
              </Typography>
            </Box>
            <Box
              sx={{
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "black", fontWeight: 600, paddingY: 2 }}
              >
                Free for you
              </Typography>
              <Typography variant="h5">
                <strike>Value Rs. 3,000/-</strike>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              height: 240,
              marginBottom: 2,
              backgroundColor: "red",
              marginY: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "black", fontWeight: 600, paddingY: 2 }}
              >
                BONUS 2
              </Typography>
            </Box>
            <Box sx={{ marginX: 2 }}>
              <Typography
                variant=""
                sx={{ fontWeight: 600, color: "white", paddingY: 2 }}
              >
                Get free access to my ebook "How to win in Dream11: How I Won 20
                lakh from it"
              </Typography>
            </Box>
            <Box
              sx={{
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "black", fontWeight: 600, paddingY: 2 }}
              >
                Free for you
              </Typography>
              <Typography variant="h5">
                <strike>Value Rs. 1500/-</strike>
              </Typography>
            </Box>
          </Box>
        </Box>
        {/**last Box */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            marginTop: 10,
            "@media (max-width: 600px)": {
              // Adjust font size for screens up to 600px wide
              fontSize: "1.5rem", // Adjust font size as needed for mobile
            },
          }}
        >
          Your time is running out!!
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            marginTop: 2,
            "@media (max-width: 600px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          Join Now!
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            marginTop: 6,
            "@media (max-width: 600px)": {
              // Adjust font size for screens up to 600px wide
              fontSize: "1.5rem", // Adjust font size as needed for mobile
            },
          }}
        >
          Today's Price is Rs<strike> 1,999</strike> Rs. 99 Only
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            marginTop: 2,
            "@media (max-width: 600px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          Offer Expiring in
        </Typography>
        {/* white box timer */}
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginTop="50px"
        >
          {/* First inner box for minutes */}
          <Box
            sx={{
              width: "200px", // Adjust width as per your requirement
              height: "100px", // Adjust height as per your requirement
              backgroundColor: "lightblue",
              textAlign: "center",
              display: "flex",
              fontSize: "90px",
              fontWeight: "bold",
              color: "blue",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {`${time.minutes.toString().padStart(2, "0")}`}
          </Box>
          <Typography>
            <span>:</span>
          </Typography>
          {/* Second inner box for seconds */}
          <Box
            sx={{
              width: "200px", // Adjust width as per your requirement
              height: "100px", // Adjust height as per your requirement
              backgroundColor: "lightgreen",
              textAlign: "center",
              display: "flex",
              fontWeight: "bold",
              justifyContent: "center",
              fontSize: "90px",
              color: "red",
              alignItems: "center",
            }}
          >
            {`${time.seconds.toString().padStart(2, "0")}`}
          </Box>
        </Box>
        <Button
          sx={{
            marginTop: 6,
            width: { xs: "100%", md: 690 }, // Adjust width for small and medium screens
            backgroundColor: "#fca311",
            color: "blue",
            fontWeight: 600,
            paddingY: 2,
            "&:hover": {
              backgroundColor: "blue",
              color: "white",
              textDecoration: "none",
              color: "white",
            },
            textAlign: { xs: "center", md: "inherit" }, // Center align on small screens
          }}
        >
          <a
            href="https://rzp.io/i/VDjGUt2E"
            style={{ textDecoration: "none", color: "white" }}
          >
            register now at just{" "}
          </a>
          <s style={{ marginLeft: "5px", marginRight: "5px" }}> ₹ 4500 </s> ₹ 99
        </Button>
        <Typography variant="h5" sx={{ marginY: 4 }}>
          Enroll before April 09, 2024 to unlock 2 extra bonuses worth ₹ 4500
          for FREE!
        </Typography>
      </Box>
      {/* <Sliderimage /> */}
    </Box>
  );
};

export default Course;
