import * as Yup from 'yup'

const passwordRegEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")

export const signupSchema = Yup.object({
    name: Yup.string().min(3).required("Please Enter your name"),
    email: Yup.string().email("Please enter a valid email").required("Please Enter your email"),
    password: Yup.string().matches(passwordRegEx, "Please enter valid password").required("Please enter your password"),
    cpassord: Yup.string().oneOf([Yup.ref("password")], "Password does not match").required("Please enter the confirmation password")
})

