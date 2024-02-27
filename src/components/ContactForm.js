
import "../styling/ContactForm.css";
import { useState } from "react";


function ContactForm() {

   const [formData, setFormData] = useState({
      name:"",
      email:"",
      phone:"",
      message:""
   });
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

   async function handleSubmit () {
      alert("Form submitted");
      // event.preventDefault();
      // setFormData();
      //handle form submission (ex: send data to server)
      try{
         const response = await fetch('http://localhost:8080/api/v1/ContactForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData),
         });
         if (response.ok) {
            alert('Data saved to MySQL!');
         } else {
            alert('Error saving data to MySQL');
         }
      } catch (error){
         alert('Network error:', error);
      }
   };

   //render my form fields and submit button here.
   return(  
      <div>
         <form onSubmit={handleSubmit}>
            <h3>GET IN TOUCH</h3>
            <label>Your Name <input type="text" name= 'name' placeholder="name" value={formData.name} onChange={handleInputChange} /></label>
            <label>Email Id <input type="email" name = 'email' placeholder="email" value={formData.email} onChange={handleInputChange}/></label>
            <label>Phone number <input type="text" name = 'phone' placeholder="phone" value={formData.phone} onChange={handleInputChange}/></label>
            <label>How can we help you? <input type="textarea" name = 'message' placeholder="message" value={formData.message} onChange={handleInputChange}/></label>
            <button name="button" type= "submit">Send</button>
            </form>
         </div>
                    
      );
};

export default ContactForm;

   // async function fetchApi() {
   //    const response = await fetch('http://localhost:8080/api/v1/ContactForm');
   //    const form = await response.json();
   //    console.log(form);
   //  }
    

   // useEffect(() => {
   //    fetch('http://localhost:8080/api/v1/ContactForm', action = "POST")
   //    .then(response => response.json())
   //    // .then(data => {
   //    //    setIsLoading(false);
   //    // });
   // }, []);

 
                    
   
      
