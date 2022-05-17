import React, {useState, useEffect} from "react";



function FCoffee({ firstName }) {
    const [count, setCount] = useState(0);
    const [coffeeList, setCoffeeList] = useState();
    const [temperature, setTemperature] = useState("iced");
    useEffect(()=>{
        fetch (`https://api.sampleapis.com/coffee/${temperature}`)
        .then(response => response.json())
        .then(data => setCoffeeList(data)) // or .then(setCoffeeList)
        .catch(console.error)
    }, [temperature])
    const handleClick = () => {
        setCount(count +1);
    }
    // console.log({coffeeList}) we generally get rid of the console.logs to clean it up. its really just for us to test it out.
    return (
        <>
            <h1>Coffee List (F)</h1>
            <p> Hello {firstName}</p>
            <p>You clicked the button {count} times.</p>
        <button onClick={handleClick}>Click me!</button>
        {!coffeeList
            ? <h2>Loading...</h2>
            : <>
            <h2>Coffees</h2>
            {coffeeList.map(coffee => {
                return <p key={coffee.id}>{coffee.title}</p>

            })}
            </>
            
        }

        </>
    )
}









export default FCoffee;