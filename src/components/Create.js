import { useState } from "react";

export default function CreateAccountForm() {
   
   const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    emailAddress: '',
    password: '',
   })
   
   const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  
   
  return (
    <div>

        <h1 id="title">Create</h1>
        <h1 id="title">Your Account!</h1>
        <p id="reason">Sign up to build reward points that you can use towards a future service!</p>
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName"> First Name: <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.FirstName}
        onChange={handleChange}
        required
      /> </label>
      
      <label htmlFor="lastName"> Last Name: <input
        type="text" 
        id="lastName"
        name="lastName"
        value={formData.LastName}
        onChange={handleChange}
        required
      /> </label>

<label htmlFor="emailAddress">Email Address:</label>
      <input
        type="email"
        id="emailAddress"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        required
      />
<label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        min={5}
        maxLength={10}
        onChange={handleChange}
        required
      />
    <button id="create-account" type="submit">Create Account</button>    


</form>
</div>
)}