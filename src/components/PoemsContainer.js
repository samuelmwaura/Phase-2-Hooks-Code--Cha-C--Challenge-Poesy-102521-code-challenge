import React, { useEffect, useState } from "react";
import Poem from "./Poem";

function PoemsContainer() {
  const [poems,setPoems] = useState([])

useEffect(()=>{
fetch('http://localhost:8004/poems')
.then(response=>response.json())
.then(data=>setPoems(data))
.catch(error=>console.log(error))
},[])


  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poems.map(poem=><Poem key={poem.id} title={poem.title} content={poem.content} author={poem.author}/>
      )}
    </div>
  );
}

export default PoemsContainer;
