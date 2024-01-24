import { useState } from "react";
import "../styling/Create.css";


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
    <div className="main">
        <h1 className="title">Create</h1>
        <h1 className="title">Your Account</h1>
        <p className="reason">Sign up to build reward points that you can use towards a future service!</p>
        <button id="login" type="submit">Login</button>   

        <div className="create">
        
        </div>

        

    <form onSubmit={handleSubmit} className="form">
      <ul className="wrap">

        <li className="formRows">
          <label htmlFor="firstName">First Name: <input type="text" id="firstName" name="firstName" value={formData.FirstName} onChange={handleChange} required></input></label>
        </li>

        <li className="formRows">
        <label htmlFor="lastName"> Last Name: <input type="text"  id="lastName" name="lastName" value={formData.LastName} onChange={handleChange}
        required/> </label>
        </li>

        <li className="formRows">
        <label htmlFor="emailAddress">Email Address:  <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange}
        required/></label>
        </li>
        
        <li className="formRows">
        <label htmlFor="password">Password:<input type="password" id="password" name="password" value={formData.password}
        min={5} maxLength={10} onChange={handleChange} required/></label>
        </li>
     
        <li>
        <button id="create-account" type="submit">Create Account</button>   
        </li>

      </ul>


        {/* <div className="cell">
      <label htmlFor="firstName" > First Name: <input type="text" id="firstName" name="firstName" value={formData.FirstName} onChange={handleChange}
        required
      /> </label>
      </div> */}

      {/* <div className="cell">
      <label htmlFor="lastName"> Last Name: <input
        type="text" 
        id="lastName"
        name="lastName"
        value={formData.LastName}
        onChange={handleChange}
        required
      /> </label>
       </div> */}

       {/* <div className="cell">
<label htmlFor="emailAddress">Email Address:</label>
      <input
        type="email"
        id="emailAddress"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        required
      />
      </div> */}

      {/* <div className="cell">
  <label htmlFor="password">Password:<input type="password" id="password" name="password" value={formData.password}
        min={5} maxLength={10} onChange={handleChange} required/></label>
      
      </div> */}
      {/* <div>
    <button id="create-account" type="submit">Create Account</button>    
  </div> */}
</form>
</div>
)}