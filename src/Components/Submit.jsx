import { useState } from "react";
import logo from "/atom-favicon.svg";
import loading from "/loading.svg";

export default function Submit() {
    const [submitting, setSubmitting] = useState("notSubmitted");

    const checkSubmitForm = () => {
        setSubmitting("checkSubmission");
    }

    const cancelSubmission = () => {
        setSubmitting("notSubmitted");
    }

    const submitForm = async () => {
        setSubmitting("submitting");
        const result = await submittingForm();
        // More logic can be applied here later (for failures)
        // As this is the default in switch, we don't need to add a state here, just clear it!
        result ? setSubmitting() : console.log("Failed");
    }

    const submittingForm = () => {
        // Simulate loading
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        })
        
    }

    let itemContent;

    switch (submitting) {
        case "notSubmitted":
            itemContent = (
                <div className="submit-wrapper">
                    <button className="submit-btn" onClick={checkSubmitForm}>Submit</button>
                </div> 
            )
            break;
        case "checkSubmission":
            itemContent = (
            <div className="cancel-submit">
                <p>Are you sure you wish to submit? Double check everything before!</p>
                <div>
                    <button onClick={submitForm} className="submit-btn">Yes, Submit</button>
                    <button onClick={cancelSubmission}>No, Stop!</button>
                </div>
            </div> 
            )
            break;
        case "submitting":
            itemContent = (
                <div className="loading-wrapper">
                    <img src={loading} alt="The loading icon - a curved semi cirlce spining continuously" />
                </div>
            )
            break;
        default:
            itemContent = (
                <div className="submitted">
                    <h2>Thank you for submitting your application!</h2>
                    <p>You should have recieved a confirmation email, detailing the role you have applied for (in an attached PDF).</p>
                    <p>We will be in touch in a few weeks!</p>
                    <div>
                        <img src={logo} alt="" />
                        <p>Mikoshi Corporation Ltd</p>
                    </div>
                </div>
            )
            break;
    }

    return (
        <>
            {itemContent}
        </>
    )
}