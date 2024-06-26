// import React from "react";
// import ScrollableFeed from "react-scrollable-feed";
// import { Box, Tooltip } from "@mui/material";
// import { isSameSender, isLastMessage } from "../ChatLogics";
// import { ChatState } from "../Context/ChatProvider";
// import { Avatar } from "@chakra-ui/react";
// function ScrollableChat({ messages }) {
//   const { user } = ChatState();
//   return (
//     <ScrollableFeed>
//       {messages &&
//         messages.map((m, i) => (
//           <Box sx={{ display: "flex" }} key={m._id}>
//             {(isSameSender(messages, m, i, user._id) ||
//               isLastMessage(messages, i, user._id)) && (
//               <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
//                 {/* <Avatar
//                          mt='7px'
//                          mr={1}
//                          size="sm"
//                          cursor="pointer"
//                          name={m.sender.firstName}
//                          src={m.sender.img_url}
//                        />  */}

//                 <h1>hello</h1>
//               </Tooltip>
//             )}
//           </Box>
//         ))}
//     </ScrollableFeed>
//   );
// }

// export default ScrollableChat;

import { Avatar } from "@mui/material";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    <div
      style={{
        height: "280px", // Set the desired fixed height
        overflowY: "auto", // Enable vertical scrolling
      }}
    >
      <ScrollableFeed>
        {messages &&
          messages?.map((m, i) => (
            <div style={{ display: "flex" }} key={m._id}>
              {(isSameSender(messages, m, i, user?._id) ||
                isLastMessage(messages, i, user?._id)) && (
                <Tooltip
                  label={m.sender?.firstName}
                  placement="bottom-start"
                  hasArrow
                >
                  <Avatar
                    cursor="pointer"
                    name={m.sender?.firstName}
                    src={m.sender?.img_url}
                  />
                </Tooltip>
              )}
              <span
                style={{
                  backgroundColor: `${
                    m.sender?._id === user?._id ? "#BEE3F8" : "#B9F5D0"
                  }`,
                  marginLeft: isSameSenderMargin(messages, m, i, user?._id),
                  marginTop: isSameUser(messages, m, i, user?._id) ? 3 : 10,
                  borderRadius: "20px",
                  padding: "5px 15px",
                  maxWidth: "75%",
                }}
              >
                {m.content}
              </span>
            </div>
          ))}
      </ScrollableFeed>
    </div>
  );
};

export default ScrollableChat;
