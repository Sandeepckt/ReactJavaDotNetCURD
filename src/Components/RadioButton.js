import { useState } from "react"
function RadioButton() {
    const [topping, setTopping] = useState("Medium")
    const onOptionChange = e => {
        setTopping(e.target.value)
    }
    return (
        <div className="App">
            <h3>Select Pizza Size</h3>
            <input
                type="radio"
                name="topping"
                value="Regular"
                id="regular"
                checked={topping === "Regular"}
                onChange={onOptionChange}
            />
            <label htmlFor="regular">Regular</label>
            <input
                type="radio"
                name="topping"
                value="Medium"
                id="medium"
                checked={topping === "Medium"}
                onChange={onOptionChange}
            />
            <label htmlFor="medium">Medium</label>

            <input
                type="radio"
                name="topping"
                value="Large"
                id="large"
                checked={topping === "Large"}
                onChange={onOptionChange}
            />
            <label htmlFor="large">Large</label>
            <p>
                Select topping <strong>{topping}</strong>
            </p>
        </div>
    )
}
export default RadioButton;
