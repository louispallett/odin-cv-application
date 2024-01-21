import { useState } from "react";

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
        let currentRole = document.querySelector(".currentJob");
        const newExperience = new classExperience(titleValue, startValue, (currentRole.checked) ? "current" : endValue, description);
        
        setExperiences([...experiences, newExperience]);
        
        document.querySelector(".jobTitle").value = "";
        document.querySelector(".start").value = "";
        document.querySelector(".end").value = "";
        document.querySelector(".end").disabled = false;
        document.querySelector("#description").value = "";
        document.querySelector(".currentJob").checked = false;
    }
    
    const currentlyWorking = () => {
        const end = document.querySelector(".end");
    
        end.disabled = !end.disabled;
    }
    
    return (
        <section>
            <fieldset>
                <legend>Practical Experience</legend>
                {experiences.map((experience, index) => (
                    <Experience key={index} experience={experience} />
                ))}
                <div>
                    <input placeholder="Job Title" className="jobTitle" />
                    <input className="start" type="date"/>
                    <input className="end" type="date"/>
                    <input type="checkbox" className="currentJob" onClick={currentlyWorking} />
                    <p>Current job</p>
                </div>
                <textarea 
                name="description" 
                id="description" 
                cols="10" rows="7" 
                placeholder="Please provide a short description of the role, the skills required/developed whilst working there, and any other relevant information."></textarea>
                <button onClick={addExperience}>Add</button>
            </fieldset>
        </section>
    )
}

function Experience({ experience }) {
    const [editing, setEditing] = useState(false);

    const editExperience = () => {
        setEditing(!editing);
    };

//   TODO: add remove logic - we currently add this by mapping the qualifications based on the qualifications state. So, we need to
//         redefine this state.
    const deleteExperience = () => {
        alert("Feature not yet added");
    }

    return (
        <>
            <div>
                <input defaultValue={experience.title} disabled={editing ? false : true} />
                <input defaultValue={experience.start} type="date" disabled={editing ? false : true} />
                <input defaultValue={experience.end} type="date" disabled={editing ? false : true} />
                <input type="checkbox" className="currentJob" 
                    defaultChecked={experience.end == "current" ? true : false}
                    disabled={editing ? false : true}
                />
            </div>
            <textarea 
                defaultValue={experience.description}
                disabled={editing ? false : true}>
            </textarea>
            {!editing ? (
                <button onClick={editExperience}>Edit</button>
            ) : (
                <>
                    <button onClick={editExperience}>Done</button>
                    <button onClick={deleteExperience}>Remove</button>
                </>
            )}
        </>
    );
}