import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './styles/index.scss';

import General from './Components/General.jsx';
import Education from './Components/Education.jsx';
import Practical from './Components/Practical.jsx';
import Submit from './Components/Submit.jsx';

function App() {
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
        result ? setSubmitting("submitted") : console.log("Failed");
    }

    const submittingForm = () => {
        // Simulate loading
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    }

    return (
        <>
            {submitting === "submitted" ? (
                <React.StrictMode>
                    <Submit />
                </React.StrictMode>
            ) : (
                <React.StrictMode>
                    <General />
                    <Education />
                    <Practical />
                    <Submit 
                        submitting={submitting}
                        checkSubmitForm={checkSubmitForm}
                        cancelSubmission={cancelSubmission}
                        submitForm={submitForm}
                    />
                </React.StrictMode>
            )}
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);