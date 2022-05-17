import React, {useState, useEffect} from "react"; // we technically dont have to import react this time. useState and useEffect are hooks. useEffect is letting us go through lifycycle.



function FCoffee({ firstName }) { // defining a functional react component that passes in a js prop, destructuring firstName from prop
    const [coffeeList, setCoffeeList] = useState(); // creating a state variable called coffeelist and setcoffelist and initializing it to useState
    const [temperature, setTemperature] = useState("iced"); // creating a state variable called temperature and setTemperature and initializing it as a state. anytime we want to make changes to the state we gotta use Set
    useEffect(()=>{ // listening for a change to temperature variable, so it can run when it has a change or initially 
        fetch (`https://api.sampleapis.com/coffee/${temperature}`) // getting the information from the url. $temperature is grabbing the temp from line 7
        .then(response => response.json()) // calling that json method on the response and waiting for the data to come back
        .then(data => setCoffeeList(data)) // or .then(setCoffeeList) // grabs that data and sends it to setcoffeelist
        .catch(console.error) // will console.log error if there is an error which can be caught from line 9-11.
    }, [temperature]) // dependency list, list of variables that useEffect is listening on 
    
    // console.log({coffeeList}) we generally get rid of the console.logs to clean it up. its really just for us to test it out.
    return ( // returning what you created in jsx to display on the react app. JSx always should have a parent to siblings
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

export default FCoffee; // we can only export one default export. we usually make our component as the default export. we could technically go up to top of page and create a variable above the function but we'd have to wrap the name of it into curly braces. 