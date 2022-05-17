import React from "react";

class CCoffee extends React.Component { // react has already defined the react component. we want to extend the properties and add CCoffee
    render () {
        return (
            <>
        <h1>Coffee List (CC)</h1>
        <p>Hello {this.props.firstName}</p>
        </>
        )
            
        
    }
}



export default CCoffee;