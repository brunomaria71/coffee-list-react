import React from "react";

class CCoffee extends React.Component {
  // create a new class called ccoffee. and extend it to react component. react has already defined the react component. we want to extend the properties and add CCoffee
constructor(props) {
    // whenever we create a class, we often times have a constructor. were saying this constructor is going to take in props. send it to the super
    super(props); // this is where we sent props.
    this.state = {
      // this is where we created state as an object. we need a special method/function to create state. were using .this
    count: 0,
    another: "plop", // adding another state is easier in class components.
    };
    }
    handleClick() {
    // creating our own function called handleclick.
    this.setState({ count: this.state.count + 1 }); // in order to set state in a class component we have built it this.setState. we are not replacing state, just adding to it. state is an obj. we have to tell it what property of state we want to change.
    // this.setState is built in. it merges your old state (count is 0 another is plop) to (count +1). we format it this way. so it now has the old state and the new state. in functional components we only have the new.
    }
    render() {
        const { count } = this.state;
        const {firstName} = this.props;
    // every class component will have a render method. it is required. this is where we return our JSX
    return (
    <>
        <h1>Coffee List (CC)</h1>
        <p>Hello {firstName}</p>
        <p>You clicked the button {count} times.</p>
        <button onClick={() => this.handleClick()}>Click me!</button>
    </>
    );
    }
}

export default CCoffee;
