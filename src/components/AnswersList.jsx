import React from "react";
import { Answer } from "./index";

const AnswersList = (props) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((val, index) => {
        return (
          <Answer
            content={val.content}
            nextId={val.nextId}
            key={index.toString()}
            select={props.select}
          />
        );
      })}
    </div>
  );
};

export default AnswersList;
