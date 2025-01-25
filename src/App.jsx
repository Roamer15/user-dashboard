import './App.css'
// import React from 'react'
import { useFormik, Formik, Form, Field } from 'formik'
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
    onSubmit: (values, actions) => {
      console.log(values)
      actions.resetForm()
    }
  })

  console.log(touched)

  const onSubmit = (values, actions) => {
    console.log(values)
    actions.resetForm()
  }

  return (
    <>
      <div className="app">
        <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={handleSubmit}>
          {props => (
            <Form className="signup_form">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}/>
            <Field type='text' name='name'/>
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
            </Form>
          )}
          
        </Formik>
      </div>
    </>
  )
}

export default App
