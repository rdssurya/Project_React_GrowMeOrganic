import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";
import "../StylesForPages/FirstPage.css";

function FirstPage() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email: '',
  });

 
  // handleChange is an eventhandler function for handling the change events of input elements in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    // for storing the data given by the user in the corresponding input element
    const { name, value } = e.target;

    // updating the formData with the updated value by the user
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  // handleSubmit is a function for collecting the formData and storing it in the localStorage
  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{

    // preventing the default behaviour of the submit event. (preventing page reload)
    event.preventDefault();

    // storing the details in localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
  
    // If user provides proper information and submits the form an alert is popped up 
    // and user will be navigated to Second page.
    alert("Success! User details fetched");
    navigate("/second");

  }
  


  return (
    <>
    <div id="firstPage">
      <h1>User Information Form</h1>
    <form id="userForm" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={formData.name}
          onChange={handleChange} required></input>
        </div><br/>
        <div>
            <label htmlFor="phone">Phone Number: </label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" value={formData.phone}
          onChange={handleChange} required></input><br/>
          <small> (Enter a 10 digit mobile number) </small>
        </div>
        <br/>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" value={formData.email}
          onChange={handleChange} required></input><br/>
          <small> (Enter email address in abc@def.com format) </small>
        </div>
        <br/>
        <div>
            <Button type="submit" variant='contained'>Submit</Button>
        </div>
    </form>
    </div>
    </>
  )
}

export default FirstPage;
