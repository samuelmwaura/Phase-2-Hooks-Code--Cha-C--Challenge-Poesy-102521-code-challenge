import React, { useEffect,useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
const [isDisPlay,setIsDisplay]= useState(true);
const [poems,setPoems] = useState([])


useEffect(()=>{
  fetch('http://localhost:8004/poems')
  .then(response=>response.json())
  .then(data=>setPoems(data))
  .catch(error=>console.log(error))
  },[])
   

function handleClick(){
  setIsDisplay(!isDisPlay);
}

function addApoem(newPoem){
  setPoems([...poems,newPoem])
}

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}>Show/hide new poem form</button>
        {isDisPlay ? <NewPoemForm addApoem={addApoem} /> : null}
      </div>
      <PoemsContainer poems={poems} setPoems={setPoems}/>
    </div>
  );
}

export default App;
