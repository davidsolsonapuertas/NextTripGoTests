module.exports.validateRegisterInput = (
  firstname,
  lastname,
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (firstname.trim() === '') {
    errors.firstname = 'Name field must not be empty';
  }
  if (lastname.trim() === '') {
    errors.lastname = 'Last name field must not be empty';
  }
  if (username.trim() === '') {
    errors.username = 'Username must not be empty';
  }
  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }
  if (password.trim() === '') {
    errors.password = 'Password must not be empty';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username must not be empty';
  }
  if (password.trim() === '') {
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateTripInput = (destination, fromDate, toDate) => {
  const errors = {};
  if (destination.trim() === '') {
    errors.destination = 'Please enter a destination';
  }
  if (fromDate.trim() === '') {
    errors.fromDate = 'Please enter a valid date';
  }
  if (toDate.trim() === '') {
    errors.toDate = 'Please enter a valid date';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
