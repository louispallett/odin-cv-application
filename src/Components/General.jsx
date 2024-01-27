import { useState } from "react";
import countryCodes from "country-codes-list";

export default function General() {    
    return (
        <section className="general">
            <h3>General Information</h3>
            <div>
                <div>
                    <InputLine label="First Name" _id="first_name"/>
                    <InputLine label="Last Name" _id="last_name" />
                </div>
                <div>
                    <InputLine label="Email" type="email" _id="email" />
                    <InputLine label="Number" type="tel" _id="number" />
                </div>
            </div>
        </section>
    )
}

function InputLine({label, type, _id}) {
    const [editStatus, setEditStatus] = useState(true);

    return (
        <div className="general-info-wrapper">
            <label htmlFor={_id}>{label}</label>
            {_id == "number" && 
                <CodeSelect />}
            <input 
                type={type} 
                id={_id}
                className={editStatus ? "edit" : "noEdit"}
            />
        </div>
    );
}

function CodeSelect() {
    const countryCodesArray = Object.entries(countryCodes.customList("countryCode", "+{countryCallingCode}"));
    return (
        <select name="countryCode" id="countryCode" defaultValue="GB">
            {countryCodesArray.map(([code, label]) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    )
}