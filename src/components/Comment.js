
import "../styling/Comment.css";
import { useEffect, useState } from "react";

function Comment() {

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
            alert('Data saved to MySQL!');
         } else {
            alert('Error saving data to MySQL');
         }
      } catch (error){
         alert('Network error:', error);
      }
   };

   useEffect(() => {
        
       fetch('http://localhost:8080/api/v1/Comment').then(async res => {
            console.log(res)
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
         <form onSubmit={handleSubmit}>
            <h3>Leave us a comment!</h3>
            <label>Name<input type="text" name= 'name' placeholder="name" value={formData.name} onChange={handleInputChange} /></label>
            <label>Comment<input type="textarea" name = 'comment' placeholder="comment" value={formData.comment} onChange={handleInputChange}/></label>
            <button name="button" type= "submit">Post Comment</button>
            </form>
            <div>
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

