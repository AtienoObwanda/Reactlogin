export default function validate(values) {
    let errors = {};
  
    
    //yearOfBirth
  
    if (!values.email1) {
      errors.email1 = 'Email required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email1)) {
      errors.email1 = 'Email address is invalid!';
    }
    if (!values.email2) {
      errors.email2 = 'Confirm Your email!';
    } else if (values.email2 !== values.email1) {
      errors.email2 = 'Emails do not match!';
    }
    if (!values.firstName.trim()) {
      errors.firstName = 'First Name required!';
    }
    if (!values.lastName.trim()) {
      errors.lastName = 'Last name required!';
    }
    if (!values.gender.trim()) {
      errors.gender = 'Gender required!';
    }
    if (!values.yearOfBirth.trim()) {
      errors.yearOfBirth = 'Year of Birth required';
    }
    if (!values.password1) {
      errors.password1 = 'Password Cannot be blank';
    } else if (values.password1.length < 6) {
      errors.password1 = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Confirm password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match!';
    }
    return errors;
  }