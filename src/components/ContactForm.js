import { useEffect, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({})
  const [terms, setTerms] = useState(false) // initially it will be false then as it changes we can set the terms
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    if(formData.firstName && formData.lastName && formData.terms){
    setValidForm(true)
  }
}, [formData.firstName, formData.lastName, formData.terms])


  const sendData = (e) => {
    e.preventDefault() // right here we're saying do not refresh the page, just do the next line. 

    fetch (`${process.env.REACT_API_ENDPOINT}/hot`, 
    {method: 'POST', headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log('Success!', data))
    .catch(err => console.error(err))
  }

const setFormObject = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})

}

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
          // onChange={(event) => setFormData({...formData, firstName: event.target.value})} />
          onChange={(event) => setFormObject(event)} />

        </label>
        <br />
        <label>
          Last Name:
          <input 
          type="text" 
          name="lastName" 
          onChange={setFormData} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" onChange={setFormData}/>
        </label>
        <br />
        <label>
          Zip:
          <input type="text" name="zip" maxLength={5} onChange={setFormData}/>
        </label>

        <br />
        <label>
          State:
          <select name="state" onChange={setFormData}>
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

        <button onClick={(e) => sendData(e)} disabled={!validForm}>
          Submit</button>
      </form>
    </>
  )
};

