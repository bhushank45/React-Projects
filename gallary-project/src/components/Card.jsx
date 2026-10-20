import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.user.url} title="Open image" target="_blank" rel="noreferrer">
        <img
          src={props.user.download_url}
          alt={`Photo by ${props.user.author}`}
          className="h-50 w-full object-cover"
        />
        <p className="p-3 text-lg">
          <span className="font-bold">Author: </span>
          <span className="italic">{props.user.author}</span>
        </p>
      </a>
    </div>
  );
};

export default Card;
