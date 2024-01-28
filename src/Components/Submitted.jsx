import { useState } from "react";
import logo from "/atom-favicon.svg"

export default function Submitted() {
    return (
        <div className="submitted">
            <div>
                <h2>Thank you for submitting your application!</h2>
                <p>You should have recieved a confirmation email, detailing the role you have applied for (in an attached PDF).</p>
                <p>We will be in touch in a few weeks!</p>
                <div>
                    <img src={logo} alt="" />
                    <p>Mikoshi Corporation Ltd</p>
                </div>
            </div>
        </div>
    )
}