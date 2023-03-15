//Renders onto Page
const Pet = ({pet, onDelete}) => {

    const handleDeleteClick = () => {
        onDelete(pet.id);
    }

    return(
        <div className="pets">
            <h4>{pet.name}</h4>
            <p>{pet.type}</p>
            <p>{pet.breed}</p>
            <p>{pet.age}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Pet;