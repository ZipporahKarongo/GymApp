// import React from 'react'
// import { useState, useEffect } from 'react'
// import validate from './Validateinfo'

// const UseForm = validate => {
//     const [values, setValues] = useState({
//         firstname: '',
//         lastname: '',
//         idno: '',
//         phoneno: ''
//     })

//     const [errors, setErrors] = useState({})
//     const [isSubmitting, setIsSubmitting] = useState(false)

//     const handleChange = e =>{
//         const { name, value} = e.target
//         setValues({
//             ...values,
//             [name]:value
//         })
//     }
//     const addClient = async (client) => {
//         const res = await fetch (' ')
        
//     }

//     const handleSubmit = e => {
//         e.preventDefault();

//         setErrors(validate(values));
//         // setIsSubmitting(true)
//         addClient()
//     }
//   return (
//     {handleChange,values, handleSubmit}

//   )
// }

// export default UseForm