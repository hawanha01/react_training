import React from "react";
import image from "../../assets/meals.jpg"
import "./image.css"
const Image = () => {
  return(
    <div className="headerImage">
      <img src={image} alt="meal" />
    </div>
  );
}

export default Image;
