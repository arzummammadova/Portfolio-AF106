import * as yup from 'yup';

 export const register = yup.object().shape({
  firstName: yup.string().required("First name is required").matches(/[A-Z]/, 'must contain one uppercase')
  ,
  lastName: yup.string().required("Last name is required").matches(/[A-Z]/, 'must contain one uppercase')
  ,

  username: yup.string()
  .min(1, "Mininum 1 characters")
  .max(15, "Maximum 15 characters")
  
  .required("You must enter a username"),
  email: yup.string().email("Field should contain a valid e-mail").max(255).required("E-mail is required"),
  password:yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
 
  confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});