// import React, { useState, useEffect } from "react";
// import { Button } from "@mui/material";
// import AddBlogModal from "./AddBlogModal";
// import axios from "axios";
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   CardActionArea,
//   Modal,
//   Box,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { IconButton } from "@mui/material";
// import { ChatState } from "../../Context/ChatProvider";
// import SuccessNotifier from "../ToastNotifications/SuccessNotifier";
// import ErrorNotifier from "../ToastNotifications/ErrorNotifier";
// import circularProgressClasses from "@mui/material";

// function Blog() {
//   const [openModal, setOpenModal] = useState(false);
//   const [allBlogData, setAllBlogData] = useState([]);
//   const [displayedLatestNews, setDisplayedLatestNews] = useState(4);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedNews, setSelectedNews] = useState(null);
//   const [edit, setEdit] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [hasError, setHasError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [editblog, setEditBlog] = useState(null);

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Assuming 768px is your mobile breakpoint
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleDelete = async (editblog) => {
//     const { data } = await axios.delete(
//       `${process.env.REACT_APP_BASE_URL}/api/delete/${editblog}`
//     );
//     console.log(data);
//   };

//   const { user } = ChatState();

//   const { _id } = user ?? "";

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     console.log("Closing modal"); // Debugging statement
//     setShowModal(false);
//     setOpenModal(false);
//   };

//   const handleCardClick = (news) => {
//     setSelectedNews(news);
//     setShowModal(true);
//   };

//   const fetchAllBLog = async (req, res) => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/api/fetch`
//       );
//       if (data) {
//         console.log("BLOG", data);
//         setAllBlogData(data);
//         setLoading(false);
//         setIsSuccess(true);
//         setSuccessMessage("Blog fetch successfully");
//       }
//     } catch (error) {
//       console.log(error);
//       setHasError(true);
//       setErrorMessage(error);
//     }
//   };

//   const handleUpdate = (blogId) => {
//     setOpenModal(true);
//     setEditBlog(blogId);
//     setEdit(true);
//   };

//   useEffect(() => {
//     fetchAllBLog();
//   }, []);

//   return (
//     <div
//       style={{
//         margin: "20px",
//         overflowY: "auto",
//         marginTop: isMobile ? "10%" : "4%",
//       }}
//     >
//       {hasError && (
//         <ErrorNotifier {...{ message: errorMessage, setHasError }} />
//       )}
//       {isSuccess && (
//         <SuccessNotifier {...{ message: successMessage, setIsSuccess }} />
//       )}
//       <h1>Blog</h1>
//       {loading ? (
//         <circularProgressClasses />
//       ) : (
//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "flex-end",
//             margin: "10px",
//           }}
//         >
//           <Button
//             sx={{ backgroundColor: "red" }}
//             variant="contained"
//             color="primary"
//             onClick={handleOpenModal}
//           >
//             Create Blog
//           </Button>
//         </Box>
//       )}
//       <AddBlogModal
//         open={openModal}
//         onClose={handleCloseModal}
//         edit={edit}
//         editblog={editblog}
//       />{" "}
//       <Grid container spacing={4}>
//         {allBlogData.map((result, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//             <Card
//               sx={{
//                 maxWidth: 345,
//                 height: "50vh",
//                 position: "relative",
//                 transition: "transform 0.3s ease-in-out",
//                 overflowY: "hidden",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                   overflowY: "auto",
//                 },
//               }}
//             >
//               <CardActionArea onClick={() => handleCardClick(result)}>
//                 <CardMedia
//                   component="img"
//                   height="fit-content"
//                   image={result?.imageUrl}
//                   alt="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {result.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {result.description}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               {user && _id === result.user._id ? (
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     right: 0,
//                     zIndex: 1,
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "flex-end",
//                     padding: "10px",
//                   }}
//                 >
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleUpdate(result._id)}
//                   >
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton
//                     color="error"
//                     onClick={() => handleDelete(result._id)}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//               ) : (
//                 <></>
//               )}{" "}
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Modal
//         open={showModal}
//         onClose={handleCloseModal}
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           height: "100vh",
//           overflowY: "auto",
//           overflowX: "auto",
//         }}
//       >
//         <Card sx={{ m: 2 }}>
//           <CardMedia
//             component="img"
//             sx={{
//               height: `${Math.min(window.innerHeight * 0.8, 500)}px`,
//               objectFit: "contain",
//               width: "100%",
//             }}
//             image={selectedNews?.imageUrl}
//             alt="News Image"
//           />
//           <CardContent>
//             <Typography variant="h5" component="div">
//               {selectedNews?.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {selectedNews?.description}
//             </Typography>

//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleCloseModal}
//             >
//               Close
//             </Button>
//           </CardContent>
//         </Card>
//       </Modal>
//     </div>
//   );
// }

// export default Blog;

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddBlogModal from "./AddBlogModal";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  Modal,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { ChatState } from "../../Context/ChatProvider";
import SuccessNotifier from "../ToastNotifications/SuccessNotifier";
import ErrorNotifier from "../ToastNotifications/ErrorNotifier";
import circularProgressClasses from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Blog({ homeflag }) {
  const [openModal, setOpenModal] = useState(false);
  const [allBlogData, setAllBlogData] = useState([]);
  const [displayedLatestNews, setDisplayedLatestNews] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [edit, setEdit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [editblog, setEditBlog] = useState(null);

  const [isMobile, setIsMobile] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming 768px is your mobile breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDelete = async (editblog) => {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/api/delete/${editblog}`
    );
    console.log(data);
  };

  const { user } = ChatState();

  console.log("user", user);

  const { _id } = user ?? "";

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal"); // Debugging statement
    setShowModal(false);
    setOpenModal(false);
  };

  const handleCardClick = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const fetchAllBLog = async (req, res) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/fetch`
      );
      if (data) {
        console.log("BLOG", data);
        setAllBlogData(data);
        setLoading(false);
        setIsSuccess(true);
        setSuccessMessage("Blog fetch successfully");
      }
    } catch (error) {
      console.log(error);
      setHasError(true);
      setErrorMessage(error);
    }
  };

  const navigate = useNavigate();

  const handleback = () => {
    navigate("/more");
  };
  const handleUpdate = (blogId) => {
    setOpenModal(true);
    setEditBlog(blogId);
    setEdit(true);
  };

  useEffect(() => {
    fetchAllBLog();
  }, []);

  const handleReadMore = (description) => {
    setModalContent(description);
    setShowModal(true);
  };
  return (
    <div
      style={{
        margin: "20px",
        overflowY: "auto",
        marginTop: isMobile ? "10%" : "4%",
      }}
    >
      {hasError && (
        <ErrorNotifier {...{ message: errorMessage, setHasError }} />
      )}
      {isSuccess && (
        <SuccessNotifier {...{ message: successMessage, setIsSuccess }} />
      )}

      {!homeflag && (
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
          <Typography variant="h6">Our BLogs</Typography>
        </Box>
      )}

      <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <Typography variant="h5" sx={{ color: "white", padding: "10px" }}>
          Featured Blog
        </Typography>
      </Box>
      {loading ? (
        <circularProgressClasses />
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px",
          }}
        >
        {user && user.role==="admin" ?
        <Button
        sx={{ backgroundColor: "red" }}
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
      >
        Create Blog
      </Button>:<></>
      }  
        </Box>
      )}
      <AddBlogModal
        open={openModal}
        onClose={handleCloseModal}
        edit={edit}
        editblog={editblog}
      />
      <Grid container spacing={4}>
        {allBlogData.map((blog, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                Width: "100%",
                marginY: 5,
                height: "50vh",
                alignItems: "center",
                padding: "10px",

                border: "2px solid #252422",
                position: "relative",
                "@media (min-width: 768px)": {
                  // Adjusting padding for laptop size
                  maxWidth: 345,
                },
                transition: "transform 0.3s ease-in-out",
                // overflowY: "hidden",
                "&:hover": {
                  transform: "scale(1.005)",
                  overflowY: "auto",
                  overflowY: "auto",
                },
              }}
            >
              <CardActionArea onClick={() => handleCardClick(blog)}>
                {/* Assuming the first image URL is used as the preview image */}
                <CardMedia
                  component="img"
                  width="100%"
                  height="fit-content"
                  image={blog.imageUrls[0]}
                  alt="Blog Preview"
                  sx={{
                    borderBottom: "2px solid #252422",
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ fontWeight: "600", color: "#03045e", width: "100%" }}
                    component="div"
                  >
                    {blog.title}
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",

                      textAlign: "center",
                      wordWrap: "break-word",
                      overflowY: "auto",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        color: "#343a40",
                        fontSize: "20px",
                        marginX: "20px",
                        fontFamily: "roboto",
                      }}
                    >
                    
                     
                    <div dangerouslySetInnerHTML={{ __html: blog.description.length > 100 ? blog.description.slice(0, 100) + "..." : blog.description }} />
                    </Typography>
                    {blog.description.length > 100 && (
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleReadMore(blog.description)}
                      >
                        Read More
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </CardActionArea>
              {/* Assuming user information is present */}
              {blog.user && (
                <Box
                  sx={{
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    padding: "10px",
                  }}
                >
                  {/* <Typography variant="subtitle1" color="#03045e">
                    {blog.user.email}
                  </Typography> */}
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100vh",
          overflowY: "auto",
          overflowX: "auto",
        }}
      >
        <Card sx={{ m: 2, backgroundColor: "#131E29", color: "#ffffff" }}>
          <CardMedia
            component="img"
            sx={{
              height: `${Math.min(window.innerHeight * 0.8, 0)}px`,
              objectFit: "cover",
              width: "100%",
            }}
            image={selectedNews?.imageUrl}
            alt="News Image"
          />
          <CardContent
            sx={{
              padding: "0", // Setting padding to 0 for mobile size
              "@media (min-width: 768px)": {
                // Adjusting padding for laptop size
                padding: "16px",
              },
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: 600,
                marginTop: 5,
                marginBottom: 2,
                fontSize: "30px",
                "@media (min-width: 768px)": {
                  fontSize: "80px",
                },
              }}
            >
              {selectedNews?.title}
            </Typography>

            <Box sx={{ marginX: 1 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 2, color: "#ffffff", paddingX: 1 }}
                
                dangerouslySetInnerHTML={{ __html: selectedNews?.description }}
              >
                {/* {selectedNews?.description} */}
                {/* <span dangerouslySetInnerHTML={{ __html: selectedNews?.description }} /> */}
                
              </Typography>
            </Box>
            {/* Map over the array of images if it exists */}
            {selectedNews?.imageUrls && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column", // Display images in one column for mobile size
                  "@media (min-width: 768px)": {
                    // Display images in one row for laptop size
                    flexDirection: "row",
                    flexWrap: "wrap",
                  },
                }}
              >
                {selectedNews.imageUrls.map((imageUrl, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: "0 0 50%",
                      maxWidth: "100%",
                      padding: "5px",
                      marginBottom: "10px", // Adding margin between images for mobile size
                      "@media (min-width: 768px)": {
                        // Adjusting margin for laptop size
                        marginBottom: "0",
                      },
                    }}
                  >
                    <img
                      src={imageUrl}
                      alt={`Image ${index}`}
                      style={{
                        width: "100%",
                        borderRadius: "2px",
                        height: "90%",
                        display: "block",
                        margin: "auto",
                        borderRadius: "4px",
                        objectFit: "cover",
                        maxWidth: "100%",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            )}

            <Button
              variant="contained"
              onClick={handleCloseModal}
              sx={{
                marginTop: 2,
                width: "200px",
                height: "50px",
                backgroundColor: "red",
              }}
            >
              Close
            </Button>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}

export default Blog;
