import { useState, useEffect } from "react";
import PetList from "../components/PetList";
import PetForm from "../components/PetForm";

const PetContainer = () => {
    const [pets, setPets] = useState([]);

// 1 API Call
const loadPetsData = async () => {
    const response = await fetch ("http://localhost:8080/pets")
    const data = await response.json();
    setPets(data);
}

useEffect(()=> {
    loadPetsData(); 
}, []);

//Posts New Chocolate
const postPets = async (newPets) => {
    const response = await fetch ("http://localhost:8080/pets", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPets)
    });
    const savedPets = await response.json();
    setPets([...pets, savedPets]);
}

//Delete Function
const deletePets = async (id) => {
    awaitfetch(`http://localhost:8080/petss/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    loadPetsData();
}

return(
    <>
        <PetForm
        pets={pets}
        onSubmit={postPets}/>

        <PetList
        pets={pets}
        OnDelete={deletePets}
        />
    </>
)

}

export default PetContainer;