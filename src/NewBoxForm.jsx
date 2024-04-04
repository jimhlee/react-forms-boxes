import React, { useState } from "react";

/*
This component should render a form that when submitted,
creates a new Box. You should be able to
specify the Box’s width, height, and background color.
When the form is submitted, clear the input values.
*/
function NewBoxForm({ addBox }) {
    const initialState = { height: 0, width: 0, backgroundColor: "" };
    const [formData, setFormData] = useState(initialState);

    // handle submit
    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    // handle change
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    // render form
    return (
        <form className="new-box-form" onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                type="number"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="background-color">Background Color</label>
            <input
                type="text"
                id="background-color"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <button>Add Box</button>
        </form>
    );
}

export default NewBoxForm;