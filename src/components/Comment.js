
import "../styling/Comment.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Comment() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    // const navigate = useNavigate();

   const [formData, setFormData] = useState({
      name:"",
      comment:""
   });

   const [comments, setComments] = useState([]);


   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

   async function handleSubmit () {
      alert("Comment Posted");
      try{
         const response = await fetch('http://localhost:8080/api/v1/Comment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData),
         });
         if (response.ok) {
            alert('We appreciate the feedback.')
            // alert('Data saved to MySQL!');
         } else {
            alert('Error saving data to MySQL');
         }
      } catch (error){
         alert('Network error:', error);
      }
   };

   useEffect(() => {
        
       fetch('http://localhost:8080/api/v1/Comment').then(async res => {
            // console.log(res)
           const response= await res.json(); 
           setComments(response);
        }) 
    
   });


   let commentDetails = "";
   commentDetails= comments.map( (item) => {
    return(
        <tr>
          <td>{item.name}</td>  
          <td>{item.comment}</td>  
        </tr>

    )
   });

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
            <h3>Leave us a comment!</h3>
            <label>Name<input type="text" name= 'name'  value={formData.name} onChange={handleInputChange} /></label>
            <label>Comment<input type="textarea" name = 'comment' value={formData.comment} onChange={handleInputChange}/></label>
            <button name="button" type= "submit">Post Comment</button>
            </form>
            <div className="container">
                <header>See What Others Have Said!</header>
            <table>
             <thead>
                 <tr>
                <th>Name</th>
                <th>Comment</th>
                 </tr>
             </thead>
             <tbody>
                {commentDetails}
             </tbody>
            </table>
            </div>
         </div>
                    
      );
};

export default Comment;

