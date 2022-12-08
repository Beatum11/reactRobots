import React from "react";
import '../src/cssFiles/search.css';

const SearchBox = ({searchChange}) =>{
    return(
        <div className="searchContainer">
        <input className="searchInput" type="search"
        placeholder="Search robots. Made by Slava Beatum" 
        onChange={searchChange}/>
        </div>
    );
}


export default SearchBox;