import './App.css'
// import React from 'react'
import { useFormik } from 'formik'
import { signupSchema } from './schemas/indexScheme'

function App() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: ''
  }

  const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(touched)

  return (
    <>
      <div className="app">
        <form className="signup_form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}/>
          <div className="error-container">
            {errors.name && touched.name && (<p className='form_error'>{errors.name}</p>)}
          </div>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}/>
          <div className="error-container">
            {errors.name && touched.name && (<p className='form_error'>{errors.name}</p>)}
          </div>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange}/>
          <div className="error-container">
            {errors.name && touched.name && (<p className='form_error'>{errors.name}</p>)}
          </div>

          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" name="cpassword" value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/>
          <div className="error-container">
            {errors.name && touched.name && (<p className='form_error'>{errors.name}</p>)}
          </div>
          
          <button type='submit'>Submit</button>
          </form>
      </div>
    </>
  )
}

export default App
