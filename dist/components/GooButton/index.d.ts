import React from "react";
export interface IGooButtonProps {
    name: string;
    number: number;
    boolean: boolean;
}
declare const GooButton: React.FC<IGooButtonProps>;
export default GooButton;
