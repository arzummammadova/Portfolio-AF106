import * as yup from 'yup';

export const register = yup.object().shape({
  username: yup.string()
    .min(2, 'Username is too short!')
    .max(50, 'Username is too long!')
    .required('Username is required'),
  email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain Latin letters'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  // gender: yup.string()
  //   .oneOf(['male', 'female'], 'Gender is required')
  //   .required('Gender is required'),
});
