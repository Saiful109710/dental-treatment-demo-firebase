import React from "react";

const Feedback = ({ singleFeedback }) => {
    const {id,
        name,
        treatment,
        rating,
        feedback,
        date} = singleFeedback
  return (
    <div className="card bg-base-100  shadow-xl">
      <div className="card-body">
        <p>{new Date().toLocaleDateString()}</p>
        <h2 className="card-title">{name}</h2>
        <p>{feedback}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
