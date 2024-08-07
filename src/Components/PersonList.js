import React, { useState } from 'react';

function PersonList() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!name || name.length < 3) {
      errors.name = 'Name should be a string with more than 2 characters';
    }
    if (!email || !email.includes('@') || !email.includes('.com')) {
      errors.email = 'Email should contain @ symbol and .com';
    }
    if (!mobile || isNaN(mobile) || mobile.length !== 10) {
      errors.mobile = 'Mobile number should be an integer with 10 digits';
    }
    if (!dob) {
      errors.dob = 'Date of birth cannot be empty';
    }
    return errors;
  };

  const handleAddUser = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const newUser = { name, email, mobile, dob };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
      setMobile('');
      setDob('');
      setErrors({});
      setShowForm(false);
    }
  };

  const handleEditUser = (index) => {
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setMobile(user.mobile);
    setDob(user.dob);
    setEditing(index);
  };

  const handleSaveUser = (index) => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const updatedUsers = [...users];
      updatedUsers[index] = { name, email, mobile, dob };
      setUsers(updatedUsers);
      setEditing(null);
      setErrors({});
      setName('');
      setEmail('');
      setMobile('');
      setDob('');
    }
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };
  const handleAddClick = () => {
    setShowSidebar(true);
    const sidebarElement = document.getElementById('sidebar'); 
    if (sidebarElement) {
      sidebarElement.classList.add('show');
      }
  };
  const handlehide = () => {
    setShowSidebar(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'dob':
        setDob(value);
        break;
      default:
        break;
    }
    setErrors({});
  };

  return (
    <div className="container">
      <h1 style={{ color: 'green' }}>Registration Form</h1>
      <button onClick={handleAddClick}>Register</button>
      {showSidebar && (
        <div className="sidebar show">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            name="name"
            placeholder="Enter Name..."
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          <br />
          <label>Email ID:</label>
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            name="email"
            placeholder="Enter Email..."
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          <br />
          <label>Mobile Number:</label>
          <input
            type="text"
            value={mobile}
            onChange={handleInputChange}
            name="mobile"
            placeholder="Enter Mobile Number..."
          />
          {errors.mobile && <div style={{ color: 'red' }}>{errors.mobile}</div>}
          <br />
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={handleInputChange}
            name="dob"
            placeholder="Enter Date of Birth..."
          />
          {errors.dob && <div style={{ color: 'red' }}>{errors.dob}</div>}
          <br />
          <button onClick={handleAddUser}>Add User</button>
          <button onClick={handlehide}>Back</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Date of Birth</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {editing === index ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={name}
                      onChange={handleInputChange}
                      name="name"
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={email}
                      onChange={handleInputChange}
                      name="email"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={mobile}
                      onChange={handleInputChange}
                      name="mobile"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={dob}
                      onChange={handleInputChange}
                      name="dob"
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSaveUser(index)}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.dob}</td>
                  <td>
                    <button onClick={() => handleEditUser(index)}>Edit</button>
                    <button onClick={() => handleDeleteUser(index)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonList;