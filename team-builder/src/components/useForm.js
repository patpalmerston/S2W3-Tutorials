import { useState } from 'react';

const useForm = (callback) => {
  const initialFormState = {id: null, name: '', email: '', role: '' }

  const [values, setValues] = useState(initialFormState)
  
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback(values);
      
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({...values, [event.target.name]: event.target.value}))
  }

  return {
    handleChange,
    handleSubmit,
    values
  }
}

export default useForm;