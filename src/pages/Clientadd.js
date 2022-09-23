import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'

const Clientadd = () => {
    // adding client
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([
      { label: "Loading ...", value: "" }
    ]);
    const [value, setValue] = React.useState("Mom");
  
    React.useEffect(() => {
      async function getCharacters() {
        const response = await fetch("http://127.0.0.1:8000/gym/addedkin");
  
        const body = await response.json();
        setItems(body.map(({ relative_id,first_name }) => ({ label: first_name, value: relative_id })));
  
        setLoading(false);
      }
      getCharacters();
    }, []);


    const [itemz, setItemz] = React.useState([
        { label: "Loading ...", value: "" }
      ]);

    const [valzue, setValzue] = React.useState("Member");

    // fetching types of memberships
    React.useEffect(() => {
        async function getCharacterz() {
          const response = await fetch("http://127.0.0.1:8000/gym/memberships");
    
          const body = await response.json();
          setItemz(body.map(({ membership_id,membership_name }) => ({ label: membership_name, value: membership_id })));
    
          setLoading(false);
        }
        getCharacterz();
      }, []);
  
    // Adding a client
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idno, setIdno] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');


  
    const postData = () => {
  
      const blog = { firstName,lastName,phoneno,idno,status,value,valzue,gender};
  
      fetch('http://127.0.0.1:8000/gym/addmember', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)
      })
  
      .then(() => {
        toast.success('Client Added!')
        console.log('Client added');
      })
      .catch((error) => {
        toast.error('Client  Not Added!')
  
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
          //  value={values.firstname}
          //  onChange={handleChange}
            />

      </div>
      {/* {errors.firstname && <p>{errors.firstname}</p>} */}


      <div className="form-inputs">
        <label htmlFor="lastname" className="form-label">
Last Name
        </label>
        <input
        id='lastname' type="text"
           name = 'lastname' 
           className="form-input"
           placeholder='Enter your last name'
          //  value = {values.lastname}
          //  onChange={handleChange}
          onChange={(e) => setLastName(e.target.value)}
            />
                          {/* {errors.lastname && <p>{errors.lastname}</p>} */}


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

          //  value = {values.idno}
          //  onChange={handleChange}
            />

      </div>
      <div className="form-inputs">
        <label htmlFor="status" className="form-label">
Status        </label>
        <input 
        id = 'status'
        type="text"
           name = 'status' 
           className="form-input"
           placeholder='Enter your Status'
           onChange={(e) => setStatus(e.target.value)}

          //  value = {values.idno}
          //  onChange={handleChange}
            />

      </div>
      <div className="form-inputs">
        <label htmlFor="gender" className="form-label">
Gender        </label>
        <input 
        id = 'gender'
        type="text"
           name = 'gender' 
           className="form-input"
           placeholder='Enter your Gender'
           onChange={(e) => setGender(e.target.value)}

        
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

          //  value = {values.phoneno}
          //  onChange={handleChange}
            />
        <label htmlFor="relative" className="form-label">
Relative          </label>
    <select style={{ fontSize: 15, marginLeft: "25px"}} className='relative' disabled={loading} value={value}
          onChange={e => setValue(e.currentTarget.value)}>
                {items.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
        </option>
      ))}
    </select> 

    <label htmlFor="membership" className="form-label">
Type of membership         </label>
    <select style={{ fontSize: 15, marginLeft: "25px"}} className='membership' disabled={loading} valzue={valzue}
          onChange={e => setValzue(e.currentTarget.value)}>
                {itemz.map(({ label, value }) => (
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

export default Clientadd