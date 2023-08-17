import { useState } from "react";
import ReactDOM from "react-dom";
export default function CheckboxDyanmic() {
    const gender = ["Dance", "Music", "Sports"];
    const [inputsrd, setInputsrd] = useState([]);
    const handleChange = (event) => {
        setInputsrd((t) => [...t, event.target.value]);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert([inputsrd]);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Hobbies:</label>
            {gender.map((g, i) => {
                return <div>
                    <label key="i">{g}</label>
                    <input type="checkbox" name={"nm" + i} value={g} onClick={handleChange} />
                </div>
            })
            }

            <input type="submit" />
        </form>
    )
}