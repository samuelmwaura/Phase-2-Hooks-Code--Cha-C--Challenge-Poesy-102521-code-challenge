import React, { useState } from "react";

function Poem({id,title,content,author,isFav,changeDisplayedPoems}) {
  const [isRead,setIsRead]= useState(false);
  //const [favourite,setFavourite] = useState(isFav) //There is another state that updates immediately you change if you want to change the displayed poem
  

function changeFav(){
  fetch(`http://localhost:8004/poems/${id}`,{
    method:'PATCH',
    headers:{
      'Content-Type':'Application/json',
      'Accept':'Application/json'
    },
    body:JSON.stringify({favourite:!isFav})
    })
  .then(response=>response.json())
  .then(data=>{
   // setFavourite(!favourite)// Needed if the only thing you need to show is a change in the  button text.
    changeDisplayedPoems(data);
  })
  .catch(error=>console.log(error))
}


  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={()=>setIsRead(!isRead)} >{isRead?'Mark as unread':'Mark as read'}</button>
      <button onClick={changeFav}>{isFav?'Remove from fav':'Add to fav'}</button>
    </div>
  );
}

export default Poem;
