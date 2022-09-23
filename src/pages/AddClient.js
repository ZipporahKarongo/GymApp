import React from 'react'

import { useState } from 'react';
import { toast } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'


const AddClient = () => {
  // const {handleChange, values,handleSubmit, errors} = UseForm(validate);

  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([
    { label: "Loading ...", value: "" }
  ]);
  const [value, setValue] = React.useState("brother");

  React.useEffect(() => {
    async function getCharacters() {
      const response = await fetch("http://127.0.0.1:8000/gym/kin");

      const body = await response.json();
      setItems(body.map(({ kin_id,kin_name }) => ({ label: kin_name, value: kin_id })));

      setLoading(false);
    }
    getCharacters();
  }, []);

  // Adding a client
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idno, setIdno] = useState('');
  const [phoneno, setPhoneno] = useState('');


  const postData = () => {

    const blog = { firstName,lastName,phoneno,idno,value};

    fetch('http://127.0.0.1:8000/gym/addkin', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })

    .then(() => {
      toast.success('Relative Added!')
      console.log('Relative added');
    })
    .catch((error) => {
      toast.error('Relative  Not Added!')

        console.error('Error:', error);
    })



}


  return (

    <div className="form-content-right">

      <form action="" className="form">
        <div className="form-inputs">
          <label htmlFor="firstname" className="form-label">
     First Name
          </label>
          <input
           type="text"
             name = 'firstname' 
             className="form-input"
             placeholder='Enter your first name'
             onChange={(e) => setFirstName(e.target.value)}
         
              />

        </div>


        <div className="form-inputs">
          <label htmlFor="lastname" className="form-label">
  Last Name
          </label>
          <input
          id='lastname' type="text"
             name = 'lastname' 
             className="form-input"
             placeholder='Enter your last name'
            onChange={(e) => setLastName(e.target.value)}
              />


        </div>
        <div className="form-inputs">
          <label htmlFor="idno" className="form-label">
       Id number
          </label>
          <input 
          id = 'idno'
          type="text"
             name = 'idno' 
             className="form-input"
             placeholder='Enter your Id Number'
             onChange={(e) => setIdno(e.target.value)}
              />

        </div>

        
        <div className="form-inputs">
          <label htmlFor="phoneno" className="form-label">
    Phone number
          </label>
          <input
          id='phoneno' type="text"
             name = 'phoneno' 
             className="form-input"
             placeholder='Enter your Phone number'
             onChange={(e) => setPhoneno(e.target.value)}

              />
              </div>
              <div className="form-inputs">

          <label htmlFor="relative" className="form-label">
Relation          </label>
      <select style={{ fontSize: 15, marginLeft: "25px"}} className='relative' disabled={loading} value={value}
            onChange={e => setValue(e.currentTarget.value)}>
                  {items.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
          </option>
        ))}
      </select> 
                        

        </div>
        <button className="form-input-btn" type='submit' onClick={postData}>Submit</button>
      </form>
    </div>

  )
}

export default AddClient