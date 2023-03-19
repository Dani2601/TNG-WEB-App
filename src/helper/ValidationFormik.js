
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    name: Yup.string().label('Name').required(),
    email: Yup.string().label('Email').email().required(),
    phone: Yup
      .string()
      .matches(/^(\+?63|0)9\d{9}$/gm, 'Phone number is not valid')
      .required('Phone number is required'),
    password: Yup.string().required().label('Password'),
    confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});


export {
    RegisterSchema
}