import { useFormik } from 'formik'
import { signupSchema } from '../schemas/indexScheme'
import { useNavigate } from 'react-router'
// import DisplayAccount from './DisplayAccount'

function CreateAccount() {
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
       localStorage.setItem('user', JSON.stringify(values))
       actions.resetForm()
     }
   })

   const navigate = useNavigate();

   const display = () => {
     navigate(`/display`);
   }
 
   console.log(errors)
 
   return (
     <>
       <h1 className="sign-up">Welcome, sign Up</h1>
       <div className="app">
             <form className="signup_form" onSubmit={handleSubmit}>
             <label htmlFor="name">Name</label>
             <input type="text" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}/>
             <div className="error-container">
             {errors.name && touched.name && <p className="form_error">{errors.name}</p>}
             </div>
             <label htmlFor="email">Email</label>
             <input type="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}/>
             <div className="error-container">
               {errors.email && touched.email && (<p className='form_error'>{errors.email}</p>)}
             </div>
             <label htmlFor="password">Password</label>
             <input type="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange}/>
             <div className="error-container">
               {errors.password && touched.password && (<p className='form_error'>{errors.password}</p>)}
             </div>
             <label htmlFor="cpassword">Confirm Password</label>
             <input type="password" name="cpassword" value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/>
             <div className="error-container">
               {errors.cpassword && touched.cpassword && (<p className='form_error'>{errors.cpassword}</p>)}
             </div>
             <button type='submit' onClick={display}>Submit</button>
             </form>
       </div>
     </>
   )
}

export default CreateAccount