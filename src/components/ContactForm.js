import { useState } from "react";

export default function ContactForm() {
  const[firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('') // declare that in the future the state will be a string 

  const contactFormInfo = {
    firstName: firstName,
    lastName: lastName,

  }

console.log('ContactFormInfo =>>>>>', contactFormInfo)



  return (
    <>
      <form method="post">
        <label>
          First Name:
          <input 
          type="text"  
          name="firstName" 
          placeholder="First Name" 
          onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input 
          type="text" 
          name="lastName" 
          onChange={(event) => setLastName(event.target.value)}/>
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <br />
        <label>
          Zip:
          <input type="text" name="zip" maxLength={5} />
        </label>

        <br />
        <label>
          State:
          <select name="state">
            <option value=""></option>
            <option value="tx">TX</option>
            <option value="ny">NY</option>
            <option value="ca">CA</option>
          </select>
        </label>
        <br />

        <label>Date:
        <input type="date" name="date" />
        </label>

        <br />
        <label>
        Terms and conditions
        <input type="checkbox" />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
