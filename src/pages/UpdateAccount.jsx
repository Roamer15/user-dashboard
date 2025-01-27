import  { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useFormik } from "formik"
import { signupSchema } from '../schemas/indexScheme'

function UpdateAccount() {
  const navigate = useNavigate()
  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    password: "",
    cpassword: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setInitialValues(JSON.parse(userData))
    }
  }, [])

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues,
    enableReinitialize: true, // Allows formik to use updated initial values
    validationSchema: signupSchema,
    onSubmit: (values) => {
      localStorage.setItem('user', JSON.stringify(values));
      navigate("/display"); // Redirect back to details page
    },
  })

  return (
    <form className='form-update' onSubmit={handleSubmit}>
      <label>First Name</label>
      <input name="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur} />
      {errors.firstname && touched.firstname && <p>{errors.firstname}</p>}

      <label>Last Name</label>
      <input name="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} />
      {errors.lastname && touched.lastname && <p>{errors.lastname}</p>}

      <label>Email</label>
      <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
      {errors.email && touched.email && <p>{errors.email}</p>}

      <label>Phone number</label>
      <input name="telephone" value={values.telephone} onChange={handleChange} onBlur={handleBlur} />
      {errors.telephone && touched.telephone && <p>{errors.telephone}</p>}

      <label>New Password</label>
      <input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
      {errors.password && touched.password && <p>{errors.password}</p>}

      <label>Confirm Password</label>
      <input name="cpassword" type="password" value={values.cpassword} onChange={handleChange} onBlur={handleBlur} />
      {errors.cpassword && touched.cpassword && <p>{errors.cpassword}</p>}

      <button type="submit">Save</button>
    </form>
  )
}

export default UpdateAccount
