import { useState } from 'react'
import './App.css'

function App() {
  const userForm = document.getElementById('userForm') as HTMLFormElement;
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();})

  return (
    <>
      <h1>User Information Form</h1>
    <form id="userForm">
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required></input>
        </div><br/>
        <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required></input>
        </div>
        <br/>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required></input>
        </div>
        <br/>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
    </>
  )
}

export default App
