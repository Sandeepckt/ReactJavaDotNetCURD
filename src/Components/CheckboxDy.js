import { useState } from "react";
import ReactDOM from "react-dom";
export default function CheckboxDy() {
    const gender = ["Dance", "Music", "Sports"];
    const [inputsrd, setInputsrd] = useState([]);
    const handleChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setInputsrd([...inputsrd, value]);
        }
        else {
            setInputsrd(inputsrd.filter((e) => {
                alert(e)
                return (e !== value);
            }))

        }
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
            <h2>{inputsrd}</h2>
            <input type="submit" />
        </form>
    )
}
