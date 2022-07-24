import React, { useState } from "react";

function NewPoemForm() {
const [poemFormData,setPoemData]= useState({title:"",content: "",author: ""});

function handleInputChange(event){
  setPoemData({...poemFormData,[event.target.name]:event.target.value})
  console.log(poemFormData)
}

  return (
    <form className="new-poem-form">
      <input placeholder="Title" name="title" value={poemFormData.title} onChange={handleInputChange}/>
      <input placeholder="Author" name="author" value={poemFormData.author} onChange={handleInputChange}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={poemFormData.content} onChange={handleInputChange}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
