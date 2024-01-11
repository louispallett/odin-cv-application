import { useState } from "react";

export default function InputLine({label, type, _id}) {
    return (
        <div>
            <label htmlFor={_id}>{label}</label>
            <input type={type} id={_id}/>
        </div>
    );
}

InputLine.defaultProps = {
    type: "text"
};