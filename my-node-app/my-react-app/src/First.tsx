import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function First() {
  // const userForm = document.getElementById('userForm') as HTMLFormElement;
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate("/second");
  }

  return (
    <>
      <h1>User Information Form</h1>
    <form id="userForm" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name}
          onChange={handleChange} required></input>
        </div><br/>
        <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" value={formData.phone}
          onChange={handleChange} required></input>
        </div>
        <br/>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email}
          onChange={handleChange} required></input>
        </div>
        <br/>
        <div>
            <button type="submit" >Submit</button>
        </div>
    </form>
    </>
  )
}

export default First;
