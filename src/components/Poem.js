import React, { useState } from "react";

function Poem({title,content,author}) {
  const [isRead,setIsRead]= useState(false);

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={()=>setIsRead(!isRead)} >{isRead?'Mark as unread':'Mark as read'}</button>
    </div>
  );
}

export default Poem;
