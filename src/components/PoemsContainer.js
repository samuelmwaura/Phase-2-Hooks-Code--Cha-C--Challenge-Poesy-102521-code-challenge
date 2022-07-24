import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {

  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poems.map(poem=><Poem key={poem.id} title={poem.title} content={poem.content} author={poem.author}/>
      )}
    </div>
  );
}

export default PoemsContainer;
