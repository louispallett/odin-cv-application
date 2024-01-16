import { useState } from "react";

class userQualification {
    constructor(name, grade, level) {
        this.name = name,
        this.grade = grade,
        this.level = level
    }
}

export default function Education() {

    // const addQualification = () => {
    //     const nameValue = document.querySelector(".qualificationName").value;
    //     const gradeValue = document.querySelector(".qualificationGrade").value;
    //     const qualificationLevel = document.getElementById("qualificationLevel").value;

        // const newQualification = new userQualification(nameValue, gradeValue, qualificationLevel)

    //     userQualifications.push(newQualification);
    //     console.log(userQualifications);
    //     console.log(userQualifications[0].level);
    // }

    const [userQualifications, setUserQualifications] = useState([]);

    const addQualification = () => {
        const nameValue = document.querySelector(".qualificationName").value;
        const gradeValue = document.querySelector(".qualificationGrade").value;
        const qualificationLevel = document.getElementById("qualificationLevel").value;

        const newQualification = new userQualification(nameValue, gradeValue, qualificationLevel)

        const temp = { ...userQualifications, userQualification };
        
        setUserQualifications(temp);
    }


    return (
        <section>
            <fieldset>
                <legend>Education</legend>
                <Qualification />
                <button onClick={addQualification}>Add</button>
            </fieldset>
        </section>
    )
}

function Qualification() {
    return (
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
        </div>
    )
}