import { useState } from "react";

class qualification {
    constructor(name, grade, level) {
        this.name = name,
        this.grade = grade,
        this.level = level
    }
}

const userQualificationsList = [];

export default function Education() {

    return (
        <section>
            <fieldset>
                <legend>Education</legend>
                <Qualification />
            </fieldset>
        </section>
    )
}

function Qualification() {

    const [editing, setEditing] = useState(true);

    const addQualification = () => {
        const nameValue = document.querySelector(".qualificationName").value;
        const gradeValue = document.querySelector(".qualificationGrade").value;
        const qualificationLevel = document.getElementById("qualificationLevel").value;
        const userQualification = new qualification(nameValue, gradeValue, qualificationLevel)

        setEditing(false);
    }

    return (
        <>
            <div>
                <input
                placeholder="Qualification Name"
                className="qualificationName"
                />
                <input
                placeholder="Grade"
                className="qualificationGrade"
                />
                <select name="Qualification" id="qualificationLevel">
                    <option value="Doctorate">Doctorate</option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="aLevel">A Level</option>
                    <option value="GCSE/BTEC">GCSE/BTEC</option>
                    <option value="other">Other</option>
                </select>
                {!editing && (
                    <button>Edit</button>
                )}
            </div>
            {editing && (
                <button onClick={addQualification}>Add</button>
            )}
        </>
    )

}

