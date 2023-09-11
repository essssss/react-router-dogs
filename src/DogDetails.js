import { useParams, Link } from "react-router-dom";

function DogDetails({ dogs }) {
    const { name } = useParams();

    const currentDog = dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );

    return (
        <div>
            <div>
                <img src={currentDog.src} alt={currentDog.name} />
                <h2>{currentDog.name}</h2>
                <h3>{currentDog.age}</h3>
                <ul>
                    {currentDog.facts.map((fact) => (
                        <li>{fact}</li>
                    ))}
                </ul>
                <Link to="/dogs">Go Back</Link>
            </div>
        </div>
    );
}

export default DogDetails;
