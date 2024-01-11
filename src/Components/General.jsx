import { useState } from "react";

export default function General() {    
    return (
        <section>
            <fieldset>
                <legend>General</legend>
                <InputLine label="First Name" _id="first_name"/>
                <InputLine label="Last Name" _id="last_name" />
                <InputLine label="Email" type="email" _id="email" />
                <InputLine label="Number" type="tel" _id="number" />
            </fieldset>
        </section>
    )
}

function InputLine({label, type, _id}) {
    const [editStatus, setEditStatus] = useState(true);

    return (
        <div>
            <label htmlFor={_id}>{label}</label>
            <input 
                type={type} 
                id={_id}
                className={editStatus ? "edit" : "noEdit"}
            />
        </div>
    );
}

InputLine.defaultProps = {
    type: "text"
};