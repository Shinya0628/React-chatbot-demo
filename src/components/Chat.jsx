import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Pineimg from "../assets/img/pineapple.png";
import Userimg from "../assets/img/user.png";

const Chat = (props) => {
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Pineimg} />
        ) : (
          <Avatar alt="icon" src={Userimg} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
