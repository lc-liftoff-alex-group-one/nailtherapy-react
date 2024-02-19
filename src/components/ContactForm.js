
import "../styling/ContactForm.css";
import { useEffect, useState } from "react";


export default function ContactForm() {

   // const [notes, setNotes] = useState("");
const [isLoading, setIsLoading] = useState(true);
   // const handleChange = (event) => {
   //    setNotes(event.target.value);
   // }

   // const handleSubmit = (event) => {
   //    alert("Form submitted");
   //    event.preventDefault();
   //    //handle form submission (ex: send data to server)

   // }

   async function fetchApi() {
      const response = await fetch('http://localhost:8080/api/v1/contactForm');
      const form = await response.json();
      console.log(form);
    }
    

   // useEffect(() => {
   //    fetch('http://localhost:8080/api/v1/contactForm')
   //    .then(response => response.json())
   //    // .then(data => {
   //    //    setIsLoading(false);
   //    // });
   // }, []);

   // if (isLoading) {
   //    return <p>Loading...</p>;
   // }

   return(  
      <div>
         <form>
            <h3>GET IN TOUCH</h3>
            <label>Your Name <input type="text" /></label>
            <label>Email Id <input type="email" /></label>
            <label>Phone number <input type="text" /></label>
            <label>How can we help you? <input type="textarea" />
            </label>
            <button type= "submit">Send</button>
            </form>
         </div>
                    
      );
      
}