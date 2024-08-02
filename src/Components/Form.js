import React, { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    let valid = true;

    if (email.length > 30 || email.length < 10 || !email.includes('@') || !email.includes('.com')) {
      valid = false;
      errors.email = 'Invalid email';
    }

    if (!/^(?:[6789])\d{9}$/.test(mobileNumber)) {
      valid = false;
      errors.mobileNumber = 'Invalid mobile number';
    }

    if (username.length > 10 || username.length < 3) {
      valid = false;
      errors.username = 'Invalid User Name';
    }

    if (!isStrongPassword(password)) {
      valid = false;
      errors.password = 'Password is too weak';
    }

    if (password !== confirmPassword) {
      valid = false;
      errors.confirmPassword = 'Passwords do not match';
    }

    if (valid) {
      setSuccessMessage(`Registration successful for ${username}`);
      console.log(username);
      console.log(email);
      console.log(mobileNumber);
      console.log(password);
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  function isStrongPassword(password) {
    const minLength = 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/g.test(password);

    return password.length >= minLength && hasLowercase && hasUppercase && hasNumber && hasSpecialChar;
  }

  return (
    <div className="container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </label>
        <br />
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
          />
          {errors.mobileNumber && <div style={{ color: 'red' }}>{errors.mobileNumber}</div>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
        </label>
        <br />
        <button type="submit">Sign up</button>
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      </form>
    </div>
  );
}

export default Form;
