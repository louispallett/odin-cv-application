import { useState } from "react";

class classQualification {
    constructor(name, grade, level) {
        this.name = name;
        this.grade = grade;
        this.level = level;
    }
}

export default function Education() {
    const [qualifications, setQualifications] = useState([]);

    const addQualification = () => {
        let nameValue = document.querySelector(".qualificationName").value;
        let gradeValue = document.querySelector(".qualificationGrade").value;
        let qualificationLevel = document.getElementById("qualificationLevel").value;
        const newQualification = new classQualification(nameValue, gradeValue, qualificationLevel);

        setQualifications([...qualifications, newQualification]);

        document.querySelector(".qualificationName").value = "";
        document.querySelector(".qualificationGrade").value = "";
        // Do not reset qualificationLevel - this is because it makes sense from a UI perspective (if user has entered an A Level, they are likely to enter another
        // below etc.)
    };

    return (
        <section>
            <fieldset>
                <legend>Education</legend>
                {qualifications.map((qualification, index) => (
                    <Qualification key={index} qualification={qualification} />
                ))}
                <div>
                    <input placeholder="Qualification Name" className="qualificationName" />
                    <input placeholder="Grade" className="qualificationGrade" />
                    <select name="Qualification" id="qualificationLevel">
                        <option value="Doctorate">Doctorate</option>
                        <option value="Masters">Masters</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="A Level">A Level</option>
                        <option value="GCSE/BTEC">GCSE/BTEC</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button onClick={addQualification}>Add</button>
            </fieldset>
        </section>
    );
}

function Qualification({ qualification }) {
    const [editing, setEditing] = useState(false);

    const editQualification = () => {
        setEditing(!editing);
    };

//   TODO: add remove logic - we currently add this by mapping the qualifications based on the qualifications state. So, we need to
//         redefine this state.
    const deleteQualification = () => {
        alert("Feature not yet added");
    }

//   Important to use defaultValue to edit ('value' will render it read-only)
    return (
        <div>
            <input defaultValue={qualification.name} disabled={editing ? false : true} />
            <input defaultValue={qualification.grade} disabled={editing ? false : true} />
            {/* <div>
                <select name="Qualification" id="qualificationLevel" defaultValue={qualification.level}
                disabled={editing ? false : true}>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="A Level">A Level</option>
                    <option value="GCSE/BTEC">GCSE/BTEC</option>
                    <option value="other">Other</option>
                </select>
            </div> */}
            <input defaultValue={qualification.level} disabled={editing ? false : true} />
            {!editing ? (
                <button onClick={editQualification}>Edit</button>
            ) : (
                <>
                    <button onClick={editQualification}>Done</button>
                    <button onClick={deleteQualification}>Remove</button>
                </>
            )}
        </div>
    );
}