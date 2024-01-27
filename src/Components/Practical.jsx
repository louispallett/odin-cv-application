import { useState } from "react";

/*
FIXME: In Experience(), needs to return dropdown <select> rather than input (otherwise editing becomes more difficult)

FIXME: add remove logic - we currently add this by mapping the qualifications based on the qualifications state. So, we need to
redefine this state.

FIXME: Label for currentJob? is linked to submission element (rather than component) - update htmlFor to ensure that the correct checkbox
is being selected.  

FIXME: Disabling end date for currentJob not working with submitted elements. Need to link this based on state. This relates to function
currentJobCheckBox().
*/

class classExperience {
    constructor(title, start, end, description) {
        this.title = title;
        this.start = start;
        this.end = end;
        this.description = description;
    }
}


export default function Practical() {
    
    const [experiences, setExperiences] = useState([]);
    
    const addExperience = () => {
        let titleValue = document.querySelector(".jobTitle").value;
        let startValue = document.querySelector(".start").value;
        let endValue = document.querySelector(".end").value;
        let description = document.querySelector("#description").value;
        let currentRole = document.querySelector("#currentJob");
        const newExperience = new classExperience(titleValue, startValue, (currentRole.checked) ? "current" : endValue, description);
        
        setExperiences([...experiences, newExperience]);
        
        document.querySelector(".jobTitle").value = "";
        document.querySelector(".start").value = "";
        document.querySelector(".end").value = "";
        document.querySelector(".end").disabled = false;
        document.querySelector("#description").value = "";
        document.querySelector("#currentJob").checked = false;
    }
    
    const currentlyWorking = () => {
        const end = document.querySelector(".end");
    
        end.disabled = !end.disabled;
    }
    
    return (
        <section className="practical">
            <h3>Career History and Practical Experience</h3>
            <div>
                {experiences.map((experience, index) => (
                    <Experience key={index} experience={experience} />
                ))}
                <div className="practical-wrapper">
                    <input placeholder="Job Title" className="jobTitle" />
                    <input className="start" type="date"/>
                    <input className="end" type="date"/>
                    <div className="currentJobWrapper">
                        <input type="checkbox" id="currentJob" onClick={currentlyWorking} />
                        <label htmlFor="currentJob">Current Job?</label>
                    </div>
                </div>
                <textarea
                name="description"
                id="description"
                cols="10" rows="7"
                placeholder="Please provide a short description of the role, the skills required/developed whilst working there, and any other relevant information."></textarea>
                <button className="btn" onClick={addExperience}>Add</button>
            </div>
        </section>
    )
}

function Experience({ experience }) {
    const [editing, setEditing] = useState(false);
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const inputProps = generateInputProps(editing);

    const editExperience = () => {
        setEditing(!editing);
    };

    // Buggy - see notes at top
    const currentJobCheckBox = () => setCurrentlyWorking(!currentlyWorking);

    const deleteExperience = () => {
        alert("Feature not yet added");
    };

    return (
        <>
            <div className="experience-header">
                <input defaultValue={experience.title} {...inputProps} />
                <input defaultValue={experience.start} type="date" {...inputProps} />
                <input defaultValue={experience.end} type="date" {...inputProps} 
                disabled={currentlyWorking ? true : false} />
                <div className="currentJobWrapper">
                    <input type="checkbox" className="currentJob"
                        defaultChecked={experience.end == "current" ? true : false}
                        {...inputProps}
                    />
                    <label htmlFor="currentJob" id={editing ? "" : "editing-currentJob"}>Current Job?</label>
                </div>
            </div>
            <textarea 
                defaultValue={experience.description}
                disabled={editing ? false : true}
                {...inputProps} >
            </textarea>
            {!editing ? (
                <button className="btn" onClick={editExperience}>Edit</button>
            ) : (
                <>
                    <button className="btn" onClick={editExperience}>Done</button>
                    <button className="btn" onClick={deleteExperience}>Remove</button>
                </>
            )}
        </>
    );
}

const generateInputProps = (editing) => {
    return {
        disabled: editing ? false : true,
        id: editing ? "" : "editing"
    }
}