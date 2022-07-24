import React, { useState } from "react";
import Poem from "./Poem";

function PoemsContainer({poems,setPoems}) {
const [selectedCategory,setSelectedCategory]= useState('All')

function handleCategoryChange(event){
  setSelectedCategory(event.target.value);
}

function changeDisplayedPoems(data){
setPoems(poems.map(poem=>{
  if(poem.id === data.id)return data
  return poem;
}));
}

function deleteApoem(id){
setPoems(poems.filter(poem=>poem.id !== id));
}

const filteredPoems = poems.filter(poem=>{
  if(selectedCategory=== 'All') return true;
  return poem.favourite === true && selectedCategory === 'favourite';
});


  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      <select onChange={handleCategoryChange} value={selectedCategory}>
       <option value='All'>All Poems</option>
       <option value='favourite'>Favourites</option>
      </select>
      {filteredPoems.map(poem=><Poem key={poem.id} id={poem.id} title={poem.title} content={poem.content} author={poem.author} isFav={poem.favourite} changeDisplayedPoems={changeDisplayedPoems} deleteApoem={deleteApoem}/>
      )}
    </div>
  );
}

export default PoemsContainer;
