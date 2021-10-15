import React from "react";

function StarRatingComponent(props) {
  const star = 10;

  return (
    <div>
      {[...Array(star)].map((star, index) => {
        return (
          <span
            key={index}
            className={`star ${props.star > index && "text-yellow-300"}`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}

export default StarRatingComponent;
