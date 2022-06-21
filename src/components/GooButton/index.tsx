import React from "react";

export interface IGooButtonProps {
    name: string;
    number: number;
    boolean: boolean;
}

const GooButton: React.FC<IGooButtonProps> = (props) => {
    return (
        <div>
            <div>GooButton</div>
            <div>props.name: {props.name}</div>
            <div>props.number: {props.number}</div>
            <div>props.boolean: {props.boolean ? 'true' : 'false'}</div>
        </div>
    );
};

export default GooButton;
