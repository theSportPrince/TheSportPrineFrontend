import React, { useState } from "react";
import { Modal, TextField, Button } from "@mui/material";
import axios from "axios";
import { ChatState } from "../../Context/ChatProvider";
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles

function AddBlogModal({ open, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]); // Initialize with empty strings for three image fields

  const { user } = ChatState();

  const handleSubmit = async () => {
    console.log(imageUrls);

    try {
      if (!title || !description || !user || !imageUrls) {
        console.error("All fields are required");
        return;
      }
      console.log(description);
      const formattedDescription = description;

      const postData = {
        title: title,
        description: formattedDescription,
        user: user._id,
        imageUrls: imageUrls.filter((url) => url.trim()),
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/create`,
        postData
      );
      console.log("Post response:", response.data);
      onClose();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const parseHTML = (htmlString) => {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlString, "text/html");
    return parsedDocument.body.firstChild;
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <div style={{ width: "80%", backgroundColor: "#fff", padding: 20 }}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        {/* <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginBottom: 10 }}
        /> */}

        <ReactQuill
          value={description}
          onChange={setDescription}
          modules={{
            toolbar: {
              container: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link"],
                ["clean"],
              ],
            },
          }}
          formats={[
            "header",
            "bold",
            "italic",
            "underline",
            "list",
            "bullet",
            "link",
          ]}
          style={{ marginBottom: 10, minHeight: 200 }}
        />

        {/* Repeat for each image field */}
        {[1, 2, 3].map((index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <TextField
            
              fullWidth
              value={imageUrls[index - 1]}
              onChange={(e) => {
                const updatedUrls = [...imageUrls];
                updatedUrls[index - 1] = e.target.value;
                setImageUrls(updatedUrls);
              }}
              style={{ marginBottom: 10 }}
            />
          </div>
        ))}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
          
        </Button>
      </div>
    </Modal>
  );
}

export default AddBlogModal;
