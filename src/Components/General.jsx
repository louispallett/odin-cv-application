import { useState } from "react";
import InputLine from "./InputLine";

export default function General() {
    return (
        <section>
            <fieldset>
                <legend>General</legend>
                <InputLine label="First Name" _id="first_name"/>
                <InputLine label="Last Name" _id="last_name" />
            </fieldset>
        </section>
    )
}