import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div className="question my-2">
      <div className="header  ">
        <h6>{title}</h6>
        <button onClick={() => setShowMore(!showMore)} className="btn-show">
          {showMore ? "Show Less" : "show More"}
        </button>
      </div>
      <p className="details">{showMore && info}</p>
    </div>
  );
};

export default Question;
