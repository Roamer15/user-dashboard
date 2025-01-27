import { useFormik } from 'formik'
import { signupSchema } from '../schemas/indexScheme'
import { useNavigate } from 'react-router'
// import DisplayAccount from './DisplayAccount'

function CreateAccount() {
  const initialValues = {
     firstname: '',
     lastname: '',
     email: '',
     telephone: '',
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

             <label htmlFor="firstname">First Name</label>
             <input type="text" name="firstname" value={values.firstname} onBlur={handleBlur} onChange={handleChange}/>
             <div className="error-container">
             {errors.firstname && touched.firstname && <p className="form_error">{errors.firstname}</p>}
             </div>

             <label htmlFor="lastname">Last Name</label>
             <input type="text" name="lastname" value={values.lastname} onBlur={handleBlur} onChange={handleChange}/>
             <div className="error-container">
             {errors.lastname && touched.lastname && <p className="form_error">{errors.lastname}</p>}
             </div>

             <label htmlFor="email">Email</label>
             <input type="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}/>
             <div className="error-container">
               {errors.email && touched.email && (<p className='form_error'>{errors.email}</p>)}
             </div>

             <label htmlFor="telephone">Phone Number</label>
             <input type="tel" name="telephone" value={values.telephone} onBlur={handleBlur} onChange={handleChange}/>
             <div className="error-container">
               {errors.telephone && touched.telephone && (<p className='form_error'>{errors.telephone}</p>)}
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