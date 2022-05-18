import { useEffect, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({})

  // const[firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('') // declare that in the future the state will be a string 
  const [terms, setTerms] = useState(false) // initially it will be false then as it changes we can set the terms
 
 
 
  const [validForm, setValidForm] = useState(false)

  // const contactFormInfo = {
  //   firstName: firstName,
  //   lastName: lastName,
  //   terms: terms,
      // address
    // zip
    // state
    // message
      // }

//   useEffect(() => {
//     if(contactFormInfo.firstName && contactFormInfo.lastName && contactFormInfo.terms){
//     setValidForm(true)
//   }
// }, [contactFormInfo.firstName, contactFormInfo.lastName, contactFormInfo.terms])


//   const sendData = (e) => {
//     e.preventDefault() // right here we're saying do not refresh the page, just do the next line. 
//     console.log('btn pressed => ContactFormInfo =>>>>>', contactFormInfo)

//   }

console.log(formData)

  // everything inside of the return has to be html/jsx, we throw JS with curly braces
  return (
    <>
      <form method="post">
        <label>
          First Name:
          <input 
          type="text"  
          name="firstName" 
          placeholder="First Name" 
          onChange={(event) => setFormData({...formData, firstName: event.target.value})} />
        </label>
        <br />
        <label>
          Last Name:
          <input 
          type="text" 
          name="lastName" 
          onChange={(event) => setFormData({...formData, lastName: event.target.value})} />
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
        <input type="checkbox" onChange={(event) => setTerms(event.target.checked)}/>
        </label>
        <br />

        <label >message:
          <textarea name="message"  cols="30" rows="10" />
        </label>
        <br />

        {/* <button onClick={(e) => sendData(e)} disabled={!validForm}>
          Submit</button> */}
      </form>
    </>
  )
};