import * as Yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signupSchema = Yup.object({
    name: Yup.string().min(3).required("Please Enter your name"),
    email: Yup.string().email("Please enter a valid email").required("Please Enter your email"),
    password: Yup.string().min(5).matches(passwordRules, { message: "Please create a stronger password" }).required("Please Enter your password"),
    cpassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Please consfirm the password")
})

