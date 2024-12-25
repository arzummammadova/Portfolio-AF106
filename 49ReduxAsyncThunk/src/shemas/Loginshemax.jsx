import * as yup from 'yup';

export const login = yup.object().shape({
    username: yup.string().required('name is required')
    ,
    password: yup
    .string()
    .required('password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
  });