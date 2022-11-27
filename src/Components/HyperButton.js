import React from "react";
import Button from "react-bootstrap/Button";
import "./HyperButton.css";

const HyperButton = (props) => {
  return (
    <Button
      as="a"
      variant={props.variant}
      className={props.className}
      onClick={props.onClick}
      href={props.href}
      target={props.target}
    >
      <span>{props.icon} </span>
      <span> {props.text}</span>
    </Button>
  );
};

export default HyperButton;
