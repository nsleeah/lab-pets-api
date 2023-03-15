import { useState } from "react";


const PetForm = ({onSubmit}) => {
    const [newPet, setNewPet] = useState({
        name: "",
        type: "",
        breed: "",
        age: 0
    })
    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedPet = {...newPet};
        copiedPet[propertyName] = event.target.value;
        setNewPet(copiedPet);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(newPet);
    }
    return (
        <form id="pet-form" onSubmit={handleFormSubmit}>
            <h3>Add a new pet!</h3>
            <label htmlFor="pet-name">Pet Name:</label>
            <input
                id="pet-name"
                name="name"
                type="text"
                placeholder="Enter pet name"
                onChange={handleChange}
                required
            />
            <label htmlFor="pet-type">Pet Type:</label>
            <input
                id="pet-type"
                name="type"
                type="text"
                placeholder="Enter pet type"
                onChange={handleChange}
            />
            <label htmlFor="pet-breed">Pet Breed:</label>
            <input
                id="pet-breed"
                name="breed"
                type="text"
                placeholder="Enter pet breed"
                onChange={handleChange}
            />
            <label htmlFor="pet-age">Pet Age:</label>
            <input
                id="pet-age"
                name="age"
                type="number"
                min={1}
                max={500}
                onChange={handleChange}
            />
            <input type="submit" value="Add Pet"/>
        </form>
    )
}

export default PetForm;