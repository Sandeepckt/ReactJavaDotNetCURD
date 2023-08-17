import { useState } from "react";
import ReactDOM from "react-dom";
export function MyForm() {
    const [inputs, setInputs] = useState({});
    const listcar = ["Volvo", "Ford", "Fiat"];
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.age + " " + inputs.username + " " + inputs.myCar);
    }
    return (
        <form onSubmit={handleSubmit} className="m-5">
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <select value={inputs.myCar} name="myCar" onChange={handleChange}>
                <option></option>
                {listcar.map((d, i) => { return <option value={d}>{d}</option> })
                }
            </select>
            <input type="submit" />
        </form>
    )
}
