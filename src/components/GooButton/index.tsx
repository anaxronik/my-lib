import "./styles.scss";

import React from "react";

export interface IGooButtonProps {
  name: string;
  number: number;
  boolean: boolean;
}

const GooButton: React.FC<IGooButtonProps> = (props) => {
  return (
    <div className="goo-button">
      <div className="goo-button__1">GooButton</div>
      <div className="goo-button__2">props.name: {props.name}</div>
      <div className="goo-button__3">props.number: {props.number}</div>
      <div className="goo-button__4">
        props.boolean: {props.boolean ? "true" : "false"}
      </div>
    </div>
  );
};

export default GooButton;
