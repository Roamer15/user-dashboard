import './App.css'
import React from 'react'
import { useFormik } from 'formik'

function App() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: ''
  }

  const {values, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <>
      <div className="app">
        <form className="signup_form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}/>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}/>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange}/>

          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" name="cpassword" value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/>

          <button type='submit'>Submit</button>
          </form>
      </div>
    </>
  )
}

export default App
