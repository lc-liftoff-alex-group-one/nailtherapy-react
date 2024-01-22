import { useState } from "react";

export default function LoginForm() {
   
   const [formData, setFormData] = useState({
    email: '',
    loginPassword: '',
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

        <h1 id="login">Login:</h1>
        
    
    <form onSubmit={handleSubmit}>
 

<label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="emailAddress"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        required
      />
<label htmlFor="loginPassword">Password:</label>
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
    <button id="login-account" type="submit">Login</button>    


</form>
</div>
)}