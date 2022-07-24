import React, {useState } from "react";

function NewPoemForm({addApoem}) {
const [poemFormData,setPoemData]= useState({title:"",content: "",author: ""});

function handleInputChange(event){
  setPoemData({...poemFormData,[event.target.name]:event.target.value})
}

function handleFormSubmit(event){
  event.preventDefault();
  fetch('http://localhost:8004/poems',{
    method:'POST',
    headers:{
      'Content-Type':'Application/json',
      'Accept':'Application/json'
    },
    body:JSON.stringify(poemFormData)
  })
  .then(response=>response.json())
  .then(data=>{
    setPoemData({title:"",content: "",author: ""})
    addApoem(data);
  })
  .catch(error=>console.log(error))
}

  return (
    <form className="new-poem-form" onSubmit={handleFormSubmit}>
      <input placeholder="Title" name="title" value={poemFormData.title} onChange={handleInputChange}/>
      <input placeholder="Author" name="author" value={poemFormData.author} onChange={handleInputChange}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={poemFormData.content} onChange={handleInputChange}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
