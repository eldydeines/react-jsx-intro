const Person = (props) => {
    return (
        <p>
            Learn some information about this person.
            Name: {props.name} Age: {props.age}
            <h3>{props.age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
            <ul>Hobbies:
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </p>
    )
}