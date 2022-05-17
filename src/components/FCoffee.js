import React, {useState, useEffect} from "react";



function FCoffee({ firstName }) {
    const [coffeeList, setCoffeeList] = useState();
    const [temperature, setTemperature] = useState("iced");
    useEffect(()=>{
        fetch (`https://api.sampleapis.com/coffee/${temperature}`)
        .then(response => response.json())
        .then(data => setCoffeeList(data)) // or .then(setCoffeeList)
        .catch(console.error)
    }, [temperature])
    
    // console.log({coffeeList}) we generally get rid of the console.logs to clean it up. its really just for us to test it out.
    return (
        <>
            <h1>Coffee List (F)</h1>
            <p> Hello {firstName}</p>
            <button onClick={() => setTemperature('hot')}>HOT</button>
            <button onClick={() => setTemperature('iced')}>ICED</button>
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