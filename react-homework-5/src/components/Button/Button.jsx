import React from "react";

const Button = (props) => {
  const { text = "Button", onClick, type = "button" } = props;

  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
