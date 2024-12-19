

import * as yup from 'yup';

export const register  = yup.object().shape({
  name: yup.string().min(3,"Firstname must be min 3 chracter").required("Name is required"),
  lastname:yup.string().min(5,"Lastname must be min 5 chracter").required("Name is required"),
  username: yup.string().required("Username is required").lowercase("username must be lowercase"),
  email: yup.string().email("email is not valid").required("email is required"),
  password:yup.string("").required("password is required")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  confirmpassword:yup.string().label('Password Confirm')
               .required()
                 .oneOf([yup.ref('password')], 'Passwords does not match'),

 
});