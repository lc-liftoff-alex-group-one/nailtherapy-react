
import "../styling/ContactForm.css";
import { useState } from "react";


function ContactForm() {

   const [isNavExpanded, setIsNavExpanded] = useState(false);

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

<nav className="navigation">
            <a href="/" className="brand-name">
                Lovie's Nails
            </a>
            <button className="hamburger" onClick={_ => setIsNavExpanded(!isNavExpanded)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <a href="http://localhost:3000">Home</a>
                    </li>
                    </ul>
                    </div>
    </nav>
         <form onSubmit={handleSubmit}>
            <h3>GET IN TOUCH</h3>
            <label>Your Name <input type="text" name= 'name' value={formData.name} onChange={handleInputChange} /></label>
            <label>Email Id <input type="email" name = 'email' value={formData.email} onChange={handleInputChange}/></label>
            <label>Phone number <input type="text" name = 'phone' value={formData.phone} onChange={handleInputChange}/></label>
            <label>How can we help you? <input type="textarea" name = 'message' value={formData.message} onChange={handleInputChange}/></label>
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

 
                    
   
      
